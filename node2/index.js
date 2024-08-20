const express =require('express');
const mongoose =require('mongoose')

const app = express();


// var corOptions = {
//   origin: 'http://localhost:3000'
// };
// app.use(cors(corOptions));

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/events")
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))