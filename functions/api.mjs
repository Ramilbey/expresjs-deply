import express from "express";
import serverless from "serverless-http";

const app = express();

app.get('/', (req,  res) => {
    res.send('Hello from Serverless!');
})

app.get('/about', (req, res) => {
    res.json({ 
        message: "API endpoint is working!"
     });
})

export const handler = serverless(app);
