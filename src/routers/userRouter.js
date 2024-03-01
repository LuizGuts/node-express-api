import express from "express"
import listAll from "../controllers/user/listAll.js"
import create from "../controllers/user/create.js"
import remove from "../controllers/user/remove.js"
import insert from "../controllers/user/insert.js"

  const router = express.Router()

    router.get('/', listAll)
    router.post('/', create)
    router.delete('/', remove)
    router.put('/', insert)

export default router