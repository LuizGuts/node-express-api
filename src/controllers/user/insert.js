import userModel from "../../models/userModel.js"

const insert = (req, res) => {
    const newUser = req.body
    const usersResult = userModel.insert(newUser)
    res.json({
      success: `Usuario ${newUser.id} atualizado com sucesso`,
      users: usersResult
    })
}

export default insert