//1) Atrapar las cajas de texto donde la persona escribe en el FORMULARIO

const nombreTarjetaInput = document.querySelector("#holder-name");

nombreTarjetaInput.addEventListener("change", function () {

    //Recuperar el nodo donde está el nombre en el dibujo de la TARJETA

    const nombreTarjetaImagen = document.querySelector("#card-username");
    nombreTarjetaImagen.textContent = nombreTarjetaInput.value;
});

//Recuperamos el número que pone usuario en el FORMULARIO

const numeroTarjetaInput = document.querySelector("#holder-card-number");

numeroTarjetaInput.addEventListener("change", function () {

    //Recupero el nodo donde está el número de la TARJETA

    const numeroTarjetaImagen = document.querySelector("#card-number");
    numeroTarjetaImagen.textContent = numeroTarjetaInput.value;

});
//idem para el mes

const mesCaducidadInput = document.querySelector("#exp-date");

mesCaducidadInput.addEventListener("change", function () {

    const mesCaducidadTarjetaImagen = document.querySelector("#card-month");
    mesCaducidadTarjetaImagen.textContent = mesCaducidadInput.value;
});
// idem para el año:

const añoCaducidadInput = document.querySelector("#mm-yy");

añoCaducidadInput.addEventListener("change", function(){

    const añoCaducidadTarjetaImagen = document.querySelector("#card-year");
    añoCaducidadTarjetaImagen.textContent = añoCaducidadInput.value;
});
// idem con el cvc:

const cvcInput = document.querySelector("#cvc");

cvcInput.addEventListener("change", function(){

    const cvcTarjetaImagen = document.querySelector("#card-cvc");
    cvcTarjetaImagen.textContent = cvcInput.value;
});

//2) Gestionamos el EVENTO SUBMIT del Formulario

const form = document.querySelector("form");
const sectionFormulario = document.querySelector("#form-elements");
const sectionMensajeConfirmacion = document.querySelector("#success-container");

form.addEventListener("submit", function(event){

    event.preventDefault();//Evitar que no recargue la página

//5) Ocultamos la sección Formulario:

sectionFormulario.style.display = "none";

//6) Mostramos el mensaje de confirmación:

sectionMensajeConfirmacion.style.display = "block";

});






