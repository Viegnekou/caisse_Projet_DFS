// Déclaration de variable
let budget = 20000;
let prix_cahier = 1500;
let quantite_cahier = 4;
let prix_stylo = 500;
let quantite_stylo = 3;
// Calcule du montant de chaque produit
let montant_cahiers = prix_cahier * quantite_cahier;
let montant_stylos = prix_stylo * quantite_stylo;
// Calcule du total des achats
let total = montant_cahiers + montant_stylos;

// Affichage des montants
console.log("===== CAISSE =====");
console.log("Cahiers : " + montant_cahiers + " FCFA");
console.log("Stylos : " + montant_stylos + " FCFA");
console.log("Total : " + total + " FCFA");
console.log("Budget : " + budget + " FCFA");

if (total <= budget) {
    console.log("Budget suffisant");
} else {
    console.log("Budget insuffisant");
    
}