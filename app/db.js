let mysql = require('mysql');

let conexao = mysql.createConnection({
  host: "108.179.193.209",
  user: "gutoxa27_professor",
  password: "gdwRL=[e9Efk",
  database: "gutoxa27_bd_loja"
})

conexao.connect(function (erro) {
  if (erro) {
    console.log("Deu ruim na conexão \n")
    throw erro;
  } else {
    console.log("Conexão deu bom \n")
  }
})

module.exports = conexao