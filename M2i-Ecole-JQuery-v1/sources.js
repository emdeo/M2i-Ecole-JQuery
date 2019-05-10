
// Collection d'élèves (valeurs par défaut) et des notes correspondantes
var lstEleves2 = [{
    "Id": 1, "Nom": "ALPHA", "Prenom": "Alice", "Notes":
        [{ "Id": 1, "Valeur": 15.5, "Matiere": "HISTOIRE", "Date": "10/05/10" },
        { "Id": 2, "Valeur": 14.5, "Matiere": "SES", "Date": "10/04/10" },
        { "Id": 3, "Valeur": 12, "Matiere": "SPORT", "Date": "15/05/10" }]
},
{
    "Id": 2, "Nom": "BRAVO", "Prenom": "Bernard", "Notes":
        [{ "Id": 1, "Valeur": 15.5, "Matiere": "FRANCAIS", "Date": "10/05/12" },
        { "Id": 2, "Valeur": 7.5, "Matiere": "MATHS", "Date": "10/04/12" },
        { "Id": 3, "Valeur": 4, "Matiere": "SES", "Date": "15/05/12" }]
},
{
    "Id": 3, "Nom": "CHARLY", "Prenom": "Carole", "Notes":
        [{ "Id": 1, "Valeur": 15.5, "Matiere": "SES", "Date": "10/05/15" },
        { "Id": 2, "Valeur": 14.8, "Matiere": "HISTOIRE", "Date": "10/04/15" },
        { "Id": 3, "Valeur": 12, "Matiere": "SPORT", "Date": "15/05/15" }]
}]

var lstEleves = [
    {
        idEleve: 1, Nom: "prost", Prenom: "Alain", Notes: [
            { idNote: 1, Valeur: 18, coeff: 4, Matiere: "MATHS", Date: "18/02/2019" },
            { idNote: 2, Valeur: 15, coeff: 3, Matiere: "INFO", Date: "13/03/2019" },
            { idNote: 3, Valeur: 12, coeff: 3, Matiere: "ANGLAIS", Date: "15/03/2019" }
        ]
    },
    {
        idEleve: 2, Nom: "Zidane", Prenom: "Zinedine", Notes: [
            { idNote: 4, Valeur: 20, coeff: 4, Matiere: "MATHS", Date: "18/02/2019" },
            { idNote: 5, Valeur: 19, coeff: 3, Matiere: "INFO", Date: "13/03/2019" },
            { idNote: 6, Valeur: 16, coeff: 3, Matiere: "ANGLAIS", Date: "15/03/2019" }
        ]
    },
    {
        idEleve: 3, Nom: "Schumacher", Prenom: "Michael", Notes: [
            { idNote: 7, Valeur: 10, coeff: 4, Matiere: "MATHS", Date: "18/02/2019" },
            { idNote: 8, Valeur: 11, coeff: 3, Matiere: "INFO", Date: "13/03/2019" },
            { idNote: 9, Valeur: 12, coeff: 3, Matiere: "ANGLAIS", Date: "15/03/2019" }
        ]
    },
    {
        idEleve: 4, Nom: "VETTEL", Prenom: "SEBASTIAN", Notes: [
            { idNote: 10, Valeur: 20, coeff: 4, Matiere: "MATHS", Date: "18/02/2019" },
            { idNote: 11, Valeur: 20, coeff: 3, Matiere: "INFO", Date: "13/03/2019" },
            { idNote: 12, Valeur: 20, coeff: 3, Matiere: "ANGLAIS", Date: "15/03/2019" }
        ]
    },
    {
        idEleve: 5, Nom: "ALESI", Prenom: "JEAN", Notes: [
            { idNote: 13, Valeur: 05, coeff: 4, Matiere: "MATHS", Date: "18/02/2019" },
            { idNote: 14, Valeur: 05, coeff: 3, Matiere: "INFO", Date: "13/03/2019" },
            { idNote: 15, Valeur: 05, coeff: 3, Matiere: "ANGLAIS", Date: "15/03/2019" }
        ]
    },
    {
        idEleve: 6, Nom: "VALBUENA", Prenom: "JEAN", Notes: [
            { idNote: 13, Valeur: 05, coeff: 4, Matiere: "MATHS", Date: "18/02/2019" },
            { idNote: 14, Valeur: 05, coeff: 3, Matiere: "INFO", Date: "13/03/2019" },
            { idNote: 15, Valeur: 05, coeff: 3, Matiere: "ANGLAIS", Date: "15/03/2019" }
        ]
    },
    {
        idEleve: 7, Nom: "FEKIR", Prenom: "NABIL", Notes: [
            { idNote: 13, Valeur: 05, coeff: 4, Matiere: "MATHS", Date: "18/02/2019" },
            { idNote: 14, Valeur: 05, coeff: 3, Matiere: "INFO", Date: "13/03/2019" },
            { idNote: 15, Valeur: 05, coeff: 3, Matiere: "ANGLAIS", Date: "15/03/2019" }
        ]
    }
];

// Collection de notes pour chaque élève
var lstNotes = []
var i
for (i = 0; i < lstEleves.length; i++) {
    lstNotes.push(lstEleves[i].Notes)
}

function afficherNotes(idEleve) {
    // Renvoie une valeur JS convertie en chaîne JSON
    return JSON.stringify(lstNotes[idEleve])
}

function calculCoef(matiere) {
    switch (matiere) {
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
        case "INFO":
            return "9"
        case "ANGLAIS":
            return "2"
    }
}

// Quand la page a fini de charger
$(document).ready(function () {

    // Messages d'alerte pour les lien "Sélectionner", "Modifier" et "Supprimer"
    //     
    // $("#tblEleves").on("click", ".select", function () {
    //     alert("Sélection de l'élève " + $(this).attr("data-idEleve"))
    // })
    // $("#tblEleves").on("click", ".update", function () {
    //     alert("Modification de l'élève " + $(this).attr("data-idEleve"))
    // })
    // $("#tblEleves").on("click", ".remove", function () {
    //     alert("Suppression de l'élève " + $(this).attr("data-idEleve"))
    // })



    // Le tableau d'élèves, de notes et le bouton "Cacher notes" sont cachés quand la page a fini de charger
    $("#tblEleves").hide()
    $("#tblNotes").hide()
    $("#btnCacherTableau").hide()



    // Générer le tableau d'élèves
    GenererTblEleves()



    // Générer un tableau d'élèves sur la page HTML à partir de la liste créée ci-dessus
    function GenererTblEleves() {
        let i
        for (i = 0; i < lstEleves.length; i++) {

            let id = lstEleves[i].idEleve
            let nom = lstEleves[i].Nom
            let prenom = lstEleves[i].Prenom

            // Insérer un élément ligne dans le tableau
            let ligne = $("<tr></tr>")

            // Ajouter la colonne "Sélectionner"
            ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link select").attr("data-idEleve", id).text("Sélectionner")))

            // Ajouter les colonnes id, nom et prénom
            ligne.append($("<td></td>").text(id))
            ligne.append($("<td></td>").text(nom))
            ligne.append($("<td></td>").text(prenom))

            // Ajouter les colonnes "Modifier" et "Supprimer"
            ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link update").
                attr("data-idEleve", id).attr("data-toggle", "modal").attr("data-target", "#modalUpdate").text("Modifier")))
            ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link delete").
                attr("data-idEleve", id).text("Supprimer")))

            $("#tblEleves").append(ligne)
        }

        $("#tblEleves").show()
    }



    // Ajouter une nouvelle ligne au tableau d'élèves
    $("#btnAjouterEleve").on("click", function () {

        // Enregistrer les attributs du nouvel élève
        let nom = $("#txtNomEleve").val().toUpperCase()
        let prenom = $("#txtPrenomEleve").val()

        // Calculer l'id du nouvel élève (id du dernier + 1)
        let id = lstEleves[lstEleves.length - 1].idEleve + 1

        // Mettre à jour la liste d'élèves
        lstEleves.push({ "Id": id, "Nom": nom, "Prenom": prenom })

        // Insérer un élément ligne dans le tableau
        let ligne = $("<tr></tr>")

        // Ajouter la colonne "Sélectionner"
        ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link select").attr("data-idEleve", id).text("Sélectionner")))

        // Ajouter les colonnes id, nom et prénom
        ligne.append($("<td></td>").text(id))
        ligne.append($("<td></td>").text(nom))
        ligne.append($("<td></td>").text(prenom))

        // Ajouter les colonnes "Modifier" et "Supprimer"
        ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link update").
            attr("data-idEleve", id).attr("data-toggle", "modal").attr("data-target", "#modalUpdate").text("Modifier")))
        ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link delete").
            attr("data-idEleve", id).text("Supprimer")))

        $("#tblEleves").append(ligne)   // Ajouter l'élément ligne au tableau
        $("#txtNomEleve").val("")       // Vider l'input txtNomEleve
        $("#txtPrenomEleve").val("")    // Vider l'input txtPrenomEleve
        $("#divAjouterEleve").attr("class", "collapse") // Cacher l'élément collapse

    })



    // Afficher toutes les notes d'un élève dans un tableau sous le bouton "Insérer nouvel élève..."
    $(".select").on("click", function () {

        // Vider le tableau s'il est déjà affiché
        $("#tblNotesBody").empty()

        // Récupérer l'id de l'élève
        let idEleve = $(this).attr("data-idEleve")

        // Afficher le nom de l'élève sélectionné
        let nom = lstEleves[idEleve].Nom
        let prenom = lstEleves[idEleve].Prenom
        $("#titreTblNotes").text("Notes de " + prenom + " " + nom + " :")

        // Récupérer les notes d'un élève
        // JSON.parse() convertit une chaîne de caractères en objet JS
        let notes = JSON.parse(afficherNotes(idEleve))

        // Corps du tableau (une note par ligne)
        let i
        for (i = 0; i < notes.length; i++) {

            ligne = $("<tr></tr>")

            ligne.append($("<td></td>").text(notes[i].Valeur))
            ligne.append($("<td></td>").text(calculCoef(notes[i].Matiere))) // Calcule le coefficient en fonction de la matière
            ligne.append($("<td></td>").text(notes[i].Matiere))
            ligne.append($("<td></td>").text(notes[i].Date))

            $("#tblNotesBody").append(ligne)
        }

        // Afficher le tableau et le bouton "Cacher notes"
        $("#tblNotes").show()
        $("#btnCacherTableau").show()

        // Cacher le tableau et le bouton quand l'utilisateur clique sur le bouton
        $("#btnCacherTableau").on("click", function () {
            $("#titreTblNotes").text("")
            $("#tblNotes").hide()
            $("#btnCacherTableau").hide()
        })
    })



    // Afficher un modal permettant de modifier et supprimer les notes d'un élève
    $(".update").on("click", function () {

        // Vider le tableau avant de le modifier
        $("#modalUpdateTableBody").empty()
        $("#modalTxtNom").attr("placeholder", "")
        $("#modalTxtPrenom").attr("placeholder", "")

        // Récupérer l'id de l'élève
        let idEleve = $(this).attr("data-idEleve")

        // Nom et prénom de l'élève sélectionné
        let nom = lstEleves[idEleve].Nom
        let prenom = lstEleves[idEleve].Prenom

        // Changer le titre du modal
        $("#modalUpdateLabel").text("Modifier les notes de " + prenom + " " + nom)

        // Proposer deux éléments inputs avec le nom et prénom de l'élève en valeurs par défaut
        $("#modalTxtNom").attr("placeholder", nom)
        $("#modalTxtPrenom").attr("placeholder", prenom)
        $("#modalTxtID").attr("placeholder", lstEleves[idEleve].idEleve)

        // Récupérer les notes d'un élève
        // JSON.parse() convertit une chaîne de caractères en objet JS
        let notes = JSON.parse(afficherNotes(idEleve))

        // Corps du tableau (une note par ligne)
        let i
        for (i = 0; i < notes.length; i++) {

            let ligne = $("<tr></tr>")
            let idNote = notes[i].idNote

            // Ajouter les notes au tableau
            ligne.append($("<td></td>").append($("<input>").attr("readonly", "").attr("class", "form-control").attr("data-idNote", idNote).attr("placeholder", idNote)))
            ligne.append($("<td></td>").append($("<input>").attr("readonly", "").attr("class", "form-control").attr("data-idNote", idNote).attr("placeholder", notes[i].Valeur)))
            ligne.append($("<td></td>").append($("<input>").attr("readonly", "").attr("class", "form-control").attr("data-idNote", idNote).attr("placeholder", calculCoef(notes[i].Matiere)))) // Calcule le coefficient en fonction de la matière
            ligne.append($("<td></td>").append($("<input>").attr("readonly", "").attr("class", "form-control").attr("data-idNote", idNote).attr("placeholder", notes[i].Matiere)))
            ligne.append($("<td></td>").append($("<input>").attr("readonly", "").attr("class", "form-control").attr("data-idNote", idNote).attr("placeholder", notes[i].Date)))

            // Ajouter les boutons "Modifier" et "Supprimer"
            ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link updateNote").
                attr("data-idNote", idNote).text("Modifier")))
            ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link deleteNote").
                attr("data-idNote", idNote).text("Supprimer")))

            $("#modalUpdateTableBody").append(ligne)
        }

        // Ajouter une note
        $("#btnAjouterNote").on("click", function () {

            let ligne = $("<tr></tr>")
            let idNote = lstNotes[lstNotes.length - 1].idNote + 1

            // Ajouter les notes au tableau
            ligne.append($("<td></td>").append($("<input>").attr("readonly", "").attr("class", "form-control").attr("data-idNote", idNote).attr("placeholder", idNote)))
            ligne.append($("<td></td>").append($("<input>").attr("class", "form-control").attr("data-idNote", idNote).attr("placeholder", "(de 0 à 20)")))
            ligne.append($("<td></td>").append($("<input>").attr("class", "form-control").attr("data-idNote", idNote).attr("placeholder", "(de 1 à 9)"))) // Calcule le coefficient en fonction de la matière
            ligne.append($("<td></td>").append($("<input>").attr("class", "form-control").attr("data-idNote", idNote).attr("placeholder", "(défaut)")))
            ligne.append($("<td></td>").append($("<input>").attr("class", "form-control").attr("data-idNote", idNote).attr("placeholder", "jj/mm/aaaa")))

            // Ajouter les boutons "Modifier" et "Supprimer"
            ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link updateNote").
                attr("data-idNote", idNote).text("Enregistrer")))
            ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link deleteNote").
                attr("data-idNote", idNote).text("Supprimer")))

            $("#modalUpdateTableBody").append(ligne)
        })

        // Modifier une note
        function boutonModifier() {
            let idNote = $(this).attr("data-idNote")

            if ($(this).is('[readonly]')) {
                $(this).attr("readonly", false)
                $(this).text("Enregistrer")
            }
            else {
                $(this).attr("readonly", true)
                $(this).text("Modifier")
            }
        }

        $(".updateNote").on("click", function () {
            boutonModifier()
        })
    })
})