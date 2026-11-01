// =========================================================================
// NETLIFY SERVERLESS FUNCTION (/.netlify/functions/chat) - NVIDIA NEMOTRON
// =========================================================================

const chatHandler = require('../api/chat.js');

exports.handler = async function (event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    let body = {};
    try {
        body = JSON.parse(event.body || '{}');
    } catch (e) {}

    const apiKey = (process.env.NVIDIA_API_KEY || body.apiKey || '').trim();
    const model = body.model || process.env.NVIDIA_MODEL || 'nvidia/nemotron-3.5-lightning-30b-a3b';

    if (!apiKey || apiKey === 'nvapi-SUA_CHAVE_AQUI') {
        return {
            statusCode: 401,
            headers,
            body: JSON.stringify({ error: 'Chave NVIDIA_API_KEY não configurada.' })
        };
    }

    const systemPrompt = `Você é o Oráculo Z (Shenlong / Radar do Dragão), o assistente oficial de Inteligência Artificial do portal "DB Universe". Responda sempre no mesmo idioma em que o usuário falar com você (Português Brasileiro, Inglês, Espanhol, Japonês ou Coreano). Você domina tudo sobre Dragon Ball e os 59 capítulos da obra original do site "A Chama Magenta da Determinação" (Ash Chibi SSJ4 Magenta e SSJ5 Sagrado com a Master Sword em Hyrule, Goh SSJ Caos com sangue de Broly, fusões Gosha e Goshan Potara, XTA em Xerxenoverse, Metal Sonic Divine, Shadic Super/Hyper Final Kamehameha, Galeem e Darkron).`;

    const userMessages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
    const fullMessages = [
        { role: 'system', content: systemPrompt },
        ...userMessages.filter(m => m && (m.role === 'user' || m.role === 'assistant') && m.content)
    ];

    try {
        const resp = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
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

        const data = await resp.json();
        if (!resp.ok) {
            return {
                statusCode: resp.status,
                headers,
                body: JSON.stringify({ error: `Erro NVIDIA API (${resp.status}): ${data.detail || JSON.stringify(data)}` })
            };
        }

        const reply = data.choices?.[0]?.message?.content || 'Sem resposta do Oráculo Z.';
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ reply, model })
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: `Falha ao conectar à API NVIDIA: ${err.message}` })
        };
    }
};
