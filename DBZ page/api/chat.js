// =========================================================================
// VERCEL SERVERLESS FUNCTION (/api/chat) - NVIDIA NEMOTRON PROXY
// Configure a variável de ambiente NVIDIA_API_KEY no painel da Vercel.
// =========================================================================

const SYSTEM_PROMPT = `Você é o Oráculo Z (Shenlong / Radar do Dragão), o assistente oficial de Inteligência Artificial do portal "DB Universe".
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

Mantenha respostas concisas, bem formatadas e envolventes!`;

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido. Use POST.' });
    }

    const body = req.body || {};
    const apiKey = (process.env.NVIDIA_API_KEY || body.apiKey || '').trim();
    const model = body.model || process.env.NVIDIA_MODEL || 'nvidia/nemotron-3.5-lightning-30b-a3b';

    if (!apiKey || apiKey === 'nvapi-SUA_CHAVE_AQUI') {
        return res.status(401).json({
            error: 'Chave NVIDIA_API_KEY não configurada nas variáveis de ambiente do servidor.'
        });
    }

    const userMessages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
    const fullMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...userMessages.filter(m => m && (m.role === 'user' || m.role === 'assistant') && m.content)
    ];

    try {
        const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                model,
                messages: fullMessages,
                temperature: 0.65,
                top_p: 0.9,
                max_tokens: 4096,
                stream: false
            })
        });

        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json({
                error: `Erro da API NVIDIA (${response.status}): ${data.detail || data.error?.message || JSON.stringify(data)}`
            });
        }

        const reply = data.choices?.[0]?.message?.content || 'Sem resposta do Oráculo Z.';
        return res.status(200).json({ reply, model });
    } catch (err) {
        return res.status(500).json({ error: `Falha ao conectar à API NVIDIA: ${err.message}` });
    }
};
