import express from "express"
import { Car } from "./carsModel.js"

const carsRouter = express.Router()

carsRouter
    .get(
        "/", async (req, res, next) => {
            try {
                // Estrai offerPackage e model dalla query string
                const { offerPackage, model } = req.query;
                let query = {};
                
                // Aggiungi offerPackage al filtro se è presente
                if (offerPackage) {
                    query.offerPackage = offerPackage;
                }
                
                // Aggiungi CarModel al filtro se è presente, utilizzando una regex per la case-insensitivity
                if (model) {
                    query.CarModel = { $regex: new RegExp(model, 'i') };
                }
                
                // Trova i documenti che corrispondono ai criteri di ricerca
                const cars = await Car.find(query);
                
                // Invia i risultati al client
                res.json(cars);
            } catch (error) {
                console.error('Errore durante il recupero dei dati: ', error);
                res.status(500).send('Errore interno del server');
            }
        })
    .get(
        "/:id",  async (req, res, next) => {
            try {
                let car = await Car.findById(req.params.id)
                res.send(car)
            } catch (error) {
                next(error)
            }
        }
    ) 

    .post("/", async (req, res) => {
        const newCar = await Car.create({
            ...req.body,
        })

        res.status(201).send(newCar)
    })

    .put(
        "/:id",  async (req, res, next) => {
            try {
                let car = await Car.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                    }
                )
                res.send(car)
            } catch (error) {
                next(error)
            }
        }
    ) 

    .delete("/:id", async (req, res, next) => {
        try {
            await Car.deleteOne({
                _id: req.params.id,
            })
            res.send(204)
        } catch (error) {
            next(error)
        }
    }) 

export default carsRouter


