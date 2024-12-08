const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    },
  );
};

module.exports = UserSchema;