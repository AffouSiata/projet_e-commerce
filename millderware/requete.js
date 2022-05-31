const { promiseImpl } = require("ejs");
const { resolve } = require("path");
const control = require("../controller/controlle");
const  connect  = require("../database/bd");

const data = class{

    static article1 =()=>{
        return new Promise((resolve,rejet)=>
        connect.query('SELECT * FROM categories inner join article on categories.id= article.id_categorie  where categories.nom = ? or categories.nom =?',["legumes","fruits"],function(error,resultat){
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
    static article2 =()=>{
        return new Promise((resolve,rejet)=>
        connect.query('SELECT * FROM categories inner join article on  categories.id =  article.id_categorie  where categories.nom = ? or categories.nom =?',["les produits laitiers","viande fraîche"],function(error,resultat){
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
            // connect.query('SELECT * FROM  article as at inner join categories as cat on at.id_categorie = cat.id WHERE cat.id = ? ',[id],function(error,resultat){
                connect.query(' SELECT * FROM article  where id_categorie=?',[id],function(error,resultat){
           
                if(error){
                    console.log("error");
                    rejet(error);
                }
                else{
                    // console.log("bien recu",resultat);
                    resolve(resultat);
                }
            })
        })
        
    }
    static details =(id)=>{
        console.log("id",id);
        return new Promise((resolve,rejet)=>{
            connect.query('SELECT * FROM  article where id=? ',[id],function(error,resultat){
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


    static adminInsert =(data,photo)=>{
        let { nomArticle , prixArticle, date_ajoutArticle, date_miseArticle,description,id_categorie} = data;
        return new Promise((resolve,rejet)=>{
            console.log("donneés",data);
            console.log("ppppppp",photo.path);
                let inserer = "INSERT INTO article ( nomArticle , prixArticle,date_ajoutArticle, date_miseArticle, description,id_categorie,image_Article)VALUES(?,?,?,?,?,?,?)";
                    connect.query(inserer,[nomArticle , prixArticle, date_ajoutArticle, date_miseArticle,description,id_categorie,photo.path],(error,resultat)=>{
                if(error){
                        console.log(error)
                        rejet(error)
                }
                else{
                        console.log(resultat);
                        resolve(resultat)
                }
            
                }) 
        })   
    }
   
    
        

}
module.exports=data;




