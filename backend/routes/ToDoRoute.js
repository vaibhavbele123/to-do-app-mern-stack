const {Router}=require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router=Router()


router.get('/',getToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)
router.post('/save',saveToDo);

module.exports=router;