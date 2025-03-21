const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");
const fs = require("fs");

// We create this empty models object so we can easily manipulate it and configurate associations easily before synchornizing
const models = {};

//Import models from directory
const files = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith("js") && file !== "index.js");

//Initiate our models with sequelize and DataTypes and store them in our db object
files.forEach((file) => {
  const path = __dirname + "/" + file;
  const model = require(path)(sequelize, DataTypes);
  models[model.name] = model;
});

// Configurate possible associations
// console.log(Object.values(models));
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = sequelize;
