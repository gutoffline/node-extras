// 2 – Faça um programa que calcule e  mostre em gb quanto de memória tem total.
const os = require("os")
const memoria_total = os.totalmem() / 1073741824
console.log(memoria_total.toFixed(2) + "gb")