// Variables controladoras
var panorama, viewer, container, infospot;

// Obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

// Cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/fragance.jpg');


// El valor 50 es el radio del infospot
// Crea y agrega el primer infospot

var infospot1 = new PANOLENS.Infospot(50,'imagenes/info4.png');

// Establecen las coordenadas x, y, z (posición tridimensional del infospot dentro de la panorámica)
// Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(0, 0, -500);

// -60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText(
    "¡Bienvenido a nuestra perfumería fina! " +
    "Descubrí un universo de fragancias cuidadosamente seleccionadas para hombres y mujeres.. " +
    "Explorá esencias exclusivas, elegancia atemporal y aromas que despiertan emociones..", 
    -60
);

// Personalización del contenido del infospot con HTML y estilos CSS en línea
infospot1.element.innerHTML = 
    '<div style="background-color: rgba(56, 22, 91, 0.37); color: #fff; border-radius: 5px; ' +
    'padding: 10px; font-size: 14px; width: 200px;">' +
    '¡Bienvenido a nuestra perfumería fina!  ' +
    'Descubrí un universo de fragancias cuidadosamente seleccionadas para hombres y mujeres.. ' +
    'Explorá esencias exclusivas, elegancia atemporal y aromas que despiertan emociones..' +
    '</div>';

// Agrega el infospot a la panorámica
panorama.add(infospot1);


// Crea y agrega el segundo infospot
// Crea y agrega el segundo infospot con ícono personalizado
var infospot2 = new PANOLENS.Infospot(130, 'imagenes/info8.png');

infospot2.position.set(1000, -100, 1000);

infospot2.addHoverText(
    '¡Bienvenido! ' +
    'Explorá nuestros productos haciendo clic en los puntos interactivo, ' +
    'disfruta la experiencia de comprar.', 
    -60
);

infospot2.element.innerHTML = 
    '<div style="background-color: rgba(104, 40, 113, 0.8); color: #fff; border-radius: 5px; ' +
    'padding: 10px; font-size: 14px; width: 200px;">' +
    '¡Bienvenido! ' +
    'Explorá nuestros productos haciendo clic en los puntos interactivo, ' +
    'disfruta la experiencia de comprar.' +
    '</div>';

panorama.add(infospot2);



// Crea y agrega el tercer infospot
var infospot3 = new PANOLENS.Infospot(50,'imagenes/icvideo.png');

infospot3.position.set(-430, 50, -1000);

infospot3.addHoverText(
    'La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos ' +
    'los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.', 
    -60
);

// Insertar el reproductor de video de YouTube en el infospot
infospot3.element.innerHTML = `
    <div class="" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/urL_4zZ959I?si=42ciRReT5S2u69DY"></iframe>        
    </div>
`;

panorama.add(infospot3);

// Crear el infospot4
var infospot4 = new PANOLENS.Infospot(250, 'imagenes/info5.png'); // El valor 250 es el radio del infospot y 'imagenes/info.png' es la imagen personalizada

// Establecer las coordenadas x, y y z (posición tridimensional del infospot dentro de la panorámica)
infospot4.position.set(-4500, -650, -3500);

// Agregar texto de información al infospot
infospot4.addHoverText('', -60); // -60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente

// Cambiar el contenido del infospot al pasar el mouse
infospot4.element.innerHTML = `
    <div style="background-color: rgba(22, 61, 152, 0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;">
        "Un aroma que no se impone, se recuerda." Fragancia masculina que deja huella, sin decir una palabra.
        <br><br>
        <img src="imagenes/gio.png" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>
`;

// Agregar el infospot a la panorámica
panorama.add(infospot4);

// Crea y agrega el sexto infospot
// Crea y agrega el infospot con icono personalizado
var infospot5 = new PANOLENS.Infospot(50, 'imagenes/icaudio2.png');

// Establecen las coordenadas x, y, z
infospot5.position.set(265, 50, 940);

// Hover text
infospot5.addHoverText('Un audio MP3 multimedia...', -60);

// Contenido del infospot
infospot5.element.innerHTML = `
    <div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        <audio controls>
            <source src="audios/audio1.mp4" type="audio/mpeg">
        </audio>
    </div>
`;

// Agregar al panorama
panorama.add(infospot5);


// Crea y agrega el sexto infospot
var infospot6 = new PANOLENS.Infospot(100, 'imagenes/info6.png');

infospot6.position.set(-480, -134, 500);

// Agregar texto al hover y poner una posición diferente al texto
infospot6.addHoverText('Entrar al PDF.', 100);

// Crear el contenido del infospot
infospot6.element.innerHTML = `
    <div style="background-color: rgba(213, 33, 33, 0.8); color:#fff; border-radius: 5px; 
                padding: 10px; font-size: 14px; width: 200px;">
        Conocé más sobre Esencia Boutique al entrar al PDF.Descargá nuestro folleto informativo con todo sobre nuestras fragancias finas para hombre, mujer y unisex..
    </div>
`;

// Agregar un evento de clic para abrir el PDF
infospot6.addEventListener('click', function() {
    // Abrir el PDF en una nueva pestaña
    window.open("pdf/tour.pdf", "_blank");
});

panorama.add(infospot6);

// Crear el infospot7

var infospot7 = new PANOLENS.Infospot(120, 'imagenes/info7.png');

// Posición en el panorama
infospot7.position.set(500, -154, 4);

// Texto flotante (opcional, puede eliminarse si usás solo el contenido HTML)
infospot7.addHoverText(
    "¡Promoción Especial! " +
    "Artículos con 50% de descuento</strong> con la tarjeta de membresía. " +
    "Explorá esencias exclusivas, elegancia atemporal y aromas que despiertan emociones.",
    -60
);

// Contenido personalizado con fondo rojo y bordes redondeados
infospot7.element.innerHTML = `
    <div style="
        background-color: rgba(255, 0, 0, 0.85);
        color: white;
        border-radius: 15px;
        padding: 15px;
        font-size: 15px;
        line-height: 1.5;
        width: 240px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    ">
        <strong>¡Promoción Especial!</strong><br><br>
        Artículos con <strong>50% de descuento</strong> con la tarjeta de membresía.<br>
        Nos encanta ver clientes felices disfrutando su esencia.
    </div>
`;

// Agregar al panorama
panorama.add(infospot7);


// Crear el infospot8
var infospot8 = new PANOLENS.Infospot(50, 'imagenes/icvideo1.png');

infospot8.position.set(-500 ,8 , -139);

infospot8.addHoverText(
    'La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos ' +
    'los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.', 
    -60
);

// Insertar el reproductor de video de YouTube en el infospot
infospot8.element.innerHTML = `
    <div class="" style="">
        <iframe width="520" height="280" src="https://www.youtube.com/embed/zpDza9rd9_4?si=90Gqy7eRWzmxtSvA"></iframe>        
    </div>
`;

panorama.add(infospot8);

// Crear el infospot9
var infospot9 = new PANOLENS.Infospot(50,'imagenes/icuadio.png');

// Establecen las coordenadas x, y, z (posición tridimensional del infospot dentro de la panorámica)
// Por ejemplo, x = 265, y = 50, z = 940
infospot9.position.set(191 ,-30 , -500);

// -60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot9.addHoverText('Un audio MP3 multimedia...', -60);

// Insertar un reproductor de audio en el infospot
infospot9.element.innerHTML = `
    <div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        <audio controls>
            <source src="audios/audio2.mp3" type="audio/mpeg">
        </audio>
    </div>
`;

panorama.add(infospot9);

// Crear el infospot10

var infospot10 = new PANOLENS.Infospot(50, 'imagenes/info3.png'); // El valor 250 es el radio del infospot y 'imagenes/info3.png' es la imagen personalizada

// Establecer las coordenadas x, y y z (posición tridimensional del infospot dentro de la panorámica)
infospot10.position.set(-500 ,-108 , -43);

// Agregar texto de información al infospot
infospot10.addHoverText('', -60); // -60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente

// Cambiar el contenido del infospot al pasar el mouse
infospot10.element.innerHTML = `
    <div style="background-color: rgba(194, 59, 115, 0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;">
        "Un aroma que no se impone, se recuerda." Fragancia masculina que deja huella, sin decir una palabra.
        <br><br>
        <img src="imagenes/oferta.png" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>
`;

panorama.add(infospot10);

// Agrega la panorámica al visor con pantalla completa habilitada
viewer = new PANOLENS.Viewer({
    container: container,
    output: 'fullscreen', // Habilita salida en pantalla completa
    autoHideInfospot: false
});

viewer.add(panorama);

