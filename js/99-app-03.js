titulo.innerHTML = '99 - 03 - diferencia valoracion  materia';
let info = document.getElementById('info');
document.getElementById('campo1').placeholder = 'Introduce nombre alumno';
document.getElementById('campo2').placeholder = 'campo2';

info.innerHTML =  '<P>Introduce nombre alumno</p>';





/* listener */

const btn = document.getElementById('button');

btn.addEventListener('click',()=>{
    const campo1 = document.getElementById('campo1').value;
  
    const indice = alumnos.findIndex( alumno => alumno.Nombre === campo1 ); 
    console.log(indice);
    let textoinfo = '';
    if (indice>=0){
         textoinfo += `<p id="titulo">resultados Alumno  ${campo1}</p>`;
         textoinfo += '<table><th>Materia</th><th>Inicio</th><th>Fin</th><th>Diferencia</th>';  
         const alumno = alumnos[indice];  
         console.log(alumno.inicio)  ;  
         for (const materia in alumno.inicio){
                console.log(materia);
                const  valorI=  alumno.inicio[materia];
                const  valorF=  alumno.fin[materia];
                textoinfo += `<tr><td>${materia}</td>
                    <td>${valorI} </td><td>${valorF} </td><td>${valorF - valorI} </td></tr>`;
           }
        
    } else{
            textoinfo =`<p id="titulo">No existe el  Alumno  ${campo1}</p>`;
    }

  
    
  
    document.getElementById('info').innerHTML= textoinfo;

})

