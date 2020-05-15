//usando a notaçao literal
const obj1 = {}
console.log(obj1);

//Obj em js
console.log(typeof Object, typeof new Object);

const obj2 = new Object
console.log(obj2);
   
//funçoes construtoras

function produto (nome, preco, desc){
    this.nome = nome //tornando publica essa vareavel
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
 const p1 = new produto('caneta', 7.99, 0.15)
 const p2 = new produto('notebook', 299.89, 0.25 )

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//fuçao factory
function criarFuncuonario (nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncuonario('joao', 7980, 4)
const f2 = criarFuncuonario('ana', 7998, 1)

console.log(f1.getSalario(), f2.getSalario());

//Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha);


//um funçao que retrona um objeto
const fromJSON = JSON.parse('{"info": "sou um json"}')
console.log(fromJSON.info);
