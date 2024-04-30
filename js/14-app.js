titulo.innerHTML = '14 - Resultados múltiples';
let info = document.getElementById('info');
document.getElementById('campo1').placeholder = 'materia';

info.innerHTML =  '<P>Introduce una Materia en el primer input</p>';
console.log('👩‍🎓 Alumnos curso.alumnos');
console.log(alumnos);




/* listener */

const btn = document.getElementById('button');
let alumnoValor ;
btn.addEventListener('click',()=>{
    materiaValor = document.getElementById('campo1').value;
    const alummosMateria = [];
    let textoinfo = '<table><tr><th>Materia</th><th>Nombre</th><th>Inicio</th><th>Fin</th></tr>';
    for(let i = 0; i < alumnos.length; i++) {
        const alumno = alumnos[i];
        //console.log(alumno);
        //console.log(alumno.inicio);
        
        for (materia in alumno.inicio)
        {
            //console.log(materia);
            
            if (materia === materiaValor)
            {
                console.log(`La nota para la materia ${materiaValor}  es  ${alumno.inicio[materia]}  para el alumno ${alumno.Nombre}`);
                textoinfo += `<tr><td>${materiaValor} </td><td>${alumno.Nombre} </td> <td>${alumno.inicio[materia]}</td><td>${alumno.fin[materia]}</td></tr>`;
            }
        }
        
      
    }
    textoinfo += '</table>';
    document.getElementById('info').innerHTML= textoinfo;






 

})


