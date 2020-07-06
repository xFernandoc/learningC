const mongoose = require('mongoose')

const db  = "mongodb://localhost/tasks"
mongoose.connect(
    process.env.MONGODB_URI || db,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify: false
    })
    .then(db=>console.log('Conectado a la base de datos'))
    .catch(err=>console.log(err))

module.exports=  mongoose