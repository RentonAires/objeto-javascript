//15/09/2020
//EX: pessoa esta no nedereço de memoria -> 123 {...}
const pessoa = {nome:'juca'}
pessoa.nome = 'zeca'
console.log(pessoa);

//pessoa -> 456 -> {...}
//pessoa = {nome: 'ana'}

console.log(pessoa);

Object.freeze(pessoa) //congelar o objeto
pessoa.nome = 'maria'
pessoa.end = 'rua a '
delete pessoa.nome
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'renato'})
console.log(pessoaConstante);