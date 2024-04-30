titulo.innerHTML = '02 -Iteradores Foreach ';
document.getElementById('curso').style.display='none';
let info = document.getElementById('info');

info.innerHTML =  '<P>Vamos a recorrer a los alumnos mediante un foreach</p>';

console.log(`📘 Foreach`);

alumnos.forEach((valor,indice,alumnos1)=>{
    // valor es el contenido de cafa elemnto del array 
    // el inidice es la psosicon denro del array 
    // alumnos1 : todo el array que tenemos disponible  en cada iteracion
    console.log(`alumno indice = ${indice} valor.Nombre.Nombre ${valor.Nombre}`  ); 
    console.log(valor);
    console.log(alumnos1); // accedemos a too el array 
    console.log('---------------');
})

console.log(`📘 Foreach anterior - siguiente`);
alumnos.forEach((valor,indice,alumnos1)=>{

    console.log(`alumno indice = ${indice} valor.Nombre ${valor.Nombre}`  ); 
    console.log(valor);
    // uso del array para añadir enlaces a anterior siguiente
    if (indice > 0 ) { console.log(` < anterior  ${alumnos1[indice-1].Nombre } `)} ;
    if (indice < alumnos1.length -1 ) { console.log(` > siguiente   ${alumnos1[indice+1].Nombre } `)} ;
    console.log('---------------');
})






