let wordsList = [
    "inondazione",
    "rischio",
    "volontario",
    "pioggia",
    "esposizione",
    "prevenzione",
    "civile",
    "ambasciatori",
    "scuola",
    "chimico",
    "incidente",
    "soccorso"
];

let counter = 0;
let word1 = false;
let word2 = false;
let word3 = false;
let word4 = false;
let word5 = false;
let word6 = false;
let word7 = false;
let word8 = false;
let word9 = false;
let word10 = false;
let word11 = false;
let word12 = false;

function submitFunction(){

    let wordInput = document.getElementById("wordInput").value.toLowerCase();

    let lettersList1 = wordsList[0].split("");
    let lettersList2 = wordsList[1].split("");
    let lettersList3 = wordsList[2].split("");
    let lettersList4 = wordsList[3].split("");
    let lettersList5 = wordsList[4].split("");
    let lettersList6 = wordsList[5].split("");
    let lettersList7 = wordsList[6].split("");
    let lettersList8 = wordsList[7].split("");
    let lettersList9 = wordsList[8].split("");
    let lettersList10 = wordsList[9].split("");
    let lettersList11 = wordsList[10].split("");
    let lettersList12 = wordsList[11].split("");

    if (wordInput === wordsList[0] && word1 === false){
        console.log("1) Correct");

        document.getElementById("a1").innerHTML = lettersList1[0].toUpperCase();
        document.getElementById("a2").innerHTML = lettersList1[1].toUpperCase();
        document.getElementById("a3").innerHTML = lettersList1[2].toUpperCase();
        document.getElementById("a4").innerHTML = lettersList1[3].toUpperCase();
        document.getElementById("a5").innerHTML = lettersList1[4].toUpperCase();
        document.getElementById("a6").innerHTML = lettersList1[5].toUpperCase();
        document.getElementById("a7").innerHTML = lettersList1[6].toUpperCase();
        document.getElementById("a8").innerHTML = lettersList1[7].toUpperCase();
        document.getElementById("a9").innerHTML = lettersList1[8].toUpperCase();
        document.getElementById("a10").innerHTML = lettersList1[9].toUpperCase();
        document.getElementById("a11").innerHTML = lettersList1[10].toUpperCase();
        document.getElementById("wordInput").value = "";

        document.getElementById("aQuestion").style.color = "green";
        counter++;

        word1 = true;
    }

    if (wordInput === wordsList[1] && word2 === false){
        console.log("2) Correct");
        document.getElementById("b1").innerHTML = lettersList2[0].toUpperCase();
        document.getElementById("b2").innerHTML = lettersList2[1].toUpperCase();
        document.getElementById("b3").innerHTML = lettersList2[2].toUpperCase();
        document.getElementById("b4").innerHTML = lettersList2[3].toUpperCase();
        document.getElementById("b5").innerHTML = lettersList2[4].toUpperCase();
        document.getElementById("b6").innerHTML = lettersList2[5].toUpperCase();
        document.getElementById("b7").innerHTML = lettersList2[6].toUpperCase();
        document.getElementById("wordInput").value = "";

        document.getElementById("bQuestion").style.color = "green";
        counter++;

        word2 = true;
    }

    if (wordInput === wordsList[2]){
        console.log("3) Correct");
        document.getElementById("c1").innerHTML = lettersList3[0].toUpperCase();
        document.getElementById("c2").innerHTML = lettersList3[1].toUpperCase();
        document.getElementById("c3").innerHTML = lettersList3[2].toUpperCase();
        document.getElementById("c4").innerHTML = lettersList3[3].toUpperCase();
        document.getElementById("c5").innerHTML = lettersList3[4].toUpperCase();
        document.getElementById("c6").innerHTML = lettersList3[5].toUpperCase();
        document.getElementById("c7").innerHTML = lettersList3[6].toUpperCase();
        document.getElementById("c8").innerHTML = lettersList3[7].toUpperCase();
        document.getElementById("c9").innerHTML = lettersList3[8].toUpperCase();
        document.getElementById("c10").innerHTML = lettersList3[9].toUpperCase();
        document.getElementById("wordInput").value = "";

        document.getElementById("cQuestion").style.color = "green";
        counter++;

        word3 = true;
    }

    if (wordInput === wordsList[3]){
        console.log("4) Correct");
        document.getElementById("d1").innerHTML = lettersList4[0].toUpperCase();
        document.getElementById("d2").innerHTML = lettersList4[1].toUpperCase();
        document.getElementById("d3").innerHTML = lettersList4[2].toUpperCase();
        document.getElementById("d4").innerHTML = lettersList4[3].toUpperCase();
        document.getElementById("d5").innerHTML = lettersList4[4].toUpperCase();
        document.getElementById("d6").innerHTML = lettersList4[5].toUpperCase();
        document.getElementById("d7").innerHTML = lettersList4[6].toUpperCase();
        document.getElementById("wordInput").value = "";

        document.getElementById("dQuestion").style.color = "green";
        counter++;

        word4 = true;
    }

    if (wordInput === wordsList[4]){
        console.log("5) Correct");
        document.getElementById("e1").innerHTML = lettersList5[0].toUpperCase();
        document.getElementById("e2").innerHTML = lettersList5[1].toUpperCase();
        document.getElementById("e3").innerHTML = lettersList5[2].toUpperCase();
        document.getElementById("e4").innerHTML = lettersList5[3].toUpperCase();
        document.getElementById("e5").innerHTML = lettersList5[4].toUpperCase();
        document.getElementById("e6").innerHTML = lettersList5[5].toUpperCase();
        document.getElementById("e7").innerHTML = lettersList5[6].toUpperCase();
        document.getElementById("e8").innerHTML = lettersList5[7].toUpperCase();
        document.getElementById("e9").innerHTML = lettersList5[8].toUpperCase();
        document.getElementById("e10").innerHTML = lettersList5[9].toUpperCase();
        document.getElementById("e11").innerHTML = lettersList5[10].toUpperCase();
        document.getElementById("wordInput").value = "";

        document.getElementById("eQuestion").style.color = "green";
        counter++;

        word5 = true;
    }

    if (wordInput === wordsList[5]){
        console.log("6) Correct");
        document.getElementById("f1").innerHTML = lettersList6[0].toUpperCase();
        document.getElementById("f2").innerHTML = lettersList6[1].toUpperCase();
        document.getElementById("f3").innerHTML = lettersList6[2].toUpperCase();
        document.getElementById("f4").innerHTML = lettersList6[3].toUpperCase();
        document.getElementById("f5").innerHTML = lettersList6[4].toUpperCase();
        document.getElementById("f6").innerHTML = lettersList6[5].toUpperCase();
        document.getElementById("f7").innerHTML = lettersList6[6].toUpperCase();
        document.getElementById("f8").innerHTML = lettersList6[7].toUpperCase();
        document.getElementById("f9").innerHTML = lettersList6[8].toUpperCase();
        document.getElementById("f10").innerHTML = lettersList6[9].toUpperCase();
        document.getElementById("f11").innerHTML = lettersList6[10].toUpperCase();
        document.getElementById("wordInput").value = "";

        document.getElementById("fQuestion").style.color = "green";
        counter++;

        word6 = true;
    }

    if (wordInput === wordsList[6]){
        console.log("7) Correct");
        document.getElementById("g1").innerHTML = lettersList7[0].toUpperCase();
        document.getElementById("g2").innerHTML = lettersList7[1].toUpperCase();
        document.getElementById("g3").innerHTML = lettersList7[2].toUpperCase();
        document.getElementById("g4").innerHTML = lettersList7[3].toUpperCase();
        document.getElementById("g5").innerHTML = lettersList7[4].toUpperCase();
        document.getElementById("g6").innerHTML = lettersList7[5].toUpperCase();
        document.getElementById("wordInput").value = "";

        document.getElementById("gQuestion").style.color = "green";
        counter++;

        word7 = true;
    }

    if (wordInput === wordsList[7]){
        console.log("8) Correct");
        document.getElementById("h1").innerHTML = lettersList8[0].toUpperCase();
        document.getElementById("h2").innerHTML = lettersList8[1].toUpperCase();
        document.getElementById("h3").innerHTML = lettersList8[2].toUpperCase();
        document.getElementById("h4").innerHTML = lettersList8[3].toUpperCase();
        document.getElementById("h5").innerHTML = lettersList8[4].toUpperCase();
        document.getElementById("h6").innerHTML = lettersList8[5].toUpperCase();
        document.getElementById("h7").innerHTML = lettersList8[6].toUpperCase();
        document.getElementById("h8").innerHTML = lettersList8[7].toUpperCase();
        document.getElementById("h9").innerHTML = lettersList8[8].toUpperCase();
        document.getElementById("h10").innerHTML = lettersList8[9].toUpperCase();
        document.getElementById("h11").innerHTML = lettersList8[10].toUpperCase();
        document.getElementById("h12").innerHTML = lettersList8[11].toUpperCase();
        document.getElementById("wordInput").value = "";

        document.getElementById("hQuestion").style.color = "green";
        counter++;

        word8 = true;
    }

    if (wordInput === wordsList[8]){
        console.log("9) Correct");
        document.getElementById("i1").innerHTML = lettersList9[0].toUpperCase();
        document.getElementById("i2").innerHTML = lettersList9[1].toUpperCase();
        document.getElementById("i3").innerHTML = lettersList9[2].toUpperCase();
        document.getElementById("i4").innerHTML = lettersList9[3].toUpperCase();
        document.getElementById("i5").innerHTML = lettersList9[4].toUpperCase();
        document.getElementById("i6").innerHTML = lettersList9[5].toUpperCase();
        document.getElementById("wordInput").value = "";

        document.getElementById("iQuestion").style.color = "green";
        counter++;

        word9 = true;
    }

    if (wordInput === wordsList[9]){
        console.log("10) Correct");
        document.getElementById("j1").innerHTML = lettersList10[0].toUpperCase();
        document.getElementById("j2").innerHTML = lettersList10[1].toUpperCase();
        document.getElementById("j3").innerHTML = lettersList10[2].toUpperCase();
        document.getElementById("j4").innerHTML = lettersList10[3].toUpperCase();
        document.getElementById("j5").innerHTML = lettersList10[4].toUpperCase();
        document.getElementById("j6").innerHTML = lettersList10[5].toUpperCase();
        document.getElementById("j7").innerHTML = lettersList10[6].toUpperCase();
        document.getElementById("wordInput").value = "";
        document.getElementById("jQuestion").style.color = "green";
        counter++;

        word10 = true;
    }

    if (wordInput === wordsList[10]){
        console.log("11) Correct");
        document.getElementById("k1").innerHTML = lettersList11[0].toUpperCase();
        document.getElementById("k2").innerHTML = lettersList11[1].toUpperCase();
        document.getElementById("k3").innerHTML = lettersList11[2].toUpperCase();
        document.getElementById("k4").innerHTML = lettersList11[3].toUpperCase();
        document.getElementById("k5").innerHTML = lettersList11[4].toUpperCase();
        document.getElementById("k6").innerHTML = lettersList11[5].toUpperCase();
        document.getElementById("k7").innerHTML = lettersList11[6].toUpperCase();
        document.getElementById("k8").innerHTML = lettersList11[7].toUpperCase();
        document.getElementById("k9").innerHTML = lettersList11[8].toUpperCase();
        document.getElementById("wordInput").value = "";
        document.getElementById("kQuestion").style.color = "green";
        counter++;

        word11 = true;
    }

    if (wordInput === wordsList[11]){
        console.log("12) Correct");

        document.getElementById("l1").innerHTML = lettersList12[0].toUpperCase();
        document.getElementById("l2").innerHTML = lettersList12[1].toUpperCase();
        document.getElementById("l3").innerHTML = lettersList12[2].toUpperCase();
        document.getElementById("l4").innerHTML = lettersList12[3].toUpperCase();
        document.getElementById("l5").innerHTML = lettersList12[4].toUpperCase();
        document.getElementById("l6").innerHTML = lettersList12[5].toUpperCase();
        document.getElementById("l7").innerHTML = lettersList12[6].toUpperCase();
        document.getElementById("l8").innerHTML = lettersList12[7].toUpperCase();
        document.getElementById("wordInput").value = "";

        document.getElementById("lQuestion").style.color = "green";
        counter++;

        word12 = true;
    }

    if (counter === 12){
        document.getElementById("wordInput").style.display = "none";
        document.getElementById("submitBtn").style.display = "none";
        document.getElementById("submitLbl").style.display = "none";
        document.getElementById("victoryMessage").style.display = "block";
        document.getElementById("victoryMessage").style.color = "green";
        document.getElementById("a1").style.backgroundColor = "green";
        document.getElementById("b7").style.backgroundColor = "green";
        document.getElementById("c5").style.backgroundColor = "green";
        document.getElementById("d3").style.backgroundColor = "green";
        document.getElementById("e10").style.backgroundColor = "green";
        document.getElementById("f2").style.backgroundColor = "green";
        document.getElementById("g2").style.backgroundColor = "green";
        document.getElementById("h5").style.backgroundColor = "green";
        document.getElementById("i2").style.backgroundColor = "green";
        document.getElementById("j2").style.backgroundColor = "green";
        document.getElementById("k1").style.backgroundColor = "green";
        document.getElementById("l8").style.backgroundColor = "green";
    }
}