/*Debut du RDV : 15h40*/
/*Fin de journée : 16h 30*/
/*Durée du RDV : 15 minutes*/
/*Si fin du RDV est avant 16 h 30, afficher rdv ok*/
/*Si fin du RDV est après 16 h 30, afficher RDV impossible*/
/*Afficher "Le RDV se termineras à HHhMM"*/


//début rdv + variable durée rdv = fin du rdv
//si fin de journée est plus grand que fin du rdv alors rdv ok
//sinon rdv impossible


let debutRdvHeure = 15;
let debutRdvMinute = 40;

let dureeRdvHeure = 0;
let dureeRdvMinute = 15;

let finJourneeHeure = 16;
let finJourneeMinute = 30;


let finDuRdvHeure = debutRdvHeure + dureeRdvHeure;
let finDuRdvMinute = debutRdvMinute + dureeRdvMinute;

if (finDuRdvHeure < finJourneeHeure || finDuRdvMinute < 60) {
    console.log("Rendez-vous OK")
} else {
    console.log("Rendez-vous impossible")
}

if ("Rendez-vous OK") {
    console.log("Le Rendez-vous se terminera à " + finDuRdvHeure + " h " + finDuRdvMinute)
} else {

}

