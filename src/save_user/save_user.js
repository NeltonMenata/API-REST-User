const { User } = require("../../models/user.js");
const { Repository } = require("../../repository/repository.js");
const { db } = require("../../database/database.js")
const repo = new Repository(db);

function saveUser(req, res){
    if(!db.accept){
        res.send("Não tem acesso ao Banco de Dados");
    }
    const user = new User(req.body.name, req.body.email);
    const save = repo.saveUser(user);

    res.send(save);

}

module.exports = { saveUser }