// Fichier JavaScript principal

// Liste d'élèves
var lstEleves = [{
    IdEleve: 1, Nom: "ALPHA", Prenom: "Alice", Notes: [
        { IdNote: 1, Valeur: 15.5, Matiere: "HISTOIRE", DateExam: "10/05/10" },
        { IdNote: 2, Valeur: 14.5, Matiere: "SES", DateExam: "10/04/10" },
        { IdNote: 3, Valeur: 12, Matiere: "SPORT", DateExam: "15/05/10" }]
},
{
    IdEleve: 2, Nom: "BRAVO", Prenom: "Bernard", Notes: [
        { IdNote: 1, Valeur: 15.5, Matiere: "FRANCAIS", DateExam: "10/05/12" },
        { IdNote: 2, Valeur: 7.5, Matiere: "MATHS", DateExam: "10/04/12" },
        { IdNote: 3, Valeur: 4, Matiere: "SES", DateExam: "15/05/12" }]
},
{
    IdEleve: 3, Nom: "CHARLY", Prenom: "Carole", Notes: [
        { IdNote: 1, Valeur: 15.5, Matiere: "SES", DateExam: "10/05/15" },
        { IdNote: 2, Valeur: 14.8, Matiere: "HISTOIRE", DateExam: "10/04/15" },
        { IdNote: 3, Valeur: 12, Matiere: "SPORT", DateExam: "15/05/15" }]
}]



// Quand la page web a fini de charger
$(document).ready(function () {

    // Cacher le tableau de notes
    $("#tblNotes").hide()

    // Générer dynamiquement le tableau d'élèves
    genererTableauEleves(lstEleves)



    // FONCTIONS



    // Générer un tableau HTML rempli d'élèves à partir d'une liste
    function genererTableauEleves(liste) {
        for (i = 0; i < lstEleves.length; i++) {
            ajouterLigneEleve(liste[i], $("#tbody-Eleves"))
        }
    }



    // Générer un tableau HTML rempli de notes à partir d'une liste
    function genererTableauNotes(liste) {
        for (i = 0; i < lstEleves.length; i++) {
            ajouterLigneNote(liste[i], $("#tbody-Notes"))
        }
    }



    // Récupérer un objet de lstEleves à partir de son IdEleve
    function getEleveByID(idEleve) {
        return lstEleves.find(elem => elem.IdEleve == idEleve);
    }



    // Calculer l'Id d'un nouvel élève
    function nouvelId() {

        // S'il n'y a aucun élève, renvoyer 1
        if (lstEleves.length == 0) {
            return 1
        }

        // Construire la liste des IDs déjà existants
        let listeId = []
        let i
        for (i = 0; i < lstEleves.length; i++) {
            listeId.push(lstEleves[i].IdEleve)
        }

        // Trouver un nouvel ID en vérifiant s'il n'est pas dans listeId
        let nouvelId
        for (nouvelId = 1; nouvelId <= (lstEleves.length + 1); nouvelId++) {
            if (!listeId.includes(nouvelId)) {
                return nouvelId
            }
        }
    }



    // Calculer le coefficient d'une note à partir de sa matière
    function calculerCoef(note) {
        switch (note.Matiere) {
            case "FRANCAIS":
                return "3"
            case "MATHS":
                return "1"
            case "HISTOIRE":
                return "4"
            case "SPORT":
                return "1"
            case "SES":
                return "5"
        }
    }



    // Insérer une nouvelle ligne dans un tableau d'élèves
    // (prend en paramètre une liste d'attributs d'un élève et un composant de tableau HTML)
    function ajouterLigneEleve(eleve, composantTableau) {

        // Insérer un élément ligne dans le tableau
        let ligne = $("<tr></tr>")

        // Ajouter le bouton "Sélectionner"
        ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link select").attr("data-idEleve", eleve.IdEleve).text("Sélectionner")))

        // Ajouter les colonnes ID, Nom et Prénom
        ligne.append($("<td></td>").text(eleve.IdEleve))
        ligne.append($("<td></td>").text(eleve.Nom))
        ligne.append($("<td></td>").text(eleve.Prenom))

        // Ajouter les boutons "Modifier" et "Supprimer"
        // (le bouton "Modifier" fait apparaître un modal)
        ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link update").attr("data-idEleve", eleve.IdEleve).
            attr("data-toggle", "modal").attr("data-target", "#modalCmdUpdate").text("Modifier")))
        ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link remove").attr("data-idEleve", eleve.IdEleve).text("Supprimer")))

        // Ajouter une ligne au tableau de la page web
        composantTableau.append(ligne)
    }



    // Insérer une nouvelle ligne dans un tableau de notes
    // (prend en paramètre un ID d'élève, une liste d'attributs d'une note et un composant de tableau HTML)
    function ajouterLigneNote(note, composantTableau) {

        // Insérer un élément ligne dans le tableau
        let ligne = $("<tr></tr>")

        // Ajouter les colonnes ID note, Matière, Note, Coefficient et Date d'examen
        ligne.append($("<td></td>").text(note.IdNote))
        ligne.append($("<td></td>").text(note.Matiere))
        ligne.append($("<td></td>").text(note.Valeur))
        ligne.append($("<td></td>").text(calculerCoef(note)))
        ligne.append($("<td></td>").text(note.DateExam))

        // Ajouter une ligne au tableau de la page web
        composantTableau.append(ligne)
    }



    // CIBLES JQUERY



    // Comportement du bouton "Ajouter élève"
    $("#collapseAjouterEleve").on("click", function () {

        // Générer un nouveal ID élève
        let id = nouvelId()

        // Afficher l'ID dans l'élément input correspondant
        $("#txtIdEleve").attr("placeholder", id)
    })



    // Comportement du bouton "Ajouter" (dans le collapse "Ajouter élève")
    $("#cmdAjouterEleve").click(function () {

        let nouvelEleve = {}

        // Récupérer les infos du nouvel élève
        nouvelEleve["IdEleve"] = nouvelId()
        nouvelEleve["Nom"] = $("#txtNomEleve").val().toUpperCase()
        nouvelEleve["Prenom"] = $("#txtPrenomEleve").val()

        // Ajouter une ligne au tableau de la page web
        ajouterLigneEleve(nouvelEleve, $("#tbody-Eleves"))

        // Mettre à jour la liste d'élèves
        lstEleves.push(nouvelEleve)

        // Réinitialiser les valeurs des éléments input
        $("#txtNomEleve").val("")
        $("#txtPrenomEleve").val("")
        $("#divAjouterEleve").attr("class", "collapse")
    })



    // Comportement du bouton "Sélectionner"
    $(".select").on("click", function () {

        // Vider le tableau
        $("#tbody-Notes").empty()

        // Enregistrer l'ID de l'élève sélectionné
        let idEleve = $(this).attr("data-IdEleve")

        // Récupérer les notes de l'élève dont l'ID correspond à celui enregistré
        let notes = getEleveByID(idEleve).Notes

        // Générer le tableau des notes de l'élève
        genererTableauNotes(notes, $("#tbody-Notes"))

        // Afficher le tableau de notes
        $("#tblNotes").show()
    })



    // Comportement du bouton "Modifier" dans le tableau d'élèves
    $("#tbody-Eleves .update").on("click", function () {

        $("#tbody-ModalEleve")
        $("#tbody-ModalNotes")
    })

})