const express = require('express');
const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
      filename: './data/cars.db3'
    },
    useNullAsDefault: true
  });

  const router = express.Router();

  router.get('/', (req, res) => {
     db.select('*').from('carsInfo').then(cars => {
         res.status(200).json(cars);
     })
     .catch(error => {
         console.log(error);
        res.status(500).json({message: "There was an error retrieving cars"})
        })
  });

  router.post('/', (req, res) => {
      db.insert(req.body, "id").into("carsInfo")
      .then(ids => {
        res.status(200).json(ids);
    })
    .catch(error => {
        console.log(error);
       res.status(500).json({message: "There was an error retrieving cars"})
       })
  })

  module.exports = router;