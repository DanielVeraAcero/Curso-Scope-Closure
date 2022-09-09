// Las variables declaradas dentro de estas funciones van a ser accesibles dentro de esta función y en cualquiera de las funciones anidadas dentro de ella
function greeting() {
    let userName = 'Ana';
    console.log(userName);    

    if (userName === 'Ana') {
        console.log(`Hello' ${userName}`);
    }
}