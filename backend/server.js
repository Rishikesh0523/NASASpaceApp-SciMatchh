const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/database')

const port = process.env.PORT || 6001;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/api/test', (req, res) => {
  res.status(200).json({
    message: "Working!"
  });
});
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server listening on ${port}.`.cyan.underline));