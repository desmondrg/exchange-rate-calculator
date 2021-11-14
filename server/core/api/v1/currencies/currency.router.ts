import express from 'express';
import {currencyService} from './currency.service';

const router = new express.Router();

// get all the currencies and return them in json format
router.get('', (req, res, next) => {

    return res.status(200).json(currencyService.findAll());
});

export const currencyRouter = router;