const UserController=require("../controllers/user_controller");
const express=require("express");
const router=express.Router();

router.get("/",UserController.Getall);

router.get("/:id",UserController.GetbyId);

router.post("/",UserController.NewUser);

router.put("/:id",UserController.Update);

router.delete("/:id",UserController.Delete);

module.exports=router;
