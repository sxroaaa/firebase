
  //obtener el formulario
  var formulario= document.getElementById("form-sing-up");

  //agregar evento de escucha para el envio del formulario
    document.getElementById("registrarse").addEventListener("click", function(event) {
    event.preventDefault(); //evitar que el formulario se envie de forma predeterminada


//obtener los valores de los campos

  var nombre=document.getElementById("nombre").value;
  var email=document.getElementById("email").value;
  var password= document.getElementById("password").value;

  //crear un objeto con los datos
    var data={
    nombre: nombre,
    email: email,
    password: password
  };

  //enviar los datos a la base de datos
  database.ref("usuarios" ).push(data);

  //limpiar los campos del formulario
  formulario.reset();
  });





  