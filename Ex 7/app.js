const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática'
};

function apresentaPessoa(pessoa) {
  const { nome, idade, profissao } = pessoa
  return `Esta é ${nome}, tem ${idade} e é ${profissao}.`
}

console.log(apresentaPessoa(pessoa))