const curso = 
{"curso":"FRONTEND",
"fecha_inicio" : "2022-01-24",
"Localidad" : 'Donosti',
"tutor" : 
    {"Nombre":"Alberto Mozo",
        "email" : "albertomozodocente@gmail.com",
        "linked" : "https://www.linkedin.com/in/alberto-mozo-avellaned-80615713/",
        "github" : "https://github.com/albertomozo"
       
    
    },
"alumnos" : [
        {
            "Nombre":"Alumno1",
            "email" : "Alumno1@gmail.com",
            "linked" : "https://www.linkedin.com/",
            "github" : "https://github.com",
            "inicio" : {    
                "html" : 1,
                "css" : 1,
                "JS" : 1,
                "Vue" : 3
            },
            "fin" : {     
                "html" : 4,
                "css" : 4,
                "JS" : 4,
                "Vue" : 4 
            }
        
        },
        {
            "Nombre":"Alumno2",
            "email" : "Alumno2@gmail.com",
            "linked" : "https://www.linkedin.com/",
            "github" : "https://github.com",
            "inicio" : {     
                "html":2,
                "css" :3,
                "JS" : 1,
                "Vue" : 3
            },
            "fin" :{     
                "html" : 4,
                "css" : 4,
                "JS" : 4,
                "Vue" : 4 
            } 
        
        },
        {
            "Nombre":"Alumno3",
           "email" : "Alumno4@outlook.com",
           "linked" : "https://www.linkedin.com/",
           "github" : "https://github.com",
           "inicio" : {     
               "html":2,
               "css" :3,
               "JS" : 1,
               "Vue" : 3
           },
           "fin" :{     
               "html" : 4,
               "css" : 4,
               "JS" : 4,
               "Vue" : 4 
           } 
       
       },
       {
            "Nombre":"Alumno4",
        "email" : "Alumno4@gmail.com",
        "linked" : "https://www.linkedin.com/",
        "github" : "https://github.com",
        "inicio" : {     
            "html":2,
            "css" :3,
            "JS" : 1,
            "Vue" : 3
        },
        "fin" :{     
            "html" : 4,
            "css" : 4,
            "JS" : 4,
            "Vue" : 5 
        } 
        
   
        },
        {
            "Nombre":"Alumno4",
           "email" : "Alumno4@gmail.com",
           "linked" : "https://www.linkedin.com/",
           "github" : "https://github.com",
           "inicio" : {     
               "html":0,
               "css" :3,
               "JS" : 1,
               "Vue" : 3 
           },
           "fin" :{     
               "html" : 4,
               "css" : 4,
               "JS" : 4,
               "Vue" : 3
           }  
        } ,
        {
            "Nombre":"Alumnon",
           "email" : "Alumnon@gmail.com",
           "linked" : "https://www.linkedin.com/",
           "github" : "https://github.com",
           "inicio" : {     
               "html":5,
               "css" :3,
               "JS" : 1,
               "Vue" : 3 
           },
           "fin" :{     
               "html" : 4,
               "css" : 2,
               "JS" : 4,
               "Vue" : 3
           }  
        } 
]
}

const tutor = curso.tutor;
const alumnos = curso.alumnos;

// materias array que contiene todas las materias que se valoran en alu
const materias = [];

curso.alumnos.forEach(alumno => {
  Object.keys(alumno.inicio).forEach(materia => {
    if (!materias.includes(materia)) {
      materias.push(materia);
    }
  });
});
console.log(materias);

/* funciones generales */

