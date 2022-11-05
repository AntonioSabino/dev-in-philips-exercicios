import Usuario from "./Usuario.js";

const usuarios = [
  new Usuario("Antonio", "antonio@email.com", "senhaDoAntonio"),
  new Usuario("Sabino", "sabino@email.com", "senhaDoSabino"),
  new Usuario("Lima", "lima@email.com", "senhaDaMaria"),
];

// login
const emailInformado = document.getElementById("email");
const senhaInformada = document.getElementById("senha");
const acessar = document.getElementById("acessar");

acessar.addEventListener("click", () => {
  const email = emailInformado.value;
  const senha = senhaInformada.value;

  if (email && senha) {
    const usuario = usuarios.find((usuario) =>
      usuario.autenticar(email, senha)
    );

    if (usuario) {
      alert(`Bem-vindo, ${usuario.nome}!`);
    } else {
      alert("E-mail ou senha incorretos!");
    }
  }
});
