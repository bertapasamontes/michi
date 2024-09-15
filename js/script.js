// let idioma_change = document.querySelector('.change');
// idioma_change.addEventListener("click", idioma);
// function idioma(){
//     console.log(idioma_change.checked);
//     // alert("cambioooo");
//     let id=".change".checked;
//     if (id==true){
//         location.href="cat/index.html";
//     }
//     else{
//         location.href="index.html";
//     }
// }

// Selecciona todos los elementos que tengan la clase .change
let idioma_change = document.querySelectorAll('.change');

// Agrega un event listener a cada botón
idioma_change.forEach(btn => {
    btn.addEventListener("click", idioma);
});

// Función que se ejecuta cuando se hace clic en un botón
function idioma(event) {
    // Obtiene el valor del atributo data-language del botón presionado
    let idiomaSeleccionado = event.target.getAttribute('data-language');
    
    // Mostrar en la consola el idioma seleccionado para verificar
    console.log("Idioma seleccionado:", idiomaSeleccionado);
    
    // Comprueba el idioma seleccionado y redirige a la página correspondiente
    if (idiomaSeleccionado === "cat") {
        console.log("Redirigiendo a catalán");
        location.href = "cat/index.html"; // Cambiar a la página en catalán
    } else if (idiomaSeleccionado === "es") {
        console.log("Redirigiendo a español");
        location.href = "../index.html"; // Cambiar a la página en español
    } else {
        console.log("Idioma no reconocido");
    }
}
//bubble text
function splitTextIntoSpans(target) {
    let elements = document.querySelectorAll(target);
    elements.forEach((element) => {
        // element.classList.add('split-text')
        let text = element.innerText;
        let splitText = text
            .split(" ")
            .map(function (word) {
                let char = word.split('').map(char => {
                    return `<span class="split-char">${char}</span>`
                }).join('')
                return `<div class="split-word">${char}&nbsp</div>`
            }).join('');

        element.innerHTML = splitText;
    })
}

splitTextIntoSpans('.bubble-text')
