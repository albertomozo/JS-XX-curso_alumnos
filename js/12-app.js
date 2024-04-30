titulo.innerHTML = '12 - Buscador de alumnos II';
let info = document.getElementById('info');
document.getElementById('campo1').placeholder = 'escribe un nombre de alumno';

info.innerHTML =  '<P>Introduce un Alumno en el primer input</p>';
console.log('👩‍🎓 Alumnos curso.alumnos');
console.log(alumnos);




/* listener */

const btn = document.getElementById('button');
let alumnoValor ;
btn.addEventListener('click',()=>{
    alumnoValor = document.getElementById('campo1').value;
    const existe = alumnos.some( alumno => alumno.Nombre === alumnoValor );
    console.log(existe);
    if (existe){
        // hay que enviar el objeto de la persona encontrada
        // para ello debemos buscar el indice en el que esta el elemento buscado
        // FindIndex te dirá el indice es decir la ubicación del elemento en el arreglo...
        const indice = alumnos.findIndex( alumno => alumno.Nombre === alumnoValor ); 
        const fichaAlumno= ficha_persona( alumnos[indice]);
        console.log(fichaAlumno);
        document.getElementById('info').innerHTML = fichaAlumno;
    } else {
        document.getElementById('info').innerHTML = `<p>No existe el Alumno ${alumnoValor}`;
    }


})


