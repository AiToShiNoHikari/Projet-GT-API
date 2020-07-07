const { DataTypes } = require("sequelize");

module.exports = {
  idUser: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  userLastName: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {}
  },
  userFirstName: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {}
  },
  userLogin: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {}
  },
  userHash: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {}
  }
}
