// import express from "express";
// import { userSchema } from "./schema/index.js";

// const app = express();

// app.use(express.json());

// let users = [];

// app.get("/", (req, res) => {
//     res.send(new Date().toString())
// })

// app.put("/user/:id", (req, res) => {              // put jab use krte ha jb pora update kr dena hu 
//     const { id } = req.params;
//     const index = users.findIndex(obj => obj.id === id);
//     users.splice(index, 1, { ...req.body, id })
//     res.send({ id, massage: "user updated successfully" })
// })


// // app.patch("/user" , () => { // patch jab use krte ha jb usma se kch values update krna hu

// // })

// app.delete("/user/:id", (req, res) => {
//     const { id } = req.params;
//     // const index = users.findIndex(obj => obj.id === Number(id))
//     // users.splice(index, 1) ---------------issy bhi delete hujaega
//     users = users.filter(obj => obj.id !== id) //<<<<<<<<<<< ------iss tarike se bhi delete hujaega
//     res.send({ massage: "user deleted successfully" })
// })



// app.get("/user", (req, res) => {
//     res.send(users)
// })

// app.post("/user", async (req, res) => {
//     try {
//         await userSchema.validateAsync(req.body)
//         users.push({ ...req.body, id: Date.now().toString(36) })
//         res.status(201).send({ status: 201, user: req.body, message: "user added successfully" })
//     } catch (err) {
//         res.status(400).send({ error: err.details || "something went wrong", status: 400 })
//     }
// })


// app.listen(5000, () => {
//     console.log("server is running on 5000")
// })






// --------------------------------- express router practice ---------------------------------------

import express from "express";
import router from "./routes/index.js"
import mongoose from "./db/index.js";

const app = express()

app.use(express.json());

mongoose.connection.on("open", () => {
    console.log("db connect with mongoose")
})
mongoose.connection.on('error', (err) => {
    console.log("err", err)
})


app.get("/", (req, res) => {
    res.send(new Date().toDateString())
})

app.use("/api", router);

app.listen(5000, () => {
    console.log("server is running on 5000")
})