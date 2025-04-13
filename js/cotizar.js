$(document).ready(function() {
    // **INICIALIZACIÓN DE SELECT2 PARA CANTIDAD**
    const perfumesData = {
        "Hombre": {
            "Polo": ["Blue (100ml)", "Black (125ml)", "Red (75ml)"],
            "Hugo Boss": ["Bottled (100ml)", "The Scent (100ml)"],
            "Creed": ["Aventus (100ml)", "Silver Mountain Water (100ml)"]
        },
        "Mujer": {
            "Chanel": ["No. 5 (100ml)", "Coco Mademoiselle (100ml)"],
            "Dior": ["J'adore (100ml)", "Miss Dior (100ml)"],
            "Lancôme": ["La Vie Est Belle (100ml)", "Trésor (100ml)"]
        }
    };

    // Tamaños disponibles (para el select de tamaños)
    const tamanosDisponibles = ["30ml", "50ml", "75ml", "100ml", "125ml"];

    // Rutas de las imágenes de los perfumes
    const imagenesPerfumes = [
        "imagenes/our-perfum/11.png",
        "imagenes/our-perfum/15.jpg",
        "imagenes/our-perfum/16.jpg",
        "imagenes/our-perfum/17.jpg",
        "imagenes/our-perfum/18.jpeg",
        "imagenes/our-perfum/19.jpg",
        "imagenes/our-perfum/20.png",
        "imagenes/our-perfum/21.jpeg",
        "imagenes/our-perfum/3.jpg",
        "imagenes/our-perfum/4.webp",
        "imagenes/our-perfum/5.jpg",
        "imagenes/our-perfum/6.webp",
        "imagenes/our-perfum/7.jpg"
    ];

    // **INICIALIZACIÓN DE SELECT2 PARA MARCA Y MODELO**
    $('#marca-modelo').select2({
        placeholder: "Seleccione Marca y Modelo",
        data: formatDataForSelect2(perfumesData)
    });

    // **INICIALIZACIÓN DE SELECT2 PARA TAMAÑOS**
    $('#tamanos').select2({
        placeholder: "Seleccione los Tamaños",
        data: tamanosDisponibles.map(tamano => ({ id: tamano, text: tamano }))
    });

    // **FUNCIÓN PARA FORMATEAR DATOS PARA SELECT2 (MARCA/MODELO)**
    function formatDataForSelect2(data) {
        const formatted = [];
        for (const genero in data) {
            const generoOptions = [];
            for (const marca in data[genero]) {
                data[genero][marca].forEach(modelo => {
                    generoOptions.push({ id: `${genero}-${marca}-${modelo}`, text: `${genero} - ${marca} - ${modelo}` });
                });
            }
            formatted.push({ text: genero, children: generoOptions });
        }
        return formatted;
    }

    // **EVENTO PARA ACTUALIZAR LA CALCULADORA**
    $('#cantidad, #marca-modelo, #tamanos').on('change', function() {
        actualizarCalculadora();
    });

    // **FUNCIÓN PARA ACTUALIZAR LA CALCULADORA**
    function actualizarCalculadora() {
        const cantidad = parseInt($('#cantidad').val()) || 0;
        const modelosSeleccionados = $('#marca-modelo').val() || [];
        const tamanosSeleccionados = $('#tamanos').val() || [];
        let calculadoraHTML = '';
        const precioBase = 25; // Precio base de ejemplo por cada 50ml

        if (modelosSeleccionados.length > 0 && tamanosSeleccionados.length > 0 && cantidad > 0) {
            calculadoraHTML += '<h3>Detalle de la Cotización:</h3><ul>';
            modelosSeleccionados.forEach(fullModelo => {
                const partesModelo = fullModelo.split('-');
                const genero = partesModelo[0];
                const marca = partesModelo[1];
                const modeloConTamano = partesModelo[2];

                tamanosSeleccionados.forEach(tamano => {
                    // Extraer el tamaño numérico del modelo (si está presente)
                    const tamanoModeloMatch = modeloConTamano.match(/\((\d+)ml\)/);
                    let tamanoBaseModelo = tamanoModeloMatch ? parseInt(tamanoModeloMatch[1]) : 50; // Default a 50ml si no se especifica

                    const tamanoNumerico = parseInt(tamano.replace('ml', ''));
                    const factorTamano = tamanoNumerico / 50; // Factor basado en 50ml

                    const precioCalculado = cantidad * precioBase * factorTamano;
                    calculadoraHTML += `<li>${cantidad} x ${marca} - ${modeloConTamano.split('(')[0].trim()} (${tamano}) - Precio: $${precioCalculado.toFixed(2)}</li>`;
                });
            });
            calculadoraHTML += `</ul><p><strong>Precio Total Estimado: $${calcularTotalCotizacion(cantidad, modelosSeleccionados, tamanosSeleccionados, precioBase).toFixed(2)}</strong></p>`;
        } else {
            calculadoraHTML = '<p>Seleccione la cantidad, marca/modelo y tamaños para ver la cotización.</p>';
        }

        $('#calculadora-anexo').html(calculadoraHTML);
    }

    // **FUNCIÓN PARA CALCULAR EL TOTAL DE LA COTIZACIÓN**
    function calcularTotalCotizacion(cantidad, modelos, tamanos, precioBase) {
        let total = 0;
        modelos.forEach(fullModelo => {
            const partesModelo = fullModelo.split('-');
            const modeloConTamano = partesModelo[2];
            modelos.forEach(modelo => {
                tamanos.forEach(tamano => {
                    const tamanoModeloMatch = modeloConTamano.match(/\((\d+)ml\)/);
                    let tamanoBaseModelo = tamanoModeloMatch ? parseInt(tamanoModeloMatch[1]) : 50;

                    const tamanoNumerico = parseInt(tamano.replace('ml', ''));
                    const factorTamano = tamanoNumerico / 50;

                    total += cantidad * precioBase * factorTamano;
                });
            });
        });
        return total;
    }

    // **VISOR DE PERFUMES**
    const tiposPerfumes = ["Floral", "Amaderado", "Cítrico", "Oriental", "Fresco", "Gourmand"];
    const perfumesPorTipo = {
        "Floral": ["imagenes/our-perfum/11.png", "imagenes/our-perfum/15.jpg"],
        "Amaderado": ["imagenes/our-perfum/16.jpg", "imagenes/our-perfum/17.jpg"],
        "Cítrico": ["imagenes/our-perfum/18.jpeg", "imagenes/our-perfum/19.jpg"],
        "Oriental": ["imagenes/our-perfum/20.png", "imagenes/our-perfum/21.jpeg"],
        "Fresco": ["imagenes/our-perfum/3.jpg", "imagenes/our-perfum/4.webp"],
        "Gourmand": ["imagenes/our-perfum/5.jpg", "imagenes/our-perfum/6.webp", "imagenes/our-perfum/7.jpg"]
    };

    // **GENERAR OPCIONES DEL BUSCADOR DE PERFUMES**
    tiposPerfumes.forEach(tipo => {
        $('#buscador-perfumes').append(`<option value="${tipo}">${tipo}</option>`);
    });

    // **FUNCIÓN PARA MOSTRAR LOS PERFUMES SEGÚN EL TIPO SELECCIONADO**
    function mostrarPerfumes(tipo) {
        const listaPerfumes = $('.perfume-list');
        listaPerfumes.empty();
        const perfumesAMostrar = tipo ? (perfumesPorTipo[tipo] || []) : imagenesPerfumes;
        perfumesAMostrar.forEach(imagen => {
            listaPerfumes.append(`<div class="perfume-item"><img src="${imagen}" alt="Perfume"></div>`);
        });
    }

    // **MOSTRAR TODOS LOS PERFUMES AL CARGAR LA PÁGINA**
    mostrarPerfumes('');

    // **EVENTO PARA FILTRAR LOS PERFUMES POR TIPO**
    $('#buscador-perfumes').on('change', function() {
        const tipoSeleccionado = $(this).val();
        mostrarPerfumes(tipoSeleccionado);
    });

    // **EVENTO PARA EL BOTÓN DE SUBMIT**
    $('#formulario-cotizacion').on('submit', function(event) {
        event.preventDefault(); // Evitar el envío normal del formulario

        const cantidad = parseInt($('#cantidad').val()) || 0;
        const modelosSeleccionadosText = $('#marca-modelo').select2('data').map(item => item.text);
        const tamanosSeleccionados = $('#tamanos').val() || [];
        const totalEstimado = calcularTotalCotizacion(cantidad, $('#marca-modelo').val() || [], tamanosSeleccionados, 25).toFixed(2); // Recalcular el total para el resumen

        if (modelosSeleccionadosText.length > 0 && tamanosSeleccionados.length > 0 && cantidad > 0) {
            let resumenPedido = `
                <h3>Resumen de su Pedido:</h3>
                <p><strong>Cantidad:</strong> ${cantidad}</p>
                <p><strong>Perfumes Seleccionados:</strong></p>
                <ul>`;
            modelosSeleccionadosText.forEach(modelo => {
                resumenPedido += `<li>${modelo}</li>`;
            });
            resumenPedido += `</ul>`;
            resumenPedido += `<p><strong>Tamaños Seleccionados:</strong> ${tamanosSeleccionados.join(', ')}</p>`;
            resumenPedido += `<p><strong>Total Estimado: $${totalEstimado}</strong></p>`;

            Swal.fire({
                title: '¡Pedido Realizado!',
                html: resumenPedido,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: '¡Error!',
                text: 'Por favor, seleccione la cantidad, al menos un perfume y un tamaño.',
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
        }
    });
});