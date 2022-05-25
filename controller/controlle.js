const express = require('express')
const  connect  = require('../database/bd');
const router =  express.Router();
const data = require('../millderware/requete');

const control = class{
    static Accueil = async(req=request,res=response)=>{
        
        const categorie= await data.cat()  
        const article = await data.article()  
        res.render("Accueil",{categorie:categorie,article:article})
        console.log("cat",categorie);
       
    }
    static liste1 =(req=request,res=response)=>{
        data.liste(req.params.id).then(resultat=>{
            // console.log("erererere",resultat);
            res.render('liste1',{resultat:resultat});

        })
        .catch(error =>{
            console.log("erreur",error);
        })
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

    static details =(req=request,res=response)=>{
        res.render('details')
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



}
module.exports = control;