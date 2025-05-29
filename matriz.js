let x = ["d","j","q"]

const matriz = [
    [10, 41, 41, 14, 47],
    [20, 45, 47, 14, 74],
    [10, 45, 54, 47, 23],
]

console.log(matriz)
console.log(matriz[1][2])

console.log("tamanho "+ matriz.length + " X "+ matriz.length)

for(let i = 0; i < matriz.length;i++){ // linha
    for(let j = 0; j < matriz[i].length; j++){ //coluna
        console.log(`Elemento na posição: [${i}] [${j}] = ${matriz[i][j]}`)
    }
}