titulo.innerHTML = '09 - CURRICULUM ';
document.getElementById('curso').style.display='none';
let info = document.getElementById('info');

info.innerHTML =  '<P>Object.values </p>';





// recursiva 

console.log('🟪 RECURSIVIDAD');


recorrerObjeto(cv);

function recorrerObjeto(objeto) {
  for (let propiedad in objeto) {
    if (typeof objeto[propiedad] === 'object') {
      console.log(`🔵 Objeto recursiva ${
        propiedad}`)
      recorrerObjeto(objeto[propiedad]); // llamada recursiva
    } else {
      console.log(propiedad + ': ' + objeto[propiedad]);
    }
  }
}





























