// Formulario contacto
(function () {
  emailjs.init({
    publicKey: "7nO4WaddhHQ3va3hj",
  });

  document.getElementById('formulario_contacto').addEventListener('submit', function (event) {
    event.preventDefault();
    // Enviar el formulario utilizando EmailJS
    emailjs.sendForm('service_eyalavd', 'template_xe83xxj', this)
      .then(function (response) {
        console.log('Correo enviado', response.status, response.text);
        // alert('¡El correo electrónico se ha enviado correctamente!');
        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "¡Pronto se pondran en contacto con usted!",
          timer: 5000,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Confirmar",
          timerProgressBar: true
        }),
        // Limpiar el formulario después de enviarlo
        document.getElementById('formulario_contacto').reset();
      }, function (error) {
        console.log('Error al enviar el correo', error);
        // alert('Ocurrió un error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.');
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "¡Ocurrio un error al enviar el formulario, vuelve a intentarlo!",
          timer: 5000,
          timerProgressBar: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Confirmar"
        });
      });
  });
})();