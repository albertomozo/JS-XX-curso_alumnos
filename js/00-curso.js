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
                "php" : 1,
                "mysql" : 1,
                "API" : 1,
                "Laravel" : 3
            },
            "fin" : {     
                "php" : 4,
                "mysql" : 4,
                "API" : 4,
                "Laravel" : 4 
            }
        
        },
        {
            "Nombre":"Alumno2",
            "email" : "Alumno2@gmail.com",
            "linked" : "https://www.linkedin.com/",
            "github" : "https://github.com",
            "inicio" : {     
                "php":2,
                "mysql" :3,
                "API" : 1,
                "Laravel" : 3
            },
            "fin" :{     
                "php" : 4,
                "mysql" : 4,
                "API" : 4,
                "Laravel" : 4 
            } 
        
        },
        {
            "Nombre":"Alumno3",
           "email" : "Alumno4@outlook.com",
           "linked" : "https://www.linkedin.com/",
           "github" : "https://github.com",
           "inicio" : {     
               "php":2,
               "mysql" :3,
               "API" : 1,
               "Laravel" : 3
           },
           "fin" :{     
               "php" : 4,
               "mysql" : 4,
               "API" : 4,
               "Laravel" : 4 
           } 
       
       },
       {
            "Nombre":"Alumno4",
        "email" : "Alumno4@gmail.com",
        "linked" : "https://www.linkedin.com/",
        "github" : "https://github.com",
        "inicio" : {     
            "php":2,
            "mysql" :3,
            "API" : 1,
            "Laravel" : 3
        },
        "fin" :{     
            "php" : 4,
            "mysql" : 4,
            "API" : 4,
            "Laravel" : 5 
        } 
        
   
        },
        {
            "Nombre":"Alumno4",
           "email" : "Alumno4@gmail.com",
           "linked" : "https://www.linkedin.com/",
           "github" : "https://github.com",
           "inicio" : {     
               "php":0,
               "mysql" :3,
               "API" : 1,
               "Laravel" : 3 
           },
           "fin" :{     
               "php" : 4,
               "mysql" : 4,
               "API" : 4,
               "Laravel" : 3
           }  
        } ,
        {
            "Nombre":"Alumnon",
           "email" : "Alumnon@gmail.com",
           "linked" : "https://www.linkedin.com/",
           "github" : "https://github.com",
           "inicio" : {     
               "php":5,
               "mysql" :3,
               "API" : 1,
               "Laravel" : 3 
           },
           "fin" :{     
               "php" : 4,
               "mysql" : 2,
               "API" : 4,
               "Laravel" : 3
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

