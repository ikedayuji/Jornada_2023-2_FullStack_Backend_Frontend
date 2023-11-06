// To connect with your mongoDB database
const mongoose = require('mongoose');
const express = require('express');// importando o servidor 
const app = express(); // instaciando o servidor
const db = mongoose.connect('mongodb+srv://classe:senai123@cluster0.hpvcvwz.mongodb.net/therocks', {

useNewUrlParser: true,

useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
  }).catch((err) => {
    console.error('Erro na conexão com o MongoDB:', err);
  });


 
// For backend and express



const cors = require("cors");// colocando o cors para fazer requisição local rost a local rost

console.log("App listen at port 5000");//porta que esta rodando
app.use(express.json());
app.use(cors());

app.get("/", async(req, resp) => {
 

const data=await db.db("therocks").collection("sensor_data").find().toArray()
console.log(data)
    resp.send("App is Working");

    // You can check backend is working or not by 

    // entering http://loacalhost:5000 

    // If you see App is working means

    // backend working properly
});

app.listen(5000);