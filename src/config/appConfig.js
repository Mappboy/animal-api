import { static as estatic } from 'express';
import { join } from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';
import expressHbs from 'express-handlebars';
import Sequelize from 'sequelize';
const apiPassport = require("./passportApi").default();
import validator from 'express-validator';
import session from 'express-session';
import flash from 'connect-flash';
import { initialize, session as _session } from 'passport';
import { database, jwtSecret } from './main';
import {add,isFirstPage,isLastPage, hasRescue} from '../helpers/hbsHelper';


export default function(app) {

    // assign mongoose promise to global promise
    // mongoose.Promise = global.Promise;
    sequelize = new Sequelize(...database, {
        // gimme postgres, please!
        dialect: 'postgres'
      })

    // call passport web config
    require('./passport');
    const hbs = expressHbs({defaultLayout: 'layout', extname: '.hbs'})
    hbs.registerHelper('add', add)
    hbs.registerHelper('isFirstPage', isFirstPage)
    hbs.registerHelper('isLastPage', isLastPage)
    hbs.registerHelper('hasRescue', hasRescue)
    // view engine setup
    app.engine('.hbs', );
    app.set('view engine', 'hbs');

    app.use(favicon(join(__dirname, '..', 'public', 'favicon.ico')));
    app.use(logger('dev'));
    // parse http post body
    app.use(json());
    app.use(urlencoded({ limit: '50mb', extended: true }));
    //use express validator
    app.use(validator());
    app.use(cookieParser());
    //conf session
    app.use(session({
        secret: jwtSecret,
        resave: false,
        saveUninitialized: false
    }));
    //use connect flash for flash messages
    app.use(flash());
    //initialize passport and passport session
    app.use(initialize());
    app.use(_session());
    //conf static files
    app.use(estatic(join(__dirname, '../public')));
    app.use(apiPassport.initialize());

    //set global variable
    app.use(function(req, res, next){
        res.locals.login = req.isAuthenticated();
        res.locals.user = req.session.passport ? req.session.passport.user : null;
        res.locals.errors = req.flash('error');
        res.locals.messages = req.flash('messages');
        next();
    });

};