const path = require('path') // used later in the exercise
 const express = require('express')
 const app = express()

//  app.get('/', function (req, res) {
//  res.send('Hello World')
//  })

// app.listen(3000)
// console.log('Express server running on port 3000')

// app.get('/about', function(req, res){
//     res.sendFile(path.join(__dirname, 'views', 'about.html'));
//     });

const mainRouter = require('./mainRoutes')

//  mainRouter.get('/', function (req, res) {
//  res.send('Hello World')
//  })

//  mainRouter.get('/about', function (req, res) {
//  res.sendFile(path.join(__dirname, 'views', 'about.html'))
//  })

 app.use(mainRouter)

 const port = process.env.PORT || 3000
 app.listen(port)
 console.log('Express server running on port', port)