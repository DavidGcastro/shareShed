const Sequelize = require('sequelize');
const db = require('../index');

const user = db.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  profilePic: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.stack.imgur.com/l60Hf.png'
  },
  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: true,
  //   validate: {
  //     isEmail: false
  //   }

  rating: {
    type: Sequelize.INTEGER
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return (
        this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
      );
    }
  }
});

module.exports = user;
