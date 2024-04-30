titulo.innerHTML = '05 -Iteradores for in  ';
document.getElementById('curso').style.display='none';
let info = document.getElementById('info');

info.innerHTML =  '<P>FOR in MANERA NAS SIMPLIFICADA DE FOR< /p>';


console.log('for in')

for (let alumno in alumnos){
    console.log(alumno);
    console.log(alumnos[alumno]);
    console.log(alumnos[alumno].Nombre);
}














