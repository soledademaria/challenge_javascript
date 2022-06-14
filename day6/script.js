// Remover os ultimos 3 caracteres e retornar o resultado

function removeCharacter(str){
    return str.slice(0, -3)
}

console.log(removeCharacter('Maria'));
console.log(removeCharacter('Hello!!!'));