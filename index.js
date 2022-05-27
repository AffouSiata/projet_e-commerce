const { Router } = require('express');
const express =require('express')
const db = require("./database/bd");
const app =express();
const routeuser =require('./route/route')



db.connect((error)=>{
    if(error){
        console.log("echec de connexion",error);
    }
    else{
        console.log("connexion reussi");


        app.set('views','./views');
        app.set('view engine','ejs')

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }))
        app.use('/public',express.static('public'));

        app.use('/', routeuser);

    }
})

app.listen(5000,()=>console.log(`listening  on port 5000`));
