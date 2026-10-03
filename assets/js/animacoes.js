// Animacoes do portfolio de Isis Alencastro (28/09/2026, motion revisto em 03/10/2026)
// Revela blocos quando entram na tela, marca o header quando a pagina rola e
// cuida do botao de voltar ao topo. Quem pediu menos movimento no sistema
// (prefers-reduced-motion) nao recebe animacao nenhuma.

(function () {
    'use strict';

    var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var header = document.querySelector('header');
    var btnTopo = document.getElementById('btn-topo');
    var SELETORES = 'main > section, .projeto, .servico, footer';

    function aplicaHeader() {
        if (!header) return;
        header.classList.toggle('header-rolado', window.scrollY > 24);
    }

    function aplicaBotao() {
        if (!btnTopo) return;
        btnTopo.classList.toggle('visivel', window.scrollY > 300);
    }

    var observador = null;

    if (!semMovimento && 'IntersectionObserver' in window) {
        observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (!entrada.isIntersecting) return;
                entrada.target.classList.add('visivel');
                observador.unobserve(entrada.target);
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
    }

    // Bloco escondido (aba fechada) ou que ja esta na tela nao entra na animacao,
    // para nao piscar conteudo que o visitante ja esta vendo.
    function revela() {
        if (!observador) return;
        Array.prototype.forEach.call(document.querySelectorAll(SELETORES), function (el) {
            if (el.dataset.revelacao) return;
            var caixa = el.getBoundingClientRect();
            if (caixa.height === 0) return;
            if (caixa.top < window.innerHeight * 0.85) {
                el.dataset.revelacao = 'na-tela';
                return;
            }
            var irmaos = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
            el.style.transitionDelay = Math.min(irmaos, 5) * 60 + 'ms';
            el.dataset.revelacao = 'esperando';
            el.classList.add('revelar');
            observador.observe(el);
        });
    }

    // Barra de leitura: quanto da pagina ja rolou (03/10/2026)
    var progresso = null;
    if (!semMovimento) {
        progresso = document.createElement('div');
        progresso.id = 'progresso-leitura';
        progresso.setAttribute('aria-hidden', 'true');
        document.body.appendChild(progresso);
    }

    function aplicaProgresso() {
        if (!progresso) return;
        var total = document.documentElement.scrollHeight - window.innerHeight;
        var fracao = total > 0 ? Math.min(window.scrollY / total, 1) : 0;
        progresso.style.transform = 'scaleX(' + fracao + ')';
    }

    // Cartao inclina seguindo o mouse, no maximo 4 graus. So com mouse de verdade.
    function ligaInclinacao() {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        Array.prototype.forEach.call(document.querySelectorAll('.projeto, .servico'), function (card) {
            card.addEventListener('pointermove', function (e) {
                var caixa = card.getBoundingClientRect();
                var x = (e.clientX - caixa.left) / caixa.width - 0.5;
                var y = (e.clientY - caixa.top) / caixa.height - 0.5;
                card.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
                card.style.setProperty('--rx', (-y * 8).toFixed(2) + 'deg');
                card.classList.add('inclinando');
            });
            card.addEventListener('pointerleave', function () {
                card.classList.remove('inclinando');
                card.style.removeProperty('--rx');
                card.style.removeProperty('--ry');
            });
        });
    }

    // Personagem pixel do contato: respira depois de entrar e pula quando o email e copiado
    function ligaPersonagem() {
        var avatar = document.getElementById('avatar-contato');
        if (!avatar) return;
        var balao = avatar.querySelector('.avatar-balao');
        var textoBalao = balao ? balao.textContent : '';
        var timerBalao = null;

        function comecaARespirar() {
            window.setTimeout(function () { avatar.classList.add('parada'); }, 1300);
        }

        if ('IntersectionObserver' in window) {
            var olho = new IntersectionObserver(function (entradas) {
                if (!entradas[0].isIntersecting) return;
                olho.disconnect();
                comecaARespirar();
            }, { threshold: 0.4 });
            olho.observe(avatar);
        } else {
            comecaARespirar();
        }

        document.addEventListener('email-copiado', function () {
            avatar.classList.remove('pulou');
            void avatar.offsetWidth; // reinicia a animacao se clicar de novo
            avatar.classList.add('pulou');
            if (balao) {
                balao.textContent = 'Copiado!';
                window.clearTimeout(timerBalao);
                timerBalao = window.setTimeout(function () { balao.textContent = textoBalao; }, 2400);
            }
        });

        avatar.addEventListener('animationend', function (e) {
            if (e.animationName === 'pular') avatar.classList.remove('pulou');
        });
    }

    if (!semMovimento) {
        aplicaHeader();
        aplicaBotao();
        aplicaProgresso();
        revela();
        ligaInclinacao();
        ligaPersonagem();

        var pedindo = false;
        window.addEventListener('scroll', function () {
            if (pedindo) return;
            pedindo = true;
            window.requestAnimationFrame(function () {
                aplicaHeader();
                aplicaBotao();
                aplicaProgresso();
                pedindo = false;
            });
        }, { passive: true });
        window.addEventListener('resize', aplicaProgresso);

        // Abas de projetos: o painel que entra na tela recebe a revelacao
        document.addEventListener('click', function (evento) {
            var alvo = evento.target;
            while (alvo && alvo.classList) {
                if (alvo.classList.contains('tab-btn')) {
                    window.setTimeout(revela, 120);
                    return;
                }
                alvo = alvo.parentElement;
            }
        });
    } else if (btnTopo) {
        aplicaBotao();
        window.addEventListener('scroll', aplicaBotao, { passive: true });
    }
})();
