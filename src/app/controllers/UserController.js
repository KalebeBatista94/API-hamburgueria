import { v4 } from "uuid"
import * as Yup from "yup"
import User from "../models/User"

class UserController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password_hash: Yup.string().required().min(6),
      admin: Yup.boolean(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json("Make sure your data is correct")
    }
    // eslint-disable-next-line camelcase
    const { name, email, password_hash, admin } = req.body

    const user = await User.create({
      id: v4(),
      name,
      email,
      // eslint-disable-next-line camelcase
      password_hash,
      admin,
    })

    return res.status(201).json({ id: user.id, name, email, admin })
  }
}

export default new UserController()
