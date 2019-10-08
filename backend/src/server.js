const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');


const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(3333);

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-y9dc3.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

// GET, POST, PUT, DELETE

// req.query = Acessar query param (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo de requisição (para criação e edição de dados)