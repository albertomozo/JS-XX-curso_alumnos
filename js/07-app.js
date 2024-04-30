titulo.innerHTML = '07 -Iteradores for in  ';
let info = document.getElementById('info');

document.getElementById('curso').style.display='none';
info.innerHTML =  '<P>FOR in ITERA SOBRE OBJETOS </p>';


console.log('for in')

// cursos es un objeto
for (let propiedad in curso){
    console.log(curso[propiedad]);
}

console.log('------------------');

for (let propiedad in alumnos[0]){
    console.log(alumnos[0][propiedad]);

}

// como sacariais todas las propiedades de todos los los alumnos

















