import  express  from 'express';
import path from 'path';
import 'dotenv/config.js';
import './config/database.js' ;

import cookieParser from 'cookie-parser';

import logger from 'morgan'

import indexRouter from './routes/index.js'

import usersRouter from './routes/users.js'

import { __dirname } from './utils.js';

let app = express();


// view engine setup -> set = configurar
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//cada vez que se usa use estoy usando midelwares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//aca se usan midelwares para enrutar las rutas
app.use('/', indexRouter);//aca se esta usando la url base
app.use('/users', usersRouter);//el primer  parametro es el endpoint y el segundo es la ruta(el recuro)que en este caso es la ruta  de los usuarios(es el recurso)


export default app;
