import { createPool } from 'mysql2/promise'


export const pool = createPool({
    host: '5.183.11.6',
    port: 3306,
    user: 'root',
    password :'89javier',
    database : 'DBLINK'


})
