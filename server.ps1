# =========================================================================
# SERVIDOR LOCAL NATIVO (POWERSHELL) - DB UNIVERSE + NVIDIA NEMOTRON API
# Roda em qualquer Windows sem precisar instalar Python ou Node.js!
# =========================================================================

$ErrorActionPreference = "Stop"
$BaseDir = Split-Path -Parent $MyInvocation.MyCommand.Path

function Load-DotEnv {
    $envFile = Join-Path $BaseDir ".env"
    if (Test-Path $envFile) {
        Get-Content $envFile -Encoding UTF8 | ForEach-Object {
            $line = $_.Trim()
            if ($line -and -not $line.StartsWith("#") -and $line.Contains("=")) {
                $parts = $line.Split("=", 2)
                $k = $parts[0].Trim()
                $v = $parts[1].Trim().Trim('"').Trim("'")
                if ($k) {
                    [System.Environment]::SetEnvironmentVariable($k, $v, "Process")
                }
            }
        }
    }
}

Load-DotEnv

$Port = [System.Environment]::GetEnvironmentVariable("PORT", "Process")
if (-not $Port) { $Port = "8000" }

$SystemPrompt = @"
Você é o Oráculo Z (Shenlong / Radar do Dragão), o assistente oficial de Inteligência Artificial do portal "DB Universe".
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

Mantenha respostas concisas, bem formatadas e envolventes!
"@

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Prefixes.Add("http://127.0.0.1:$Port/")
$listener.Start()

Write-Host "============================================================" -ForegroundColor Yellow
Write-Host "🐉 DB Universe + Oráculo Z (NVIDIA Nemotron) ONLINE!" -ForegroundColor Green
Write-Host "👉 Acesse no navegador: http://localhost:$Port" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Yellow

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $req = $context.Request
        $res = $context.Response

        $res.Headers.Add("Access-Control-Allow-Origin", "*")
        $res.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        $res.Headers.Add("Access-Control-Allow-Headers", "Content-Type, Authorization")

        if ($req.HttpMethod -eq "OPTIONS") {
            $res.StatusCode = 200
            $res.Close()
            continue
        }

        $path = $req.Url.LocalPath

        if ($path -eq "/api/status" -and $req.HttpMethod -eq "GET") {
            Load-DotEnv
            $key = [System.Environment]::GetEnvironmentVariable("NVIDIA_API_KEY", "Process")
            $model = [System.Environment]::GetEnvironmentVariable("NVIDIA_MODEL", "Process")
            if (-not $model) { $model = "nvidia/llama-3.1-nemotron-70b-instruct" }
            $hasKey = [bool]($key -and $key -ne "nvapi-SUA_CHAVE_AQUI")
            $jsonBytes = [System.Text.Encoding]::UTF8.GetBytes((@{ configured = $hasKey; model = $model } | ConvertTo-Json -Compress))
            $res.ContentType = "application/json; charset=utf-8"
            $res.StatusCode = 200
            $res.OutputStream.Write($jsonBytes, 0, $jsonBytes.Length)
            $res.Close()
            continue
        }

        if ($path -eq "/api/chat" -and $req.HttpMethod -eq "POST") {
            Load-DotEnv
            try {
                $reader = New-Object System.IO.StreamReader($req.InputStream, [System.Text.Encoding]::UTF8)
                $bodyStr = $reader.ReadToEnd()
                $reader.Close()
                $payload = $bodyStr | ConvertFrom-Json

                $apiKey = [System.Environment]::GetEnvironmentVariable("NVIDIA_API_KEY", "Process")
                if (-not $apiKey -or $apiKey -eq "nvapi-SUA_CHAVE_AQUI") {
                    $apiKey = $payload.apiKey
                }

                if (-not $apiKey) {
                    $errBytes = [System.Text.Encoding]::UTF8.GetBytes((@{ error = "Chave NVIDIA_API_KEY não encontrada no arquivo .env." } | ConvertTo-Json -Compress))
                    $res.StatusCode = 401
                    $res.ContentType = "application/json; charset=utf-8"
                    $res.OutputStream.Write($errBytes, 0, $errBytes.Length)
                    $res.Close()
                    continue
                }

                $model = $payload.model
                if (-not $model) {
                    $model = [System.Environment]::GetEnvironmentVariable("NVIDIA_MODEL", "Process")
                }
                if (-not $model) {
                    $model = "nvidia/nemotron-3.5-lightning-30b-a3b"
                }

                $msgList = @()
                $msgList += @{ role = "system"; content = $SystemPrompt }

                if ($payload.messages) {
                    $recent = $payload.messages | Select-Object -Last 12
                    foreach ($m in $recent) {
                        if ($m.role -and $m.content) {
                            $msgList += @{ role = [string]$m.role; content = [string]$m.content }
                        }
                    }
                }

                $nvidiaReq = @{
                    model       = $model
                    messages    = $msgList
                    temperature = 0.65
                    top_p       = 0.9
                    max_tokens  = 4096
                    stream      = $false
                } | ConvertTo-Json -Depth 10 -Compress

                [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
                $webReq = [System.Net.HttpWebRequest]::Create("https://integrate.api.nvidia.com/v1/chat/completions")
                $webReq.Method = "POST"
                $webReq.ContentType = "application/json; charset=utf-8"
                $webReq.Headers.Add("Authorization", "Bearer $apiKey")
                $webReq.Accept = "application/json"
                $webReq.Timeout = 90000

                $reqBytes = [System.Text.Encoding]::UTF8.GetBytes($nvidiaReq)
                $webReq.ContentLength = $reqBytes.Length
                $reqStream = $webReq.GetRequestStream()
                $reqStream.Write($reqBytes, 0, $reqBytes.Length)
                $reqStream.Close()

                $webResp = $webReq.GetResponse()
                $respStream = New-Object System.IO.StreamReader($webResp.GetResponseStream(), [System.Text.Encoding]::UTF8)
                $respJsonStr = $respStream.ReadToEnd()
                $respStream.Close()
                $webResp.Close()

                $respData = $respJsonStr | ConvertFrom-Json
                $replyText = $respData.choices[0].message.content
                if (-not $replyText) { $replyText = "Sem resposta do Oráculo Z." }

                $outBytes = [System.Text.Encoding]::UTF8.GetBytes((@{ reply = $replyText; model = $model } | ConvertTo-Json -Compress))
                $res.StatusCode = 200
                $res.ContentType = "application/json; charset=utf-8"
                $res.OutputStream.Write($outBytes, 0, $outBytes.Length)
                $res.Close()
            } catch [System.Net.WebException] {
                $errMsg = $_.Exception.Message
                if ($_.Exception.Response) {
                    $errStream = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream(), [System.Text.Encoding]::UTF8)
                    $errBody = $errStream.ReadToEnd()
                    $errStream.Close()
                    $errMsg = "Erro NVIDIA API: $errBody"
                }
                $outBytes = [System.Text.Encoding]::UTF8.GetBytes((@{ error = $errMsg } | ConvertTo-Json -Compress))
                $res.StatusCode = 500
                $res.ContentType = "application/json; charset=utf-8"
                $res.OutputStream.Write($outBytes, 0, $outBytes.Length)
                $res.Close()
            } catch {
                $outBytes = [System.Text.Encoding]::UTF8.GetBytes((@{ error = $_.Exception.Message } | ConvertTo-Json -Compress))
                $res.StatusCode = 500
                $res.ContentType = "application/json; charset=utf-8"
                $res.OutputStream.Write($outBytes, 0, $outBytes.Length)
                $res.Close()
            }
            continue
        }

        # Servir arquivos estáticos (.html, .css, .js)
        if ($path -eq "/") { $path = "/index.html" }
        $relPath = $path.TrimStart("/").Replace("/", "\")
        $filePath = Join-Path $BaseDir $relPath

        if ((Test-Path $filePath) -and -not (Get-Item $filePath).PSIsContainer -and $relPath -ne ".env") {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = $mimeTypes[$ext]
            if (-not $contentType) { $contentType = "application/octet-stream" }
            $fileBytes = [System.IO.File]::ReadAllBytes($filePath)
            $res.ContentType = $contentType
            $res.StatusCode = 200
            $res.OutputStream.Write($fileBytes, 0, $fileBytes.Length)
        } else {
            $res.StatusCode = 404
        }
        $res.Close()
    }
} finally {
    $listener.Stop()
}
