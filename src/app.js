import express from 'express';
import appConfig from './config/appConfig';
import appErrorHandler from './config/appErrorHandler';
//routes import
import index from './routes/admin/index';
import auth from './routes/admin/auth';
import user from './routes/admin/user';
import report from './routes/admin/report';
import apiAuth from './routes/api/auth';
import apiRescue from './routes/api/rescue';
import apiProfile from './routes/api/profile';

const app = express();

appConfig(app);

//routes setup
app.use('/', index);
app.use('/auth',auth);
app.use('/user', user);
app.use('/report', report);
//api routes setup
app.use('/api/auth', apiAuth);
app.use('/api/report', apiReport);
app.use('/api/rescue', apiRescue);
app.use('/api/profile', apiProfile);

appErrorHandler(app);

export default app;