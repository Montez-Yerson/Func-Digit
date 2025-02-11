import express from 'express'
import { dirname, join} from 'path';

import { fileURLToPath } from 'url';

const app= express()
const __dirname= dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname,'views'))
app.set('view engine','ejs')

app.listen(3000)
console.log("El servidor está siendo escuchado en el puerto, 3000")