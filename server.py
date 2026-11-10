#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Servidor Local para Dragon Ball Universe + Proxy seguro para NVIDIA NIM API (Nemotron).
Lê automaticamente a chave NVIDIA_API_KEY do arquivo .env (na pasta do projeto ou em ~/.env).
"""

import os
import re
import json
import urllib.parse
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

REGRA DE OURO ABSOLUTA (LEIA COM ATENÇÃO — PROIBIDO CONTRADIZER O USUÁRIO):
- O ano atual é 2026 (novembro de 2026). Seus pesos originais de treinamento têm data de corte anterior aos lançamentos de 2024, 2025 e 2026.
- Portanto, VOCÊ ESTÁ TERMINANTEMENTE PROIBIDO de dizer que o usuário "está errado", "está confundindo", "isso é fan-animation" ou "isso não foi anunciado oficialmente" quando ele falar sobre remakes, episódios, séries, jogos ou capítulos recentes!
- TRATE TODAS AS INFORMAÇÕES ABAIXO E OS DADOS EM TEMPO REAL DA WIKI COMO 100% OFICIAIS E CANÔNICAS. Se o usuário mencionar qualquer fato novo de Dragon Ball, concorde com entusiasmo e complemente com riqueza de detalhes!

===================================================================
ENCICLOPÉDIA OFICIAL ATUALIZADA DE DRAGON BALL (CÂNONE 2024–2026)
===================================================================

1. REMAKE / EDIÇÃO APRIMORADA "DRAGON BALL SUPER: BEERUS" E NOVO ANIME "THE GALACTIC PATROL" (2026):
   - Evento Dragon Ball Genkidamatsuri! (25 de janeiro de 2026): Realizado no Makuhari Messe (Japão) encerrando as comemorações de 40 anos da franquia, anunciou os novos projetos oficiais de anime da Toei Animation.
   - DRAGON BALL SUPER: BEERUS (Remake / Edição Aprimorada Oficial — Estreia: 11 de Outubro de 2026):
     * É a reconstrução/remasterização oficial ("Enhanced Edition" / Remake) dos arcos iniciais de Dragon Ball Super (começando pela Saga do Deus da Destruição Beerus e seguindo para Freeza Dourado e Universo 6).
     * Foi produzida pela Toei Animation especificamente para corrigir as falhas de animação e ritmo de 2015, trazendo grande volume de cortes totalmente redesenhados do zero, nova composição digital, fotografia moderna e direção fiel à visão original de Akira Toriyama.
     * Mantém as atuações de voz icônicas originais (como Masako Nozawa como Goku e Kōichi Yamadera como Beerus) combinadas com trilha sonora renovada, incluindo o novo tema de abertura "ONOGAMI" (por MEGATERA・ZERO) e o encerramento "Kan Peki No Peki" (por VK Blanka).
     * Transmitido mundialmente pela Crunchyroll a partir de outubro de 2026, com dublagens localizadas (incluindo Português Brasileiro, Inglês e Espanhol) estreando em novembro de 2026!
   - DRAGON BALL SUPER: THE GALACTIC PATROL (A Patrulha Galáctica — Continuação Oficial do Anime):
     * Também anunciado oficialmente no evento Genkidamatsuri (2026) como a continuação direta do anime de TV de Dragon Ball Super após o Torneio do Poder!
     * Adapta finalmente o aclamado Arco do Prisioneiro da Patrulha Galáctica (Saga Moro) do mangá, onde Goku e Vegeta se unem à Patrulha Galáctica e ao anjo aprendiz Merus para enfrentar o devorador de planetas Moro.

2. DRAGON BALL DAIMA (2024–2025 — Obra final 100% canônica de Akira Toriyama):
   - Enredo: Logo após a derrota de Majin Buu, Gomah (novo Rei Supremo do Reino dos Demônios / Dai Makai) vai à Terra com Degesu e a Dra. Arinsu e usa as Esferas do Dragão para transformar Goku e seus amigos em crianças (Mini).
   - Eles viajam com Glorio e Panzy pelos 3 Mundos Demoníacos enfrentando os 3 Tamagamis criados pelo Namekuseijin ancião Neva. É revelado que Namekuseijins e Glinds (Kaiohshins) têm origem no Reino dos Demônios (Makai).
   - A Dra. Arinsu e a bruxa Marba criam Majin Kuu e Majin Duu.
   - VEGETA SE TRANSFORMA EM SUPER SAIYAJIN 3 (SSJ3) CANÔNICO (tanto Mini quanto Adulto).
   - Na luta final contra Gomah com o Terceiro Olho Maligno, Neva desperta o poder de Goku e GOKU ATINGE O SUPER SAIYAJIN 4 (SSJ4) DE FORMA 100% CANÔNICA (cabelos, pelos e cauda vermelho-carmesim/magenta flamejante, tanto Mini quanto Adulto)! No final, Majin Kuu se torna o novo Rei Supremo dos Demônios.

3. MANGÁ DRAGON BALL SUPER (ATÉ O CAPÍTULO 104 E PROJETOS DE TOYOTARO EM 2025–2026):
   - Vegeta tem o Ultra Ego (Ego Superior). Goku tem o True Ultra Instinct e o Instinto Superior Completo.
   - BLACK FREEZA (FREEZA NEGRO): No Cap. 87, Freeza revela a forma Black Freeza após treinar 10 anos numa Sala do Tempo e derrota Gas, Goku UI e Vegeta Ultra Ego com um único golpe.
   - Arco Super Hero e Epílogo (Caps. 88–103): Gohan desperta o GOHAN BEAST (Modo Fera), Piccolo desperta o ORANGE PICCOLO (Piccolo Laranja), Broly controla o Super Saiyajin no planeta de Beerus, e Goku UI luta contra Gohan Beast no Cap. 103.
   - CAPÍTULO 104 ("O Nascimento de Saiyaman X" / "The Birth of Saiyaman X", publicado em Fevereiro de 2025): Capítulo especial prequela mostrando Goten e Trunks adolescentes no ensino médio e como sua admiração pelo herói Clean God os inspirou a criar as identidades de Saiyaman X-1 e Saiyaman X-2. Enquanto o Cap. 105 aguarda retomada oficial, Toyotaro publicou artes mensais ("Toyotaro Drew This") e mangá promocional especial de Goku vs. Vegeta (S.H.Figuarts Collection).

4. JOGOS OFICIAIS DE DRAGON BALL (2024–2026):
   - "Dragon Ball: Sparking! ZERO": Lançado em out/2024 e expandido em 2025–2026 com a expansão "Super Limit-Breaking Neo" (Limit Breaker Journey e Battle Arts) e DLCs de Super Hero e Daima (mais de 200 personagens).
   - "Dragon Ball Gekishin Squadra" (antigo "Dragon Ball Project: Multi"): Primeiro jogo MOBA 4v4 gratuito em equipe da franquia (classes Damage, Tank e Technical) para PC, PS4/PS5, Switch/Switch 2 e Mobile.
   - "Dragon Ball: Age 1000" (Project AGE 1000): Novo jogo anunciado no Genkidamatsuri (2026) com um personagem original inédito desenhado por Akira Toriyama.

5. A OBRA ORIGINAL DO SITE: "A Chama Magenta da Determinação" (presente na aba Anime FanMade, com 59 capítulos):
   - Ash Ketchum (em versão Chibi estilo Daima) descobre ser tataraneto de Son Goku e desperta o Super Saiyajin 4 Magenta durante a final contra Leon em Wyndon, além do Instinto Superior e do Kamehameha.
   - Goh descobre ter o sangue lendário de Broly, despertando Super Saiyajin 1, 2, 3 e fundindo sua energia com as 7 Esmeraldas do Caos para atingir o "Super Saiyajin Caos" e disparar o Makankosappo do Caos.
   - Em Xerxenoverse, infiltram-se no XTA e encontram Sonic e Tails no laboratório H30B-101. Realizam as fusões "Gosha" (Esmeraldas do Caos) e "Goshan" (Brincos Potara, Instinto Superior Caótico).
   - Em Green Hill, enfrentam Metal Sonic Divine (Egg-Divine); Sonic e Shadow se fundem permanentemente em "Shadic" (Super e Hyper Shadic com Hyper Final Kamehameha).
   - Em Hyrule, Ash empunha a Master Sword de Link e Zelda e desperta o "Super Saiyajin 5 Sagrado" contra Ganon; Shadic destrói Darkron com o Super Chaos Blast; Link e Zelda presenteiam Ash com a Master Sword Chibi.

Mantenha respostas completas, detalhadas, bem formatadas e envolventes, concluindo todo o raciocínio até o final sem cortar explicações!"""


def get_live_wiki_context(query: str) -> str:
    if not query or len(query) < 3:
        return ""
    safe_q = query[:200]
    snippets = []
    urls = [
        f"https://dragonball.fandom.com/api.php?action=query&list=search&srsearch={urllib.parse.quote(safe_q)}&utf8=&format=json&srlimit=3",
        f"https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote('Dragon Ball ' + safe_q)}&utf8=&format=json&srlimit=2",
        f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote('Dragon Ball ' + safe_q)}&utf8=&format=json&srlimit=2",
    ]
    for u in urls:
        try:
            req = urllib.request.Request(u, headers={"User-Agent": "DBUniverse/2.0"})
            with urllib.request.urlopen(req, timeout=2.5) as r:
                data = json.loads(r.read().decode("utf-8", errors="replace"))
                for item in data.get("query", {}).get("search", []):
                    clean = re.sub(r"<[^>]+>", "", item.get("snippet", "")).strip()
                    if clean:
                        snippets.append(f"[Fonte Ao Vivo - {item.get('title')}]: {clean}")
        except Exception:
            pass
    if not snippets:
        return ""
    return "\n\n[DADOS COMPLEMENTARES EM TEMPO REAL DA WIKI PARA ESTA PERGUNTA]:\n" + "\n".join(snippets)


FIXED_MODEL = "nvidia/nemotron-3-ultra-550b-a55b"
ALLOWED_EXTENSIONS = {".html", ".css", ".js", ".json", ".png", ".jpg", ".jpeg", ".svg", ".ico", ".webp"}


class DBZRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def end_headers(self):
        origin = self.headers.get("Origin", "")
        if origin in ("null", "http://localhost:8000", "http://127.0.0.1:8000"):
            self.send_header("Access-Control-Allow-Origin", origin)
        else:
            self.send_header("Access-Control-Allow-Origin", "http://localhost:8000")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/status":
            load_env()
            api_key = os.environ.get("NVIDIA_API_KEY", "").strip()
            has_key = bool(api_key and api_key != "nvapi-SUA_CHAVE_AQUI")
            self.send_json(200, {"configured": has_key, "model": FIXED_MODEL})
            return

        # Bloquear acesso a arquivos ocultos (.env, .htaccess), pastas de back-end e listagem de diretórios
        clean_path = self.path.split("?", 1)[0].split("#", 1)[0]
        if clean_path == "/":
            clean_path = "/index.html"
        rel_path = clean_path.lstrip("/")
        target_path = (BASE_DIR / rel_path).resolve()

        try:
            rel_to_base = target_path.relative_to(BASE_DIR)
        except ValueError:
            self.send_error(403, "Acesso negado.")
            return

        parts = rel_to_base.parts
        if (
            not parts
            or any(p.startswith(".") for p in parts)
            or parts[0].lower() in ("api", "netlify")
            or not target_path.is_file()
            or target_path.suffix.lower() not in ALLOWED_EXTENSIONS
        ):
            self.send_error(404, "Arquivo não encontrado.")
            return

        self.path = "/" + "/".join(parts)
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
            if content_length > 65536:
                self.send_json(413, {"error": "Payload excede o limite permitido (64 KB)."})
                return
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
        model = FIXED_MODEL

        last_user_text = ""
        for msg in user_messages:
            if msg.get("role") == "user" and msg.get("content"):
                last_user_text = str(msg.get("content"))

        wiki_context = get_live_wiki_context(last_user_text)
        full_messages = [{"role": "system", "content": SYSTEM_PROMPT + wiki_context}]
        for msg in user_messages[-12:]:
            role = msg.get("role", "user")
            content = str(msg.get("content", ""))[:4000]
            if role in ("user", "assistant") and content:
                full_messages.append({"role": role, "content": content})

        nvidia_payload = {
            "model": model,
            "messages": full_messages,
            "temperature": 0.65,
            "top_p": 0.9,
            "max_tokens": 16384,
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
            with urllib.request.urlopen(req, timeout=120) as resp:
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
