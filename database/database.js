const { User } = require("../models/user");

class Database {

    //######## - LISTA DE USUARIOS SALVOS NO DATABASE - ########//
    listUser = [];

    //######## - VARIAVEL DE VERIFICAÇÃO DE CONEXAO NO DATABASE - ########//
    accept = false;

    //######## - FUNÇÃO PARA SE CONECTAR AO DATABASE - ########//
    connect(con){
        
        if (con === "connect"){
            this.accept = true;
            return this.con = "Connected";
        }
        this.accept = false;
        return this.con = "Not Connected";
    }

    saveUser(user){
        //if (!this.accept)return;
        if(user.email == null || user.name == null || user.email == "" || user.name == ""){
            return "User Not Save";
        }

        this.listUser.push(new User(user.name, user.email));

        
        if(this.listUser.length < 1){
            return "User Not Save";
        }
        
        const userFind = this.listUser.filter((value)=>{
            return value.email === user.email ? new User(value.name, value.email) : "User Not Save";
        });

        return userFind[userFind.length-1];
    }

    getOneUser(email){
        if(this.listUser.length < 1){
            return "User Not Found!!";
        }
        const userFind = this.listUser.find((value)=>{
            return value.email === email && email != null ? true : false;
        });

        return userFind ? userFind : "User Not Found!!";
    }

    getAllUsers(){
        return this.listUser;
    }
    deleteOneUser(email){
        let isDel = false;
        if(this.listUser.length < 1){
            return "User Not Found!!";
        }
        for (let index = 0; index < this.listUser.length; index++) {
            const element = this.listUser[index];
            if(email === element.email){
                this.listUser.splice(index, 1);
                isDel = true;
            }            
        }
        return isDel ? "User Deleted Success!":"User Not Found for Deleted!!";
        
    }
}

const db = new Database();

module.exports = { db };