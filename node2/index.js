const express =require('express');
const mongoose =require('mongoose')
const userModel = require('./models/userModel')
const cors = require('cors')


const app = express();


var corOptions = {
  origin: 'http://localhost:3000'
};
app.use(cors(corOptions));
// app.use(act)
// require("./routes/clientRoutes")
app.use(express.json());
//require('./helper/mongo')
// app.use(express.urlencoded({ extended: true }));

 mongoose.connect('mongodb://localhost:27017/events/',console.log('connected to db'))
 app.post("/createClient",(req,res)=>{
    userModel.create(req.body)
    .then(clients => res.json(clients))
    .catch(err =>console.log(err.message))
    })
const PORT = process.env.PORT || 3001;
// error handler
app.use((req, res, next) => {
    const err = new Error("not found");
    err.status = 404;
    next(err);
});
// error handler
app.use((req, res, next) => {
    res.status(err.status || 500);
    res.send(error, {
        status: err.status || 500,
        message: err.message,
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))