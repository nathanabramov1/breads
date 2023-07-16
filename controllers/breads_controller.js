const express = require('express')
const breads = express.Router()
const Bread = require('../models/breads.js')

breads.get('/', (req, res) => {
  Bread.find()
      .then(foundBreads => {
          console.log(foundBreads)
   res.render('index',
     {
       breads: foundBreads,
       title: 'Index Page'
     }
   )
})
})


breads.get('/new', (req, res) => {
  res.render('new')
})

// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})


// SHOW
// SHOW
// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
          console.log(foundBread)
          res.render('show', {
              bread: foundBread
          })
      })
})


// CREATE
// CREATE
// CREATE
breads.post('/', (req, res) => {
  if(!req.body.image) {
      req.body.image = undefined 
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})
 





module.exports = breads