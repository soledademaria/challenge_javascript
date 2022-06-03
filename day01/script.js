// função que retorna true se os valores forem iguais e do mesmo tipo

function areTheSame(a, b){
    return a === b 
}

console.log(areTheSame('Maria', 'Maria'))
console.log(areTheSame('Maria', 'maria'))
console.log(areTheSame(1, 1))
console.log(areTheSame(1, '1'))