// import important parts of sequelize library
const { Model, DataTypes, DECIMAL, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.STRING,
      allownull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allownull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allownull: false,
      validate: {
        is: DECIMAL,
        msg: "Must be an have a decimal in the price."
      }

    },
    stock: {
      type: DataTypes.INTEGER,
      allownull: false,
      default: 10,
      validate: {
        is: INTEGER,
        msg: "Must be an interger."
      }
    },
    catagory_id: {
      type: DataTypes.INTEGER,
      references: {
        // * References the `Category` model's `id`.
        model: Category,
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
