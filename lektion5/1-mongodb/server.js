const express = require('express');
const app = express();

const mongoose = require('mongoose');

const PORT = process.env.PORT || 9999;
const serverURI = 'http://localhost:' + PORT
const mongoURI = 'mongodb+srv://LottaNyman:bytmig123@cluster0.eqll7kr.mongodb.net/myFirstDb?retryWrites=true&w=majority'

// express.json() konverterar om body till JavaScript
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => console.log('Server is running at: ' + serverURI));
mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to DB')
})



const userSchema = mongoose.Schema({
    // _id: mongoose.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, default: 'Andersson'}
})

const User = mongoose.model('user', userSchema)

// om man gör en post mot en /api/users körs funktionen
// Om man gör en post mot /api/users

// sparar in en ny användare
app.post('/api/users', (req, res) => {
    const { firstName, lastName } = req.body
    User.create({ firstName, lastName })
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        // Gör nått med error
      })

  })


  // vi vill hämta hem en lista på alla användare. 
  app.get('/api/users', (req,res)=> {
    User.find() // om jag vill ha alla lämna tom
    .then(data => { //får tillgång till någon form av data
      res.status(200).json(data) // skickar 200 deet har gått bra.
    })
  })

  // hämta en specifik användare 
  app.get('/api/users/:id', (req, res)=> {
    // const id =req.params.id
    User.findById(req.params.id)
    // User.findOne({email:})
    .then(data => {
      res.status(200).json(data)
    })
  })