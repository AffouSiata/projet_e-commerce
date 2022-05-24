const { promiseImpl } = require("ejs");
const { resolve } = require("path");
const control = require("../controller/controlle");
const  connect  = require("../database/bd");

const data = class{

    static article =()=>{
        return new Promise((resolve,rejet)=>
        connect.query('SELECT * FROM article',function(error,resultat){
            if(error){
                rejet(error);
                console.log("erreur");
            }
            else{
                resolve(resultat);
                console.log("bien enregistre");
            }
        })
      
    )}

    static cat =()=>{
        return new Promise((resolve,rejet)=>
        connect.query('SELECT * FROM categories',function(error,resultat){
            if(error){
                rejet(error);
                console.log("erreur");
            }
            else{
                resolve(resultat);
                console.log("bien enregistre");
            }
        })
    
    )}

    static liste =(id)=>{
        console.log("id",id);
        return new Promise((resolve,rejet)=>{
            connect.query('SELECT * FROM  article WHERE id_categorie=?',[id],function(error,resultat){
                if(error){
                    console.log("error");
                    rejet(error);
                }
                else{
                    console.log("bien recu",resultat);
                    resolve(resultat);
                }
            })
        })
        
    }
      
        

}
module.exports=data;



