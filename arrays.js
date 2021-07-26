const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];


// - indiceAmarillo: Indice de la ubicacion en el arreglo de 'Amarillo'
indiceAmarillo = original.indexOf('Amarillo')


// - cantidadColoresConA: Cuantos colores hay en el arreglo con la letra 'a' (Mayuscula o minuscula)
for (let i = 0; i < original.length ; i++) {

    for( let e = 0; e < original[i].length; e++ ){
        if( original[i][e] == 'A' || original[i][e] == 'a' ){
            cantidadColoresConA++
            break;
        }
    }
}

// - arregloSinAzul: El arreglo original sin el valor 'Azul'
arregloSinAzul = original.filter( color => color != 'Azul' )


//- ordenadoPorCantidadLetras: El arreglo orginal ordenado de forma ascendente 
//    por la cantidad de letras en su nombre.

function ordenarArray(arr){

    for(let i = 0; i < arr.length; i++){
        for( let e = (i + 1); e < arr.length; e++ ){
            if( arr[i].length < arr[e].length ){
                let aux = arr[i];
                arr[i] = arr[e];
                arr[e] = aux
            }
        }        
    }
    return(arr)
}

ordenadoPorCantidadLetras = ordenarArray(original)

//- arregloConNuevoColorInicio: El arreglo original con un nuevo color al inicio del mismo.

original.unshift("Rosa");
arregloConNuevoColorInicio = original


// - arregloConNuevoColorFin: El arreglo original con un nuevo color al final del mismo.

original.push("Negro");
arregloConNuevoColorFin = original


console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log(ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);



