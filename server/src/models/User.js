const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize,
      timestamps: false,
      hooks: {
        beforeCreate: async (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        },
      },
    });
  }
}

module.exports = User;
