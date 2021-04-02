const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const jobRouter = require('./routes/jobRouter.js')

const app = express();
const PORT = 3000;

mongoose.connect(
  'mongodb+srv://jason-d-lee:soloproject@solo-project-cluster.cd8tj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
).then(() => console.log('Connected to DB'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client')));

app.use('/jobs', jobRouter);

// app.use('*', (req, res) => {
//   res.status(404).send('Not Found');
// })

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;