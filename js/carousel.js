// variable de arreglo (inicialización redundante, se sobrescribe luego)
let micarrusel = {};
let foto = 0;
let total = 0;

// arreglo para cargar las imagenes y titulo de cada foto.
micarrusel = [
    { imageurl: "imagenes/our-perfum/1.jpg", titulo: "Perfume #1" },
    { imageurl: "imagenes/our-perfum/2.jpg", titulo: "Perfume #2" },
    { imageurl: "imagenes/our-perfum/3.jpg", titulo: "Perfume #3" },
    { imageurl: "imagenes/our-perfum/4.webp", titulo: "Perfume #4" },
    { imageurl: "imagenes/our-perfum/5.jpg", titulo: "Perfume #5" },
    { imageurl: "imagenes/our-perfum/6.webp", titulo: "Perfume #6" },
    { imageurl: "imagenes/our-perfum/7.jpg", titulo: "Perfume #7" },
    { imageurl: "imagenes/our-perfum/11.png", titulo: "Perfume #11" },
    { imageurl: "imagenes/our-perfum/15.jpg", titulo: "Perfume #15" },
    { imageurl: "imagenes/our-perfum/16.jpg", titulo: "Perfume #16" },
    { imageurl: "imagenes/our-perfum/17.jpg", titulo: "Perfume #17" },
    { imageurl: "imagenes/our-perfum/18.jpeg", titulo: "Perfume #18" },
    { imageurl: "imagenes/our-perfum/19.jpg", titulo: "Perfume #19" },
    { imageurl: "imagenes/our-perfum/20.png", titulo: "Perfume #20" },
    { imageurl: "imagenes/our-perfum/21.jpeg", titulo: "Perfume #21" }
];


// funcion que permite cambiar las imagenes (anterior y siguiente)
let cambiar = function(mas) {
    // almacena la cantidad total de imagenes
    total = micarrusel.length;
    // almacena la proxima foto
    foto = foto + mas;
    // condicionales para determinar la imagen a presentar
    if (foto > total - 1) { // Ajustado para índice basado en 0
        foto = 0;
    }
    if (foto < 0) { // Ajustado para índice basado en 0
        // tiene la cantidad total de imagenes
        foto = total - 1; // Ajustado para índice basado en 0
    }

    // instrucciones que apuntan a cada imagen y titulo que brinda cada logotipo
    // permite apuntar al arreglo de las fotos con la ruta da cada una
    const imgElement = document.querySelector('img[name="thumb"]');
    if (imgElement) {
        imgElement.src = micarrusel[foto].imageurl; // Ajustado para índice basado en 0
        imgElement.style.width = '320px'; // Establecer ancho fijo
        imgElement.style.height = 'auto'; // Mantener proporción
        imgElement.style.objectFit = 'contain'; // Asegurar que la imagen completa se vea
        imgElement.classList.add('carousel-image'); // Añadir clase para estilos CSS (opcional, pero recomendado)
    }

    // asignacion del ID titulo
    const tituloElement = document.getElementById('titulo');
    // asignacion del arreglo para para referenciar la foto con el titulo
    if (tituloElement) {
        tituloElement.innerText = micarrusel[foto].titulo; // Ajustado para índice basado en 0
        tituloElement.classList.add('carousel-title'); // Añadir clase para estilos CSS (opcional, pero recomendado)
    }
}

// Cargar la primera imagen al cargar la página
window.onload = function() {
    cambiar(0); // Mostrar la primera imagen (índice 0)
};

// --- ESTILOS CSS ANEXADOS AQUÍ ---
const estilosCSS = `
/* Estilos para el contenedor del carrusel */
.carousel-container {
    text-align: center;
    padding: 20px;
}

.carousel-image {
    width: 320px; /* Ancho fijo */
    height: auto; /* Altura automática */
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-bottom: 15px;
    object-fit: contain; /* Asegura que la imagen completa se vea */
}

.carousel-title {
    font-weight: bold;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #333;
    margin-bottom: 10px;
}
`;

// Crear un elemento <style>
const styleElement = document.createElement('style');

// Añadir los estilos CSS al elemento <style>
styleElement.textContent = estilosCSS;

// Anexar el elemento <style> al <head> del documento
document.head.appendChild(styleElement);