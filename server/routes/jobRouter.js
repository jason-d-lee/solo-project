const express = require('express');
const jobRouter = express.Router();
const Job = require('../models/jobModel')

// Getting all job apps:
jobRouter.get('/', (req, res) => {
  Job
    .find({})
    .then(data => {
      if(data.length !== 0) {
      res.status(200).json(data);
      }
      else res.status(400).json('Error: Cannot find data')
    })
})

// Getting one job app:
jobRouter.get('/:name', (req, res) => {
  const { name } = req.params;
  Job
    .find({companyName: name})
    .then(data => {
      if(data.length !== 0) {
        res.status(200).json(data);
      }
      else res.status(400).json('Error: Cannot find data')
    })
    .catch(err => res.status(400).json(err))
})

// Creating one job app:
jobRouter.post('/', (req, res) => {
  const { companyName, title, status } = req.body;
  const newJob = new Job({
    companyName,
    title,
    status
  })
  newJob
    .save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => res.status(400).send(err))
})

// Updating one job app:
jobRouter.patch('/:name', (req, res) => {
  const { name } = req.params;
  Job
    .updateOne({ companyName: name }, { status: req.body.status })
    .then((data) => {
        console.log(data);
      if(data.nModified !== 0) {
        res.status(200).send('Successfully updated job app');
      }
      else res.status(400).json('Error: Invalid Input');
    })
    .catch(err => res.status(400).send(err))
})

// Deleting one job app:
jobRouter.delete('/:name', (req, res) => {
  const { name } = req.params;  
  Job
    .deleteOne({ companyName: name })
    .then((data) => {
      if(data.n !== 0){
        res.status(200).send('Successfully deleted job app')
      }
      else res.status(400).json('Error: Invalid Input')
    })
    .catch(err => res.status(400).send(err))
})

module.exports = jobRouter