import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "21221",
    database: "notas",
});
 

/* import { Pool } from 'pg';

export const pool = new Pool({
    user: 'bagbmxt',
    host: 'dpg-cm3gnji1hbls73a6n84g-a',
    database: 'api_0avu',
    password: '20Xh7WZJsxvcRYHplUhNb19jGizslbYP',
    port: 5432, // Default PostgreSQL port
});
 */