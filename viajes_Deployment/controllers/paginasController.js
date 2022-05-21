import {Viaje} from '../models/Viaje.js'
import {Testimonial} from '../models/Testimoniales.js'
const paginaInicio = async (req,res) => {

    //Se consulta 3 viajes del modelo Viaje

    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}))
    
    try {

        const resultado = await Promise.all(promiseDB)
        

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        } );

    }catch(error) {
        console.log(error);
    }

}

const paginaViajes = async(req,res) => {

    // Se consulta la base de datos
    const consultaViajes = await Viaje.findAll();
    
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes: consultaViajes
    });
}
const paginaNosotros = (req,res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaTestimoniales = async (req,res) => {

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    }catch(error) {
        console.log(error)
    }

}


//Mostrar informacion de viaje dependiendo el slug
const paginaDetallesViaje = async (req, res) => {
    const {slug} = req.params;
    try {
        const viaje = await Viaje.findOne({where : {slug} });

        res.render('viaje', {
            pagina: 'Información del Viaje',
            viaje
        })
    } catch (error){
        console.log(error);
    }
}

export {
    paginaInicio, paginaViajes, paginaNosotros, paginaTestimoniales,
    paginaDetallesViaje
}