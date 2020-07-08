const { DataTypes, Sequelize } = require("sequelize");

module.exports = {
  idUser: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  userLastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {}
  },
  userFirstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {}
  },
  userLogin: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {}
  },
  userHash: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {}
  }
}
