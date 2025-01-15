const express=require("express")
const router= express.Router()

const {
    getAll, getOne, post, deleteOne
}
=require("../controllers/user")
router.get("/", getAll)

router.post("/", post)

router.get("/:id", getOne)

router.delete("/:id", deleteOne)

module.exports=router