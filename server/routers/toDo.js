const express = require("express")
const router = express.Router()
const toDoModel = require("../models/toDo")

// Add ToDo
router.put("/add", async (req, res) => {
    // if req body is full
    if(req.body.todoItem){
        const addToDo = new toDoModel({
            todoItem: req.body.todoItem,
            isCompleted: true,
            addedOn: new Date(),
        })
        await addToDo.save()
        res.send(addToDo)
    } else {
        res.send("Empty data")
        console.log("Empty data");
    }
})
// Update ToDo
router.put("/update", async (req, res) => {
    const ToDoToUpdate = await toDoModel.findOneAndUpdate(
        {_id: req.body.payload.id}, 
        {$set: {isCompleted: req.body.payload.isCompleted}})
    if(ToDoToUpdate == null){
        res.status(404)
        res.send({ error: "Error Updating!" })
    } else if(ToDoToUpdate) {
        res.send(ToDoToUpdate)
    }
})
// Delete ToDo
router.put("/delete", async (req, res) => {
    const ToDoToDelete = await toDoModel.deleteOne({ 
        _id: req.body.id 
    })
    if(ToDoToDelete == null){
        res.status(404)
        res.send({ error: "Error deleteing!" })
    } else if(ToDoToDelete) {
        res.send(ToDoToDelete)
    }
})

// View All ToDo
router.get("/all", async (req, res) => {
    const allToDo = await toDoModel.find()
    if(allToDo == null){
        res.status(404)
        res.send({ error: "ToDo is empty!" })
    } else if(allToDo) {
        res.send(allToDo)
    }
})

module.exports = router