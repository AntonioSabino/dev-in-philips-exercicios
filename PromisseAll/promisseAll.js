function aprovarDadosCadastrais(cliente) {
  return new Promise((resolve, reject) => {
    if (cliente.cpf === 11111111111) resolve(true);
    else reject(false);
  });
}

function aprovarValorSolicitado(cliente, valor) {
  return new Promise((resolve, reject) => {
    if (cliente.margem >= valor) resolve(true);
    else reject(false);
  });
}

const solicitacao1 = { cpf: 11111111111, nome: "Calleri", margem: 100.0 };
const aprovacaoCadastro1 = aprovarDadosCadastrais(solicitacao1);
const aprovacaoValor1 = aprovarValorSolicitado(solicitacao1, 300.0);

const solicitacao2 = { cpf: 11111111111, nome: "Calleri", margem: 1000.0 };
const aprovacaoCadastro2 = aprovarDadosCadastrais(solicitacao2);
const aprovacaoValor2 = aprovarValorSolicitado(solicitacao2, 300.0);

function resolvePromises(promiseCadastro, promiseValor) {
  Promise.all([promiseCadastro, promiseValor])
    .then((_result) => {
      console.log("Aprovado");
    })
    .catch((_error) => {
      console.log("Reprovado");
    })
    .finally(() => {
      console.log("Fim");
    });
}

resolvePromises(aprovacaoCadastro2, aprovacaoValor2);
resolvePromises(aprovacaoCadastro1, aprovacaoValor1);
