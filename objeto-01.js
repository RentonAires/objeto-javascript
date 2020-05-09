// coleçao dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'skt'
produto['marca do produto'] = 'generica'
produto.preco = 200

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'a4',
    valor: 95000,
    cor: 'verde',
    proprietario: {
        nome: 'raul',
        idade: 55,
        endereco:{
            logradouro: 'rua 10',
            numero: 1254,
    
        }
    },   
    condutores: [{
        nome: 'jao',
        idade: 19
    }, {
        nome:'ana',
        idade: 42
    
    }],
    calculandoValorSeguro : function(){
        
    }
    
}
carro.proprietario.endereco.numero = 1000
carro['proprietario'] ['endereco'] ['logradouro'] = 'av jose'

console.log(carro);

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculandoValorSeguro

console.log(carro)
console.log(carro.condutores);
//console.log(carro.condutores.length);








