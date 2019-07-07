import Mariadb from "mariadb";

const pool = Mariadb.createPool({
    host: 'localhost',
    port: 32772,
    user:'root',
    password: 'root',
    connectionLimit: 5,
    database: "Query"
});

const getConnection = async () => {
    return await pool.getConnection();
};

export let connection: Mariadb.Connection;


export const init = async () => {
    connection = await getConnection();
};