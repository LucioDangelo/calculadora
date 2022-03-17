function dividir (parametro1, parametro2) {
    if(parametro1 !=0 && parametro2 !=0){
        return parametro1 / parametro2;
    }else{
        return "No se puede dividir por 0"
    }
}
module.export = dividir;

//No se puede dividir por 0