// 3 – Faça um programa que calcule e  mostre em minutos e em horas quanto tempo o computador está ligado.
const os = require("os")
const horas = os.uptime() / 3600 
const minutos = os.uptime() / 60 

console.log(`Horas: ${horas.toFixed(2)} \nMinutos: ${minutos.toFixed(0)}` )