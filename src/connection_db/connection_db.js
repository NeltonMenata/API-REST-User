const { Repository } = require("../../repository/repository.js");
const { db } = require("../../database/database.js")
const repo = new Repository(db);

function connection(req, res){
    db.connect(req.body.connect);
    res.send(repo.getConnection());
}

module.exports = { connection }