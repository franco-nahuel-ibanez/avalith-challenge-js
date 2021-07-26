const originalA = {
    nombre: 'Sergio',
    edad: 28,
    preferidos: ['Pizza', 'Hamburguesa'],
    madre: {
        nombre: 'Sandra',
        edad: 54,
    },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];

/*
    A partir de los objetos originales, obtener los siguientes resultados:
    - clavesDelObjeto: Que claves contiene el objeto 'originalA'

    Reemplazar este comentario con su codigo.
 */

//- edadMadre: Edad de la madre
({madre: { nombre: edadMadre }} = originalA) 

// - objetoParseado: Objeto "originalB" parseado a objeto
objetoParseado = JSON.parse(originalB)


//- existeClaveMadreA: Si existe la clave madre en el objeto 'originalA'

existeClaveMadreA = originalA.hasOwnProperty('madre')


//- existeClaveMadreB: Si existe la clave madre en el objeto 'originalB'
existeClaveMadreB = originalB.hasOwnProperty('madre')

//- nombreDelMasJoven: Nombre de la persona mas joven
// todo lo que se me ocurrio para resolver este ejercicio me parecio horrible. prefiero resolverlo
//en clases. Mientras tanto ya se que tengo que repasar Objetos XD

clavesDelObjeto = Object.keys(originalA)


console.log(edadMadre);
console.log(objetoParseado);
console.log(existeClaveMadreA);
console.log(existeClaveMadreB);
console.log(nombreDelMasJoven);
console.log(clavesDelObjeto);









