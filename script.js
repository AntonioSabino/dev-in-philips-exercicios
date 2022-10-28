let accounts = [];

function getData() {
  return {
    nome: document.getElementById("name").value,
    cpf: document.getElementById("cpf").value,
    email: document.getElementById("email").value,
    celular: document.getElementById("phone").value,
    senha: document.getElementById("password").value,
    conta: Math.floor(Math.random() * 1000000000),
  };
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.password.value !== e.target.confirmPassword.value) {
    alert("Senhas não conferem");
    return;
  }
  const newAccount = getData();
  accounts.push(newAccount);
  console.log(accounts);
  form.reset();
  alert(`Conta criada com sucesso. Número da conta: ${newAccount.conta}`);
});
