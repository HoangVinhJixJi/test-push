// models/Song.js
const { DataTypes } = require('sequelize');

const sequelize = require('../config/db');
const Song = sequelize.define('Song', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Song;
