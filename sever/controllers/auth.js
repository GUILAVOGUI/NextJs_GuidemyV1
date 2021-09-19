
import User from "../models/user"
import { hashPassword, comparePassword } from "../utils/auth"



export const register = async (req, res) => {

    try {
        const { name, email, password } = req.body

        // Validation
        if (!name) {
            return res.status(400).send("Name is required")
        }
        if (!password || password.lenght < 6) {
            return res.status(400).send("Possword is required and Should be minimu 6 characters long")
        }
        let userExit = await User.findOne({ email }).exec();
        if (userExit) {
            return res.status(400).send("This email is taken")

        }

        //hashing the password
        const hashedPassword = await hashPassword(password)

        //registring the user
        const user = await new User({
            name, email, password: hashPassword,

        });
        await user.save();
        console.log("saved user", user);

        return res.json({ ok: true })

    } catch (error) {
        console.log(err);
        return res.status(400).send("Erro! try again")

    }




}
