titulo.innerHTML = '06 -Iteradores for in  ';
let info = document.getElementById('info');
document.getElementById('curso').style.display='none';

info.innerHTML =  '<P>FOR in ITERA SOBRE OBJETOS </p>';


console.log('for in')

// cursos es un objeto
for (let propiedad in curso){
    console.log(curso[propiedad]);
}
















