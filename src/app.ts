import createError from 'http-errors';
import express from 'express';

// const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/users', usersRouter);
app.use((req, res, next) => {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err);
});

export default app;
