const express = require("express");

const app = express();
app.use(express.json());

app.use("/todos", require("./routes/todos"));

app.listen(5000, () =>{
    console.log("now listening port 5000");

});