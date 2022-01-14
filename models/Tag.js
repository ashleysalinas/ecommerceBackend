const { exportNamedDeclaration } = require('@babel/types');
const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init({
    id: {
        DataTypes: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tag_name: {
        DataTypes: String
    }
})

module.exports = Tag;