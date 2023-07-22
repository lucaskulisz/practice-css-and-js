
// function prueba2() {
//     let frase = prompt("Inserta una frase", "");
//     // let str = frase;
//     var a = frase.length;
//     // let arr = frase.split("");
//     fraseinvertida=""
//     for (let i = a-1; i >= 0; i--) {
//        fraseinvertida=fraseinvertida+frase[i];
//         // arr.join("")
        
        

//     }
//     alert(fraseinvertida);
//     console.log(fraseinvertida);
//  }
 function prueba5() {
    let num1 = prompt("ingresa un num", "");
    let num2 = prompt("ingresa otro num", "");
    var x = parseInt(num1);
    var y = parseInt(num2);

    let ope = prompt("ingresa la operacion que desea realizar", "");
    resultado=0
    if (ope == "multiplicacion") {
        resultado =x*y ;
    } else if (ope == "suma") {
        resultado =x+y ;
    }
    

    
    alert(resultado);
    console.log(resultado);
 }
//     }
// }
// function prueba2() {
// // solicitar una frase al usuario
// let frase = prompt("Ingrese una frase para invertir:");

// // convertir la frase en un array de caracteres, invertir el array y unirlo en una cadena nuevamente
// let fraseInvertida = frase.split("").reverse().join("");

// // mostrar la frase invertida en la consola o en una alerta en el navegador
// console.log(fraseInvertida);
// alert(fraseInvertida);
// }
// function prueba2() {
// // solicitar una frase al usuario
// const frase = prompt("Ingrese una frase para invertir:");

// // obtener la longitud de la cadena
// const longitud = frase.length;

// // crear una nueva cadena vacía
// let fraseInvertida = "";

// // recorrer la cadena original en orden inverso y agregar cada letra a la nueva cadena
// for (let i = longitud - 1; i >= 0; i--) {
//   fraseInvertida += frase[i];
// }

// // mostrar la frase invertida en la consola o en una alerta en el navegador
// console.log(fraseInvertida);
// alert(fraseInvertida);
// }