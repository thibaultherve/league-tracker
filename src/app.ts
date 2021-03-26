import config from './config/config';
import logging from './config/logging';

import mongoose from 'mongoose';


const NAMESPACE = 'Server';


console.log(config.mongo.url)
/* Connexion à la base de données : MongoDB */
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        logging.info(NAMESPACE, 'Mongo Connected');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    });