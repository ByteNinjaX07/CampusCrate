import connectDB from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routers from './routes/router.js';

const app = express();

dotenv.config();

const port = process.env.PORT;

connectDB();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use("/api/items", routerrr);
