import createError from 'http-errors';
import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('combined'));

app.use('/', router);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
});

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    res.status(err.status || 500);
    res.send(err);
});

/**
 * @todo: Add a handler for uncaught exceptions
 * @body {@link https://expressjs.com/en/guide/error-handling.html}
 */
export default app;
