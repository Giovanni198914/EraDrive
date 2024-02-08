import mongoose, { Schema } from "mongoose"

const CarsSchema = new Schema({
    CarModel: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
    },
    package: {
        type: String,
    },
});

export const Car = mongoose.model("cars", CarsSchema)