const { Model, DataTypes, INTEGER, STRING, DECIMAL } = require('sequelize');
const sequelize = require('../config/connection'),

class Product extends Model {}

Product.init(
    {
        id: {
            DataTypes: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            DataTypes: STRING,
            allowNull: false
        },
        price: {
            DataTypes: DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        stock: {
            DataTypes: INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                isNumeric: true
            }
        },
        category_id: {
            DataTypes: INTEGER,
            references: {
                model: 'Category',
                key: 'id'
            }
        }
})
module.exports = Product;