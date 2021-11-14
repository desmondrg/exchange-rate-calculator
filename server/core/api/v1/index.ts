import express from 'express';
import {currencyRouter} from './currencies/currency.router';

const router = new express.Router();

router.use('/currencies', currencyRouter);

export const  apiV1Router = router;
