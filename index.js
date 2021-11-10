function microondas(comida,tempo){
    if(comida == "pipoca"){
        if(tempo>(2*10) && (tempo<=(3*10))){
            return "A comida queimou!"
        }
        else if(tempo<10){
            return "Tempo insuficiente."
        }
        else if(tempo>(30)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }else if(comida == "macarrão"){
        if(tempo>(2*8) && (tempo<=(3*8))){
            return "a comida queimou"
        }
        else if(tempo<8){
            return "tempo insuficiente"
        }
        else if (tempo>(3*8)){
            return "kabumm!"
        }else {
            return "seu prato está pronto"
        }
    }else if(comida == "carne"){
        if(tempo>(2*15) && (tempo<=(3*15))){
            return "a comida queimou"
        }
        else if(tempo<15){
            return "tempo insuficiente"
        }
        else if (tempo>(3*15)){
            return "kabumm!"
        }else {
            return "seu prato está pronto"
        }
    }else if(comida == "feijão"){
        if(tempo>(2*12) && (tempo<=(3*12))){
            return "a comida queimou"
        }
        else if(tempo<12){
            return "tempo insuficiente"
        }
        else if (tempo>(3*12)){
            return "kabumm!"
        }else {
            return "seu prato está pronto"
        }
        
    }else if (comida == "brigadeiro"){
        if(tempo>(2*8) && (tempo<=(3*8))){
            return "a comida queimou"
        }
        else if(tempo<8){
            return "tempo insuficiente"
        }
        else if (tempo>(3*8)){
            return "kabumm!"
        }else {
            return "seu prato está pronto"
        }
    }
}

console.log(microondas("macarrão",20))