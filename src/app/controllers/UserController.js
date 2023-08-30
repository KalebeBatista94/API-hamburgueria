import { v4 } from "uuid"
import User from "../models/User"

class UserController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
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

    return res.json(user)
  }
}

export default new UserController()
