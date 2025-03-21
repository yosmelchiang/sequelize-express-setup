const app = require("express")();
const sequelize = require("./models");
const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    return sequelize.sync({ force: true });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = app;
