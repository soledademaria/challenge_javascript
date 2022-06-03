// função que retorna o tipo do parametro

function parameterType(param){
    return typeof param
}

console.log(parameterType('Maria'));
console.log(parameterType(1200));
console.log(parameterType(false));
console.log(parameterType({name: 'maria'}));
console.log(parameterType([]));