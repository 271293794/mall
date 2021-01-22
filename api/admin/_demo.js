const { Model } = require("sequelize/types");

// Method 1 via the .init() method
var { Model, DataTypes } = require('sequelize')
class User extends Model { }
User.init({
    username: DataTypes.STRING,
    mood: {
        type: DataTypes.ENUM,
        values: ['happy', 'sad', 'neutral']
    }
}, {
    hooks: {
        beforeValidate: (user, options) => {
            user.mood = 'happy';
        },
        afterValidate: (user, options) => {
            user.username = 'Toni';
        }
    },
    sequelize
});

// Method 2 via the .addHook() method
User.addHook('beforeValidate', (user, options) => {
    user.mood = 'happy';
});

User.addHook('afterValidate', 'someCustomName', (user, options) => {
    return Promise.reject(new Error("I'm afraid I can't let you do that!"));
});

// Method 3 via the direct method
User.beforeCreate((user, options) => {
    return hashPassword(user.password).then(hashedPw => {
        user.password = hashedPw;
    });
});

User.afterValidate('myHookAfter', (user, options) => {
    user.username = 'Toni';
});