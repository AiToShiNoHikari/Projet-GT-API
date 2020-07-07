const { DataTypes } = require("sequelize");

module.exports = {
  idTicket: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  ticketCreation: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {}
  },
  ticketResolve: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {}
  },
  ticketDelete: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {}
  },
  ticketDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {}
  },
  ticketState: {
    type: DataTypes.INT('tiny'),
    allowNull: false,
    validate: {}
  },
  ticketHardware: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {}
  }
}
