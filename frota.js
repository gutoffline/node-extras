let carros = [
    { marca: 'Ford', modelo: 'Fiesta' }, 
    { marca: 'FIAT', modelo: 'Uno' }
]

function fnListarCarros(){
    carros.forEach(carro => {
        console.log(carro.marca + " - " + carro.modelo)
    })
}

function fnValidarCarro(carro){
    return carro
}

function fnCadastrarCarro(carro){
    let carro_validado = fnValidarCarro(carro)
    carros.push(carro_validado)
    console.log("cadastrado com sucesso!")
}

exports.fnListarCarros = fnListarCarros
exports.fnCadastrarCarro = fnCadastrarCarro