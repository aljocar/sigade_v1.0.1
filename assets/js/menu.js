const container_contenido = document.getElementById('container_contenido');

//Crear variables para cada uno de los items del menu
const item_menu_grados_crear = document.getElementById('item_menu_grados_crear');

const item_menu_seccion_crear = document.getElementById('item_menu_seccion_crear');

const item_menu_grados_gestionar = document.getElementById('item_menu_grados_gestionar');



const item_menu_asignar_docente = document.getElementById('item_menu_asignar_docente');
const item_menu_asignar_estudiante = document.getElementById('item_menu_asignar_estudiante');


const item_menu_prof_crear = document.getElementById('item_menu_prof_crear');

const item_menu_prof_gestionar = document.getElementById('item_menu_prof_gestionar');

const item_menu_estudiante_crear = document.getElementById('item_menu_estudiante_crear');

const item_menu_estudiante_gestionar = document.getElementById('item_menu_estudiante_gestionar');

const item_menu_users_admin = document.getElementById('item_menu_users_admin');

const item_menu_results_nuevo = document.getElementById('item_menu_results_nuevo');

const item_menu_results_gestionar = document.getElementById('item_menu_results_gestionar');


// Prueba carga de pagina

  const item_menu_estudiante_gestionar2 = document.getElementById('item_menu_estudiante_gestionar2');


  const item_menu_prof_gestionar2 = document.getElementById('item_menu_prof_gestionar2');


  const item_menu_grados_gestionar2 = document.getElementById('item_menu_grados_gestionar2');


  const item_menu_results_gestionar2 = document.getElementById('item_menu_results_gestionar2');

// Fin de prueba


item_menu_grados_crear.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/crear_grado.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_seccion_crear.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/crear_seccion.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_grados_gestionar.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/gestion_grado.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_asignar_docente.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/asignar_docente.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_asignar_estudiante.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/asignar_estudiante.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_prof_crear.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/crear_profesor.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_prof_gestionar.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/gestionar_profesor.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_estudiante_crear.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/crear_estudiante.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_estudiante_gestionar.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/gestionar_estudiantes.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_users_admin.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/usuario_admin.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_results_nuevo.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/nuevo_resultados.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });



  item_menu_results_gestionar.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('./assets/gestionar_resultados.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });





//Prueba


item_menu_estudiante_gestionar2.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('./assets/gestionar_estudiantes.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});



item_menu_prof_gestionar2.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('./assets/gestionar_profesor.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});



item_menu_grados_gestionar2.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('./assets/gestion_grado.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});



item_menu_results_gestionar2.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('./assets/gestionar_resultados.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

//Fin Prueba






$(document).ready(function() {
  $('.abrir-modal').on('click', function() {
    $('#editGrado').modal('show');
  });
});


$(document).ready(function() {
  $('.abrir-modal').on('click', function() {
    $('#editEstudiante').modal('show');
  });
});


$(document).ready(function() {
  $('.abrir-modal').on('click', function() {
    $('#editProfesor').modal('show');
  });
});