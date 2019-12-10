const express = require('express');
const knex = require('knex');

// const db = knex({
//     client: 'sqlite3',
//     connection: {
//       filename: './data/cars.db3'
//     },
//     useNullAsDefault: true
//   });
const db = require('./data/dbConfig.js');
  const router = express.Router();
  router.use(express.json());


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
       res.status(500).json({message: "There was an error inserting car"})
       })
  });

  router.put('/:id', (req, res) => {
      const changes = req.body
      db('carsInfo').where({id: req.params.id}).update(changes)
      .then( count => {
          res.status(200).json(count);
      })
      .catch(error => {
        console.log(error);
       res.status(500).json({message: "There was an error updating car"})
      })
  });

  router.delete("/:id", (req, res) => {
      db('carsInfo').where({id: req.params.id}).del()
      .then(count => {
        res.status(200).json(count);
    })
    .catch(error => {
        res.status(500).json({message: "error deleting car"})
    })
  })

  module.exports = router;