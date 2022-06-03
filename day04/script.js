const manipulationString = (text, flag = "start") => {
    if(flag === 'start'){
       return text.substr(0,3)
    }else if(flag === 'end'){
        return text.substr(-3)
    }else if(text.length < 3){
        return text
    }
   
}

console.log(manipulationString('luna', 'start'));
console.log(manipulationString('mayra', 'end'));
console.log(manipulationString('ok', 'end'));
console.log(manipulationString('Alessandra'));