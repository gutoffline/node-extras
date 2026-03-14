// 1 – Faça um programa que calcule e  mostre em gb quanto de memória tem livre.
const os = require("os")
const memoria_livre = os.freemem() / 1073741824
console.log(memoria_livre.toFixed(2) + "gb")