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
		value: 2000,
		type: 'Total_peripherique'
	},
	{
		date: 'Feb 2019',
		value: 2300,
		type: 'Total_peripherique'
	},
	{
		date: 'Apr 2019',
		value: 2800,
		type: 'Total_peripherique'
	},
	{
		date: 'May 2019',
		value: 2100,
		type: 'Total_peripherique'
	},
	{
		date: 'Jun 2019',
		value: 1500,
		type: 'Total_peripherique'
	},
	{
		date: 'Jul 2019',
		value: 1100,
		type: 'Total_peripherique'
	},
	{
		date: 'Aug 2019',
		value: 1600,
		type: 'Total_peripherique'
	},
	{
		date: 'Sep 2019',
		value: 1900,
		type: 'Total_peripherique'
	},
	{
		date: 'Oct 2019',
		value: 1950,
		type: 'Total_peripherique'
	},
	{
		date: 'Now 2019',
		value: 2950,
		type: 'Total_peripherique'
	},
	{
		date: 'Dec 2019',
		value: 2250,
		type: 'Total_peripherique'
	},
	{
		date: 'Jan 2019',
		value: 2100,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Feb 2019',
		value: 2200,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Apr 2019',
		value: 2800,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'May 2019',
		value: 2150,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Jun 2019',
		value: 1400,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Jul 2019',
		value: 1200,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Aug 2019',
		value: 1700,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Sep 2019',
		value: 1800,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Oct 2019',
		value: 1350,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Now 2019',
		value: 2850,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Dec 2019',
		value: 2290,
		type: 'Total_peripherique N-1'
	}
]

const peripheralLeaderMock = [
	{
		label: 'Transport',
		value: 3921
	},
	{
		label: 'Ticket Restau',
		value: 3923
	},
	{
		label: 'Mutuelle',
		value: 1962
	},
	{
		label: 'PERCO',
		value: 1608
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
router.get('/peripheralLeader', (req, res) => res.json(peripheralLeaderMock));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda
//app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

module.exports = app;
module.exports.handler = serverless(app);