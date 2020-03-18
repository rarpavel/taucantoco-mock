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
		date: 'Jan 2019',
		value: 2000,
		type: 'Reduction de charges'
	},
	{
		date: 'Feb 2019',
		value: 2300,
		type: 'Reduction de charges'
	},
	{
		date: 'Apr 2019',
		value: 2800,
		type: 'Reduction de charges'
	},
	{
		date: 'May 2019',
		value: 2100,
		type: 'Reduction de charges'
	},
	{
		date: 'Jun 2019',
		value: 1500,
		type: 'Reduction de charges'
	},
	{
		date: 'Jul 2019',
		value: 1100,
		type: 'Reduction de charges'
	},
	{
		date: 'Aug 2019',
		value: 1600,
		type: 'Reduction de charges'
	},
	{
		date: 'Sep 2019',
		value: 1900,
		type: 'Reduction de charges'
	},
	{
		date: 'Oct 2019',
		value: 1950,
		type: 'Reduction de charges'
	},
	{
		date: 'Now 2019',
		value: 2950,
		type: 'Reduction de charges'
	},
	{
		date: 'Dec 2019',
		value: 2250,
		type: 'Reduction de charges'
	},
	{
		date: 'Jan 2019',
		value: 2100,
		type: 'Cout reel'
	},
	{
		date: 'Feb 2019',
		value: 2200,
		type: 'Cout reel'
	},
	{
		date: 'Apr 2019',
		value: 2800,
		type: 'Cout reel'
	},
	{
		date: 'May 2019',
		value: 2150,
		type: 'Cout reel'
	},
	{
		date: 'Jun 2019',
		value: 1400,
		type: 'Cout reel'
	},
	{
		date: 'Jul 2019',
		value: 1200,
		type: 'Cout reel'
	},
	{
		date: 'Aug 2019',
		value: 1700,
		type: 'Cout reel'
	},
	{
		date: 'Sep 2019',
		value: 1800,
		type: 'Cout reel'
	},
	{
		date: 'Oct 2019',
		value: 1350,
		type: 'Cout reel'
	},
	{
		date: 'Now 2019',
		value: 2850,
		type: 'Cout reel'
	},
	{
		date: 'Dec 2019',
		value: 2290,
		type: 'Cout reel'
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
		value: 2010,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Feb 2019',
		value: 2210,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Apr 2019',
		value: 2810,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'May 2019',
		value: 2150,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Jun 2019',
		value: 1520,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Jul 2019',
		value: 1130,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Aug 2019',
		value: 1640,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Sep 2019',
		value: 1920,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Oct 2019',
		value: 1900,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Now 2019',
		value: 2940,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Dec 2019',
		value: 2290,
		type: 'Total_peripherique N-1'
	}
]

const analyseMock = [
	{
		date: 'Jan 2019',
		value: 2000,
		type: 'Total_variable'
	},
	{
		date: 'Feb 2019',
		value: 2300,
		type: 'Total_variable'
	},
	{
		date: 'Apr 2019',
		value: 2800,
		type: 'Total_variable'
	},
	{
		date: 'May 2019',
		value: 2100,
		type: 'Total_variable'
	},
	{
		date: 'Jun 2019',
		value: 1500,
		type: 'Total_variable'
	},
	{
		date: 'Jul 2019',
		value: 1100,
		type: 'Total_variable'
	},
	{
		date: 'Aug 2019',
		value: 1600,
		type: 'Total_variable'
	},
	{
		date: 'Sep 2019',
		value: 1900,
		type: 'Total_variable'
	},
	{
		date: 'Oct 2019',
		value: 1950,
		type: 'Total_variable'
	},
	{
		date: 'Now 2019',
		value: 2950,
		type: 'Total_variable'
	},
	{
		date: 'Dec 2019',
		value: 2250,
		type: 'Total_variable'
	},
	{
		date: 'Jan 2019',
		value: 2100,
		type: 'Total_variable N-1'
	},
	{
		date: 'Feb 2019',
		value: 2200,
		type: 'Total_variable N-1'
	},
	{
		date: 'Apr 2019',
		value: 2800,
		type: 'Total_variable N-1'
	},
	{
		date: 'May 2019',
		value: 2150,
		type: 'Total_variable N-1'
	},
	{
		date: 'Jun 2019',
		value: 1400,
		type: 'Total_variable N-1'
	},
	{
		date: 'Jul 2019',
		value: 1200,
		type: 'Total_variable N-1'
	},
	{
		date: 'Aug 2019',
		value: 1700,
		type: 'Total_peripherique N-1'
	},
	{
		date: 'Sep 2019',
		value: 1800,
		type: 'Total_variable N-1'
	},
	{
		date: 'Oct 2019',
		value: 1350,
		type: 'Total_variable N-1'
	},
	{
		date: 'Now 2019',
		value: 2850,
		type: 'Total_variable N-1'
	},
	{
		date: 'Dec 2019',
		value: 2290,
		type: 'Total_variable N-1'
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

const analyseLeaderMock = [
	{
		label: 'Commission',
		value: 3921
	},
	{
		label: 'Commission',
		value: 3821
	},
	{
		label: 'Interessement',
		value: 0
	},
	{
		label: 'Interessement',
		value: 0
	},
	{
		label: 'Bonus',
		value: 1962
	},
	{
		label: 'Bonus',
		value: 1953
	},
	{
		label: '12eme mois',
		value: 0
	},
	{
		label: '12eme mois',
		value: 0
	}
]

const salaryMock = [
	{
		label: 'DIRECTION',
		type: 'Catis',
		value: 1579
	},
	{
		label: 'DIRECTION',
		type: 'Bruit',
		value: 3155
	},
	{
		label: 'TECHNIQUE',
		type: 'Catis',
		value: 2365
	},
	{
		label: 'TECHNIQUE',
		type: 'Bruit',
		value: 2195
	}
]

const salaryBottom = [
	{
		label: 'President',
		type: 'Catis',
		value: 1579
	},
	{
		label: 'President',
		type: 'Brut',
		value: 1579
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
router.get('/analiseLeader', (req, res) => res.json(peripheralLeaderMock));
router.get('/analyse', (req, res) => res.json(analyseMock));
router.get('/analyseLeader', (req, res) => res.json(analyseLeaderMock));
router.get('/salary', (req, res) => res.json(salaryMock));
router.get('/salaryBottom', (req, res) => res.json(salaryBottom));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda
//app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

module.exports = app;
module.exports.handler = serverless(app);