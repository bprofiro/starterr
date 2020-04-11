const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o Database
mongoose.connect('mongodb+srv://bprofiro:brenda123@cluster0-mdjdw.mongodb.net/starter?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir('./src/models');



//Primeira rota
app.use('/api', require("./src/routes"));

app.listen(3001);