import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../users/usersModel.js";
import photoUpload from "../auth/cloudinary.js"

const registerRouter = express.Router();

registerRouter.post("/", photoUpload, async (req, res, next) => {
    try {
        const { email, password, firstName, lastName } = req.body;

        const photoUrl = req.file ? req.file.path : "";

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            photo: photoUrl,
        });

        await user.save();


        const payload = {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            photo: photoUrl,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '240d' });

        res.status(201).json({
            message: "User registered successfully",
            token: token,
            payload: {

                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                photo: user.photo,
            }
        });
    } catch (error) {
        next(error);
    }
});

export default registerRouter;