// src/index.js
const express = require('express');
const dotenv = require('dotenv');
const handlebars = require('express-handlebars');
// const sequelize = require('./config/db');
const path = require('path');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file
app.use(express.static(path.join(__dirname, '/public')));

// Template engine

app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      isEqual: (a, b) => a === b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Test connection
// sequelize

//   .authenticate()
//   .then(() => {
//     console.log('Connected to the database.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

// Routes

const routes = require('./routes'); // Default is index.js
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
