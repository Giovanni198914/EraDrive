import express from "express"
import { Car } from "./carsModel.js"

const carsRouter = express.Router()

carsRouter
    .get(
        "/", async (req, res, next) => {
            try {
                let cars = await Car.find()
                res.send(cars)
            } catch (error) {
                next(error)
            }
        }
    ) 
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


