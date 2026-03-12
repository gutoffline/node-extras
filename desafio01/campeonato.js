const fs = require('fs')

fs.readFile('times_brasileirao.csv','utf8',(erro, dados)=>{
    if(erro){
        console.log("erro: " + erro)
        return
    }

    console.log(dados)
})

console.log("Brasileirão 2026")