const express = require("express");
const { v4 } = require("uuid");

const app = express();
app.use(express.json());


const todos = [];

app.get("/todos", (req, res) => {
    return res.json(todos);
});

app.get("/todos/:id", (req, res) =>{
const{ id } = req.params;
const todo = todos.find(todo => todo.id === id);
return res.json(todo);
});

app.post("/todos", (req, res) => { 
    const {title} = req.body;
    const todo = {
        id: v4(),
        title,
        completed: false
    };
    todos.push(todo);
    return res.json(todo);
});

app.put("/todos/:id", (req, res) => {
    const {id} = req.params;
    const index = todos.findIndex(todo => todo.id === id);
    todos[index].completed = !todos[index].completed;
    return res.json(todos[index]);
});

app.delete("/todos/:id", (req, res) => {
 const {id} = req.params;
 todos = todos.filter((todo) => {
    return todo.id !== id
 });
 return res.json(todos);
});

app.listen(5000, () =>{
    console.log("now listening port 5000");

});