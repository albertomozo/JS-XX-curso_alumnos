titulo.innerHTML = '03 -Iteradores Map ';
document.getElementById('curso').style.display='none';
let info = document.getElementById('info');

info.innerHTML =  '<P>map genera un nuevo array</p>';


console.log('forEach')
//const alumn1 = alumnos.forEach((valor,indice,copia)=>{console.log(valor.Nombre);});
/* const alumn1 = alumnos.forEach(valor=>{console.log(valor.Nombre);});
console.log('map')
const alumn2 = alumnos.map(valor=>{console.log(valor.Nombre);});  */

/////////////////////


console.log('')
const alumn1 = alumnos.forEach(valor=>valor.Nombre);

const alumn2 = alumnos.map(valor=>valor.Nombre);
const emails = alumnos.map(valor=>valor.email);
const doble = alumnos.map(valor=>{valor.Nombre,valor.email})

console.log(alumn1);
console.log(alumn2); 
console.log(emails); 
console.log(doble); 












