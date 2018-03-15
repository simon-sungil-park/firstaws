const express = require('express'),
          app = express(),
         PORT = process.env.PORT || 8080

app.use(express.static(__dirname+'/build'));


app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/test', (req,res)=>{
  res.send(`We're sending stuff out on AWS!`)
})

app.get('*', (req,res)=>{
  res.sendFile(__dirname+'/build/index.html')
})


app.listen(PORT, ()=>{
  console.log(`We are listening on ${PORT}.`)
})
