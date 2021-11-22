const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model { }

ProductTag.init(
  {
    // define columns
    id: {
      Type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      Type: DataTypes.INTEGER,
      References: {
        // * References the `Product ` model's `id`.
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      Type: DataTypes.INTEGER,
      References: {
        // * References the `Tag` model's `id`.
        model: 'tag',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
  );

module.exports = ProductTag;
