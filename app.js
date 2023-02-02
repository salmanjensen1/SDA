const express = require('express')

const app = express();

const PORT = process.env.PORT || 1337;

app.listen(PORT, ()=>{
    console.log(`Server running at port: ${PORT}`)
})