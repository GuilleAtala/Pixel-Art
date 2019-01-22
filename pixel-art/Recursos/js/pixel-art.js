//declaraciones de variables
var nombreColores = ['White', 'LightYellow',
        'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
        'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
        'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
        'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
        'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
        'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
        'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
        'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
        'LightGreen', 'PaleGreen', 'PaleTurquoise',
        'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
        'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
        'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
        'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
        'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
        'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
        'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
        'BlueViolet', 'DarkViolet', 'DarkOrchid',
        'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
        'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
    ],
    grillaPixeles = document.getElementById("grilla-pixeles"),
    Paleta = document.getElementById("paleta"),
    indicadorColor = $("#indicador-de-color"),
    colorDeterminado = "",
    colorPersonalizado = $('#color-personalizado'),
    apretado = "";

//funciones para generar la grilla y la paleta de colores


function Colores() {

    for (x in nombreColores) {
        var pixelColor = document.createElement("div");
        pixelColor.style.backgroundColor = nombreColores[x];
        pixelColor.className = "color-paleta";
        paleta.appendChild(pixelColor);
    }
}
Colores();

function CrearGrilla() {
    for (let i = 0; i < 1749; i++) {
        var bloquesGrilla = document.createElement("div")
        bloquesGrilla.className = "pixel-grilla";
        grillaPixeles.appendChild(bloquesGrilla);
    }
}
CrearGrilla();

// selectores de color

$(colorPersonalizado).on("change", (function() {
    colorActual = colorPersonalizado.val();
    indicadorColor.css("background-color", colorActual);
    colorDeterminado = colorActual;
}));
$(document).on("click", ".color-paleta", function() {
    var color = $(this).css("background-color");
    indicadorColor.css({ "background-color": color });
    colorDeterminado = color;
})

//funciones para pintar grilla

.on("click", ".pixel-grilla", function() {
        $(this).css("background-color", colorDeterminado);
    })
    .on("mousedown", ".pixel-grilla", function() {
        apretado = 1;
    })
    .on("mouseup", ".pixel-grilla", function() {
        apretado = 0;
    })
    .on("mousemove", ".pixel-grilla", function() {
        if (apretado == 1) { $(this).css("background-color", colorDeterminado); }
    })

//correcciones de errores mouse

.on("dragleave", ".pixel-grilla", function() {
        apretado = 0;
    })
    .on("mouseleave", "#grilla-pixeles", function() {
        apretado = 0;
    });

//selector de imagenes precargadas


$("#batman").click(function() {
    cargarSuperheroe(batman);
})

$("#wonder").click(function() {
    cargarSuperheroe(wonder);
})
$("#invisible").click(function() {
    cargarSuperheroe(invisible);
})
$("#flash").click(function() {
    cargarSuperheroe(flash);
});



//funciones para guardar y borrar archivos


$("#guardar").click(function() {
    guardarPixelArt()
})
$("#borrar").click(function() {
    $(".pixel-grilla").animate({
        backgroundColor: "white"
    }, 1100);

});