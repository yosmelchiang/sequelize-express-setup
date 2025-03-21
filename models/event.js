module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Event.associate = (models) => {
    Event.belongsToMany(models.User, { through: "user_events" });
  };

  return Event;
};
