import express, { Router } from 'express';
// import indexController from '../controllers/indexController';

const router = Router();
// const IndexController = new indexController();

router.get('/health-check', (req, res) => {
    res.send({"status": "OK", "descryption": "Health Check Success."});
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
});

router.get('/logout', (req, res) => {
    res.send({"status": "OK", "descryption": "this is logout page."});
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
});

export default router;