// import User from "../../models/users/index.js";


// const postUser = (req, res) => {
//     try {
//         const modal = new User(req.body);
//         const user = modal.save()
//         console.log("req>>>", req.body)
//         res.send({ status: 200, user: user })
//     } catch (error) {
//         console.log(error)
//     }
// }



// ======================= ye 2sra tarika ha issy bhi kr sakhta ha =========================



// import User from "../../models/users/index.js";


// const postUser = async (req, res) => {
//     try {
//         const user = await User.create(req.body);
//         // const data = user.toObject(); >>>>>>>>>
//         // delete data.password; >>>>>>>>>>>>>       ye 2no asi ha km ka nhi hha
//         res.status(201).send({ status: 201, user: data })
//     } catch (err) {
//         res.status(500).send({ status: 500, err })
//     }
// }

// export default postUser;







//=========================== register krwate time password ko hashing krne ka tarika ==========================


import bcrypt from "bcrypt";
import User from "../../models/users/index.js";
import 'dotenv/config'
import jwt from "jsonwebtoken"



const postUser = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create({
            ...req.body,
            password
        });
        const data = user.toObject(); //>>>>>>>>>
        delete data.password; //>>>>>>>>>>>>>       ye 2no asi ha km ka nhi hha
        var token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY);
        res.status(201).send({ status: 201, massage: "user register successfully", user: data, token })
    } catch (err) {
        res.status(500).send({ status: 500, err })
    }
}

export default postUser;