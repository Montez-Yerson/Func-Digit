import pg from 'pg';
const {Client} =pg;

const config={
    user: 'db_saboresoro_user',
    password: 'ZUJHvlLt6ZlvXNO9WVh47t5NEKOBbnWO',
    database: 'db_saboresoro',
    host: 'dpg-cur85etds78s73buhl0g-a.oregon-postgres.render.com',
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
