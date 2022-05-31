const express = require('express')
const  connect  = require('../database/bd');
const router =  express.Router();
const data = require('../millderware/requete');
const upload = require("../millderware/multer");

const control = class{
    static Accueil = async(req=request,res=response)=>{
        
        const categorie= await data.cat()  
        const article1 = await data.article1()  
        const article2 = await data.article2()  
        res.render("Accueil",{categorie:categorie,article1:article1,article2:article2})
        // console.log("cat",categorie);
        // res.json(article1);
       
    }
    static liste1 =(req=request,res=response)=>{
        data.liste(req.params.id).then(resultat=>{
            // console.log("erererere",resultat);
            res.render('liste1',{resultat:resultat});
            // res.json(resultat);

        })
        .catch(error =>{
            console.log("erreur",error);
        })
    }


    static details = async(req=request,res=response)=>{
        // res.render('details')
         const det= await data.details(req.params.id)
            const result =det[0].id_categorie
            console.log("monid", result);
            const appel = await data.liste(result)
            console.log("eeeeeee",appel);
            res.render('details',{resultat:det,result:appel});

        
        

    }


      static liste2 =(req=request,res=response)=>{
        res.render('liste2')
        req.params.id('liste2')
    }
      static liste3 =(req=request,res=response)=>{
        res.render('liste3')
        req.params.id('liste3')
    }
      static liste4 =(req=request,res=response)=>{
        res.render('liste4')
        req.params.id('liste4')
    }
    static connexion =(req=request,res=response)=>{
        res.render('conn')
    }

    
    static panier =(req=request,res=response)=>{
        res.render('panier')
    }
    static commande =(req=request,res=response)=>{
        res.render('commande')
    }

    static admin =(req=request,res=response)=>{
        res.render('admin')
    }


    static adminpost =(req=request,res=response)=>{
        console.log("sdfghjk",req.body);
        console.log("sdfghjk",req.file.path);
        data.adminInsert(req.body,req.file).then(resultat =>{
            res.render('admin',{resultat:resultat})
        })
        .catch(error =>{
            console.log("erreur",error);
        })
       
    }
    
   


}
module.exports = control;