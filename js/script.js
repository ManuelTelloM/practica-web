// Mensaje en la consola cuando el sitio se carga correctamente
console.log("Sitio cargado correctamente");

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario
    const form = document.querySelector("form");

    // Obtener el botón de envío
    const submitButton = form.querySelector("button[type='submit']");

    // Evento cuando se envía el formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío tradicional del formulario
        
        // Verificar si los campos están vacíos
        const nombre = form.querySelector("input[name='nombre']").value;
        const mensaje = form.querySelector("textarea[name='mensaje']").value;

        if (!nombre || !mensaje) {
            alert("Por favor, complete todos los campos.");
            return; // Si faltan campos, no continuar con el envío
        }

        // Deshabilitar el botón de envío para evitar múltiples envíos
        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";

        // Mostrar mensaje de confirmación
        setTimeout(() => {
            alert(`¡Gracias por tu mensaje, ${nombre}!`);
            
            // Resetear el formulario
            form.reset();
            
            // Habilitar el botón de nuevo
            submitButton.disabled = false;
            submitButton.textContent = "Enviar";
        }, 1000); // Simula un retraso de 1 segundo antes de mostrar el mensaje
    });
});
//Angel estuvo aqui 4.0 esto es aun mas pesonal