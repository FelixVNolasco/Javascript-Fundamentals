import express from 'express';
import { paginaInicio, paginaViajes, paginaNosotros, paginaTestimoniales, paginaDetallesViaje} from '../controllers/paginasController.js'
import {guardarTestimonial} from '../controllers/testimonialController.js'
const router = express.Router();

router.get('/', paginaInicio);
router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetallesViaje);

router.get('/nosotros', paginaNosotros);
router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);

export default router;