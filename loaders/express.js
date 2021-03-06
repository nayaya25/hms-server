const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

exp = async ({ app }) => {

    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');
    app.use(cors());
   
    app.use(require('morgan')('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
        
    return app;
};

module.exports = exp