titulo.innerHTML = '01 - Analisis estructura JSON ';
document.getElementById('curso').style.display='none';
let info = document.getElementById('info');

info.innerHTML =  '<P>En 00-curso.js tenemos el objeto curso, que "despiezamos" en 2 elementos<br>- tutor = curso.tutor;<br> - alumnos = curso.alumnos<br><p> Veamoslos por consola</p>';

// Vamos a ver consola los diferentes elementos de nuestro objeto
 
console.log('📒Curso  curso ');
console.log(curso);
console.log('👨‍🏫 Tutor  curso.tutor');
console.log(tutor);
console.log('👩‍🎓 Alumnos curso.alumnos');
console.log(alumnos);

for (let i=0; i<alumnos.length;i++){
    console.log( `alumnos[${i}] = ${alumnos[i]}`);
    //console.log(alumnos[i]);
}




// vamos a recorrer los alumjos mediante el metodo foreach 
/* alumnos.forEach((valor,indice)=>{
    console.log(`alumno indice = ${indice} valor.Nombre ${valor.Nombre}`);
    console.log(valor);
    console.log('---------------');
}) */






