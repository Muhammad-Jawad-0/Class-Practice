import User from "../../models/users/index.js";

const getUser = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({ status: 200, users })
    } catch (err) {
        res.status(500).send({ status: 500, err })
    }
}

export default getUser;