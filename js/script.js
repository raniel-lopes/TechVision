// Captura os elementos necessários
const toggler = document.querySelector(".navbar-toggler");
const navCollapse = document.querySelector("#navbarNav");

// Adiciona o evento de clique no botão hambúrguer
toggler.addEventListener("click", () => {
  const isExpanded = toggler.getAttribute("aria-expanded") === "true";

  // Alterna o estado do botão e do menu
  toggler.setAttribute("aria-expanded", !isExpanded);
  navCollapse.classList.toggle("show");

  // Adiciona ou remove a classe 'modal-open' do body
  if (navCollapse.classList.contains("show")) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
});

// Evento para aplicar a classe 'active' no item do menu
document.addEventListener("DOMContentLoaded", function () {
  // Obtém todos os itens de navegação
  const navItems = document.querySelectorAll(".nav-item");

  // Adiciona um ouvinte de evento para cada item
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove a classe 'active' de todos os itens
      navItems.forEach((i) => i.classList.remove("active"));

      // Adiciona a classe 'active' no item clicado
      item.classList.add("active");

      // Fecha o menu quando um item for clicado (se desejado)
      if (navCollapse.classList.contains("show")) {
        navCollapse.classList.remove("show");
        document.body.classList.remove("modal-open");
      }
    });
  });
});

////////////////////////////

//Active botão nav bar

// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
  // Obtém todos os itens de navegação
  const navItems = document.querySelectorAll(".nav-item");

  // Adiciona um ouvinte de evento para cada item
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove a classe 'active' de todos os itens
      navItems.forEach((i) => i.classList.remove("active"));

      // Adiciona a classe 'active' no item clicado
      item.classList.add("active");
    });
  });
});
