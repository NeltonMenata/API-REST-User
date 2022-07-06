class Repository {
    
    constructor(db){
        this.db = db;
    }

    getConnection(){
        if(this.db.accept){
            return "Conexao Estabelecida com Sucesso";
           // return "Conexao Estabelecida!";
        }
        return "Conexao Falhou";
    }
    
    getAllUsers() {
        return this.db.getAllUsers();
    }

    saveUser(user){
        return this.db.saveUser(user);
    }

    getOneUser(email){
        return this.db.getOneUser(email);
    }

    deleteOneUser(email){
        return this.db.deleteOneUser(email);
    }

    getUser(){

    }
}

module.exports = { Repository }
