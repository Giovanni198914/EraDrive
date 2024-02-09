import express from "express"
import carsRouter from "./cars/carsRouter.js"
import usersRouter from "./users/usersRouter.js"
import loginRouter from "./login/loginRouter.js"
import registerRouter from "./register/registerRouter.js" 

const apiRouter = express.Router()


apiRouter.get("/test", (req, res) => {
    res.json({ message: "hello, world" })
})

apiRouter.post("/body", (req, res) => {
    console.log(req.body)

    res.status(200).send()
})

apiRouter.use("/cars", carsRouter)
apiRouter.use("/users", usersRouter)
apiRouter.use("/login", loginRouter) 
apiRouter.use("/register", registerRouter) 

export default apiRouter