titulo.innerHTML = '99 - 01 - Media de materia';
let info = document.getElementById('info');
document.getElementById('campo1').placeholder = 'Introduce la materia';
document.getElementById('campo2').placeholder = 'campo2';

info.innerHTML =  '<P>Introduce la materia</p>';





/* listener */

const btn = document.getElementById('button');

btn.addEventListener('click',()=>{
    const campo1 = document.getElementById('campo1').value;
    let total = 0;
    const totalAlumnos = alumnos.length;
    const resultado = alumnos.forEach((alumno)=>{
            console.log(alumno.inicio);
            total += alumno.inicio[campo1];
    })
    textoinfo = `<p id="titulo">resultados materia ${campo1}</p>`;
    textoinfo += `<p>Total = ${total}`;
    textoinfo += `<p>Media = ${total/totalAlumnos}`;


    
  
    document.getElementById('info').innerHTML= textoinfo;

})

