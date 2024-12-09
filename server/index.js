import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path, {resolve} from 'path'

const port = process.env.PORT || 8000;

import Connection from './database/db.js'; 
import Routes from './routes/route.js';

const app = express()

const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "../client/build");
app.use(express.static(buildpath));

app.use(
    cors({
        "origin": "*",
    })
);

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));



app.use('/', Routes);

Connection();

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})