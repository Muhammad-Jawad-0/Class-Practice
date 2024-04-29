import jwt from "jsonwebtoken";
import 'dotenv/config'


const tokenVerification = (req, res, next) => {
    try {

        if (req.headers?.authorization) {
            const token = req.headers.authorization.split(" ")[1]
            var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            console.log("decoded", decoded)
            if (decoded) {
                next()
            } else {
                res.status(403).send({ status: 403, message: "token unauthorized" })
            }
        } else {
            res.status(403).send({ status: 403, message: "token not provided" })
        }
    } catch (error) {
        res.status(403).send({ status: 403, message: "token unauthorized" , error })
    }
}

export default tokenVerification;