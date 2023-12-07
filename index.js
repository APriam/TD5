var HoraireBrut = document.getElementById('Hbrut');
var MensuelBrut = document.getElementById('Mbrut');
var AnnuelBrut = document.getElementById('Abrut');
var HoraireNet = document.getElementById('Hnet');
var MensuelNet = document.getElementById('Mnet');
var AnnuelNet = document.getElementById('Anet');
var MensuelNetImpot = document.getElementById('mensuel');
var AnnuelNetImpot = document.getElementById('annuel');
var PrimeMois;
var mois;
var tempsTravailnput = document.getElementById("tempsTravail");;
var valeurTempsTravail = document.getElementById("valeurTempsTravail");;
var prelevementInput = document.getElementById("prelevement");;
var valeurPrelevement = document.getElementById("valeurPrelevement");;
var HBrut;
var NewHBrut;
var MBrut;
var NewMBrut;
var ABrut;
var NewABrut;
var StatutBrut;
var StatutSalarier;
var pNet;
var HNet;
var MNet;
var ANet;
function hbrut(event) {
    HBrut = event.srcElement.value;
    StatutBrut = "horaire";
    cal();
}

function mbrut(event) {
    MBrut = event.srcElement.value;
    StatutBrut = "mensuel";
    cal();
}

function abrut(event) {
    ABrut = event.srcElement.value;
    StatutBrut = "annuel";
    cal();
}

function statutsalarier(event) {
    StatutSalarier = event.srcElement.value;
    cal();
}

function tempstravail() {
    tempsTravailnput.addEventListener("input", function () {
        valeurTempsTravail.textContent = tempsTravailnput.value;
    });
    cal();
}

function primemois(event) {
    PrimeMois = event.srcElement.value;
    cal();
}

function prelevementsource() {
    prelevementInput.addEventListener("input", function () {
        valeurPrelevement.textContent = prelevementInput.value;
    });
    cal();
}

function cal() {
    if (HBrut == undefined && MBrut == undefined && ABrut == undefined) {
        UBrut = 0;
        MBrut = 0;
        ABrut = 0;
    }

    if (StatutSalarier == undefined) {
        StatutSalarier = "SNC"
    }

    if (PrimeMois == undefined) {
        PrimeMois = "douze"
    }

    switch (PrimeMois) {
        case "douze":
            mois = 12;
            break;
        case "treize":
            mois = 13;
            break;
        case "quatorze":
            mois = 14;
            break;
        case "quinze":
            mois = 15;
            break;
        case "seize":
            mois = 16;
            break;
    }

    switch (StatutBrut) {
        case "horaire":
            NewHBrut = HBrut;
            NewMBrut = HBrut * 140 * (tempsTravailnput.value / 100);
            NewABrut = HBrut * 140 * mois * (tempsTravailnput.value / 100);
            break;
        case "mensuel":
            NewHBrut = MBrut / 140 * (tempsTravailnput.value / 100);
            NewMBrut = MBrut * (tempsTravailnput.value / 100);
            NewABrut = MBrut * mois * (tempsTravailnput.value / 100);
            break;
        case "annuel":
            NewHBrut = ABrut / 140 / mois * (tempsTravailnput.value / 100);
            NewMBrut = ABrut / 140 * (tempsTravailnput.value / 100);
            NewABrut = ABrut * (tempsTravailnput.value / 100);
            break;
    }


    switch (StatutSalarier) {
        case "SNC":
            pNet = 0.78;
            break;
        case "SC":
            pNet = 0.75;
            break;
        case "FP":
            pNet = 0.85;
            break;
        case "PL":
            pNet = 0.55;
            break;
        case "PS":
            pNet = 0.49;
    }

    HNet = NewHBrut * pNet;
    MNet = NewMBrut * pNet;
    ANet = NewABrut * pNet;

    MNetImpot = MNet * (1 - prelevementInput.value / 100);
    ANetImpot = ANet * (1 - prelevementInput.value / 100);

    reponse();
}

function reponse() {
    HNet = parseFloat(HNet).toFixed(2);
    MNet = parseFloat(MNet).toFixed(2);
    ANet = parseFloat(ANet).toFixed(2);
    MNetImpot = parseFloat(MNetImpot).toFixed(2);
    ANetImpot = parseFloat(ANetImpot).toFixed(2);

    switch (StatutBrut) {
        case "horaire":
            NewMBrut = parseFloat(NewMBrut).toFixed(2);
            NewABrut = parseFloat(NewABrut).toFixed(2);
            MensuelBrut.value = NewMBrut;
            AnnuelBrut.value = NewABrut;
            break;
        case "mensuel":
            NewHBrut = parseFloat(NewHBrut).toFixed(2);
            NewABrut = parseFloat(NewABrut).toFixed(2);
            HoraireBrut.value = NewHBrut;
            AnnuelBrut.value = NewABrut;
            break;
        case "annuel":
            NewHBrut = parseFloat(NewHBrut).toFixed(2);
            NewMBrut = parseFloat(NewMBrut).toFixed(2);
            HoraireBrut.value = NewHBrut;
            MensuelBrut.value = NewMBrut;
            break;
    }

    HoraireNet.value = HNet;
    MensuelNet.value = MNet;
    AnnuelNet.value = ANet;

    MensuelNetImpot.value = MNetImpot;
    AnnuelNetImpot.value = ANetImpot;
}


function efface() {
    let value = document.querySelectorAll('#form input');
    value.forEach(function (input) {
        input.value = '';
    });
    tempsTravailnput.value = 100;
    valeurTempsTravail.textContent = 100;
    prelevementInput.value = 0;
    valeurPrelevement.textContent = 0.0;
    document.getElementById('douze').checked = true;
    document.getElementById('SNC').checked = true;
    HBrut = undefined;
    NewHBrut = undefined;
    MBrut = undefined;
    NewMBrut = undefined;
    ABrut = undefined;
    NewABrut = undefined;
    StatutBrut = undefined;
    StatutSalarier = undefined;
    pNet = undefined;
    HNet = undefined;
    MNet = undefined;
    ANet = undefined;
    PrimeMois = undefined;
    mois = undefined;
    HoraireNet.value = 0;
    MensuelNet.value = 0;
    AnnuelNet.value = 0;
    MensuelNetImpot.value = 0;
    AnnuelNetImpot.value = 0;
    MensuelBrut.value = 0;
    HoraireBrut.value = 0;
    AnnuelBrut.value = 0;

}

function validateDecimalInput(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');
    var pointIndex = input.value.indexOf('.');
    if (pointIndex !== -1) {
        input.value = input.value.slice(0, pointIndex + 3);
    }
}