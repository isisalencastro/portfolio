// Animacoes do portfolio de Isis Alencastro (28/09/2026)
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

    if (!semMovimento) {
        aplicaHeader();
        aplicaBotao();
        revela();

        var pedindo = false;
        window.addEventListener('scroll', function () {
            if (pedindo) return;
            pedindo = true;
            window.requestAnimationFrame(function () {
                aplicaHeader();
                aplicaBotao();
                pedindo = false;
            });
        }, { passive: true });

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
