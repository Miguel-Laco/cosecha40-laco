const data = [
    {
        id: "1", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Altura Máxima", category: "Malbec", precio: "100", img:`/img/colome/1.png`, bodega: "Colome", estrellas: "4", info: "Hace 180 años, en los viñedos de los Altos Valles Calchaquíes, Salta, nacía Bodega Colomé. Hoy, quienes disfrutan de sus exclusivos vinos, Altura Máxima, Malbec Auténtico, Malbec Estate, Torrontés Estate y Lotes Especiales reconocen la verdadera esencia de los vinos elaborados con la más alta calidad y cultivados en los viñedos más altos del mundo"
    },
    {
        id: "2", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Amalaya", category: "Rosado",precio: "100", img:`/img/colome/2.png`, bodega: "Colome", estrellas: "4", info: "Hace 180 años, en los viñedos de los Altos Valles Calchaquíes, Salta, nacía Bodega Colomé. Hoy, quienes disfrutan de sus exclusivos vinos, Altura Máxima, Malbec Auténtico, Malbec Estate, Torrontés Estate y Lotes Especiales reconocen la verdadera esencia de los vinos elaborados con la más alta calidad y cultivados en los viñedos más altos del mundo"
    },
    {
        id: "3", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Amalaya", category: "Malbec", precio: "100", img:`/img/colome/3.png`, bodega: "Colome", estrellas: "4", info: "Hace 180 años, en los viñedos de los Altos Valles Calchaquíes, Salta, nacía Bodega Colomé. Hoy, quienes disfrutan de sus exclusivos vinos, Altura Máxima, Malbec Auténtico, Malbec Estate, Torrontés Estate y Lotes Especiales reconocen la verdadera esencia de los vinos elaborados con la más alta calidad y cultivados en los viñedos más altos del mundo"
    },
    {
        id: "4", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Colomé", category: "Malbec", precio: "100", img:`/img/colome/4.png`, bodega: "Colome", estrellas: "4", info: "Hace 180 años, en los viñedos de los Altos Valles Calchaquíes, Salta, nacía Bodega Colomé. Hoy, quienes disfrutan de sus exclusivos vinos, Altura Máxima, Malbec Auténtico, Malbec Estate, Torrontés Estate y Lotes Especiales reconocen la verdadera esencia de los vinos elaborados con la más alta calidad y cultivados en los viñedos más altos del mundo"
    },
    {
        id: "5", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Colomé", category: "Malbec", precio: "100", img:`/img/colome/5.png`, bodega: "Colome", estrellas: "4", info: "Hace 180 años, en los viñedos de los Altos Valles Calchaquíes, Salta, nacía Bodega Colomé. Hoy, quienes disfrutan de sus exclusivos vinos, Altura Máxima, Malbec Auténtico, Malbec Estate, Torrontés Estate y Lotes Especiales reconocen la verdadera esencia de los vinos elaborados con la más alta calidad y cultivados en los viñedos más altos del mundo"
    },
    {
        id: "6", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Los Intocables", category: "Malbec", precio: "100", img:`/img/lasMoras/1.png`, bodega: "Finca las Moras", estrellas: "4", info:"Finca Las Moras es pionera en la elaboración de vinos de alta gama del Valle de Pedernal. Hoy, con una propuesta innovadora y audaz, es una de las más bodegas más grandes de Argentina y exporta a más de 70 países. Sus vinos, atractivos y modernos, marcan tendencia en la enología argentina y le otorgan proyección internacional que crece con cada cosecha"
    },
    {
        id: "7", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Las Moras", category: "Malbec", precio: "100", img:`/img/lasMoras/2.png`, bodega: "Finca las Moras", estrellas: "4", info:"Finca Las Moras es pionera en la elaboración de vinos de alta gama del Valle de Pedernal. Hoy, con una propuesta innovadora y audaz, es una de las más bodegas más grandes de Argentina y exporta a más de 70 países. Sus vinos, atractivos y modernos, marcan tendencia en la enología argentina y le otorgan proyección internacional que crece con cada cosecha"
    },
    {
        id: "8", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Alma Mora", category: "Malbec", precio: "100", img:`/img/lasMoras/3.png`, bodega: "Finca las Moras", estrellas: "4", info:"Finca Las Moras es pionera en la elaboración de vinos de alta gama del Valle de Pedernal. Hoy, con una propuesta innovadora y audaz, es una de las más bodegas más grandes de Argentina y exporta a más de 70 países. Sus vinos, atractivos y modernos, marcan tendencia en la enología argentina y le otorgan proyección internacional que crece con cada cosecha"
    },
    {
        id: "9", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Finca las Moras", category: "Malbec", precio: "100", img:`/img/lasMoras/4.png`, bodega: "Finca las Moras", estrellas: "4", info:"Finca Las Moras es pionera en la elaboración de vinos de alta gama del Valle de Pedernal. Hoy, con una propuesta innovadora y audaz, es una de las más bodegas más grandes de Argentina y exporta a más de 70 países. Sus vinos, atractivos y modernos, marcan tendencia en la enología argentina y le otorgan proyección internacional que crece con cada cosecha"
    },
    {
        id: "10", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Bramare", category: "Malbec", precio: "100", img:`/img/cobos/1.png`, bodega: "Cobos", estrellas: "4", info:"Viña Cobos elabora vinos que expresan naturalmente el terruño del que provienen. Desde la primera cosecha de Cobos Malbec en 1999, Viña Cobos ha marcado un hito en la vitivinicultura, desafiando los límites de la calidad para ubicar a la Argentina al lado de los grandes productores del mundo. Actualmente su prestigio es reconocido tanto por la crítica como por los consumidores alrededor del mundo."
    },
    {
        id: "11", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Cocodrilo", category: "Red Blend", precio: "100", img:`/img/cobos/2.png`, bodega: "Cobos", estrellas: "4", info:"Viña Cobos elabora vinos que expresan naturalmente el terruño del que provienen. Desde la primera cosecha de Cobos Malbec en 1999, Viña Cobos ha marcado un hito en la vitivinicultura, desafiando los límites de la calidad para ubicar a la Argentina al lado de los grandes productores del mundo. Actualmente su prestigio es reconocido tanto por la crítica como por los consumidores alrededor del mundo."
    },
    {
        id: "12", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Felino", category: "Malbec", precio: "100", img:`/img/cobos/3.png`, bodega: "Cobos", estrellas: "4", info:"Viña Cobos elabora vinos que expresan naturalmente el terruño del que provienen. Desde la primera cosecha de Cobos Malbec en 1999, Viña Cobos ha marcado un hito en la vitivinicultura, desafiando los límites de la calidad para ubicar a la Argentina al lado de los grandes productores del mundo. Actualmente su prestigio es reconocido tanto por la crítica como por los consumidores alrededor del mundo."
    },
    {
        id: "13", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Famiglia Bianchi", category: "Malbec", precio: "100", img:`/img/bianchi/famigliaM.png`, bodega: "Bianchi", estrellas: "4", info:"Los vinos de Bodegas Bianchi son fieles exponentes de los mejores terroirs de la Argentina. Ofrecemos variedad y excelencia a los consumidores respetando la filosofía de buscar incansablemente el terruño ideal para cada vino. El principio que guía a nuestros enólogos es hacer vinos únicos en los que prevalezcan la tipicidad de la fruta y las características de su lugar de origen."
    },
    {
        id: "14", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Famiglia Bianchi", category: "Cabernet", precio: "100", img:`/img/bianchi/famigliaC.png`, bodega: "Bianchi", estrellas: "4", info:"Los vinos de Bodegas Bianchi son fieles exponentes de los mejores terroirs de la Argentina. Ofrecemos variedad y excelencia a los consumidores respetando la filosofía de buscar incansablemente el terruño ideal para cada vino. El principio que guía a nuestros enólogos es hacer vinos únicos en los que prevalezcan la tipicidad de la fruta y las características de su lugar de origen."
    },
    {
        id: "15", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Angelica Zapata", category: "Malbec", precio: "100", img:`/img/angelicaZapata/angelicaZapataM.png`, bodega: "Catena Zapata", estrellas: "4", info: "Los vinos Angélica Zapata se obtienen a partir de uvas provenientes de viñedos plantados al pie de la montaña, a una altitud de entre 1.000 y 1.200 metros sobre el nivel del mar. Dedicamos muchos años a la búsqueda del “terroir” que permitiría lograr la máxima concentración de aromas y sabores y fuimos pioneros en precisar cuáles eran las alturas óptimas del Pedemonte mendocino para cada varietal de uvas."
    },
    {
        id: "16", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "Angelica Zapata", category: "Cabernet", precio: "100", img:`/img/angelicaZapata/angelicaZapataC.png`, bodega: "Catena Zapata", estrellas: "4", info: "Los vinos Angélica Zapata se obtienen a partir de uvas provenientes de viñedos plantados al pie de la montaña, a una altitud de entre 1.000 y 1.200 metros sobre el nivel del mar. Dedicamos muchos años a la búsqueda del “terroir” que permitiría lograr la máxima concentración de aromas y sabores y fuimos pioneros en precisar cuáles eran las alturas óptimas del Pedemonte mendocino para cada varietal de uvas."
    },
    {
        id: "17", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "El Enemigo", category: "Malbec", precio: "100", img:`/img/elEnemigo/elEnemigoM.png`, bodega: "El Enemigo", estrellas: "4", info:"El Enemigo, nace cuando Alejandro Vigil y Adrianna Catena, hija menor de Nicolás, decidieron crear la bodega Aleanna, para rescatar algunas de las olvidadas técnicas tradicionales de la vitivinicultura argentina. El objetivo final es, según Alejandro Vigil, obtener un vino con la intervención mínima posible, un vino transparente en el que la mano del enólogo no deje huella, sino que en todo caso sirva para interpretar las particularidades de cada terruño."
    },
    {
        id: "18", maridaje1:"/img/comida/ternera.png", maridaje2:"/img/comida/aves.png", stock: "5", title: "El Enemigo", category: "Cabernet", precio: "100", img:`/img/elEnemigo/elEnemigoC.png`, bodega: "El Enemigo", estrellas: "4", info:"El Enemigo, nace cuando Alejandro Vigil y Adrianna Catena, hija menor de Nicolás, decidieron crear la bodega Aleanna, para rescatar algunas de las olvidadas técnicas tradicionales de la vitivinicultura argentina. El objetivo final es, según Alejandro Vigil, obtener un vino con la intervención mínima posible, un vino transparente en el que la mano del enólogo no deje huella, sino que en todo caso sirva para interpretar las particularidades de cada terruño."
    },
]

export {data};