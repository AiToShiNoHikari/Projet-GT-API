const { DataTypes } = require("sequelize");

module.exports = {
  idHistory: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  historyModif: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {}
  },
  historyDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {}
  },
  historyState: {
    type: DataTypes.INT('tiny'),
    allowNull: false,
    validate: {}
  }
}
