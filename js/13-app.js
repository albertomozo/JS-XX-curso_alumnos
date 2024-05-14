titulo.innerHTML = '13 - Resultados múltiples';
let info = document.getElementById('info');
document.getElementById('campo1').placeholder = 'escribe un nombre de alumno';

info.innerHTML =  '<P>Introduce un Alumno en el primer input</p><p>¿Qué pasa si existen nombre duplicados?</p>';
console.log('👩‍🎓 Alumnos curso.alumnos');
console.log(alumnos);




/* listener */

const btn = document.getElementById('button');
let alumnoValor ;
btn.addEventListener('click',()=>{
    alumnoValor = document.getElementById('campo1').value;
    const existe = alumnos.some( alumno => alumno.Nombre === alumnoValor );
    // buscar por patter match
   // const existe = alumnos.some( alumno => alumno.Nombre.match(alumnoValor)  );


    console.log(existe);



    if (existe){
        // hay que enviar el objeto de la persona encontrada
        // para ello debemos buscar selecccionar o filtar los elementos que nos interesan.
        
        const alumnosConjunto = alumnos.filter( alumno => alumno.Nombre === alumnoValor ); 
       //const alumnosConjunto = alumnos.filter( alumno => alumno.Nombre.match(alumnoValor) ); 
        const tipo = typeof alumnosConjunto;
        console.log (` typeof alumnosConjunto ${tipo}`)
        console.log(alumnosConjunto);
        // typeoff nos devuelve el tipo de elemento de un objeto
        if (alumnosConjunto.length === 1) {
            // muesto la ficha
            const fichaAlumno= ficha_persona( alumnosConjunto[0]);
            console.log(fichaAlumno);
            document.getElementById('info').innerHTML = fichaAlumno;
        } else {
             // recorro todos los alumnos encontrados para pode seleccionar el adecuado
             let alumnosTexto = '';
             alumnosConjunto.forEach(alumno=>{
                //alumnosTexto += `<p>Alumno : ${alumno.Nombre} ${alumno.linked} email : ${alumno.email} </p>` ;
                alumnosTexto += ficha_persona(alumno);
            })
             // añadir enlace para ver cada ficha de alumno 
             document.getElementById('info').innerHTML = alumnosTexto;
        }
    } else {
        document.getElementById('info').innerHTML = `<p>No existe el Alumno ${alumnoValor}`;
    }


})


