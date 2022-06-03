/* localstorage*/

let panier =[]



function ajoutpanier (id){
   

let monarticle = document.getElementById(`${id}`);

console.log(monarticle);



let mon_prix= monarticle.getElementsByClassName("price")[0].innerText.split(" ")[0];

let decoupage = mon_prix .split(" ");
console.log(decoupage[0])
const parsed = parseInt(decoupage[0], 10);
console.log(parsed);
 



let article =[
    {
        image:monarticle.getElementsByClassName("image")[0].attributes.src.nodeValue,
        nom: monarticle.getElementsByClassName("nom")[0].innerText,
        prix: parseInt(decoupage[0], 10)
    },1
]
panier.push(article)

let local = localStorage.setItem('panier', JSON.stringify(panier));
console.log("aaaaaaaaa",local);


}

let icone = document.getElementsByClassName('icon')


/* fin localstorage*/

