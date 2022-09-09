// variables, estas variables se instancian dentro del objeto window

var a; // declarando
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion
 

// Global Scope
var fruit = 'apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit(); // Out: 'apple'


// No se declara la variable y se asigna como global
function countries() {
    country = 'Colombia';
    console.log(country);
}

countries(); 
console.log(country);

// Por lo tanto se imprime dos veces el string