const Sequelize = require("sequelize");
const connection = new Sequelize("cadastro","root", "Loqui123.", {
    host:"localhost",
    dialect:"mysql"
} )

connection.authenticate().then(()=>{
    console.log("Conexão com o banco sucedida");
})

module.exports = connection;