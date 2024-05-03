titulo.innerHTML = '99 - 02 - buscar nota final';
let info = document.getElementById('info');
document.getElementById('campo1').placeholder = 'Introduce nota Final';
document.getElementById('campo2').style.display= 'none';

info.innerHTML =  '<P>Introduce nota final a buscar</p>';





/* listener */

const btn = document.getElementById('button');

btn.addEventListener('click',()=>{
    const campo1 = document.getElementById('campo1').value;
  let resultados = [];
  // recorremos los alumnos
  for(let i=0; i<alumnos.length; i++) {
    // recorremos las materias del objeto fin de cada alumno
    console.log(`🎓 ${alumnos[i].Nombre}`)
    for ( materia in alumnos[i].fin) {
        console.log(materia, alumnos[i].fin[materia]);
        if (alumnos[i].fin[materia] == campo1) { // selecciono solo las materias que tenga valor = campo1
          let elemento = {}; // genero objeto para añadir al array
          elemento.nombre = alumnos[i].Nombre;
          elemento.materia =materia;
          resultados.push(elemento); // añado elemento a array resultado
          console.log(alumnos[i].Nombre, materia , campo1);
        }

    }
    console.log(resultados);
  }


 
      
         textoinfo =`<h3>Alumnos y materias con nota : ${campo1}</h2><table>`;
          
         for (const item of resultados) {
                
                textoinfo += `<tr><td>${item.nombre}</td>
                    <td>${item.materia} </td></tr>`;
           } 
           textoinfo += '</table>';
        
   

  
    
  
    document.getElementById('info').innerHTML= textoinfo;

})

