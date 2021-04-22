const mongoose = require("mongoose")

const schema = mongoose.Schema({
    todoItem: String,
	isCompleted: Boolean,
    addedOn: Date,
})

module.exports = mongoose.model("ToDO", schema)