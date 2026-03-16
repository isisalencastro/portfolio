// ------------------ BOTÃO VOLTA AO TOPO -------------------------------------
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const btnTopo = document.getElementById('btn-topo');
if (btnTopo) {
    btnTopo.addEventListener('click', voltarAoTopo);
    window.addEventListener('scroll', () => {
        btnTopo.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });
}

const listaServicos = document.getElementById('lista-servicos');
const prevBtn = document.getElementById('prev-servico');
const nextBtn = document.getElementById('next-servico');
if (listaServicos && prevBtn && nextBtn) {
    let scrollAmount = 0;
    nextBtn.addEventListener('click', () => {
        const card = listaServicos.querySelector('.servico');
        const cardWidth = card ? card.offsetWidth + 32 : 0;
        if (scrollAmount < listaServicos.scrollWidth - listaServicos.clientWidth) {
            scrollAmount += cardWidth;
            listaServicos.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    });
    prevBtn.addEventListener('click', () => {
        const card = listaServicos.querySelector('.servico');
        const cardWidth = card ? card.offsetWidth + 32 : 0;
        scrollAmount = Math.max(0, scrollAmount - cardWidth);
        listaServicos.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    });
}

//------------------------------- MODO ESCURO ----------------------------------------
const themeSwitch = document.getElementById('dark-mode-toggle');
if (themeSwitch) {
    const enableDarkMode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    };
    const disableDarkMode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', 'inactive');
    };
    if (localStorage.getItem('darkmode') === 'active') enableDarkMode();
    themeSwitch.addEventListener('click', () => {
        document.body.classList.contains('darkmode') ? disableDarkMode() : enableDarkMode();
    });
}

//------------------------- MENU MOBILE --------------------------------------
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
    function openMenu() {
        menuToggle.classList.add('active');
        mobileMenu.classList.add('active');
        mobileMenu.setAttribute('aria-hidden', 'false');
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Fechar menu');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
        document.body.style.overflow = '';
    }
    menuToggle.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) closeMenu();
        else openMenu();
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) closeMenu();
    });
}

// ------------------------ AUTOTYPING AREAS DE TRABALHO ---------------------------------
const texts = [
    "Desenvolvedora de Software",
    "Gestora de Automações",
    "Analista de Marketing Digital"
];

const typingElement = document.getElementById('auto-typing');
if (typingElement) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const pauseTime = 1500;
    function type() {
        const currentText = texts[textIndex];
        if (!isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, pauseTime);
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }
        setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
    type();
}

// ------------------------ MODAIS SERVIÇOS --------------------------------------
const botoes = document.querySelectorAll('.btn-saiba-mais');
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const modalId = botao.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            const container = modal.parentElement;
            container.style.display = 'flex';
            container.style.opacity = 0;
            requestAnimationFrame(() => {
                container.style.transition = 'opacity 0.3s ease';
                container.style.opacity = 1;
            });
        }
    });
});

const closes = document.querySelectorAll('.container-modal .close');
closes.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const container = closeBtn.closest('.container-modal');
        if (container) {
            container.style.opacity = 0;
            setTimeout(() => {
                container.style.display = 'none';
                container.style.transition = '';
            }, 300);
        }
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('container-modal')) {
        const container = e.target;
        container.style.opacity = 0;
        setTimeout(() => {
            container.style.display = 'none';
            container.style.transition = '';
        }, 300);
    }
});

// --------------------------------- ABAS DE PROJETOS ------------------------------------
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
if (tabBtns.length && tabContents.length) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');

            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            const panel = document.getElementById('tab-' + target);
            if (panel) panel.classList.add('active');
        });
    });
}

// --------------------------------- BOTÃO COPIA EMAIL ------------------------------------
const btnEmail = document.getElementById('btn-email');
const emailEl = document.getElementById('email');
if (btnEmail && emailEl) {
    btnEmail.addEventListener('click', () => {
        const email = emailEl.textContent.trim();
        navigator.clipboard.writeText(email).then(() => {
            alert('Email copiado: ' + email);
        });
    });
}


