var formulario= document.getElementById("form-singIn");

//agregar evento de escucha para el envio del formulario
  document.getElementById("login").addEventListener("click", function(event) {
  event.preventDefault(); //evitar que el formulario se envie de forma predeterminada

  var email=document.getElementById("email").value;
  var password= document.getElementById("password").value;

  var usersRef = database.ref("usuarios");
      usersRef.orderByChild("email").equalTo(email).once("value", function(snapshot) {
        if (snapshot.exists()) {
          var userData = null;
          snapshot.forEach(function(childSnapshot) {
            userData = childSnapshot.val();
          });

          // Verificar la contraseña
          if (userData.password === password) {
            // Inicio de sesión exitoso
            console.log("Inicio de sesión exitoso");
            // Puedes redirigir al usuario a otra página o realizar otras acciones aquí
          } else {
            // Contraseña incorrecta
            console.error("Contraseña incorrecta");
          }
        } else {
          // Usuario no encontrado
          console.error("Usuario no encontrado");
        }
      });
    });
