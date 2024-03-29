import express from 'express';
import apiRouter from './apiRouter.js'; 
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

const port = process.env.PORT || 3030
const server = express()
server.use(express.json())
server.use(cors())
server.use("/api", apiRouter)

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        server.listen(port, () => {
            console.log("server is listening to port 🚀: " + port)
        })
    })
    .catch(() => {
        console.log("Errore nella connessione al DB")
    })