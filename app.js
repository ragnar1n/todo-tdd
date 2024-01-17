const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('express')
})

app.listen(3015, () =>{
  console.log('server running on 3015')
})