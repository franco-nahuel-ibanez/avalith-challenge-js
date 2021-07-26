const original = {
    a: 1,
    b: 2,
    c: 3,
};
// -------
let sinB = null;
let valorDeC = null;

/*
    Utilizando SOLAMENTE destructoring, obtener los siguientes resultados:
    - sinB: Una copia del objeto original sin la clave "b"
    - valorDeC: Obtener el valor de la clave "c". (¡No puede hacer "valorDeC = original.c"!)

    Reemplazar este comentario con su codigo.
 */
// const { b, ...sinB } = original;

({ b, ...sinB } = original)

//no pude resolver el segundo ejercicio :(

console.log(sinB);
console.log(valorDeC);