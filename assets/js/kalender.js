$('.card').click(function(){

    // set date header for card
    let id = $(this).attr("id")
    let content = cardContent[id-1]
    let day = (id * 1 ) + 7
    date = day + " de Enero"

    $("#kalender-date").text(date)

    // set card text content
    if (!content) {
        let i = Math.floor(Math.random() * 2.5)
        let content = cheatContent[i]
        $("#modal-text").addClass("cheat-text").removeClass("secret-code")
        $("#modal-text2").hide()
        $("#modal-img").attr("src", content[1])
        $("#modal-text1").text(content[0])
    } else {
        $("#modal-text").removeClass("cheat-text").addClass("secret-code")
        $("#modal-text2").show().text(content[1])
        $("#img-container iframe").attr("src", content[2])
        $("#modal-text1").text(content[0])
    }

    $('#modal').modal('show')
})

cardContent = [
    [
        "¿Vas a aguantar todo el mes o te vas a caer el día 2?",
        "15 Burpess",
        'https://www.youtube.com/embed/auBLPXO8Fww'
    ],
    [
        "Bueno, a ver, no estás en tan mala forma...",
        "20 flexiones",
        'https://www.youtube.com/embed/_l3ySVKYVJ8'
    ],
    [
        "Todos sabremos que tienes agujetas de las 20 flexiones de ayer.",
        "30 sentadillas",
        "https://www.youtube.com/embed/rMvwVtlqjTE"
    ],
    [
        "Salta, salta, salta, sin parar...",
        "100 saltos de comba",
        "https://www.youtube.com/embed/hCuXYrTOMxI"
    ],
    [
        "La realidad es que al final no está siendo tan pesado.",
        "40 jumping jacks",
        "https://www.youtube.com/embed/PBHUfBzxczU"
    ],
    [
        "Estoy seguro que no querrás repetir el día de hoy.",
        "2min plancha",
        "https://www.youtube.com/embed/sZxrs3C209k"
    ],
    [
        "Sube las rodillas, no bajes el pecho.",
        "20 saltos con rodillas al pecho",
        "https://www.youtube.com/embed/NVXDRqTO_t8"
    ],
    [
        "Sin darte cuenta llevas bastantes días con esta tontería...",
        "20 flexiones de hombro",
        "https://www.youtube.com/embed/oLPyqyExD8M"
    ],
    [
        "Bueno, ya solo queda medio mes.",
        "15 desplantes laterales (por pierna)",
        "https://www.youtube.com/embed/anUr2UgfeDc"
    ],
    [
        "Los gemelos parecerán trillizos con tanto saltito.",
        "40 saltos de comba a una pierna (con cada pierna)",
        "https://www.youtube.com/embed/hCuXYrTOMxI"
    ],
    [
        "Te prometo que se llevan mejor que las planchas normales.",
        "1 min de plancha lateral (por cada lado)",
        "https://www.youtube.com/embed/lmTqYw3SAEg"
    ],
    [
        "El nombre no es muy allá, pero al final acaban doliendo los brazos.",
        "20 flexiones de tríceps en silla",
        "https://www.youtube.com/embed/dl8_opV0A0Y"
    ],
    [
        "Cuidado con las rodillitas.",
        "15 zancadas (por pierna)",
        "https://www.youtube.com/embed/L8fvypPrzzs"
    ],
    [
        "Sí, se puede hacer media sentadilla. Pero nunca podrás cavar medio agujero.",
        "20 sentadillas y media",
        "https://www.youtube.com/embed/AyF084qFOFI"
    ],
    [
        "Yo tampoco te creas que estoy muy balanceado.",
        "20 flexiones no balanceadas",
        "https://www.youtube.com/embed/Tf8yA0Dym7E"
    ],
    [
        "Si no tienes barra, ¡salta un baldosín!",
        "50 saltos laterales",
        "https://www.youtube.com/embed/2RSBoJhEZs0"
    ],
    [
        "Venga que esto lo hacías en el colegio sin despeinarte.",
        "30 abdominales",
        "https://www.youtube.com/embed/_HDZODOx7Zw"
    ],
     [
        "Si tienes vecinos abajo no saltes mucho :P",
        "20 sentadilla con salto",
        "https://www.youtube.com/embed/4tt-EG2QV2E"
    ],
     [
        "En este caso, Bastardo no es un insulto.",
        "20 burpees bastardos",
        "https://www.youtube.com/embed/A8yn1osZQW4"
    ],
    [
        "Como en las mejores sesiones de Aerobic de los 90",
        "20 elevaciones laterales de pierna (por lado)",
        "https://www.youtube.com/embed/l1pq3YA6t-8"
    ],
    [
        "¡Y brilla como tal1 ya casi hemos terminado.",
        "20 flexiones en diamante",
        "https://www.youtube.com/embed/XtU2VQVuLYs"
    ],
    [
        "Estos son los que hacía Rocky en la peli.",
        "30 abdominales laterales",
        "https://www.youtube.com/embed/EjWY7_EkqKU"
    ],
     [
        "Pilla una mochila, a tu pareja, o intenta agarrar al gato.",
        "30 sentadilla con peso",
        "https://www.youtube.com/embed/f-Vf2yRRqOg"
    ],
    [   
        "Si has hecho todos los días, ¡Enhorabuena!",
        "40 burpees",
        "https://www.youtube.com/embed/auBLPXO8Fww"
    ]
]

cheatContent = [
    [
        "10 Burpess!",
        "https://www.youtube.com/embed/auBLPXO8Fww"
    ],
    [
        "20 Burpess!",
        "https://www.youtube.com/embed/auBLPXO8Fww"
    ],
    [
        "30 Burpess!",
        "https://www.youtube.com/embed/auBLPXO8Fww"
    ]
]