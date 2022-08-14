'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employer.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    total_employee: DataTypes.INTEGER,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employer',
  });
  return employer;
};