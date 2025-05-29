// contagem_regressiva = (n) => {
//     console.log(n)

//     if (n === 0) { //caso base
//         return
//     }

//     contagem_regressiva(n - 1) // chamdada recursiva
// }
// contagem_regressiva(5)

// fatorial - fibobacci
// n!
// 5 = 5 * 4 * 3 * 2 * 1 = 120

fatorial = (n) => {if (n === 0) return 1 
    else return n * fatorial(n - 1)
}

console.log(fatorial(5))