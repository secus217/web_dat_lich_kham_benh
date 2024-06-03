'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will cAllcode this method automaticAllcodey.
         */
        static associate(models) {
            // define association here
        }
    };
    Allcode.init({

        key: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};