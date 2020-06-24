const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://engy:<hAnSaHa BrDo#0>@cluster0-b66h6.mongodb.net/<SERVICEPROVIDER>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => res.send('Hello World!'))





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))