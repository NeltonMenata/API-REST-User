const express = require("express");
const routes = express.Router();
const { MATH, HOME, ALL_USERS, USER, CONNECTION} = require("./routes_name.js");
const { saveUser } = require("../src/save_user/save_user.js");
const { getAllUsers } = require("../src/get_all_users/get_all_users.js");
const { getOneUser } = require("../src/get_one_user/get_one_user.js");
const { connection } = require("../src/connection_db/connection_db.js");
const { deleteUser } = require("../src/delete_user/delete_user.js");

routes.get(HOME, (req, res)=>{
    res.send("Benvindo ao Nodejs - Copyright  @ 2022!!");
});

routes.get(MATH, (req, res)=>{
    res.send("A soma dos quadrados dos catetos é igual ao quadrado da hipotenusa!!");
});

//######### - PEGA TODOS OS USUARIOS - ########
routes.get(ALL_USERS, getAllUsers);

//####### - CONEXAO COM O BANCO DE DADOS - ########
routes.get(CONNECTION, connection);

//########## - PEGA UM USUARIO - ###############
routes.get(USER, getOneUser);

//########## - SALVA UM USUARIO - ##############
routes.post(USER, saveUser);

//######## - DELETE UM USUARIO - ############
routes.delete(USER, deleteUser);

module.exports = {
    routes: routes
}