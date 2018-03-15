const express = require('express'),
          app = express(),
         PORT = process.env.PORT || 8080

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req,res)=>{
  res.send(`We're sending stuff out on AWS!`)
})

app.listen(PORT, ()=>{
  console.log(`We are listening on ${PORT}.`)
})
