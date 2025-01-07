const cors = require('cors');

const configureCors = cors({
    origin: (origin, callback) => {
        const trustedList = ["http://localhost:3000"];
        if (!origin || trustedList.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by cors"))
        }
    },
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Accept-Version',
    ],
    exposedHeaders: ['X-Total-Count', 'Content-Range'],
    credentials: true, // enable support for cookies
    preflightContinue: false,
    maxAge: 600, // cache preflight response for 10 min, avoiding sending options requests multiple times
    optionsSuccessStatus: 204
});

module.exports = { configureCors };