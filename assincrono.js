const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 3000)
    })
}

const doSomething = async () => {
    // console.log("teste")
    console.log(await doSomethingAsync())
    // console.log("teste2")
    
}

const doSomething2 = () => {
    // console.log("teste")
    setTimeout(() => console.log('2'), 3000)
    // console.log("teste2")
    
}



console.log("teste1")

doSomething()

console.log("teste2")