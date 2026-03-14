/*
4 - Faça um programa que registre as seguintes informações em um arquivo texto chamado “registro_XXXX.txt” aonde XXXX deve ser o nome do host. As informações nesse arquivo devem ser:
	nome do host
	total de memória em gb
	sistema operacional – tipo do sistema
	nome do usuário ativo
	quantidade de CPU – modelo da CPU
*/

const os = require("os")
const fs = require("fs")
const console = require("console")

const host = os.hostname()
const memoria_total = os.totalmem() / 1073741824
const so = os.version() + " - " + os.type()
const usuario = os.userInfo().username
const cpu_qtd = os.cpus().length
const cpu_modelo = os.cpus()[0].model
const info = `
Host: ${host}
Total de memória: ${memoria_total.toFixed(2)}gb
Sistema operacional: ${so} 
Usuário atual: ${usuario}
CPU: ${cpu_qtd} - ${cpu_modelo}
`

fs.writeFile(`registro_${host}.txt`, info, erro=>{
    console.log("erro: " + erro)
})

