const express = require('express')

const app = express();
const PORT = process.env.PORT || 1337;

app.get('/', (req, res)=>{
    res.json("Harder than getting on top of Everest")
})

app.listen(PORT, ()=>{
    console.log(`Server running at port: ${PORT}`)
})