function initScrollSuave() {
  //scrool
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    const topo = section.offsetTop; // to pegando a altura de cada link na vertical de acordo com a sessao que esta iniciando

    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

// animacao scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-animacao");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        const isSectionVisible = sectionTop - windowMetade < 0;

        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();

// lista
function initAccordion() {
  const listaCaracteristicas = document.querySelectorAll(".js-lista dt");

  const ativarClasse = "ativo";

  if (listaCaracteristicas.length) {
    listaCaracteristicas[0].classList.add(ativarClasse);

    listaCaracteristicas[0].nextElementSibling.classList.add(ativarClasse);

    function ativarLista() {
      this.classList.toggle(ativarClasse);

      this.nextElementSibling.classList.toggle(ativarClasse);
    }

    listaCaracteristicas.forEach((item) => {
      item.addEventListener("click", ativarLista);
    });
  }
}
initAccordion();
