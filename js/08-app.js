titulo.innerHTML = '08 -Propiedad Object.entries ';
document.getElementById('curso').style.display='none';
let info = document.getElementById('info');

info.innerHTML =  '<P>Object.entries</p>';




// propiedad objects.entries
console.log ('📙 Object.keys');
let claves = Object.keys(curso);
for(let i=0; i< claves.length; i++){
  let clave = claves[i];
  console.log(`📎 ${clave}`);
  console.log(curso[clave]);
}
// object.values
console.log ('📙 Object.values');
let values= Object.values(curso);
for (const value of values){
  console.log(value);
}


// object.entries 
console.log ('📙 Object.entries');
for ([key,value]of Object.entries(curso))
{
  console.log(`clave : ${key} | value : ${value}`);
}


// como sacariais todas las propiedades de todos los los alumnos

















