const {check, validationResult } = require("express-validator");

exports.valide =

[
    check('nom') .not().isEmpty().withMessage('le nom ne peut pas,être vide')
    .isLength({
        min:3,max:20
    }).withMessage('le nom doit comporter au moins 3 caractères')
    .isAlpha().withMessage('le nom ne peut pas contenir de chiffres ou de caractères spéciaux '),
    
    check('prenom') .not().isEmpty().withMessage('le prenom ne peut pas,être vide')
    .isLength({
        min:5,max:30
    }).withMessage('le prenom doit comporter au moins 5 caractères')
    .isAlpha().withMessage('le prenom ne peut pas contenir de chiffres ou de caractères spéciaux '),


    check('email','email nest pas valide')
    .not().isEmpty().withMessage(" l'email ne doit pas etre vide ")
    .isEmail()
    .normalizeEmail(),
    check('date_ajout') .not().isEmpty().withMessage('la date_ajout ne peut pas,être vide'),
    check('date_mise') .not().isEmpty().withMessage('la date_mise  ne peut pas,être vide'),


    check('password') .not().isEmpty().withMessage('le mot de passe ne peut pas,être vide')
    .isLength({
        min:4,
    }),
    
    check('commune') .not().isEmpty().withMessage('la commune  ne peut pas,être vide')
    .isLength({
        min:40,max:120
    }),

    check('telephone') .not().isEmpty().withMessage('telephone doit avoir 10 chiffres')
    .isLength({
       max:10,
        validation: 'min',
        arguments: 8,
        inverted: true,
        message: 'maximum 8 chars in CAPS please'
    })
    
]