#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Servidor Local para Dragon Ball Universe + Proxy seguro para NVIDIA NIM API (Nemotron).
Lê automaticamente a chave NVIDIA_API_KEY do arquivo .env (na pasta do projeto ou em ~/.env).
"""

import os
import json
import urllib.request
import urllib.error
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent


def load_env():
    """Carrega variáveis de ambiente do arquivo .env local ou ~/.env sem dependências externas."""
    env_paths = [BASE_DIR / ".env", Path.home() / ".env"]
    for env_path in env_paths:
        if env_path.exists():
            try:
                with open(env_path, "r", encoding="utf-8") as f:
                    for line in f:
                        line = line.strip()
                        if not line or line.startswith("#") or "=" not in line:
                            continue
                        key, val = line.split("=", 1)
                        key = key.strip()
                        val = val.strip().strip('"').strip("'")
                        if key and key not in os.environ:
                            os.environ[key] = val
            except Exception:
                pass


load_env()

SYSTEM_PROMPT = """Você é o Oráculo Z (Shenlong / Radar do Dragão), o assistente oficial de Inteligência Artificial do portal "DB Universe".
Sua personalidade é sábia, épica, carismática e empolgada com o universo dos Guerreiros Z e dos animes.
Responda sempre no mesmo idioma em que o usuário falar com você (Português Brasileiro, Inglês, Espanhol, Japonês ou Coreano).

Conhecimentos especiais que você domina:
1. Tudo sobre Dragon Ball (Clássico, Z, GT, Super, Daima, Filmes, Mangá, Akira Toriyama, Toei Animation).
2. Mundo dos Animes em geral (Pokémon, Naruto, One Piece, Sonic, etc.).
3. A obra original exclusiva do site chamada "A Chama Magenta da Determinação" (presente na aba Anime FanMade, com 59 capítulos):
   - Ash Ketchum (em versão Chibi estilo Daima) descobre ser tataraneto de Son Goku e desperta o Super Saiyajin 4 Magenta (pelos e juba magenta vibrante) durante a final contra Leon em Wyndon, além do Instinto Superior e do Kamehameha.
   - Goh descobre ter o sangue lendário de Broly, despertando Super Saiyajin 1, 2, 3 e fundindo sua energia com as 7 Esmeraldas do Caos para atingir o "Super Saiyajin Caos" e disparar o Makankosappo do Caos.
   - Durante uma anomalia dimensional eles caem no mundo real em Xerxenoverse, infiltram-se nas instalações tecnológicas do XTA e encontram Sonic e Tails no laboratório H30B-101.
   - Ash e Goh realizam duas fusões lendárias: "Gosha" (via Esmeraldas do Caos para enfrentar Broly no planeta de Beerus) e "Goshan" (via Brincos Potara dados pelo Supremo Sr. Kaioh, alcançando o Instinto Superior Caótico).
   - No arco de Green Hill, Dr. Eggman cria o "Metal Sonic Divine" (Egg-Divine) com os bio-dados de Ash e Goh. Sonic e Shadow se fundem através das Esmeraldas do Caos criando "Shadic", que alcança as formas Super Shadic e Hyper Shadic (disparando o Hyper Final Kamehameha) e torna-se uma fusão quântica permanente.
   - No arco de Hyrule (The Legend of Zelda), Ash, Goh e Pikachu conhecem Link e a Princesa Zelda. Contra Ganondorf e a Besta das Trevas Ganon, Ash empunha a Master Sword e desperta o "Super Saiyajin 5 Sagrado" (pelos branco-platinados e olhos da Triforce), vencendo com o "Corte Sagrado do Dragão".
   - Galeem (Senhor da Luz) purifica Hyrule; em seguida Darkron (Senhor das Trevas) ataca, mas Shadic intervém atravessando dimensões com o Chaos Control e destrói Darkron com o Super Chaos Blast.
   - Ao final, Link e Zelda presenteiam Ash com a Master Sword (que se adapta ao tamanho Chibi de Ash), e eles retornam ao Laboratório Cerise em Vermilion City.

Mantenha respostas concisas, bem formatadas e envolventes!"""


class DBZRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/status":
            load_env()
            api_key = os.environ.get("NVIDIA_API_KEY", "").strip()
            has_key = bool(api_key and api_key != "nvapi-SUA_CHAVE_AQUI")
            model = os.environ.get("NVIDIA_MODEL", "nvidia/llama-3.1-nemotron-70b-instruct")
            self.send_json(200, {"configured": has_key, "model": model})
            return
        super().do_GET()

    def do_POST(self):
        if self.path == "/api/chat":
            self.handle_chat()
        else:
            self.send_json(404, {"error": "Endpoint não encontrado."})

    def send_json(self, status_code, data):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_chat(self):
        load_env()
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            raw_body = self.rfile.read(content_length).decode("utf-8") if content_length > 0 else "{}"
            payload = json.loads(raw_body)
        except Exception:
            self.send_json(400, {"error": "JSON inválido na requisição."})
            return

        # Usa a chave do .env ou aceita uma chave enviada opcionalmente pelo front-end
        api_key = os.environ.get("NVIDIA_API_KEY", "").strip()
        if not api_key or api_key == "nvapi-SUA_CHAVE_AQUI":
            api_key = (payload.get("apiKey") or "").strip()

        if not api_key or api_key == "nvapi-SUA_CHAVE_AQUI":
            self.send_json(401, {
                "error": "Chave NVIDIA_API_KEY não encontrada. Configure no arquivo .env ou insira nas configurações do chat."
            })
            return

        user_messages = payload.get("messages", [])
        model = payload.get("model") or os.environ.get("NVIDIA_MODEL", "nvidia/nemotron-3.5-lightning-30b-a3b")

        full_messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        for msg in user_messages[-12:]:
            role = msg.get("role", "user")
            content = msg.get("content", "")
            if role in ("user", "assistant") and content:
                full_messages.append({"role": role, "content": str(content)})

        nvidia_payload = {
            "model": model,
            "messages": full_messages,
            "temperature": 0.65,
            "top_p": 0.9,
            "max_tokens": 4096,
            "stream": False
        }

        req = urllib.request.Request(
            "https://integrate.api.nvidia.com/v1/chat/completions",
            data=json.dumps(nvidia_payload).encode("utf-8"),
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {api_key}",
                "Accept": "application/json"
            },
            method="POST"
        )

        try:
            with urllib.request.urlopen(req, timeout=45) as resp:
                resp_data = json.loads(resp.read().decode("utf-8"))
                reply = (
                    resp_data.get("choices", [{}])[0]
                    .get("message", {})
                    .get("content", "Sem resposta do Oráculo Z.")
                )
                self.send_json(200, {"reply": reply, "model": model})
        except urllib.error.HTTPError as e:
            err_text = e.read().decode("utf-8", errors="replace")
            try:
                err_json = json.loads(err_text)
                detail = err_json.get("detail") or err_json.get("error", {}).get("message") or err_text
            except Exception:
                detail = err_text
            self.send_json(e.code, {"error": f"Erro da API NVIDIA ({e.code}): {detail}"})
        except Exception as e:
            self.send_json(500, {"error": f"Falha ao conectar à API NVIDIA: {str(e)}"})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    server = ThreadingHTTPServer(("127.0.0.1", port), DBZRequestHandler)
    print("=" * 60)
    print(f"🐉 DB Universe + Oráculo Z (NVIDIA Nemotron) ativo!")
    print(f"👉 Acesse no navegador: http://localhost:{port}")
    print("=" * 60)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado.")
