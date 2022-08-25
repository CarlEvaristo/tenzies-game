import express from "express"         		  
import bodyParser from "body-parser"
import mongoose from 'mongoose'
import cors from "cors"
import path from "path"

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()            

let corsOptions = {             //=> this is very important when running react and express both on localhost
  origin: "*",
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))  

//MONGO
mongoose.connect('mongodb://localhost:27017/tenzies', { useNewUrlParser: true })

const scoreSchema = new mongoose.Schema ({	
  name: String, 				
  score: Number
})

const Score = mongoose.model('tenzies', scoreSchema) 

app.post('/api', (request, response) => {              
  const score = new Score ({ name: request.body.name, score: request.body.score})         
  score.save(err=>{
    if (err) { response.send(err) }	
    else { response.redirect("/api") }	
  })       			 
}) 

// let myArray = [{ name: "Carlos", score: 12}, { name: "Sam", score: 9}]

app.get('/api', (req, res) => {     		 
  Score.find(function(err, scores) {				
    if (err) { res.send(err) }							 
    else { 
      scores.sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
      res.json(scores)
    }
  })
})

//The server serving the Client
//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.listen(process.env.PORT || 5000)  