var Num; var resultado;

Num=prompt("Ingrese un numero entre 0 y 1000");


if (Num <= 0 ) {
    alert("numero no valido");
} else {
    if (Num>1000) {
        alert("numero no valido");
    } else {
        if (Num<=9) {
            resultado=Num*Num;
            alert("El resultado es "+resultado);
        } else {
            if (Num>=10 && Num<=99) {
                resultado=Num*2;
                alert("El resultado es "+resultado);
            } else {
                if (Num>=100 && Num<=1000) {
                    resultado=Num-100;
                    alert("El resultado es "+resultado);
                } 
            }
        }
    }
}

