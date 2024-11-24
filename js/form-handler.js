document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); //Previne o comportamento padrão do formulário

  //Captura os valores selecionados no formmulário
  const perfomance = document.getElementById("perfomance").value;
  const budget = document.getElementById("budget").value;
});
