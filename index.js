require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter',(req,res) =>{
    res.send("Twitter api opened")
});

app.get('/youtube',(req,res) =>{
    res.send("<h1>YouTube api opened</h1>")
});

app.get('/login',(req,res) => {
    res.send("<h2>Login api opened</h2>")
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
