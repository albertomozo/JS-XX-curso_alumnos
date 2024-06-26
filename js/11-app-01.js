titulo.innerHTML = '11 - Buscador de alumnos ';
let info = document.getElementById('info');
document.getElementById('campo1').placeholder = 'escribe un nombre de alumno';

info.innerHTML =  '<P>Introduce un Alumno en el primer input</p><P>Introduce un mail  en el segundo input</p>';
console.log('👩‍🎓 Alumnos curso.alumnos');
console.log(alumnos);




/* listener */

const btn = document.getElementById('button');
let alumnoValor ;
btn.addEventListener('click',()=>{
    alumnoValor = document.getElementById('campo1').value;
    emailValor = document.getElementById('campo2').value;
    // Saber si existe el alumno introducido en campo1
    console.log(`🔎 Alumno :  ${alumnoValor}`);
    let existeAlumno = 'NO';
    alumnos.forEach((alumno) => {
        if(alumno.Nombre.includes(alumnoValor)) {
            existeAlumno = 'SI';
            console.log(`existe ${alumnoValor}`);
        }
    })
    console.log(existeAlumno);
    
    // En el caso de un array  de objetos usar el metodo include no es la mejor opción, podrías utilizar uno llamado .some 
   /*  const existe = alumnos.some( function (alumno) { 
        if (alumno.Nombre === alumnoValor) { return true} 
    }); */


   /*  const existe = alumnos.some( (alumno) => 
        {if (alumno.Nombre === alumnoValor) { return true} }
    ); */

    
    // operador ternario
  /*   const existe = alumnos.some( (alumno) => 
     (alumno.Nombre === alumnoValor)   
    ); */




    const existe = alumnos.some( alumno => alumno.Nombre === alumnoValor );

    const existeMail = alumnos.some( alumno => alumno.email.includes(emailValor) );

    console.log(existe);

    console.log('📧 ' + existeMail)

 


})


