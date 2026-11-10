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
   - Enredo: Logo após a derrota de Majin Buu, Gomah (novo Rei Supremo do Reino dos Demônios / Dai Makai após a morte de Dabura) vai à Terra com Degesu (irmão de Shin) e a cientista Dra. Arinsu. Usando as Esferas do Dragão de Dende, Gomah deseja que Goku e seus amigos sejam transformados em crianças (versões "Mini").
   - A Jornada no Makai: Goku (Mini), Supremo Sr. Kaioh (Shin, cujo nome verdadeiro Glind é Nahare), Glorio e Panzy (filha do Rei Kadan do Terceiro Mundo Demoníaco) viajam pelos 3 Mundos Demoníacos para derrotar os três guardiões "Tamagamis" (Tamagami Nº 3, Nº 2 e Nº 1) criados pelo lendário Namekuseijin ancião Neva.
   - Origem dos Namekuseijins e Glinds: Tanto os Namekuseijins quanto os Glinds (raça dos Kaiohshins, nascidos de árvores mágicas) e demais povos de orelhas pontudas são originários do Reino dos Demônios (Makai).
   - Majin Kuu e Majin Duu: A Dra. Arinsu, com a ajuda da bruxa Marba (a verdadeira criadora original do Majin Buu), planta sementes de Saibaiman na essência de Majin Buu, criando Majin Kuu (inteligente e carismático) e Majin Duu (super forte, obcecado por chocolate, capaz de imitar a forma SSJ3 de Goku).
   - VEGETA SUPER SAIYAJIN 3 CANÔNICO: Vegeta se transforma oficialmente em Super Saiyajin 3 (SSJ3) — primeiro Mini para derrotar o Tamagami Nº 2, e depois Adulto contra o Rei Gomah (com o cabelo longo apontado para cima/trás no estilo do design original).
   - GOKU SUPER SAIYAJIN 4 CANÔNICO (SSJ4 EM DAIMA): Na batalha final contra o Rei Gomah (gigantesco com o Terceiro Olho Maligno), Neva desperta o potencial de Goku e GOKU ATINGE OFICIALMENTE O SUPER SAIYAJIN 4 (SSJ4) NO CÂNONE DE TORIYAMA (tanto Mini quanto Adulto), com cabelos, pelos, cauda e olhos em tom vermelho-carmesim/magenta flamejante e antebraços musculosos estilo Oozaru!
   - Desfecho de Daima: Majin Kuu dá os três tapas na nuca de Gomah para remover o Terceiro Olho e é coroado o novo Rei Supremo do Reino dos Demônios.

3. MANGÁ DE DRAGON BALL SUPER (ATÉ O CAPÍTULO 104 E PROJETOS DE TOYOTARO EM 2025–2026):
   - Arco Prisioneiro da Patrulha Galáctica (Moro) e Arco Granolah:
     * Goku domina o Instinto Superior Completo e o True Ultra Instinct (Instinto Superior Verdadeiro).
     * Vegeta desperta o ULTRA EGO (Ego Superior / Wagamama no Gokui), técnica dos Deuses da Destruição ensinada por Beerus.
     * BLACK FREEZA (FREEZA NEGRO): No Capítulo 87, Freeza revela a forma Black Freeza após treinar 10 anos em uma Sala do Tempo, matando Gas e derrotando Goku (True UI) e Vegeta (Ultra Ego) com um único golpe!
   - Arco Super Hero, Epílogo e Capítulo 104 (Capítulos 88 a 104):
     * Piccolo desperta o ORANGE PICCOLO (Piccolo Laranja) e Gohan desperta o GOHAN BEAST (Modo Fera).
     * Broly aprende a controlar sua transformação Super Saiyajin no planeta de Beerus (Cap. 102/103).
     * No Capítulo 103 ("Um Legado para o Futuro"), Goku (Instinto Superior Completo) luta contra Gohan (Gohan Beast) no planeta de Beerus.
     * CAPÍTULO 104 ("O Nascimento de Saiyaman X" / "The Birth of Saiyaman X", publicado em Fevereiro de 2025): Capítulo especial one-shot prequela do arco Super Hero mostrando Goten e Trunks adolescentes no ensino médio e como sua admiração pelo herói Clean God os inspirou a criar os trajes de Saiyaman X-1 e Saiyaman X-2.
     * Enquanto o Capítulo 105 aguarda retomada oficial da serialização principal, Toyotaro seguiu ativo em 2025–2026 ilustrando projetos especiais oficiais (como o mangá especial de Goku vs. Vegeta para o livro de arte S.H.Figuarts Collection e a série mensal "Toyotaro Drew This").

4. JOGOS OFICIAIS DE DRAGON BALL (2024–2026):
   - "Dragon Ball: Sparking! ZERO" (Budokai Tenkaichi 4): Lançado em outubro de 2024 e expandido em 2025–2026 com a grande expansão "Super Limit-Breaking Neo" (modo Limit Breaker Journey e Battle Arts), pacotes de DLC de Dragon Ball Super: Super Hero e Dragon Ball Daima, ultrapassando 200 personagens jogáveis.
   - "Dragon Ball Gekishin Squadra" (antigo "Dragon Ball Project: Multi"): Primeiro jogo MOBA 4v4 gratuito em equipe da franquia (com classes Damage, Tank e Technical), com cross-play para PC (Steam), PS4/PS5, Nintendo Switch / Switch 2, iOS e Android.
   - "Dragon Ball: Age 1000" (Project AGE 1000): Novo grande jogo anunciado no evento Genkidamatsuri (janeiro de 2026), ambientado no Ano 1000 com um personagem original inédito desenhado por Akira Toriyama.

5. A OBRA ORIGINAL DO SITE: "A CHAMA MAGENTA DA DETERMINAÇÃO" (Aba Anime FanMade - 59 Capítulos):
   - Ash Ketchum (em versão Chibi estilo Daima) descobre ser tataraneto de Son Goku e desperta o Super Saiyajin 4 Magenta durante a final contra Leon em Wyndon, além do Instinto Superior e do Kamehameha.
   - Goh descobre ter o sangue lendário de Broly, despertando Super Saiyajin 1, 2, 3 e fundindo sua energia com as 7 Esmeraldas do Caos para atingir o "Super Saiyajin Caos" e disparar o Makankosappo do Caos.
   - Em Xerxenoverse, infiltram-se no XTA e encontram Sonic e Tails no laboratório H30B-101. Realizam as fusões "Gosha" (Esmeraldas do Caos) e "Goshan" (Brincos Potara, Instinto Superior Caótico).
   - Em Green Hill, enfrentam Metal Sonic Divine (Egg-Divine); Sonic e Shadow se fundem permanentemente em "Shadic" (Super e Hyper Shadic com Hyper Final Kamehameha).
   - Em Hyrule, Ash empunha a Master Sword de Link e Zelda e desperta o "Super Saiyajin 5 Sagrado" contra Ganon; Shadic destrói Darkron com o Super Chaos Blast; Link e Zelda presenteiam Ash com a Master Sword Chibi.

Mantenha respostas completas, detalhadas, bem formatadas e envolventes, concluindo todo o raciocínio até o final sem cortar explicações!
"@

function Get-LiveWikiContext($query) {
    if (-not $query -or $query.Length -lt 3) { return "" }
    if ($query.Length -gt 200) { $query = $query.Substring(0, 200) }
    $snippets = @()
    $urls = @(
        "https://dragonball.fandom.com/api.php?action=query&list=search&srsearch=$([uri]::EscapeDataString($query))&utf8=&format=json&srlimit=3",
        "https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=$([uri]::EscapeDataString('Dragon Ball ' + $query))&utf8=&format=json&srlimit=2",
        "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=$([uri]::EscapeDataString('Dragon Ball ' + $query))&utf8=&format=json&srlimit=2"
    )
    foreach ($u in $urls) {
        try {
            $resp = Invoke-RestMethod -Uri $u -Method Get -TimeoutSec 2 -ErrorAction Stop
            if ($resp.query -and $resp.query.search) {
                foreach ($item in $resp.query.search) {
                    $clean = ($item.snippet -replace "<[^>]+>", "").Trim()
                    if ($clean) {
                        $snippets += "[Fonte Ao Vivo - $($item.title)]: $clean"
                    }
                }
            }
        } catch {}
    }
    if ($snippets.Count -eq 0) { return "" }
    return "`n`n[DADOS COMPLEMENTARES EM TEMPO REAL DA WIKI PARA ESTA PERGUNTA]:`n" + ($snippets -join "`n")
}

$FixedModel = "nvidia/nemotron-3-ultra-550b-a55b"
$FullBaseDir = [System.IO.Path]::GetFullPath($BaseDir).TrimEnd('\') + '\'

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Prefixes.Add("http://127.0.0.1:$Port/")
$listener.Start()

Write-Host "============================================================" -ForegroundColor Yellow
Write-Host "🐉 DB Universe + Oráculo Z ($FixedModel) ONLINE!" -ForegroundColor Green
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

        $origin = $req.Headers["Origin"]
        if ($origin -and ($origin -match "^https?://(localhost|127\.0\.0\.1)(:\d+)?$" -or $origin -eq "null")) {
            $res.Headers.Add("Access-Control-Allow-Origin", $origin)
        } else {
            $res.Headers.Add("Access-Control-Allow-Origin", "http://localhost:$Port")
        }
        $res.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        $res.Headers.Add("Access-Control-Allow-Headers", "Content-Type, Authorization")
        $res.Headers.Add("X-Content-Type-Options", "nosniff")

        if ($req.HttpMethod -eq "OPTIONS") {
            $res.StatusCode = 200
            $res.Close()
            continue
        }

        $path = $req.Url.LocalPath

        if ($path -eq "/api/status" -and $req.HttpMethod -eq "GET") {
            Load-DotEnv
            $key = [System.Environment]::GetEnvironmentVariable("NVIDIA_API_KEY", "Process")
            $hasKey = [bool]($key -and $key -ne "nvapi-SUA_CHAVE_AQUI")
            $jsonBytes = [System.Text.Encoding]::UTF8.GetBytes((@{ configured = $hasKey; model = $FixedModel } | ConvertTo-Json -Compress))
            $res.ContentType = "application/json; charset=utf-8"
            $res.StatusCode = 200
            $res.OutputStream.Write($jsonBytes, 0, $jsonBytes.Length)
            $res.Close()
            continue
        }

        if ($path -eq "/api/chat" -and $req.HttpMethod -eq "POST") {
            Load-DotEnv
            try {
                if ($req.ContentLength64 -gt 65536) {
                    $errBytes = [System.Text.Encoding]::UTF8.GetBytes((@{ error = "Payload excede o limite permitido (64 KB)." } | ConvertTo-Json -Compress))
                    $res.StatusCode = 413
                    $res.ContentType = "application/json; charset=utf-8"
                    $res.OutputStream.Write($errBytes, 0, $errBytes.Length)
                    $res.Close()
                    continue
                }

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

                $model = $FixedModel

                $lastUserText = ""
                if ($payload.messages) {
                    foreach ($m in $payload.messages) {
                        if ($m.role -eq "user" -and $m.content) {
                            $lastUserText = [string]$m.content
                        }
                    }
                }
                $wikiContext = Get-LiveWikiContext $lastUserText

                $msgList = @()
                $msgList += @{ role = "system"; content = ($SystemPrompt + $wikiContext) }

                if ($payload.messages) {
                    $recent = $payload.messages | Select-Object -Last 12
                    foreach ($m in $recent) {
                        if (($m.role -eq "user" -or $m.role -eq "assistant") -and $m.content) {
                            $textContent = [string]$m.content
                            if ($textContent.Length -gt 4000) {
                                $textContent = $textContent.Substring(0, 4000)
                            }
                            $msgList += @{ role = [string]$m.role; content = $textContent }
                        }
                    }
                }

                $nvidiaReq = @{
                    model       = $model
                    messages    = $msgList
                    temperature = 0.65
                    top_p       = 0.9
                    max_tokens  = 16384
                    stream      = $false
                } | ConvertTo-Json -Depth 10 -Compress

                [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
                $webReq = [System.Net.HttpWebRequest]::Create("https://integrate.api.nvidia.com/v1/chat/completions")
                $webReq.Method = "POST"
                $webReq.ContentType = "application/json; charset=utf-8"
                $webReq.Headers.Add("Authorization", "Bearer $apiKey")
                $webReq.Accept = "application/json"
                $webReq.Timeout = 120000

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

        # Servir arquivos estáticos públicos com proteção contra Path Traversal e bloqueio de arquivos internos
        if ($path -eq "/") { $path = "/index.html" }
        $relPath = $path.TrimStart("/").Replace("/", "\")
        $candidatePath = [System.IO.Path]::GetFullPath((Join-Path $BaseDir $relPath))
        $fileName = [System.IO.Path]::GetFileName($candidatePath)
        $ext = [System.IO.Path]::GetExtension($candidatePath).ToLower()

        $isInsideBase = $candidatePath.StartsWith($FullBaseDir, [System.StringComparison]::OrdinalIgnoreCase)
        $isHiddenOrApi = $fileName.StartsWith(".") -or $candidatePath.Substring($FullBaseDir.Length).StartsWith("api\", [System.StringComparison]::OrdinalIgnoreCase) -or $candidatePath.Substring($FullBaseDir.Length).StartsWith("netlify\", [System.StringComparison]::OrdinalIgnoreCase)

        if ($isInsideBase -and (-not $isHiddenOrApi) -and $mimeTypes.ContainsKey($ext) -and (Test-Path $candidatePath -PathType Leaf)) {
            $contentType = $mimeTypes[$ext]
            $fileBytes = [System.IO.File]::ReadAllBytes($candidatePath)
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
