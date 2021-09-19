
import express from "express";
import cors from 'cors';
import { readdirSync } from 'fs';

const morgan = require('morgan');
require('dotenv').config();







//create express app
const app = express();

//apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
    console.log("this is my own middleware")
    next();
});


// load all files existing in routes folder
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))

//Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));















