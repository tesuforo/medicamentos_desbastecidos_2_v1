import { createPool } from 'mysql2/promise'


export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password :'89javier',
    database : 'DB_LINK'


})
