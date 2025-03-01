import {Router} from 'express'
import { ConsultarProductos, RegistrarCliente } from '../public/services/conexion.js'
import bodyParser from 'body-parser'

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

router.get('/registro',(req,res)=>{
    res.render('registrarCliente', {title: 'Registro del cliente'})
})


router.get('/api/get-productos', async (req,res)=>{
    const productos = await ConsultarProductos();
    res.status(200).json(productos)
});


router.post('/api/register', async (req, res) => {
    const { username, password, email } = req.body;
 
    
    if (!username || !password || !email) {
        return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
    }
 
    
    const resultado = await RegistrarCliente(username, password, email);
 
    if (resultado.success) { 
        res.status(201).json(resultado);
    } else {
        res.status(400).json(resultado);
    }
 });
 
 
 router.use(bodyParser.urlencoded({ extended: true }));
 router.use(bodyParser.json());

export default router