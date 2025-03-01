import express from 'express'
import { dirname, join} from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import { Conectar } from './public/services/conexion.js';

const app= express()
app.use(express.json());
const __dirname= dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname,'views'))
app.set('view engine','ejs')
app.use(router)
app.use(express.static(join(__dirname,'public')))
app.listen(3000)
Conectar()
console.log("El servidor está siendo escuchado en el puerto, 3000")
//middleware