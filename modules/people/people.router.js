const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  const allPeople = People.get();
  return res.status(200).json(allPeople);
});


router.post('/', json, (req, res) => {
  const { person } = req.body
  console.log(person)
  People.enqueue(person);
  const allPeople = People.get();
  res.status(204).json(allPeople);
});

router.delete('/', json, (req, res) => {
  People.dequeue()
  const allPeople = People.get();
  return res.status(200).json(allPeople);
})

module.exports = router
