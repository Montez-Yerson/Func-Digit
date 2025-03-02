import pg from 'pg';
import bcrypt from 'bcrypt';
const {Client} =pg;


const config={
    user: 'yerson_user',
    password: 'l2DVTHgkYCVukRWricqG0rJfzO6ykork',
    database: 'yerson',
    host: 'dpg-cv0c4kbqf0us7395gmh0-a.oregon-postgres.render.com',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
}
export async function Conectar(){
    const cliente = new Client(config)
    try{
        await cliente.connect()
        console.log('Conexión exitosa')
    }catch(error){
        console.log(error)
    }
}

export async function ConsultarProductos(){
    const cliente = new Client(config)
    try{
        await cliente.connect()
        const resultado = await cliente.query('SELECT * FROM productos')
        return resultado.rows
    }catch(error){
        console.log(error)
    }
}


export async function RegistrarCliente(username, password, email) {
    const cliente = new Client(config); // Crear una nueva instancia del cliente de PostgreSQL
    try {
        await cliente.connect(); // Conectar a la base de datos

        // Verificar si el usuario o el correo ya existen
        const verificarQuery = 'SELECT * FROM cliente WHERE username = $1 OR email = $2';
        const verificarValores = [username, email];
        const verificarResultados = await cliente.query(verificarQuery, verificarValores);

        if (verificarResultados.rows.length > 0) {
            return { success: false, message: 'El usuario o correo ya están registrados' };
        }

        // Hashear la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insertar el nuevo cliente
        const insertQuery = `
            INSERT INTO cliente (username, password, email)
            VALUES ($1, $2, $3) RETURNING id, username, email;
        `;
        const insertarValores = [username, hashedPassword, email];
        const insertarResultado = await cliente.query(insertQuery, insertarValores);

        return {
            success: true,
            message: 'Cliente registrado de manera exitosa',
            user: insertarResultado.rows[0],
        };
    } catch (error) {
        console.error('Error en la función RegistrarCliente:', error);
        return {
            success: false,
            message: 'Error en el servidor',
        };
    } finally {
        await cliente.end(); // Cerrar la conexión a la base de datos
    }
}