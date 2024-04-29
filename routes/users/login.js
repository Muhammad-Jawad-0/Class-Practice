import User from "../../models/users/index.js";
import bcrypt from "bcrypt";
import 'dotenv/config'
import jwt from "jsonwebtoken"

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })

        if (user) {
            const comparePassword = bcrypt.compareSync(password, user.password);
            if (comparePassword) {
                var token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY);
                res.status(200).send({ status: 200, message: "login successfully", user, token })
            } else {
                res.status(401).send({ status: 401, message: "incorrect password" })
            }
        } else {
            res.status(404).send({ status: 404, message: "user not found" })
        }
    } catch (err) {
        res.status(500).send({ status: 500, err })
    }
}

export default loginUser;