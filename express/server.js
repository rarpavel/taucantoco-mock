'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const sexMock = require('./mock/sex');


const mock1 = [
	{
		value: 2,
		date: '01.01.2020'
	},
	{
		value: 5,
		date: '02.01.2020'
	},
	{
		value: 3,
		date: '03.01.2020'
	}
];

const router = express.Router();
router.get('/', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<h1>Hello from Express.js!</h1>');
	res.end();
});
router.get('/another', (req, res) => res.json(mock1));
router.get('/sex', (req, res) => res.json(sexMock));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda
//app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

module.exports = app;
module.exports.handler = serverless(app);