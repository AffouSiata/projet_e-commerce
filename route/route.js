const { Router } = require("express");
const express = require("express");
const { connect } = require("../database/bd");
const app =express();
const control = require('../controller/controlle');
const router =  express.Router();
const upload = require("../millderware/multer");
const { valide } = require("../millderware/validation");



router.get('/',control.Accueil);
router.get('/liste1/:id',control.liste1);
router.get('/liste2',control.liste2);
router.get('/liste3',control.liste3);
router.get('/liste4',control.liste4);
router.get('/details/:id',control.details);
router.get('/panier',control.panier);
router.get('/commande',control.commande);



router.get('/conn',control.connexion);
router.get('/insc',control.inscrire);

router.post('/conn',control.connexionpost);
router.post('/insc',valide,control.inscrirepost);




router.get('/admin',control.admin);
router.post('/admin',upload.single("image_Article"),control.adminpost);







module.exports=router;












