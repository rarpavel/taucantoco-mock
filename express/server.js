'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
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

const sexMock = [
	{
		date: '01.01.2020',
		male: 2,
		female: 4
	},
	{
		date: '02.01.2020',
		male: 4,
		female: 2
	},
	{
		date: '03.01.2020',
		male: 5,
		female: 8
	},
	{
		date: '04.01.2020',
		male: 3,
		female: 5
	}
]

const reductionMock = [
	{
		month: 'Jan',
		value: 1000
	},
	{
		month: 'Beb',
		value: 1100
	},
	{
		month: 'Mar',
		value: 1150
	},
	{
		month: 'Apr',
		value: 950
	},
	{
		month: 'May',
		value: 300
	},
	{
		month: 'Jun',
		value: 1300
	},
	{
		month: 'Jul',
		value: 800
	},
	{
		month: 'Aug',
		value: 875
	},
	{
		month: 'Sep',
		value: 1000
	},
	{
		month: 'Oct',
		value: 1100
	},
	{
		month: 'Nov',
		value: 1200
	},
	{
		month: 'Dec',
		value: 1300
	}
]

const peripheralMock = [
	{
		date: 'Jan 2019',
		value1: 2000,
		value2: 2300
	},
	{
		date: 'Feb 2019',
		value1: 2300,
		value2: 2100
	},
	{
		date: 'Apr 2019',
		value1: 2800,
		value2: 2400
	},
	{
		date: 'May 2019',
		value1: 2100,
		value2: 2300
	},
	{
		date: 'Jun 2019',
		value1: 1500,
		value2: 2100
	},
	{
		date: 'Jul 2019',
		value1: 1100,
		value2: 1400
	},
	{
		date: 'Aug 2019',
		value1: 1600,
		value2: 2400
	},
	{
		date: 'Sep 2019',
		value1: 1900,
		value2: 1400
	},
	{
		date: 'Oct 2019',
		value1: 1950,
		value2: 1900
	},
	{
		date: 'Now 2019',
		value1: 2950,
		value2: 2900
	},
	{
		date: 'Dec 2019',
		value1: 2250,
		value2: 2200
	}
]

const router = express.Router();
router.get('/', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<h1>Hello from Express.js!</h1>');
	res.end();
});
router.get('/another', (req, res) => res.json(mock1));
router.get('/sex', (req, res) => res.json(sexMock));
router.get('/reduction', (req, res) => res.json(reductionMock));
router.get('/peripheral', (req, res) => res.json(peripheralMock));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda
//app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

module.exports = app;
module.exports.handler = serverless(app);