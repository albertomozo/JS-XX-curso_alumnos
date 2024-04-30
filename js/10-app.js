titulo.innerHTML = '10 - Array Method ';
let info = document.getElementById('info');
document.getElementById('curso').style.display='none';


info.innerHTML =  '<P>Vamos a ver los distintos tipos de array methods <P><p><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" style="color:blue">documentacion mdn</a></p>'
info.innerHTML += `<ol>`;
info.innerHTML += `<li>indexOf(): Este método busca un valor específico en un array y devuelve el índice de la primera ocurrencia del valor. Si el valor no se encuentra en el array, devuelve -1</li>`;
info.innerHTML += `<li>lastIndexOf(): Este método funciona igual que indexOf(), pero busca desde el final del array hacia el principio.</li>`;
info.innerHTML += `<li>find(): Este método busca el primer elemento en un array que cumple una condición especificada en una función de prueba. Devuelve el valor del primer elemento que cumple la condición, o undefined si no se encuentra ningún elemento que cumpla la condición.</li>`;
info.innerHTML += `<li>find(): Este método busca el primer elemento en un array que cumple una condición especificada en una función de prueba. Devuelve el valor del primer elemento que cumple la condición, o undefined si no se encuentra ningún elemento que cumpla la condición.</li>`;
info.innerHTML += `<li>includes(): Este método verifica si un array contiene un valor específico y devuelve true o false.</li>`;
info.innerHTML += `</ol>`;




console.log('❗ indexOf()');
const array = [1, 2, 3, 4, 5];
console.log(array);
console.log('array.indexOf(3) =  ' + array.indexOf(3)); // muestra 2
console.log(array.indexOf(6)); // muestra -1

console.log('❗ lastindexOf(3)');
const array1 = [1, 2, 3, 4, 3];
console.log(array1.lastIndexOf(3)); // muestra 4

console.log('❗find(valor => valor > 3)');
const encontrado = array.find(valor => valor > 3);
console.log(encontrado); // muestra 4



console.log('❗ .findIndex(valor => valor > 3)');
const indiceEncontrado = array.findIndex(valor => valor > 3);
console.log(indiceEncontrado); // muestra 3



console.log('❗ includes');
dias = ['Lunes','Martes','Miercoles']
console.log(dias.includes('Lunes')); // muestra true
console.log(array.includes('Jueves')); // muestra false





