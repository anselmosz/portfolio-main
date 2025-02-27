const $html = document.querySelector('html');
const $modo = document.getElementById("select");

$modo.addEventListener("click", function () {
  $html.classList.toggle("light-mode");
  $modo.classList.toggle("light");

  $modo.classList.toggle("dark-mode");
  const imagem = document.getElementById("imagem-tema");
  const logo = document.getElementById("logo-src");

  if ($modo.classList.contains("dark-mode")) {
    imagem.src = "./images/typing-bro-red.png";
    logo.src = "./icons/logo-dark.png";
  } else {
    imagem.src = "./images/typing-bro-blue.png";
    logo.src = "./icons/logo-white.png";
  }
});

