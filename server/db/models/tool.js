const Sequelize = require('sequelize');
const db = require('../index');

const tool = db.define('tool', {
  // column names go here
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  borrowed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM,
    values: ['general', 'carpentry', 'wood work', 'metal work', 'farm work'],
    defaultValue: 'general',
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      'https://i.pinimg.com/736x/83/b0/70/83b070b212361ecea98af5e43e318ef5--home-improvement-projects-home-improvements.jpg'
  },
  dueDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = tool;
