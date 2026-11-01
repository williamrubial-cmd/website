// ==========================================
// DRAGON BALL UNIVERSE - SCRIPT PRINCIPAL
// ==========================================

const translations = {
    'pt-BR': {
        lang_label: '🇧🇷 PT-BR',
        nav_home: 'Home',
        nav_db: 'Universo DB',
        nav_anime: 'Mundo Anime',
        nav_media: 'Multimídia',
        nav_gallery: 'Galeria 4K',
        nav_manga: 'Mangás DB',
        nav_fanmade: 'Anime FanMade',
        hero_title: 'Eleve seu <span>Ki</span> ao Máximo!',
        hero_subtitle: 'O portal definitivo para todos os Guerreiros Z. Notícias, vídeos, imagens em 4K e muito mais sobre a maior obra de Akira Toriyama.',
        hero_btn: 'Explorar',
        db_news_title: 'Notícias <span>Dragon Ball</span>',
        card_db1_title: 'Kami Sama Explorer',
        card_db1_desc: 'Fique por dentro de todos os anúncios mais recentes, resumos do mangá e análises de Dragon Ball na maior comunidade brasileira e em português dedicada à franquia.',
        card_db1_link: 'Acessar as últimas matérias',
        card_db2_title: 'Dragon Ball Official Site',
        card_db2_desc: 'O portal global oficial da franquia! Acompanhe as transmissões do Weekly Dragon Ball News e os comunicados diretos de jogos, animes e eventos.',
        card_db2_link: 'Portal de Notícias Oficial',
        card_db3_title: 'Toei Animation (Press)',
        card_db3_desc: 'Acompanhe os comunicados de imprensa e novidades de animação direto da Toei Animation, o lendário estúdio responsável por produzir os animes de Dragon Ball.',
        card_db3_link: 'Ver comunicados do estúdio',
        anime_news_title: 'Radar <span>Otaku</span> (Geral)',
        card_an1_title: 'Portal Oficial Pokémon (BR)',
        card_an1_desc: 'Descubra as mais recentes novidades sobre Pokémon Horizontes, cartas TCG, eventos no Pokémon GO e atualizações completas diretamente no portal oficial do Brasil.',
        card_an1_link: 'Notícias de Pokémon',
        card_an2_title: 'Crunchyroll Notícias (BR)',
        card_an2_desc: 'Fique por dentro das datas de lançamento das próximas temporadas de animes, anúncios de dublagens brasileiras e as principais novidades da cultura pop e mangás.',
        card_an2_link: 'Ver últimas do Crunchyroll',
        card_an3_title: 'NerdBunker: Animes & Mangás',
        card_an3_desc: 'A melhor cobertura em português e com bom humor sobre o universo geek, trazendo matérias super atualizadas de filmes asiáticos, animes, mangás e tokusatsus.',
        card_an3_link: 'Acessar matérias no Bunker',
        media_title: 'Multimídia <span>Vídeos</span>',
        gallery_title: 'Galeria <span>4K</span> (Wallpapers)',
        gallery_desc: 'Clique na imagem para ampliar no visualizador e em "Baixar 4K" para obter a imagem em máxima resolução.',
        btn_preview: 'Ver em 4K',
        btn_download: 'Baixar',
        modal_download: 'Baixar em 4K',
        back_top: 'Topo',
        footer_text: '&copy; 2026 DB Universe. Desenvolvido para fãs. Todos os direitos de Dragon Ball reservados a Akira Toriyama, Shueisha e Toei Animation.'
    },
    'en': {
        lang_label: '🇺🇸 EN',
        nav_home: 'Home',
        nav_db: 'DB Universe',
        nav_anime: 'Anime World',
        nav_media: 'Multimedia',
        nav_gallery: '4K Gallery',
        nav_manga: 'DB Manga',
        nav_fanmade: 'FanMade Anime',
        hero_title: 'Raise Your <span>Ki</span> to the Max!',
        hero_subtitle: 'The ultimate portal for all Z-Fighters. News, videos, 4K wallpapers, and much more about Akira Toriyama\'s greatest masterpiece.',
        hero_btn: 'Explore',
        db_news_title: '<span>Dragon Ball</span> News',
        card_db1_title: 'Kami Sama Explorer',
        card_db1_desc: 'Stay up to date with all the latest announcements, manga summaries, and Dragon Ball analyses from the largest Brazilian and Portuguese-speaking community dedicated to the franchise.',
        card_db1_link: 'Read the latest articles',
        card_db2_title: 'Dragon Ball Official Site',
        card_db2_desc: 'The official global portal for the franchise! Follow Weekly Dragon Ball News broadcasts and direct announcements on games, anime, and events.',
        card_db2_link: 'Official News Portal',
        card_db3_title: 'Toei Animation (Press)',
        card_db3_desc: 'Follow press releases and animation news directly from Toei Animation, the legendary studio behind the Dragon Ball anime series.',
        card_db3_link: 'View studio announcements',
        anime_news_title: '<span>Otaku</span> Radar (General)',
        card_an1_title: 'Official Pokémon Portal',
        card_an1_desc: 'Discover the latest news on Pokémon Horizons, TCG cards, Pokémon GO events, and full updates directly on the official portal.',
        card_an1_link: 'Pokémon News',
        card_an2_title: 'Crunchyroll News',
        card_an2_desc: 'Keep up with release dates for upcoming anime seasons, dub announcements, and major pop culture and manga news.',
        card_an2_link: 'Latest from Crunchyroll',
        card_an3_title: 'NerdBunker: Anime & Manga',
        card_an3_desc: 'Great geek universe coverage with humor, bringing super updated articles on Asian movies, anime, manga, and tokusatsu.',
        card_an3_link: 'Read articles on Bunker',
        media_title: 'Multimedia <span>Videos</span>',
        gallery_title: '<span>4K</span> Gallery (Wallpapers)',
        gallery_desc: 'Click on an image to enlarge it in the viewer and click "Download 4K" to get the image in maximum resolution.',
        btn_preview: 'View in 4K',
        btn_download: 'Download',
        modal_download: 'Download in 4K',
        back_top: 'Top',
        footer_text: '&copy; 2026 DB Universe. Built for fans. All Dragon Ball rights reserved to Akira Toriyama, Shueisha, and Toei Animation.'
    },
    'es': {
        lang_label: '🇪🇸 ES',
        nav_home: 'Inicio',
        nav_db: 'Universo DB',
        nav_anime: 'Mundo Anime',
        nav_media: 'Multimedia',
        nav_gallery: 'Galería 4K',
        nav_manga: 'Mangas DB',
        nav_fanmade: 'Anime FanMade',
        hero_title: '¡Eleva tu <span>Ki</span> al Máximo!',
        hero_subtitle: 'El portal definitivo para todos los Guerreros Z. Noticias, videos, imágenes en 4K y mucho más sobre la mayor obra de Akira Toriyama.',
        hero_btn: 'Explorar',
        db_news_title: 'Noticias <span>Dragon Ball</span>',
        card_db1_title: 'Kami Sama Explorer',
        card_db1_desc: 'Mantente al día con todos los anuncios más recientes, resúmenes del manga y análisis de Dragon Ball en la mayor comunidad dedicada a la franquicia.',
        card_db1_link: 'Acceder a las últimas noticias',
        card_db2_title: 'Dragon Ball Official Site',
        card_db2_desc: '¡El portal global oficial de la franquicia! Sigue las transmisiones de Weekly Dragon Ball News y los comunicados directos de juegos, animes y eventos.',
        card_db2_link: 'Portal de Noticias Oficial',
        card_db3_title: 'Toei Animation (Prensa)',
        card_db3_desc: 'Sigue los comunicados de prensa y novedades de animación directamente de Toei Animation, el legendario estudio responsable de producir los animes de Dragon Ball.',
        card_db3_link: 'Ver comunicados del estudio',
        anime_news_title: 'Radar <span>Otaku</span> (General)',
        card_an1_title: 'Portal Oficial Pokémon',
        card_an1_desc: 'Descubre las novedades más recientes sobre Horizontes Pokémon, cartas JCC, eventos en Pokémon GO y actualizaciones completas en el portal oficial.',
        card_an1_link: 'Noticias de Pokémon',
        card_an2_title: 'Crunchyroll Noticias',
        card_an2_desc: 'Entérate de las fechas de estreno de las próximas temporadas de anime, anuncios de doblajes y las principales novedades de la cultura pop y mangas.',
        card_an2_link: 'Ver últimas de Crunchyroll',
        card_an3_title: 'NerdBunker: Animes y Mangas',
        card_an3_desc: 'La mejor cobertura con buen humor sobre el universo geek, trayendo artículos actualizados de cine asiático, animes, mangas y tokusatsu.',
        card_an3_link: 'Acceder a artículos en Bunker',
        media_title: 'Multimedia <span>Videos</span>',
        gallery_title: 'Galería <span>4K</span> (Wallpapers)',
        gallery_desc: 'Haz clic en la imagen para ampliarla en el visor y en "Descargar 4K" para obtener la imagen en máxima resolución.',
        btn_preview: 'Ver en 4K',
        btn_download: 'Descargar',
        modal_download: 'Descargar en 4K',
        back_top: 'Arriba',
        footer_text: '&copy; 2026 DB Universe. Desarrollado para fans. Todos los derechos de Dragon Ball reservados a Akira Toriyama, Shueisha y Toei Animation.'
    },
    'ja': {
        lang_label: '🇯🇵 日本語',
        nav_home: 'ホーム',
        nav_db: 'DBユニバース',
        nav_anime: 'アニメの世界',
        nav_media: 'マルチメディア',
        nav_gallery: '4Kギャラリー',
        nav_manga: 'DBマンガ',
        nav_fanmade: 'ファンメイドアニメ',
        hero_title: '君の<span>気</span>を極限まで高めろ！',
        hero_subtitle: 'すべてのZ戦士のための究極のポータルサイト。鳥山明先生の最高傑作に関する最新ニュース、動画、4K壁紙などを網羅。',
        hero_btn: '探索する',
        db_news_title: '<span>ドラゴンボール</span> ニュース',
        card_db1_title: 'Kami Sama Explorer',
        card_db1_desc: 'ドラゴンボールに特化したコミュニティで、最新の発表、マンガのあらすじ、詳細な考察をチェックしよう。',
        card_db1_link: '最新記事を読む',
        card_db2_title: 'ドラゴンボール オフィシャルサイト',
        card_db2_desc: 'フランチャイズ公式グローバルポータル！Weekly Dragon Ball Newsの配信や、ゲーム・アニメ・イベントの公式発表をチェック。',
        card_db2_link: '公式ニュースポータル',
        card_db3_title: '東映アニメーション (プレス)',
        card_db3_desc: 'ドラゴンボールのアニメ制作を手掛ける伝説のスタジオ、東映アニメーションからのプレスリリースや最新アニメ情報を直接確認。',
        card_db3_link: 'スタジオの発表を見る',
        anime_news_title: '<span>オタク</span> レーダー (総合)',
        card_an1_title: 'ポケモン公式ポータル',
        card_an1_desc: 'アニポケ新シリーズ、ポケモンカードゲーム(TCG)、ポケモンGOのイベントなど最新情報を公式ポータルでチェック。',
        card_an1_link: 'ポケモンニュース',
        card_an2_title: 'クランチロール ニュース',
        card_an2_desc: '次期アニメシーズンの放送日、吹き替え版の発表、ポップカルチャーやマンガの主要ニュースをいち早くお届け。',
        card_an2_link: 'クランチロール最新情報',
        card_an3_title: 'NerdBunker: アニメ＆マンガ',
        card_an3_desc: 'アジア映画、アニメ、マンガ、特撮の最新記事をユーモアたっぷりに届けるギークカルチャー専門メディア。',
        card_an3_link: 'Bunkerの記事を読む',
        media_title: 'マルチメディア <span>動画</span>',
        gallery_title: '<span>4K</span> ギャラリー (壁紙)',
        gallery_desc: '画像をクリックすると拡大表示され、「4Kでダウンロード」をクリックすると最高解像度で保存できます。',
        btn_preview: '4Kで見る',
        btn_download: '保存',
        modal_download: '4Kでダウンロード',
        back_top: 'トップ',
        footer_text: '&copy; 2026 DB Universe. ファンのために制作。ドラゴンボールのすべての権利は鳥山明、集英社、東映アニメーションに帰属します。'
    },
    'ko': {
        lang_label: '🇰🇷 한국어',
        nav_home: '홈',
        nav_db: 'DB 유니버스',
        nav_anime: '애니메이션 월드',
        nav_media: '멀티미디어',
        nav_gallery: '4K 갤러리',
        nav_manga: 'DB 만화',
        nav_fanmade: '팬메이드 애니',
        hero_title: '당신의 <span>기(Ki)</span>를 극한까지 끌어올려라!',
        hero_subtitle: '모든 Z전사들을 위한 궁극의 포털. 토리야마 아키라의 최고 걸작에 관한 뉴스, 영상, 4K 배경화면 등을 만나보세요.',
        hero_btn: '탐색하기',
        db_news_title: '<span>드래곤볼</span> 뉴스',
        card_db1_title: 'Kami Sama Explorer',
        card_db1_desc: '드래곤볼 전문 최대 커뮤니티에서 최신 발표, 만화 요약 및 심층 분석을 확인하세요.',
        card_db1_link: '최신 기사 보기',
        card_db2_title: '드래곤볼 공식 사이트',
        card_db2_desc: '프랜차이즈 공식 글로벌 포털! Weekly Dragon Ball News 방송과 게임, 애니메이션, 이벤트 소식을 직접 확인하세요.',
        card_db2_link: '공식 뉴스 포털',
        card_db3_title: '토에이 애니메이션 (보도자료)',
        card_db3_desc: '드래곤볼 애니메이션을 제작한 전설적인 스튜디오 토에이 애니메이션의 보도자료와 최신 소식을 만나보세요.',
        card_db3_link: '스튜디오 발표 보기',
        anime_news_title: '<span>오타쿠</span> 레이더 (종합)',
        card_an1_title: '포켓몬 공식 포털',
        card_an1_desc: '포켓몬스터 최신 시리즈, TCG 카드, 포켓몬 GO 이벤트 및 최신 업데이트를 공식 포털에서 확인하세요.',
        card_an1_link: '포켓몬 뉴스',
        card_an2_title: '크런치롤 뉴스',
        card_an2_desc: '차기 애니메이션 시즌 방영일, 더빙 발표 및 주요 대중문화와 만화 소식을 빠르게 확인하세요.',
        card_an2_link: '크런치롤 최신 소식',
        card_an3_title: 'NerdBunker: 애니 & 만화',
        card_an3_desc: '아시아 영화, 애니메이션, 만화, 특촬물에 대한 최신 기사를 유머러스하게 다루는 긱(Geek) 문화 미디어.',
        card_an3_link: 'Bunker 기사 보기',
        media_title: '멀티미디어 <span>비디오</span>',
        gallery_title: '<span>4K</span> 갤러리 (배경화면)',
        gallery_desc: '이미지를 클릭하면 뷰어에서 확대되며, "4K 다운로드"를 클릭하면 최고 해상도로 저장할 수 있습니다.',
        btn_preview: '4K로 보기',
        btn_download: '다운로드',
        modal_download: '4K 다운로드',
        back_top: '맨 위로',
        footer_text: '&copy; 2026 DB Universe. 팬들을 위해 제작됨. 드래곤볼의 모든 권리는 Akira Toriyama, Shueisha 및 Toei Animation에 있습니다.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 0. Sistema Multi-Idiomas (PT-BR, EN, ES, JA, KO)
    // ----------------------------------------------------
    const langSelector = document.getElementById('langSelector');
    const langBtn = document.getElementById('langBtn');
    const currentLangLabel = document.getElementById('currentLangLabel');
    const langOptions = document.querySelectorAll('.lang-option');

    let currentLang = localStorage.getItem('db_universe_lang') || 'pt-BR';
    if (!translations[currentLang]) currentLang = 'pt-BR';

    function applyLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('db_universe_lang', lang);
        document.documentElement.lang = lang;

        const dict = translations[lang];

        // Atualizar rótulo do botão de idioma
        if (currentLangLabel && dict.lang_label) {
            currentLangLabel.textContent = dict.lang_label;
        }

        // Atualizar estado ativo na lista de idiomas
        langOptions.forEach(opt => {
            if (opt.getAttribute('data-lang') === lang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });

        // Atualizar todos os elementos com atributo data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Atualizar botões dinâmicos da galeria caso já tenham sido criados
        document.querySelectorAll('.btn-preview-text').forEach(el => {
            el.textContent = dict.btn_preview;
        });
        document.querySelectorAll('.btn-download-text').forEach(el => {
            el.textContent = dict.btn_download;
        });
    }

    if (langBtn && langSelector) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = langSelector.classList.toggle('open');
            langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        langOptions.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = opt.getAttribute('data-lang');
                applyLanguage(selectedLang);
                langSelector.classList.remove('open');
                langBtn.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', (e) => {
            if (!langSelector.contains(e.target)) {
                langSelector.classList.remove('open');
                langBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ----------------------------------------------------
    // 1. Menu Mobile (Hambúrguer)
    // ----------------------------------------------------
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.className = isActive ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            }
        });

        // Fechar o menu ao clicar em qualquer link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });

        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            }
        });
    }

    // ----------------------------------------------------
    // 2. Rolagem suave para os links de navegação
    // ----------------------------------------------------
    document.querySelectorAll('nav a, .btn-primary[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetSection.offsetTop - 75,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ----------------------------------------------------
    // 3. Navbar Dinâmica & Botão Nuvem Voadora (Voltar ao Topo)
    // ----------------------------------------------------
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        // Efeito visual na navbar
        if (navbar) {
            if (scrollPos > 50) {
                navbar.style.background = 'rgba(5, 5, 8, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(242, 111, 34, 0.35)';
            } else {
                navbar.style.background = 'rgba(13, 13, 18, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }

        // Visibilidade do botão Nuvem Voadora
        if (backToTopBtn) {
            if (scrollPos > 350) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ----------------------------------------------------
    // 4. Animação de Scroll (IntersectionObserver)
    // ----------------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Inicializar elementos estáticos com animação
    document.querySelectorAll('.card, .video-wrapper').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ----------------------------------------------------
    // 5. Galeria Dinâmica 4K (Sorteio aleatório a cada visita)
    // ----------------------------------------------------
    const wallpapers = [
        { thumb: 'https://4kwallpapers.com/images/walls/thumbs_2t/27103.jpg', full: 'https://4kwallpapers.com/images/wallpapers/super-saiyan-goku-3840x2160-27103.jpg', title: 'Goku Super Saiyajin' },
        { thumb: 'https://4kwallpapers.com/images/walls/thumbs_2t/25348.jpg', full: 'https://4kwallpapers.com/images/wallpapers/son-goku-power-pole-3840x2160-25348.jpg', title: 'Son Goku com Bastão Mágico' },
        { thumb: 'https://4kwallpapers.com/images/walls/thumbs_2t/26039.jpg', full: 'https://4kwallpapers.com/images/wallpapers/gohan-super-saiyan-3840x2160-26039.jpg', title: 'Gohan Super Saiyajin 2' },
        { thumb: 'https://4kwallpapers.com/images/walls/thumbs_2t/25204.jpg', full: 'https://4kwallpapers.com/images/wallpapers/dragon-ball-super-3840x2160-25204.jpg', title: 'Dragon Ball Super: Torneio' },
        { thumb: 'https://4kwallpapers.com/images/walls/thumbs_2t/25208.jpg', full: 'https://4kwallpapers.com/images/wallpapers/dragon-ball-super-3840x2160-25208.jpg', title: 'Dragon Ball Super: Guerreiros Z' },
        { thumb: 'https://4kwallpapers.com/images/walls/thumbs_2t/25003.jpg', full: 'https://4kwallpapers.com/images/wallpapers/kame-house-dragon-3840x2160-25003.jpg', title: 'Casa do Mestre Kame' },
        { thumb: 'https://4kwallpapers.com/images/wallpapers/son-goku-dragon-3840x2160-19188.jpeg', full: 'https://4kwallpapers.com/images/wallpapers/son-goku-dragon-3840x2160-19188.jpeg', title: 'Goku Clássico' },
        { thumb: 'https://4kwallpapers.com/images/wallpapers/dragon-ball-3840x2160-19196.jpg', full: 'https://4kwallpapers.com/images/wallpapers/dragon-ball-3840x2160-19196.jpg', title: 'Esferas do Dragão' },
        { thumb: 'https://4kwallpapers.com/images/wallpapers/goku-dragon-ball-3840x2160-19055.jpg', full: 'https://4kwallpapers.com/images/wallpapers/goku-dragon-ball-3840x2160-19055.jpg', title: 'Goku e Shenlong' },
        { thumb: 'https://4kwallpapers.com/images/wallpapers/super-saiyan-blue-3840x2160-18937.jpg', full: 'https://4kwallpapers.com/images/wallpapers/super-saiyan-blue-3840x2160-18937.jpg', title: 'Super Saiyajin Blue' },
        { thumb: 'https://4kwallpapers.com/images/wallpapers/dragon-ball-daima-3840x2160-19049.jpeg', full: 'https://4kwallpapers.com/images/wallpapers/dragon-ball-daima-3840x2160-19049.jpeg', title: 'Dragon Ball Daima: Goku' },
        { thumb: 'https://4kwallpapers.com/images/wallpapers/dragon-ball-daima-3840x2160-19063.jpg', full: 'https://4kwallpapers.com/images/wallpapers/dragon-ball-daima-3840x2160-19063.jpg', title: 'Dragon Ball Daima: Aventura' }
    ];

    const galleryGrid = document.getElementById('galleryGrid');
    
    // ----------------------------------------------------
    // 6. Modal / Lightbox de Imagens
    // ----------------------------------------------------
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalClose = document.getElementById('modalClose');
    const modalDownload = document.getElementById('modalDownload');

    function openModal(fullSrc, title) {
        if (!modal || !modalImg) return;
        modalImg.src = fullSrc;
        modalImg.alt = title;
        if (modalDownload) modalDownload.href = fullSrc;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Evitar scroll de fundo
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Renderizar Galeria Aleatória
    if (galleryGrid) {
        galleryGrid.innerHTML = '';
        
        // Embaralha o array e pega 6 imagens
        const shuffled = [...wallpapers].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);
        const dict = translations[currentLang] || translations['pt-BR'];
        
        selected.forEach((wp) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            item.innerHTML = `
                <img src="${wp.thumb}" alt="${wp.title}" loading="lazy">
                <div class="overlay">
                    <button class="btn-download btn-preview" type="button" aria-label="Visualizar ${wp.title}">
                        <i class="fa-solid fa-expand"></i> <span class="btn-preview-text">${dict.btn_preview}</span>
                    </button>
                    <a href="${wp.full}" target="_blank" rel="noopener noreferrer" class="btn-download" download aria-label="Baixar ${wp.title}">
                        <i class="fa-solid fa-download"></i> <span class="btn-download-text">${dict.btn_download}</span>
                    </a>
                </div>
            `;
            
            // Clicar na imagem ou no botão de pré-visualização abre o modal
            const imgEl = item.querySelector('img');
            const previewBtn = item.querySelector('.btn-preview');
            
            if (imgEl) {
                imgEl.addEventListener('click', () => openModal(wp.full, wp.title));
            }
            if (previewBtn) {
                previewBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openModal(wp.full, wp.title);
                });
            }
            
            galleryGrid.appendChild(item);
            observer.observe(item);
        });
    }

    // Aplicar idioma inicial salvo (ou pt-BR por padrão)
    applyLanguage(currentLang);
});
