class User{
    constructor(name, email ){
        this.name = name;
        this.email = email;
    }

    getUser(){
        return {
            "name": this.name,
            "email": this.email,
            "objectId": "123"
        }
    }
}

module.exports = { User }