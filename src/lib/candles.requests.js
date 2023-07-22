const CANDLES = [
    {
        id:1,
        title:"Vela Home Office",
        category:"Velas",
        price: 100 ,
        description: "Los nenúfares y el pachulí traen el aire libre. Canela energizante complementada con notas relajantes de ámbar y vainilla. Notas principales: aire fresco, nenúfares, ámbar, Notas medias: Oud, canela, pétalos de heliotropo, Notas de fondo: pachulí, madera de gaiac, vainilla ",
        img:"https://homesick.com/cdn/shop/products/HMS.HomeOffice.Candle.Ecom.2_620x620.jpg?v=1602727663",
        stock: 10,
    },
    {
        id:2,
        title:"Vela Bonfire Nights",
        category:"Velas",
        price: 200 ,
        description: "El calor irradia de un fuego crepitante y los amigos reunidos a su alrededor. Notas de brasas ahumadas y malvaviscos perfectamente tostados llenan el aire. Notas principales: brasas ahumadas, clavo, cedro . Notas medias: palo santo, incienso, hojas de pino. Notas de fondo: vainilla, mirra negra, madera de gaiac",
        img:"https://homesick.com/cdn/shop/products/HMS.BonfireNights.Candle.Ecom.1_620x620.jpg?v=1654117791",
        stock: 10,
    },
    {
        id:3,
        title:"Vela Snow Day",
        category: "Velas",
        price: 300 ,
        description: "Copos de nieve que aterrizan en las mejillas y se derriten en sonrisas. Recuerda interminables horas de ángeles de nieve y trineos con notas de hojas verdes de invierno y almizcle blanco. Notas de Salida: Crisp Air, Picea, Vainilla. Notas medias: menta escarchada, enebro, amarilis roja . Notas de fondo: santal, almizcle blanco, azúcar moreno",
        img:"https://homesick.com/cdn/shop/products/HMS.SnowDay.Candle.Ecom.1_620x620.jpg?v=1655327174",
        stock: 10,
    },
    {
    id:4,
    title:"Portavela de vidrio Ambar",
    category: "Accesorios",
    price: 400 ,
    description:"La silueta redondeada le da al portavelas de vidrio ahumado soplado a mano un ambiente ligeramente retro. La llama baila a través del cristal cuando se usa con una vela, pero también nos gusta como un pequeño jarrón decorativo con flores secas o falsas. ",
    img:"https://cb2.scene7.com/is/image/CB2/CocoSmokedTealightHolderROF23/$web_pdp_main_carousel_md$/230320095027/coco-smoked-amber-glass-tealight-candle-holder.jpg",
    stock: 10,
    },
    {
    id:5,
    title:"Portavelas de acero inoxidable",
    category: "Accesorios",
    price: 400 ,
    description:"Originalmente creados para una firma de diseño italiana, estos portavelas huracán de Gianfranco Frattini combinan vidrio y acero inoxidable de una manera completamente lujosa. Juntos, la base de acero inoxidable pulido y el vidrio protector son casi escultóricos en su efecto unificado.",
    img:"https://cb2.scene7.com/is/image/CB2/BassaNAltaSSHrrcnGrpAVFHF22/$web_pdp_main_carousel_md$/220822174046/alta-and-bassa-stainless-steel-hurricane-candle-holders.jpg",
    stock: 10,
    },
    {
    id:6,
    title:"Difusor New York",
    category: "Difusores",
    price: 400 ,
    description:"Los aromas distintivos de los días de primavera en Central Park, los grandes almacenes y el cemento capturan la energía de la ciudad más grande del mundo.Notas de cabeza: bergamota, limón, pomelo . Notas medias: jazmín, hormigón, nenúfares . Notas de fondo: musgo de roble, sándalo, almizcle",
    img:"https://homesick.com/cdn/shop/products/HMS.NewYorkCity.ReedDiffuser.Ecom.1_620x620.jpg?v=1614737680",
    stock: 10,
    },
    {
    id:7,
    title:"Difusor Home Office",
    category: "Difusores",
    price: 400 ,
    description:"Los nenúfares y el pachulí traen el aire libre. Canela energizante complementada con notas relajantes de ámbar y vainilla.Notas de salida: aire fresco, nenúfares, ámbar Notas medias: Oud, canela, pétalos de heliotropo . Notas de fondo: pachulí, madera de gaiac, vainilla",
    img:"https://homesick.com/cdn/shop/products/HMS.ReedDiffuserLight.HomeOffice.Ecom1_620x620.jpg?v=1616179508",
    stock: 10,
    }

]

export const getCandles= (id) =>{
    const _candles = id ? CANDLES.filter((candle) => candle.category.toLowerCase() === id) : CANDLES;

    return new Promise((res) =>{
        setTimeout(() =>{
         res(_candles);   
        },1500);
    }
    )
}


    export const getCandle = (id) =>{
        const candle = CANDLES.filter((candle) => candle.id === id) [0]; 

    return new Promise ((res) =>{
        setTimeout(() =>{
            res(candle);
        },1500);
    });

}