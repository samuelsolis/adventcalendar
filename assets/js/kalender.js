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
        "¿Por qué deberíamos prestar tanta atención a lo que piensa la mayoría? (Sócrates)",
        "15 Burpess",
        'https://www.youtube.com/embed/auBLPXO8Fww'
    ],
    [
        "No esperes. Nunca va a ser el momento adecuado.",
        "20 flexiones",
        'https://www.youtube.com/embed/_l3ySVKYVJ8'
    ],
    [
        "Quien le tenga miedo a la muerte no hará cosas dignas de quien está vivo. (Séneca)",
        "30 sentadillas",
        "https://www.youtube.com/embed/rMvwVtlqjTE"
    ],
    [
        "What was Santa's best subject in school? Chemistree",
        "100 saltos de comba",
        "https://www.youtube.com/embed/hCuXYrTOMxI"
    ],
    [
        "Who hides in the bakery at Christmas? A mince spy!",
        "40 jumping jacks",
        "https://www.youtube.com/embed/PBHUfBzxczU"
    ],
    [
        "How did Mrs. Claus tell Santa the weather? 'It looks like rain, dear!'",
        "2min plancha",
        "https://www.youtube.com/embed/sZxrs3C209k"
    ],
    [
        "What does Santa use to measure? Santameters!",
        "20 saltos con rodillas al pecho",
        "https://www.youtube.com/embed/NVXDRqTO_t8"
    ],
    [
        "What's a ghost's favorite Christmas story? The Fright Before Christmas!",
        "20 flexiones de hombro",
        "https://www.youtube.com/embed/oLPyqyExD8M"
    ],
    [
        "What do you get if you cross Santa with a duck? A Christmas Quacker!",
        "15 desplantes laterales (por pierna)",
        "https://www.youtube.com/embed/anUr2UgfeDc"
    ],
    [
        "What do snowmen eat for breakfast? Ice Crispies.",
        "40 saltos de comba a una pierna (con cada pierna)",
        "https://www.youtube.com/embed/hCuXYrTOMxI"
    ],
    [
        "Why is it always cold at Christmas? Because it is Decemberrrrrrr!",
        "1 min de plancha lateral (por cada lado)",
        "https://www.youtube.com/embed/lmTqYw3SAEg"
    ],
    [
        "What did one snowman say to the other snowman? Smells like carrots around here!",
        "20 flexiones de tríceps en silla",
        "https://www.youtube.com/embed/dl8_opV0A0Y"
    ],
    [
        "What does Santa use to bake cakes? Elf-raising flour",
        "15 zancadas (por pierna)",
        "https://www.youtube.com/embed/L8fvypPrzzs"
    ],
    [
        "What do elves do after school? Their gnome work!",
        "20 sentadillas y media",
        "https://www.youtube.com/embed/AyF084qFOFI"
    ],
    [
        "What did the snowman say to the robin? I have snow idea!",
        "20 flexiones no balanceadas",
        "https://www.youtube.com/embed/Tf8yA0Dym7E"
    ],
    [
        "Why is it getting harder to buy Advent calendars? Because their days are numbered!",
        "50 saltos laterales",
        "https://www.youtube.com/embed/2RSBoJhEZs0"
    ],
    [
        "How does Santa keep track of all the fireplaces he's visited? He keeps a logbook.",
        "30 abdominales",
        "https://www.youtube.com/embed/_HDZODOx7Zw"
    ],
     [
        "Who delivers presents to cats? Santa Paws!",
        "20 sentadilla con salto",
        "https://www.youtube.com/embed/4tt-EG2QV2E"
    ],
     [
        "Why does everyone love Frosty the Snowman? He's cool",
        "20 burpees bastardos",
        "https://www.youtube.com/embed/A8yn1osZQW4"
    ],
     [
        "What is white and minty? A polo bear!",
        "20m paseo del oso",
        "https://www.youtube.com/embed/HtArplPBMr8"
    ],
    [
        "What’s green, covered in tinsel and goes ribbet ribbet? A mistle-toad!",
        "20 elevaciones laterales de pierna (por lado)",
        "https://www.youtube.com/embed/l1pq3YA6t-8"
    ],
    [
        "How did Scrooge win the football game? The ghost of Christmas passed!",
        "20 flexiones en diamante",
        "https://www.youtube.com/embed/XtU2VQVuLYs"
    ],
    [
        "What’s the absolute best Christmas present? A broken drum — you can’t beat it!",
        "30 abdominales laterales",
        "https://www.youtube.com/embed/EjWY7_EkqKU"
    ],
     [
        "What type of cars do elves drive? Toy-otas!",
        "30 sentadilla con peso",
        "https://www.youtube.com/embed/f-Vf2yRRqOg"
    ],
    [   
        "La única manera de terminar algo, es empezándolo.",
        "40 burpees",
        "https://www.youtube.com/embed/auBLPXO8Fww"
    ]
]

cheatContent = [
    [
        "Santa says it isn't this day yet!",
        "assets/img/cheat1.jpg"
    ],
    [
        "Stop trying to sneak a look at days in the future!",
        "assets/img/cheat2.jpg"
    ],
    [
        "It still isn't this day yet!",
        "assets/img/cheat3.jpg"
    ]
]