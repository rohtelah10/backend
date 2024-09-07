const express = require("express")
const app = express()
const mongoose = require("mongoose")
const User = require("./models/signup")
const cors = require("cors")
const bodyParser = require("body-parser")
const PORT = 8080;

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://niteshrohilla123:Monty777yo@cluster0.mu7ybrh.mongodb.net/cbuser", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('MongoDB connected'))
.catch(()=> console.error('Error connecting', err))

app.post('/api/users', (req, res) =>{
    const {username, email, phone, country, password} = req.body;
    
    const newUser = new User({
        username,
        email,
        phone,
        country,
        password
    })

    newUser.save()
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({error: message}))
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})

