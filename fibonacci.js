// fibonacci
// cada número é a soma dos dois anteriores
// 0,1,1,2,3,5,8,13,21,

// fibonacci = (n, memo = {}) => {
//     if (n === 0) return 0
//     if (n === 1) return 1
//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
//     return memo[n]
// }

// const fibonacci = (n) => {
//   if (n === 0) return 0;
//   let a = 0, b = 1;
//   for (let i = 2; i <= n; i++) {
//     [a, b] = [b, a + b];
//   }
//   return b;
// };

fibonacci = (n) => {
    if (n === 0) return 0
    else if (n === 1) return 1
    else return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log(t_fibonacci(6))
console.log(fibonacci(6))