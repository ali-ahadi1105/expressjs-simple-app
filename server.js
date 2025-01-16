require('dotenv').config();
const { configureCors } = require('./configs/corsConfig');
const express = require('express');
const cors = require('cors');
const { requestLogger, addTimestamp } = require('./middlewares/customMiddleware');
const { globalErrorHandler } = require('./middlewares/errorHandler');
const { apiVersioning } = require('./middlewares/apiVersioning');

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.json());
app.use(configureCors());
app.use(requestLogger);
app.use(addTimestamp);
app.use(globalErrorHandler);
app.use("/api/v1", apiVersioning("v1"));



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
