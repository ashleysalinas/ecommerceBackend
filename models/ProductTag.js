const { Model, DataTypes, INTEGER }= require('sequelize')
const sequelize = require('sequelize');

class ProductTag extends Model {}


ProductTag.init({
    id: {
        DataTypes: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        DataTypes: INTEGER,
        references: {
            model: 'Product',
            key: 'ids'
        }
    },
    tag_id: {
        DataTypes: INTEGER,
        references: {
            model: 'Tag',
            key: 'id'
        }
    }
})

module.exports = ProductTag;