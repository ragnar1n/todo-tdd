const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect(
            'mongodb+srv://user:qwerty12345@cluster0.wcfnftq.mongodb.net/todo',
            {useNewUrlParser: true}
    )
    } catch (err){
        console.error('Error connecting to db')
        console.error(err)
    }
}

module.exports = {connect}