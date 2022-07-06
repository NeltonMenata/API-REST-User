const { Repository } = require("../../repository/repository.js");
const { db } = require("../../database/database.js")
const repo = new Repository(db);

function getOneUser(req, res){
    if(!db.accept){
        res.send("Não tem acesso ao Banco de Dados");
        return;
    }
    const user = repo.getOneUser(req.body.email);
    res.send(user);
}

module.exports = { getOneUser };