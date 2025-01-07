require('dotenv').config();
const { configureCors } = require('./configs/corsConfig');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(configureCors());



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
