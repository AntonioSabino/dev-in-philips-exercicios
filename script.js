let accounts = [];

function getData() {
  return {
    nome: document.getElementById("name").value,
    cpf: document.getElementById("cpf").value,
    email: document.getElementById("email").value,
    celular: document.getElementById("phone").value,
    senha: document.getElementById("password").value,
    conta: Math.floor(Math.random() * 1000000000).toString(),
    saldo: 0,
  };
}

function deposit() {}

function getBalance(account) {
  alert(`Seu saldo é de R$ ${account.saldo}`);
}

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
  form.reset();
  alert(`Conta criada com sucesso. Número da conta: ${newAccount.conta}`);
});

const select = document.querySelector("select");
select.addEventListener("change", (e) => {
  const value = document.getElementById("value");
  e.target.value === "balance"
    ? value.setAttribute("disabled", "")
    : value.removeAttribute("disabled");
});

const operationForm = document.querySelector(".operation-form");
operationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find((a) => a.conta === e.target.account.value);

  if (!account) {
    alert("Conta não encontrada");
    return;
  }
  if (account.senha !== e.target.password.value) {
    alert("Senha incorreta");
    return;
  }

  const operation = e.target.operation.value;
  if (operation === "deposit") deposit();
  if (operation === "balance") getBalance(account);
  if (operation === "withdraw") withdraw();
});
