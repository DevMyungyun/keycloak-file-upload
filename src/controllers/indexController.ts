// import pool from '../dbconfig/dbconnector';
// import indexSql from '../sql/indexSql';

class indexController {

    constructor() {}

    public async get(req, res) {
        res.send({"status": "OK", "descryption": "Health Check Success."})
        // try {
        //     const client = await pool.connect();

        //     const sql = indexSql.test();
        //     const {
        //         rows
        //     } = await client.query(sql);
        //     const todos = rows;

        //     client.release();

        //     res.send(todos);
        // } catch (error) {
        //     console.log(error);
        //     res.status(400).send(error);
        // }
    }

    
}

export default indexController;