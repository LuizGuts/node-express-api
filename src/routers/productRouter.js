import express from "express"
import listAll from "../controllers/product/listAll.js"
import create from "../controllers/product/create.js"
import remove from "../controllers/product/remove.js"
import insert from "../controllers/product/insert.js"

  const router = express.Router()

    router.get('/', listAll)
    router.post('/', create)
    router.delete('/', remove)
    router.put('/', insert)

export default router