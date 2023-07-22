// Paso 1
// No es necesario incluirlo en el código ya que este es un ejemplo genérico

// Paso 2
const personas = [
    {
      nombre: "Juan",
      edad: 25,
      ciudad: "Buenos Aires"
    },
    {
      nombre: "Ana",
      edad: 30,
      ciudad: "Madrid"
    },
    {
      nombre: "Pedro",
      edad: 40,
      ciudad: "Santiago"
    }
  ];
  
  // Paso 3
  function crearMensajesDePresentacion(personas) {
    // Paso 4
    const mensajes = [];
  
    // Paso 5
    personas.forEach(persona => {
      // Paso 6
      const mensaje = `Mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`;
      // Paso 7
      mensajes.push(mensaje);
    });
  
    // Paso 8
    return mensajes;
  }
  
  // Paso 9
  const mensajesDePresentacion = crearMensajesDePresentacion(personas);
  
  // Paso 10
  mensajesDePresentacion.forEach(mensaje => {
    // Paso 11
    console.log(mensaje);
  });


