const express = require('express')

const app = express();

const PORT = 1337;

app.listen(Process.env.PORT || PORT, ()=>{
    console.log("Server running at port: ", PORT)
})