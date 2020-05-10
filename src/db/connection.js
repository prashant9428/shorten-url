const mongoose = require("mongoose")
console.log(process.env.CONNECTION_URL)
const db = mongoose.connect(process.env.CONNECTION_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

db.then(val => {
    console.log("database connected")
}).catch(err => {
    console.log("Database connection failed")
})