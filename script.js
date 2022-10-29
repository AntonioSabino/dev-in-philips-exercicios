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

function deposit() {}

function getBalance() {}

function withdraw() {}

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

const select = document.querySelector("select");
select.addEventListener("change", (e) => {
  const value = document.getElementById("value");
  operation === "balance" ? (value.disabled = true) : (value.disabled = false);
});

const operationForm = document.querySelector(".operation-form");
operationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = getData();
  const account = accounts.find((account) => account.conta === data.conta);

  if (!account) alert("Conta não encontrada");
  if (account.senha !== data.senha) alert("Senha incorreta");

  const operation = select.value;
  if (operation === "deposit") deposit();
  if (operation === "balance") getBalance();
  if (operation === "withdraw") withdraw();
});
