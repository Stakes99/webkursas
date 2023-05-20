/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

for (i = 0; i < 10; i++){
    console.log("labas")
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

for (i = 0; i < 10; i++){
    console.log(i)
}

/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

var augalai = [  
"Rose",
"Lily",
"Sunflower",
"Orchid",
"Fern",
"Tulip",
"Daisy",
"Cactus",
"Jasmine",
"Ivy"
]

/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/

for (var i = 0; i < augalai.length; i++) {
    console.log(augalai[i]);
  }

/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

for (var i = augalai.length - 1; i >= 0; i--) {
    console.log(augalai[i]);
  }

/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

for (var i = 10; i < 50; i += 2){
    console.log(i)
}

/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/

for (var i = 10; i < 50; i += 2){
    if (i % 10 === 0) {
        continue;
      }
      console.log(i);
}

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

var kiekPoriniu = 0

for (var i = 0; i < 20; i++) {
    if(i % 2 === 0){
        kiekPoriniu++
    }
}

console.log(kiekPoriniu)

/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

function kiekZodziuTrumpesniu(str) {
    var kiekis = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i].length < 5) {
          kiekis++;
        }
    }
    return kiekis
}

function kiekZodziuIlgesniu(str) {
    var kiekis = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > 7) {
          kiekis++;
        }
    }
    return kiekis
}

console.log(kiekZodziuTrumpesniu(augalai))
console.log(kiekZodziuIlgesniu(augalai))

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

var atsitiktiniaiSkaiciai = []
var rezultatas = ""
var didesni = 0

for (var i = 0; i < 300; i++){
    var atsitiktinisSkaicius = Math.floor(Math.random() * 301)
    atsitiktiniaiSkaiciai.push(atsitiktinisSkaicius)
}

for (var i = 0; i < atsitiktiniaiSkaiciai.length;i++) {
    if (atsitiktiniaiSkaiciai[i] > 150) {
        didesni++
    }
    if (atsitiktiniaiSkaiciai[i] > 275) {
        rezultatas += "[" + atsitiktiniaiSkaiciai[i] + "]" + " "
    } else {
        rezultatas += atsitiktiniaiSkaiciai[i] + " "
    }
}

console.log(rezultatas)
console.log(`Kiek didesniu: ${didesni}`)



/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

var dalijasi = ""

for (var i = 1; i < 3000;i++) {
    if (i % 7 === 0) {
        dalijasi += i + ", "
    }
}

console.log(dalijasi.substring(0, dalijasi.length - 2))

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

for (var i = 0; i < 10; i++) {
    var row = ""
    for (var j = 0; j < 10; j++) {
      row += "*"
    }
    console.log(row)
}
