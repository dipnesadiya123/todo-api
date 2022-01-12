module.exports = (sequelize,DataTypes) => {
    return sequelize.define('user',{
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true,
            validate : {
                isEmail : true
            }
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len : [8,16]
            }
        }
    },{
        freezeTableName : true
    })
}