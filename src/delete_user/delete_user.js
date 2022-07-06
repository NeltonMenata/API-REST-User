const { Repository } = require("../../repository/repository.js");
const { db } = require("../../database/database.js")
const repo = new Repository(db);

function deleteUser(req, res){
    res.send(repo.deleteOneUser(req.body.email));
}

module.exports = { deleteUser }