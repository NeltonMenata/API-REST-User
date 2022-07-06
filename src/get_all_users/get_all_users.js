const { Repository } = require("../../repository/repository.js");
const { db } = require("../../database/database.js")
const repo = new Repository(db);

function getAllUsers(req, res){
    
    if(!db.accept){
        res.send("Não tem acesso ao Banco de Dados");
    }
    res.send(repo.getAllUsers());
}

module.exports = { getAllUsers }