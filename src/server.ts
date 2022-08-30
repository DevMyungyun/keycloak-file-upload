import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import pool from './dbconfig/dbconnector';
import FileDirectoryCheck from './helper/fileDirectory';

import indexRouter from './routers/indexRouter';
import uploadRouter from './routers/uploadRouter';

import logger from './middleware/logger';
// import path from 'path';


const uploadfileDirectory: String = "C:\\tmp\\myc\\upload";

// console.log(`${process.env}`);
// console.log(`${process.env.SERVER_PORT}`);


class Server {
    private app;

    constructor() {
        this.app = express();
        this.middleware();
        this.config();
        this.routerConfig();
        this.fileDirectoryCheck();
        // this.dbConnect();
        
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ limit: '100mb',
                                            parameterLimit: 100000,
                                            extended: false  }));
        this.app.use(bodyParser.json({ limit: '100mb' })); // Request Size Setting
    }

    private fileDirectoryCheck() {
        FileDirectoryCheck(uploadfileDirectory);
    }

    private dbConnect() {
        pool.connect(function (err: any, client, done) {
            if (err) throw new Error(err);
            console.log('DB Connected');
          }); 
    }

    private routerConfig() {
        this.app.use('/', indexRouter);
        this.app.use('/upload', uploadRouter);
    }

    private middleware() {
        this.app.use(logger);
    }

    // private assets() {
    //     this.app.use(express.static('public'));
    //     this.app.use(express.static('views'));
    // }

    // private template() {
    //     this.app.set('view engine', 'ejs');
    // }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;