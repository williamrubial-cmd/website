// =========================================================================
// ORÁCULO Z (SHENLONG / NVIDIA NEMOTRON) - WIDGET DE CHAT INTERATIVO
// Suporte completo a 5 idiomas (PT-BR, EN, ES, JA, KO) + Contexto FanMade
// =========================================================================

(function () {
    const chatI18n = {
        'pt-BR': {
            btn_label: 'Oráculo Z',
            header_title: 'Oráculo Z • Shenlong IA',
            header_status: 'NVIDIA Nemotron Online',
            welcome: 'Saudações, Guerreiro Z! 🐉 Eu sou o **Oráculo Z**, alimentado pelo **NVIDIA Nemotron**. Posso responder tudo sobre **Dragon Ball**, o mundo dos animes e os 59 capítulos da saga **A Chama Magenta da Determinação** (Ash SSJ5, Goh, Shadic e Hyrule). Qual é o seu desejo?',
            placeholder: 'Pergunte ao Oráculo Z...',
            send: 'Enviar',
            settings_title: 'Configuração da API NVIDIA Nemotron',
            settings_desc: 'Se você estiver rodando o servidor local (server.py) com o arquivo .env configurado, não precisa preencher nada aqui. Caso esteja abrindo o HTML direto ou queira testar outra chave, cole sua chave nvapi-... abaixo (salva apenas no seu navegador):',
            key_placeholder: 'nvapi-...',
            model_label: 'Modelo Nemotron:',
            save_btn: 'Salvar',
            clear_btn: 'Limpar Conversa',
            thinking: 'Reunindo as Esferas do Dragão...',
            sug1: 'Quem é mais forte: Goku UI ou Gohan Beast?',
            sug2: 'Como o Ash despertou o SSJ5 Sagrado em Hyrule?',
            sug3: 'Conte sobre a fusão eterna Shadic!'
        },
        'en': {
            btn_label: 'Oracle Z',
            header_title: 'Oracle Z • Shenron AI',
            header_status: 'NVIDIA Nemotron Online',
            welcome: 'Greetings, Z-Fighter! 🐉 I am **Oracle Z**, powered by **NVIDIA Nemotron**. Ask me anything about **Dragon Ball**, anime, or all 59 chapters of **The Magenta Flame of Determination** (Ash SSJ5, Goh, Shadic, and Hyrule). State your wish!',
            placeholder: 'Ask Oracle Z...',
            send: 'Send',
            settings_title: 'NVIDIA Nemotron API Settings',
            settings_desc: 'If running the local server (server.py) with .env configured, leave this blank. Otherwise, paste your nvapi-... key below (stored locally in your browser):',
            key_placeholder: 'nvapi-...',
            model_label: 'Nemotron Model:',
            save_btn: 'Save',
            clear_btn: 'Clear Chat',
            thinking: 'Gathering the Dragon Balls...',
            sug1: 'Who is stronger: UI Goku or Beast Gohan?',
            sug2: 'How did Ash awaken Sacred SSJ5 in Hyrule?',
            sug3: 'Tell me about the eternal fusion Shadic!'
        },
        'es': {
            btn_label: 'Oráculo Z',
            header_title: 'Oráculo Z • Shenlong IA',
            header_status: 'NVIDIA Nemotron Online',
            welcome: '¡Saludos, Guerrero Z! 🐉 Soy el **Oráculo Z**, impulsado por **NVIDIA Nemotron**. Pregúntame sobre **Dragon Ball**, el mundo del anime o los 59 capítulos de **La Llama Magenta de la Determinación** (Ash SSJ5, Goh, Shadic y Hyrule). ¿Cuál es tu deseo?',
            placeholder: 'Pregúntale al Oráculo Z...',
            send: 'Enviar',
            settings_title: 'Configuración de API NVIDIA Nemotron',
            settings_desc: 'Si usas el servidor local (server.py) con .env, no necesitas llenar esto. Si prefieres usar otra clave, pega tu nvapi-... abajo (se guarda en tu navegador):',
            key_placeholder: 'nvapi-...',
            model_label: 'Modelo Nemotron:',
            save_btn: 'Guardar',
            clear_btn: 'Limpiar Chat',
            thinking: 'Reuniendo las Esferas del Dragón...',
            sug1: '¿Quién es más fuerte: Goku UI o Gohan Beast?',
            sug2: '¿Cómo despertó Ash el SSJ5 Sagrado en Hyrule?',
            sug3: '¡Háblame de la fusión eterna Shadic!'
        },
        'ja': {
            btn_label: 'オラクルZ',
            header_title: 'オラクルZ • 神龍 AI',
            header_status: 'NVIDIA Nemotron オンライン',
            welcome: 'ようこそ、Z戦士よ！🐉 私は **NVIDIA Nemotron** を搭載した **オラクルZ** だ。『ドラゴンボール』やアニメ全般、そして全59章の『決意のマゼンタの炎』（サトシSSJ5、ゴウ、シャディック、ハイラル）について何でも答えるぞ。さあ、願いを言え！',
            placeholder: 'オラクルZに質問する...',
            send: '送信',
            settings_title: 'NVIDIA Nemotron API設定',
            settings_desc: 'ローカルサーバー(server.py)と.envを使用している場合は空欄で構いません。ブラウザに直接キーを保存する場合は以下に nvapi-... を入力してください:',
            key_placeholder: 'nvapi-...',
            model_label: 'Nemotron モデル:',
            save_btn: '保存',
            clear_btn: '履歴を消去',
            thinking: 'ドラゴンボールを集めています...',
            sug1: '身勝手の極意悟空とビースト悟飯はどっちが強い？',
            sug2: 'サトシはどうやってハイラルで聖なるSSJ5に覚醒した？',
            sug3: '永遠の融合シャディックについて教えて！'
        },
        'ko': {
            btn_label: '오라클 Z',
            header_title: '오라클 Z • 신룡 AI',
            header_status: 'NVIDIA Nemotron 온라인',
            welcome: '환영한다, Z전사여! 🐉 나는 **NVIDIA Nemotron** 기반의 **오라클 Z**다. **드래곤볼**, 애니메이션, 그리고 총 59장 분량의 팬메이드 사가 **결의의 마젠타 불꽃**(지우 SSJ5, 고우, 샤딕, 하이랄)에 대해 무엇이든 물어보아라. 소원을 말해라!',
            placeholder: '오라클 Z에게 질문하기...',
            send: '전송',
            settings_title: 'NVIDIA Nemotron API 설정',
            settings_desc: '로컬 서버(server.py)와 .env를 사용 중이라면 비워두셔도 됩니다. 브라우저에 직접 키를 저장하려면 아래에 nvapi-... 키를 입력하세요:',
            key_placeholder: 'nvapi-...',
            model_label: 'Nemotron 모델:',
            save_btn: '저장',
            clear_btn: '대화 지우기',
            thinking: '드래곤볼을 모으는 중...',
            sug1: '무의식의 극의 손오공과 비스트 손오반 중 누가 더 강한가요?',
            sug2: '지우는 하이랄에서 어떻게 신성한 SSJ5로 각성했나요?',
            sug3: '영원한 융합 샤딕에 대해 알려줘!'
        }
    };

    const SYSTEM_PROMPT_FALLBACK = `Você é o Oráculo Z (Shenlong / Radar do Dragão), o assistente oficial de Inteligência Artificial do portal "DB Universe".
Sua personalidade é sábia, épica, carismática e empolgada com o universo dos Guerreiros Z e dos animes.
Responda sempre no mesmo idioma em que o usuário falar com você (Português Brasileiro, Inglês, Espanhol, Japonês ou Coreano).
Você domina tudo sobre Dragon Ball (Clássico, Z, GT, Super, Daima) e também toda a obra exclusiva do site "A Chama Magenta da Determinação" (59 capítulos: Ash Chibi SSJ4 Magenta e SSJ5 Sagrado com a Master Sword em Hyrule, Goh SSJ Caos com sangue de Broly, fusões Gosha e Goshan Potara, XTA em Xerxenoverse, Metal Sonic Divine, Shadic Super/Hyper Final Kamehameha, Galeem e Darkron).`;

    function getLang() {
        const l = localStorage.getItem('db_universe_lang') || document.documentElement.lang || 'pt-BR';
        return chatI18n[l] ? l : 'pt-BR';
    }

    function formatMarkdown(text) {
        if (!text) return '';
        let safe = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        safe = safe.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        safe = safe.replace(/\*(.+?)\*/g, '<em>$1</em>');
        safe = safe.replace(/`([^`]+)`/g, '<code>$1</code>');
        safe = safe.replace(/\n/g, '<br>');
        return safe;
    }

    function injectStyles() {
        if (document.getElementById('nemotron-chat-styles')) return;
        const style = document.createElement('style');
        style.id = 'nemotron-chat-styles';
        style.textContent = `
            .oracle-chat-launcher {
                position: fixed;
                bottom: 30px;
                left: 30px;
                z-index: 1500;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 12px 20px;
                border-radius: 50px;
                background: linear-gradient(135deg, #F26F22, #CC3300);
                color: #FFF;
                border: 2px solid #FFD700;
                box-shadow: 0 6px 25px rgba(242, 111, 34, 0.65), 0 0 15px rgba(255, 215, 0, 0.4);
                cursor: pointer;
                font-family: 'Roboto', sans-serif;
                font-weight: 700;
                font-size: 0.98rem;
                transition: all 0.3s ease;
            }
            .oracle-chat-launcher:hover {
                transform: translateY(-4px) scale(1.04);
                box-shadow: 0 10px 30px rgba(242, 111, 34, 0.9), 0 0 25px rgba(255, 215, 0, 0.8);
            }
            .oracle-chat-launcher .dragon-icon {
                font-size: 1.35rem;
                color: #FFD700;
                filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.8));
            }
            .oracle-chat-window {
                position: fixed;
                bottom: 95px;
                left: 30px;
                width: 390px;
                max-width: calc(100vw - 32px);
                height: 560px;
                max-height: calc(100vh - 130px);
                background: rgba(13, 13, 20, 0.97);
                backdrop-filter: blur(14px);
                border: 2px solid #F26F22;
                border-radius: 18px;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85), 0 0 30px rgba(242, 111, 34, 0.35);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                z-index: 1600;
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px) scale(0.96);
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                font-family: 'Roboto', sans-serif;
            }
            .oracle-chat-window.open {
                opacity: 1;
                visibility: visible;
                transform: translateY(0) scale(1);
            }
            .oracle-header {
                background: linear-gradient(90deg, #12121C, #1F1424, #12121C);
                border-bottom: 2px solid #F26F22;
                padding: 14px 16px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .oracle-header-info {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .oracle-avatar {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                background: radial-gradient(circle at 35% 35%, #FFD700, #F26F22 65%, #992200);
                border: 2px solid #FFF;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #111;
                font-size: 1.2rem;
                box-shadow: 0 0 12px rgba(255, 215, 0, 0.6);
            }
            .oracle-title-group h4 {
                margin: 0;
                font-size: 1rem;
                color: #FFD700;
                letter-spacing: 0.5px;
            }
            .oracle-status {
                font-size: 0.75rem;
                color: #76B900; /* NVIDIA Green */
                display: flex;
                align-items: center;
                gap: 5px;
                font-weight: 600;
            }
            .oracle-status-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: #76B900;
                box-shadow: 0 0 8px #76B900;
            }
            .oracle-header-actions {
                display: flex;
                gap: 6px;
            }
            .oracle-icon-btn {
                background: rgba(255, 255, 255, 0.08);
                border: 1px solid rgba(255, 255, 255, 0.15);
                color: #DDD;
                width: 32px;
                height: 32px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s;
            }
            .oracle-icon-btn:hover {
                background: #F26F22;
                color: #FFF;
                border-color: #FFD700;
            }
            .oracle-settings-panel {
                display: none;
                background: #161622;
                border-bottom: 1px solid rgba(242, 111, 34, 0.4);
                padding: 14px 16px;
                font-size: 0.85rem;
                color: #CCC;
            }
            .oracle-settings-panel.active {
                display: block;
            }
            .oracle-settings-panel h5 {
                color: #FFD700;
                margin: 0 0 6px 0;
                font-size: 0.92rem;
            }
            .oracle-settings-panel p {
                margin: 0 0 10px 0;
                line-height: 1.4;
                font-size: 0.78rem;
                color: #AAA;
            }
            .oracle-input-field, .oracle-select-field {
                width: 100%;
                padding: 8px 10px;
                margin-bottom: 8px;
                background: #0B0B12;
                border: 1px solid #333;
                border-radius: 6px;
                color: #FFF;
                font-size: 0.84rem;
            }
            .oracle-settings-btns {
                display: flex;
                gap: 8px;
                margin-top: 4px;
            }
            .oracle-btn-small {
                flex: 1;
                padding: 7px 10px;
                border-radius: 6px;
                border: none;
                font-weight: 700;
                font-size: 0.8rem;
                cursor: pointer;
            }
            .oracle-btn-save {
                background: #76B900;
                color: #000;
            }
            .oracle-btn-clear {
                background: rgba(255, 60, 60, 0.2);
                color: #FF8888;
                border: 1px solid rgba(255, 60, 60, 0.4);
            }
            .oracle-messages {
                flex: 1;
                padding: 16px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            .oracle-messages::-webkit-scrollbar {
                width: 6px;
            }
            .oracle-messages::-webkit-scrollbar-thumb {
                background: #F26F22;
                border-radius: 10px;
            }
            .oracle-msg {
                max-width: 85%;
                padding: 11px 14px;
                border-radius: 14px;
                font-size: 0.92rem;
                line-height: 1.5;
                word-wrap: break-word;
            }
            .oracle-msg.assistant {
                align-self: flex-start;
                background: rgba(255, 255, 255, 0.07);
                border: 1px solid rgba(255, 215, 0, 0.25);
                color: #F0F0F5;
                border-bottom-left-radius: 4px;
            }
            .oracle-msg.user {
                align-self: flex-end;
                background: linear-gradient(135deg, #F26F22, #D9531E);
                color: #FFF;
                border-bottom-right-radius: 4px;
                box-shadow: 0 4px 12px rgba(242, 111, 34, 0.3);
            }
            .oracle-msg strong {
                color: #FFD700;
            }
            .oracle-msg.user strong {
                color: #FFF;
            }
            .oracle-suggestions {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin-top: 4px;
            }
            .oracle-chip {
                background: rgba(242, 111, 34, 0.14);
                border: 1px solid rgba(242, 111, 34, 0.45);
                color: #FFD700;
                padding: 5px 10px;
                border-radius: 14px;
                font-size: 0.76rem;
                cursor: pointer;
                transition: all 0.2s;
                text-align: left;
            }
            .oracle-chip:hover {
                background: #F26F22;
                color: #FFF;
            }
            .oracle-footer {
                padding: 12px;
                background: #0A0A10;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                display: flex;
                gap: 8px;
            }
            .oracle-chat-input {
                flex: 1;
                background: #161622;
                border: 1px solid #2E2E42;
                border-radius: 22px;
                padding: 10px 15px;
                color: #FFF;
                font-size: 0.92rem;
                outline: none;
                transition: border-color 0.2s;
            }
            .oracle-chat-input:focus {
                border-color: #F26F22;
            }
            .oracle-send-btn {
                background: linear-gradient(135deg, #FFD700, #F26F22);
                color: #111;
                border: none;
                width: 42px;
                height: 42px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 1rem;
                transition: transform 0.2s, box-shadow 0.2s;
            }
            .oracle-send-btn:hover {
                transform: scale(1.08);
                box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
            }
            .oracle-send-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            @media (max-width: 480px) {
                .oracle-chat-launcher {
                    bottom: 20px;
                    left: 16px;
                    padding: 10px 15px;
                    font-size: 0.88rem;
                }
                .oracle-chat-window {
                    left: 16px;
                    bottom: 80px;
                    width: calc(100vw - 32px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    function initChatWidget() {
        injectStyles();

        const lang = getLang();
        const t = chatI18n[lang];

        const container = document.createElement('div');
        container.id = 'oracleChatContainer';
        container.className = 'notranslate';
        container.innerHTML = `
            <button type="button" class="oracle-chat-launcher" id="oracleLauncher" aria-label="Abrir chat Oráculo Z">
                <i class="fa-solid fa-dragon dragon-icon"></i>
                <span id="oracleBtnLabel">${t.btn_label}</span>
            </button>

            <div class="oracle-chat-window" id="oracleWindow" role="dialog" aria-label="Chat Oráculo Z">
                <div class="oracle-header">
                    <div class="oracle-header-info">
                        <div class="oracle-avatar"><i class="fa-solid fa-dragon"></i></div>
                        <div class="oracle-title-group">
                            <h4 id="oracleHeaderTitle">${t.header_title}</h4>
                            <div class="oracle-status">
                                <span class="oracle-status-dot"></span>
                                <span id="oracleHeaderStatus">${t.header_status}</span>
                            </div>
                        </div>
                    </div>
                    <div class="oracle-header-actions">
                        <button type="button" class="oracle-icon-btn" id="oracleSettingsBtn" title="Configurações da API">
                            <i class="fa-solid fa-key"></i>
                        </button>
                        <button type="button" class="oracle-icon-btn" id="oracleCloseBtn" title="Fechar">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>

                <div class="oracle-settings-panel" id="oracleSettingsPanel">
                    <h5 id="oracleSettingsTitle">${t.settings_title}</h5>
                    <p id="oracleSettingsDesc">${t.settings_desc}</p>
                    <input type="password" id="oracleApiKeyInput" class="oracle-input-field" placeholder="${t.key_placeholder}" autocomplete="off">
                    <label for="oracleModelSelect" id="oracleModelLabel" style="display:block; margin-bottom:4px; font-size:0.78rem; color:#FFD700;">${t.model_label}</label>
                    <select id="oracleModelSelect" class="oracle-select-field">
                        <option value="nvidia/nemotron-3.5-lightning-30b-a3b">nvidia/nemotron-3.5-lightning-30b-a3b</option>
                        <option value="nvidia/nemotron-3.5-super-vl-120b-a12b">nvidia/nemotron-3.5-super-vl-120b-a12b</option>
                        <option value="nvidia/nemotron-3-ultra-550b-a55b">nvidia/nemotron-3-ultra-550b-a55b</option>
                        <option value="nvidia/nemotron-nano-3-30b-a3b">nvidia/nemotron-nano-3-30b-a3b</option>
                    </select>
                    <div class="oracle-settings-btns">
                        <button type="button" class="oracle-btn-small oracle-btn-save" id="oracleSaveKeyBtn">${t.save_btn}</button>
                        <button type="button" class="oracle-btn-small oracle-btn-clear" id="oracleClearChatBtn">${t.clear_btn}</button>
                    </div>
                </div>

                <div class="oracle-messages" id="oracleMessages"></div>

                <form class="oracle-footer" id="oracleChatForm">
                    <input type="text" class="oracle-chat-input" id="oracleChatInput" placeholder="${t.placeholder}" autocomplete="off">
                    <button type="submit" class="oracle-send-btn" id="oracleSendBtn" aria-label="${t.send}">
                        <i class="fa-solid fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        `;

        document.body.appendChild(container);

        const launcher = document.getElementById('oracleLauncher');
        const chatWindow = document.getElementById('oracleWindow');
        const closeBtn = document.getElementById('oracleCloseBtn');
        const settingsBtn = document.getElementById('oracleSettingsBtn');
        const settingsPanel = document.getElementById('oracleSettingsPanel');
        const apiKeyInput = document.getElementById('oracleApiKeyInput');
        const modelSelect = document.getElementById('oracleModelSelect');
        const saveKeyBtn = document.getElementById('oracleSaveKeyBtn');
        const clearChatBtn = document.getElementById('oracleClearChatBtn');
        const messagesEl = document.getElementById('oracleMessages');
        const chatForm = document.getElementById('oracleChatForm');
        const chatInput = document.getElementById('oracleChatInput');
        const sendBtn = document.getElementById('oracleSendBtn');

        let history = [];
        try {
            const saved = sessionStorage.getItem('oracle_z_history');
            if (saved) history = JSON.parse(saved);
        } catch (e) {}

        apiKeyInput.value = localStorage.getItem('nvidia_nemotron_key') || '';
        const savedModel = localStorage.getItem('nvidia_nemotron_model');
        if (savedModel) modelSelect.value = savedModel;

        function renderWelcomeAndHistory() {
            const dict = chatI18n[getLang()];
            messagesEl.innerHTML = '';

            const welcomeDiv = document.createElement('div');
            welcomeDiv.className = 'oracle-msg assistant';
            welcomeDiv.innerHTML = formatMarkdown(dict.welcome);
            messagesEl.appendChild(welcomeDiv);

            if (history.length === 0) {
                const sugDiv = document.createElement('div');
                sugDiv.className = 'oracle-suggestions';
                [dict.sug1, dict.sug2, dict.sug3].forEach(sugText => {
                    const chip = document.createElement('button');
                    chip.type = 'button';
                    chip.className = 'oracle-chip';
                    chip.textContent = sugText;
                    chip.addEventListener('click', () => {
                        chatInput.value = sugText;
                        chatForm.dispatchEvent(new Event('submit'));
                    });
                    sugDiv.appendChild(chip);
                });
                messagesEl.appendChild(sugDiv);
            } else {
                history.forEach(m => appendMessageUI(m.role, m.content, false));
            }
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }

        function appendMessageUI(role, content, scroll = true) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `oracle-msg ${role}`;
            msgDiv.innerHTML = formatMarkdown(content);
            messagesEl.appendChild(msgDiv);
            if (scroll) messagesEl.scrollTop = messagesEl.scrollHeight;
            return msgDiv;
        }

        launcher.addEventListener('click', () => {
            chatWindow.classList.toggle('open');
            if (chatWindow.classList.contains('open')) {
                setTimeout(() => chatInput.focus(), 150);
            }
        });

        closeBtn.addEventListener('click', () => {
            chatWindow.classList.remove('open');
        });

        settingsBtn.addEventListener('click', () => {
            settingsPanel.classList.toggle('active');
        });

        saveKeyBtn.addEventListener('click', () => {
            localStorage.setItem('nvidia_nemotron_key', apiKeyInput.value.trim());
            localStorage.setItem('nvidia_nemotron_model', modelSelect.value);
            settingsPanel.classList.remove('active');
        });

        clearChatBtn.addEventListener('click', () => {
            history = [];
            sessionStorage.removeItem('oracle_z_history');
            renderWelcomeAndHistory();
            settingsPanel.classList.remove('active');
        });

        async function sendMessageToNemotron(userText) {
            const dict = chatI18n[getLang()];
            history.push({ role: 'user', content: userText });
            try {
                sessionStorage.setItem('oracle_z_history', JSON.stringify(history));
            } catch (e) {}

            // Remove chips de sugestão iniciais se presentes
            const sugEl = messagesEl.querySelector('.oracle-suggestions');
            if (sugEl) sugEl.remove();

            appendMessageUI('user', userText);
            const loadingDiv = appendMessageUI('assistant', `⏳ <em>${dict.thinking}</em>`);
            sendBtn.disabled = true;

            const browserKey = (localStorage.getItem('nvidia_nemotron_key') || '').trim();
            const selectedModel = localStorage.getItem('nvidia_nemotron_model') || modelSelect.value;

            async function tryBackendEndpoints() {
                const endpoints = [
                    '/api/chat',
                    '/.netlify/functions/chat',
                    'http://localhost:8000/api/chat',
                    'http://127.0.0.1:8000/api/chat'
                ];
                let lastError = null;

                for (const ep of endpoints) {
                    try {
                        const resp = await fetch(ep, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                messages: history,
                                model: selectedModel,
                                apiKey: browserKey
                            })
                        });

                        const rawText = await resp.text();
                        // Se o servidor devolveu o código-fonte do PHP ou página HTML de 404/405, pula para o próximo
                        if (rawText.trim().startsWith('<?php') || rawText.trim().startsWith('<!DOCTYPE') || rawText.trim().startsWith('<html')) {
                            continue;
                        }

                        const data = JSON.parse(rawText);
                        if (!resp.ok) {
                            lastError = new Error(data.error || `HTTP ${resp.status}`);
                            continue;
                        }
                        if (data && data.reply) {
                            return data.reply;
                        }
                    } catch (e) {
                        // Continua tentando o próximo endpoint
                    }
                }
                if (lastError) throw lastError;
                return null;
            }

            async function tryDirectOrCorsProxy(keyToUse) {
                const nvidiaUrl = 'https://integrate.api.nvidia.com/v1/chat/completions';
                const payloadStr = JSON.stringify({
                    model: selectedModel,
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT_FALLBACK },
                        ...history.slice(-10)
                    ],
                    temperature: 0.65,
                    top_p: 0.9,
                    max_tokens: 4096,
                    stream: false
                });

                const targets = [
                    nvidiaUrl,
                    'https://corsproxy.io/?' + encodeURIComponent(nvidiaUrl)
                ];

                let lastErr = null;
                for (const url of targets) {
                    try {
                        const resp = await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${keyToUse}`,
                                'Accept': 'application/json'
                            },
                            body: payloadStr
                        });
                        const raw = await resp.text();
                        if (raw.trim().startsWith('<')) continue;
                        const data = JSON.parse(raw);
                        if (!resp.ok) {
                            lastErr = new Error(data.detail || data.error?.message || `Erro NVIDIA (${resp.status})`);
                            continue;
                        }
                        if (data.choices?.[0]?.message?.content) {
                            return data.choices[0].message.content;
                        }
                    } catch (e) {
                        lastErr = e;
                    }
                }
                if (lastErr) throw lastErr;
                return null;
            }

            try {
                let reply = await tryBackendEndpoints();

                if (!reply) {
                    throw new Error(
                        'A API da NVIDIA bloqueia chamadas diretas de servidores 100% estáticos (como GitHub Pages) por segurança (CORS / Erro 403).\n\n' +
                        '✅ **No seu computador:** Dê dois cliques em `iniciar-site.bat` (que liga o `http://localhost:8000`) — mesmo se abrir o arquivo HTML direto, ele usará o `localhost:8000` automaticamente!\n' +
                        '✅ **Na internet (Hospedagem):** Suba o site gratuitamente na **Vercel**, **Netlify** ou em uma hospedagem com **PHP** (os arquivos `api/chat.js`, `netlify/functions/chat.js` e `api/chat.php` já estão prontos na sua pasta!).'
                    );
                }

                loadingDiv.innerHTML = formatMarkdown(reply);
                history.push({ role: 'assistant', content: reply });
                sessionStorage.setItem('oracle_z_history', JSON.stringify(history));
            } catch (err) {
                loadingDiv.innerHTML = formatMarkdown(
                    `⚠️ **Aviso:** ${err.message}`
                );
            } finally {
                sendBtn.disabled = false;
                messagesEl.scrollTop = messagesEl.scrollHeight;
            }
        }

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text || sendBtn.disabled) return;
            chatInput.value = '';
            sendMessageToNemotron(text);
        });

        // Atualizar textos do chat quando o usuário trocar o idioma no topo da página
        function syncChatLanguage() {
            const dict = chatI18n[getLang()];
            document.getElementById('oracleBtnLabel').textContent = dict.btn_label;
            document.getElementById('oracleHeaderTitle').textContent = dict.header_title;
            document.getElementById('oracleHeaderStatus').textContent = dict.header_status;
            document.getElementById('oracleSettingsTitle').textContent = dict.settings_title;
            document.getElementById('oracleSettingsDesc').textContent = dict.settings_desc;
            document.getElementById('oracleModelLabel').textContent = dict.model_label;
            document.getElementById('oracleSaveKeyBtn').textContent = dict.save_btn;
            document.getElementById('oracleClearChatBtn').textContent = dict.clear_btn;
            chatInput.placeholder = dict.placeholder;
            if (history.length === 0) {
                renderWelcomeAndHistory();
            }
        }

        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', () => setTimeout(syncChatLanguage, 50));
        });

        renderWelcomeAndHistory();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatWidget);
    } else {
        initChatWidget();
    }
})();
