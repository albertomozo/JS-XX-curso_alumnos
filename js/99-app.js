titulo.innerHTML = '15 - Resultados múltiples III';
let info = document.getElementById('info');
document.getElementById('campo1').placeholder = 'campo1';
document.getElementById('campo2').placeholder = 'campo2';

info.innerHTML =  '<P>Define los placeholder</p>';





/* listener */

const btn = document.getElementById('button');
let alumnoValor ;
btn.addEventListener('click',()=>{
    const campo1 = document.getElementById('campo1').value;
    const campo2 =document.getElementById('campo2').value;
    console.log(`Campo1  : ${campo1} | Campo2 : ${campo2}` )
    
    
    const textoinfo = `Campo1  : ${campo1} | Campo2 : ${campo2}`;
    document.getElementById('info').innerHTML= textoinfo;

})

/**************
* ejercicios  *
***************/

// 01. Obtener la media de todas las valoraciones iniciales de una materia introducida en campo 1

// 02. Obtener las valoraciones finales que sean 5 

// 03. Obtener una ficha de un alumno con el siguiente aspecto 

/*     alumno     materia    inicio   fin    diferencia */