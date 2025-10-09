// ------------------ BOTÃO VOLTA AO TOPO -------------------------------------
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

const listaServicos = document.getElementById('lista-servicos');
const prevBtn = document.getElementById('prev-servico');
const nextBtn = document.getElementById('next-servico');

let scrollAmount = 0;
const cardWidth = listaServicos.querySelector('.servico').offsetWidth + 32;

nextBtn.addEventListener('click', () => {
    if (scrollAmount < listaServicos.scrollWidth - listaServicos.clientWidth) {
        scrollAmount += cardWidth;
        listaServicos.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
});

prevBtn.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= cardWidth;
        listaServicos.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
});

//------------------------------- MODO ESCURO ----------------------------------------
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
}

if(darkmode === "active") enableDarkMode()

themeSwitch.addEventListener('click', () => {
    dark = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkMode() : disableDarkMode();
});

themeSwitch.addEventListener("click", function() {
  console.log("Ação realizada!");
  window.location.reload();
})

//------------------------- MENU MOBILE --------------------------------------
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// Fechar menu ao clicar em um link
mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
    });
});

// ------------------------ AUTOTYPING AREAS DE TRABALHO ---------------------------------
const texts = [
    "Desenvolvedora Full-Stack",
    "Gestora de Automações",
    "Analista de Marketing Digital"
];

const typingElement = document.getElementById("auto-typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // velocidade da digitação
let pauseTime = 1500;  // tempo antes de apagar

function type() {
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
        // adiciona caracteres
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, pauseTime);
            return;
        }
    } else {
        // apaga caracteres
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // próxima frase
        }
    }

    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

// inicia o efeito
type();

// ------------------------EXPLICAÇÃO DETALHADA DOS MEUS SERVIÇOS!!------------------------------
// Adiciona evento de clique em cada botão
const botoes = document.querySelectorAll(".btn-saiba-mais");

// Abre modal
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const modalId = botao.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      const container = modal.parentElement;
      container.style.display = "flex";
      container.style.opacity = 0;

      // força o repaint antes de aplicar transição
      requestAnimationFrame(() => {
        container.style.transition = "opacity 0.3s ease";
        container.style.opacity = 1;
      });
    }
  });
});

// Fecha modal ao clicar no botão "Fechar"
const closes = document.querySelectorAll(".container-modal .close");
closes.forEach(closeBtn => {
  closeBtn.addEventListener("click", () => {
    const container = closeBtn.closest(".container-modal");
    container.style.opacity = 0;

    setTimeout(() => {
      container.style.display = "none";
      container.style.transition = ""; // limpa p/ próxima abertura
    }, 300);
  });
});

// Fecha modal ao clicar fora do conteúdo
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("container-modal")) {
    const container = e.target;
    container.style.opacity = 0;

    setTimeout(() => {
      container.style.display = "none";
      container.style.transition = "";
    }, 300);
  }
});

 //-------------------------------- BOTÃO COPIA EMAIL ------------------------------------
document.getElementById('btn-email').addEventListener('click', () => {
    const email = document.getElementById('email').textContent;
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copiado: ' + email);
    });
});


