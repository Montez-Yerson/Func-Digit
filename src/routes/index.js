import {Router} from 'express'
import { ConsultarProductos } from '../public/services/conexion.js'

const router = Router()

router.get('/',(req,res)=>{
    res.render('index', {title: 'Inicio'})
})

router.get('/about',(req,res)=>{
    res.render('about', {title: 'Sobre Nosotros'})
})

router.get('/contact',(req,res)=>{
    res.render('contact', {title: 'Contáctanos'})
})

router.get('/bot',(req,res)=>{
    res.render('bot', {title: 'Charla con el bot'})
})

router.get('/catalogo',(req,res)=>{
    res.render('catalogo', {title: 'Catálogo de productos'})
})

router.get('/api/get-productos', async (req,res)=>{
    const productos = await ConsultarProductos();
    res.status(200).json(productos)
})

router.get('api/register')

export default router