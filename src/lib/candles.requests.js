import {
    collection, doc, getDocs , where , query, getDoc, addDoc
} from "firebase/firestore";
import {db} from "./config";


const CANDLES = [
    {
        title:"Vela Honey ",
        category:"velas",
        price: 100 ,
        description: "Una mezcla alegre y dulce de néctar, burbujeante de lima y ruibarbo maduro.Diseñadas con cuidado desde la cera hasta la mecha, coloca nuestras velas en cualquier lugar del hogar u oficina. Sólido en el exterior, moteado en el interior: esta cerámica angular tiene un suave cónico y un pie estriado para darle un toque de textura.", 
        img:"https://illumecandles.com/cdn/shop/products/46268007000_Verde_Ceramic_RhubarbHoney_Main-281684_1024x1024.jpg?v=1675989087",
        stock: 10,
    },
    {
        title:"Vela Black Pepper",
        category:"velas",
        price: 200 ,
        description: "Una curva especiada de pimienta, pachulí y ámbar cálido. Diseñado cuidadosamente desde la cera hasta la mecha, coloque nuestras velas en cualquier lugar y en todas partes en el hogar o la oficina.",
        img:"https://illumecandles.com/cdn/shop/products/45242001000_FarAway_DaydreamGlass_PicnicInThePark_Main-511114_1024x1024.jpg?v=1675285768",
        stock: 10,
    },
    {
        title:"Vela Lemon",
        category: "velas",
        price: 300 ,
        description: "Una mezcla acaramelada de cáscara de limón, raíz de jengibre y piña azucarada.Diseñada con cuidado desde la cera hasta la mecha, coloca nuestras velas en cualquier lugar y en todas partes en el hogar u oficina.Sólida en el exterior, salpicada en el interior: esta cerámica angular tiene una suave conicidad y un pie estriado para darle un toque de textura.",
        img:"https://illumecandles.com/cdn/shop/products/46268006000_Verde_Ceramic_GingerLemonYuzu_Main-824415_1024x1024.jpg?v=1675988924",
        stock: 10,
    },
    {
        title:"Vela Cerámica Hierba de la Pampa e Higo",
        category: "velas",
        price: 300 ,
        description: "Una mezcla frondosa de hierba de verano, higo fresco y rama de romero.",
        img:"https://illumecandles.com/cdn/shop/products/46268005000_Verde_Ceramic_PampasGrassFig_Main-476450_1024x1024.jpg?v=1675989086",
        stock: 10,
    },
    {
        title:"Vela de Cristal Báltico Terra Tabac",
        category: "velas",
        price: 300 ,
        description: "Fundida en un sutil almizcle de cachemira con un corazón de hoja de tabaco brillante y besada con una dulce y soleada naranja. Diseñada con cuidado desde la cera hasta la mecha, coloca nuestras velas en cualquier lugar y en todas partes en el hogar u oficina. Con un acabado besado por la sal, el cristal báltico es orgánico y suave en naturaleza, brindando un rico brillo cuando está encendido.",
        img:"https://illumecandles.com/cdn/shop/products/46267001000_BeautifullyDone_BalticGlass_TerraTabac_Main-507008_1024x1024.jpg?v=1677662700",
        stock: 10,
    },
    {
        title:"Vela de Cristal Báltico Citrus Crush",
        category: "velas",
        price: 300 ,
        description: "Basada en sándalo balsámico, con un corazón de frutas de verano mezcladas y besada con mandarina madurada al sol.Diseñada con cuidado desde la cera hasta la mecha, coloca nuestras velas en cualquier lugar y en todas partes en el hogar u oficina. Con un acabado besado por la sal, el cristal báltico es orgánico y suave en naturaleza, brindando un rico brillo cuando está encendido.",
        img:"https://illumecandles.com/cdn/shop/products/46267343000_BeautifullyDone_BalticGlass_CitrusCrush_Main-108595_1024x1024.jpg?v=1677662238",
        stock: 10,
    },
    {
        title:"Vela de Cristal Báltico Paloma ",
        category: "velas",
        price: 300 ,
        description: "Basada en reconfortante sándalo, con un corazón de magnolias florecientes y besada con un toque de toronja rosada.Diseñada con cuidado desde la cera hasta la mecha, coloca nuestras velas en cualquier lugar y en todas partes en el hogar u oficina. Con un acabado besado por la sal, el cristal báltico es orgánico y suave en naturaleza, brindando un rico brillo cuando está encendido.",
        img:"https://illumecandles.com/cdn/shop/products/46267023000_BeautifullyDone_BalticGlass_PalomaPetal_Main-344182_1024x1024.jpg?v=1677662496",
        stock: 10,
    },
    {
        title:"Vela de Cristal Báltico Hidden Lake ",
        category: "velas",
        price: 300 ,
        description: "Basada en exuberantes hojas verdes, con un corazón de lluvia recién caída y besada con un destello de limón.Diseñada con cuidado desde la cera hasta la mecha, coloca nuestras velas en cualquier lugar y en todas partes en el hogar u oficina. Con un acabado besado por la sal, el cristal báltico es orgánico y suave en naturaleza, brindando un rico brillo cuando está encendido.",
        img:"https://illumecandles.com/cdn/shop/products/46267002000_BeautifullyDone_BalticGlass_HiddenLake_Main-120310_1024x1024.jpg?v=1677662487",
        stock: 10,
    },
    {
        title:"Set de Regalo con tres velas",
        category: "velas",
        price: 400 ,
        description:"Encuentra tu favorita con un trío de latas, cada una con una escena pintada a mano, ideal para regalar y experimentar. Contiene una vela de cada una de las tres fragancias: Libro junto al fuego, Día en la Playa y Picnic en el Parque.Diseñada con cuidado desde la cera hasta la mecha, coloca nuestras velas en cualquier lugar y en todas partes en el hogar u oficina.",
        img:"https://illumecandles.com/cdn/shop/products/45244999000_FarAway_GiftSet_Alt3-700705_1024x1024.jpg?v=1675285670",
        stock: 10,
        },
    {
    title:"Portavela Ambar",
    category: "accesorios",
    price: 400 ,
    description:"La silueta redondeada le da al portavelas de vidrio ahumado soplado a mano un ambiente ligeramente retro. La llama baila a través del cristal cuando se usa con una vela, pero también nos gusta como un pequeño jarrón decorativo con flores secas o falsas. ",
    img:"https://cb2.scene7.com/is/image/CB2/CocoSmokedTealightHolderROF23/$web_pdp_main_carousel_md$/230320095027/coco-smoked-amber-glass-tealight-candle-holder.jpg",
    stock: 10,
    },
    {
    title:"Portavelas Acero",
    category: "accesorios",
    price: 400 ,
    description:"Originalmente creados para una firma de diseño italiana, estos portavelas huracán de Gianfranco Frattini combinan vidrio y acero inoxidable de una manera completamente lujosa. Juntos, la base de acero inoxidable pulido y el vidrio protector son casi escultóricos en su efecto unificado.",
    img:"https://cb2.scene7.com/is/image/CB2/BassaNAltaSSHrrcnGrpAVFHF22/$web_pdp_main_carousel_md$/220822174046/alta-and-bassa-stainless-steel-hurricane-candle-holders.jpg",
    stock: 10,
    },

        {
            title:"Difusor Ámbar",
            category: "difusores",
            price: 400 ,
            description:"Basada en un resplandor terroso ámbar, con un corazón de un mar veraniego y besada con rocío de lirio.Elaborado cuidadosamente con los aceites de fragancia de la más alta calidad, nuestros difusores aromáticos están diseñados para llenar el aire con fragancia.Con una forma moderna y un collar de cerámica blanca, este difusor de varillas es recargable con nuestro recambio de difusor sin alcohol de 6 oz que incluye suficiente aceite para dos usos duraderos. CONSEJO DE ESTILO: La altura del difusor combina perfectamente con nuestra lata de tocador demi para crear una colección de cápsulas para tu estantería o librero. Para crear una experiencia aromática aún más encantadora, coloca un tallo de planta seca en el difusor junto con las varillas.",
            img:"https://illumecandles.com/cdn/shop/products/45363004000_BeautifullyDone_Diffuser_IslaLily_Main-983238_847x1024.jpg?v=1677662499",
            stock: 10,
            },
            {
                title:"Difusor Picnic in the Park",
                category: "difusores",
                price: 400 ,
                description:"Un agradable rincón escondido bajo el sauce llorón, con yuzu, flor de piña y musgo. Elaborado cuidadosamente con los aceites de fragancia de la más alta calidad, nuestros difusores aromáticos están diseñados para llenar el aire con fragancia. Una botella de vidrio teñido en tonos pastel se encuentra dentro de una caja pintada a mano, lo suficientemente hermosa como para dejarla por sí sola en el estante, escritorio o librero.",
                img:"https://illumecandles.com/cdn/shop/products/45243001000_FarAway_MiniDiffuser_PicnicInThePark_Main-966179_1024x1024.jpg?v=1675285771",
                stock: 10,
                },
                {
                    title:"Aromatizador Park ",
                    category: "accesorios",
                    price: 400 ,
                    description:"Una mezcla vigorizante y terrosa de aceites esenciales puros y elementos completamente naturales con notas de bergamota, salvia y vetiver.Llena tu hogar con tu spray de ambiente favorito inspirado en la naturaleza. Fragancia totalmente natural elaborada con aceites esenciales puros. ",
                    img:"https://illumecandles.com/cdn/shop/products/illume_vetiver_sage_room_spray_main_jpg_1024x1024.jpg?v=1651078787",
                    stock: 10,
                    },
                    {
                        title:"Aromatizador Lavanda",
                        category: "accesorios",
                        price: 400 ,
                        description:"Una mezcla serena y terrosa de aceites esenciales puros y elementos completamente naturales con notas de enebro, eucalipto y lavandín.Llena tu hogar con tu spray de ambiente favorito inspirado en la naturaleza. Fragancia totalmente natural elaborada con aceites esenciales puros. ",
                        img:"https://illumecandles.com/cdn/shop/products/illume_cypress_lavender_room_spray_main_jpg_1024x1024.jpg?v=1651078785",
                        stock: 10,
                        },

]


const candlesRef = collection(db,"items");

export const getCandles = async(category) =>{
    const q = category ? query(candlesRef , where('category', '==' , category))
    : candlesRef;



    let candles = [];
    const querySnapshot = await getDocs (q);
   querySnapshot.forEach((doc) => {
    candles = [...candles, {...doc.data(), id: doc.id}];
   });
   return candles;
}


    export const getCandle = async (id) =>{

       const docum = doc(db , "items" , id);
       const documenSnap = await getDoc(docum);

       if(documenSnap.exists()) return {id: documenSnap.id, ...documenSnap.data()};
    }


    export const cargarProductos = async() =>{
        const querySnapshot= await getDocs(candlesRef);

        const titulo = new Set();
        querySnapshot.forEach((doc) =>{
            const {title} = doc.data();
            titulo.add(title);
        })

        CANDLES.forEach(async (candle) => {
            if (!titulo.has(candle.title)) {
            await addDoc(candlesRef, candle)
        }
    });

}