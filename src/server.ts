import express, { Application, Router } from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import Keycloak from 'keycloak-connect';
import cors from 'cors';

import pool from './dbconfig/dbconnector';
import FileDirectoryCheck from './helper/fileDirectory';

import indexRouter from './routers/indexRouter';
import uploadRouter from './routers/uploadRouter';

import logger from './middleware/logger';
// import path from 'path';


const uploadfileDirectory: String = "C:\\tmp\\myc\\upload";
// console.log(`${process.env}`);
// console.log(`${process.env.SERVER_PORT}`);

const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({
                                store: memoryStore
                            });

class Server {
    private app;

    constructor() {
        this.app = express();
        this.sessionManage();
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
        this.app.use(cors());
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
        this.app.use('/upload', keycloak.protect('realm:myc'), uploadRouter);
    }

    private middleware() {
        this.app.use(logger);
        this.app.use(keycloak.middleware({
            logout: '/logout',
            admin: 'http://keycloak.k8s.com:31080/admin'
        }));
    }

    private sessionManage() {
        this.app.use(session({
            secret: 'myc-session',
            resave: false,
            saveUninitialized: true,
            store: memoryStore
        }));
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