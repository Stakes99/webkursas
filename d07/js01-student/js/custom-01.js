/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let vardas = "Vardenis"
let pavarde = "Pavardenis"
let gimimoMetai = 1999
let sieMetai = new Date().getFullYear()
console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${sieMetai - gimimoMetai} metai(-ų)`)

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let x = Math.round(Math.random() * 4)
let y = Math.round(Math.random() * 4)

if (Math.min(x,y) == 0){
    console.log("Dalyba negalima")
}
else{
    console.log((Math.max(x,y)/Math.min(x,y)).toFixed(2))
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let pirmasis = Math.round(Math.random() * 25)
let antrasis = Math.round(Math.random() * 25)
let treciasis = Math.round(Math.random() * 25)

if (pirmasis !== antrasis && pirmasis !== treciasis && antrasis !== treciasis){
    if (pirmasis > antrasis && pirmasis < treciasis || pirmasis < antrasis && pirmasis > treciasis) {
        console.log(`Vidurinis yra ${pirmasis}`)
    } else if (antrasis > pirmasis && antrasis < treciasis || antrasis < pirmasis && antrasis > treciasis) {
        console.log(`Vidurinis yra ${antrasis}`)
    } else {
        console.log(`Vidurinis yra ${treciasis}`)
    }
} else {
    console.log(`Du kintamieji vienodi, tad vidurinio rasti negalima`)
}


/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

let kr1 = Math.round(Math.random() * 9 + 1)
let kr2 = Math.round(Math.random() * 9 + 1)
let kr3 = Math.round(Math.random() * 9 + 1)
//Trikampio nelygybė teigia, kad bet kokio trikampio bet kurių dviejų kraštinių ilgių suma yra nemažesnė už trečios kraštinės ilgį.
if (kr1 + kr2 > kr3 && kr2 + kr3 > kr1 && kr3 + kr1 > kr2) {
    console.log("Trikampį sudaryti galima")
} else {
    console.log("Trikampio sudaryti negalima")
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let kin1 = Math.round(Math.random() * 2)
let kin2 = Math.round(Math.random() * 2)
let kin3 = Math.round(Math.random() * 2)
let kin4 = Math.round(Math.random() * 2)

let nuliai = 0
let vienetai = 0
let dvejetai = 0

if (kin1 === 0) {
    nuliai++;
} else if (kin1 === 1) {
    vienetai++;
} else if (kin1 === 2) {
    dvejetai++;
}

if (kin2 === 0) {
    nuliai++;
} else if (kin2 === 1) {
    vienetai++;
} else if (kin2 === 2) {
    dvejetai++;
}

if (kin3 === 0) {
    nuliai++;
} else if (kin3 === 1) {
    vienetai++;
} else if (kin3 === 2) {
    dvejetai++;
}

console.log(`Nuliai: ${nuliai} Vienetai: ${vienetai} Dvejetai: ${dvejetai}`)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

let pirmskaicius = Math.round(Math.random() * 20 - 10)
let antrskaicius = Math.round(Math.random() * 20 - 10)
let trecskaicius = Math.round(Math.random() * 20 - 10)

console.log(pirmskaicius< 0 ? `[${pirmskaicius}]` : (pirmskaicius === 0 ? `(${pirmskaicius})` : `{${pirmskaicius}}`))
console.log(antrskaicius< 0 ? `[${antrskaicius}]` : (antrskaicius === 0 ? `(${antrskaicius})` : `{${antrskaicius}}`))
console.log(trecskaicius< 0 ? `[${trecskaicius}]` : (trecskaicius === 0 ? `(${trecskaicius})` : `{${trecskaicius}}`))

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let zvakes = Math.floor(Math.random() * (2996)) + 5
let kaina = 0

if (zvakes <= 1000){
    kaina = zvakes
} else if (zvakes <= 2000){
    kaina = zvakes * 0.97
} else {
    kaina = zvakes * 0.96
}

console.log(`Žvakių kiekis: ${zvakes} kaina: ${kaina.toFixed(2)} Eur`)

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

let kint1 = Math.round(Math.random() * 100)
let kint2 = Math.round(Math.random() * 100)
let kint3 = Math.round(Math.random() * 100)

let vidurkis = (kint1 + kint2 + kint3)/3
console.log(`Aritmetinis vidurkis: ${Math.round(vidurkis)}`)

let skaic = 0
let suma = 0

if (kint1 >= 10 && kint1 <= 90) {
    suma += kint1
    skaic++
  }
  
  if (kint2 >= 10 && kint2 <= 90) {
    suma += kint2
    skaic++
  }
  
  if (kint3 >= 10 && kint3 <= 90) {
    suma += kint3;
    skaic++
  }
  
  if (skaic > 0) {
    console.log(`Aritmetinis vidurkis atmetus reikšmes: ${Math.round(suma / skaic)}`)

  } else{
    console.log("Aritmetinis vidurkis atmetus reikšmes: 0")
    }

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

let sec = Math.round(Math.random() * 86400)


let valandos = Math.floor(sec / 3600) % 24
let minutes = Math.floor((sec % 3600) / 60)
let sekundes = sec % 60

let formatuotasLaikas = `${valandos.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${sekundes.toString().padStart(2, '0')}`
console.log(`Laikrodis prieš pridedant 300s: ${formatuotasLaikas}`)

let secP = sec + 300
let valandosP = Math.floor(secP / 3600) % 24
let minutesP = Math.floor((secP % 3600) / 60)
let sekundesP = secP % 60

let formatuotasLaikasP = `${valandosP.toString().padStart(2, '0')}:${minutesP.toString().padStart(2, '0')}:${sekundesP.toString().padStart(2, '0')}`
console.log(`Laikrodis pridejus 300s: ${formatuotasLaikasP}`)


/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let a = Math.floor(Math.random() * 9000) + 1000
let b = Math.floor(Math.random() * 9000) + 1000
let c = Math.floor(Math.random() * 9000) + 1000
let d = Math.floor(Math.random() * 9000) + 1000
let e = Math.floor(Math.random() * 9000) + 1000
let f = Math.floor(Math.random() * 9000) + 1000

console.log(`${a} ${b} ${c} ${d} ${e} ${f} `)

if (a < b) {
  let temp = a;
  a = b;
  b = temp;
}
if (a < c) {
  let temp = a;
  a = c;
  c = temp;
}
if (a < d) {
  let temp = a;
  a = d;
  d = temp;
}
if (a < e) {
  let temp = a;
  a = e;
  e = temp;
}
if (a < f) {
  let temp = a;
  a = f;
  f = temp;
}
if (b < c) {
  let temp = b;
  b = c;
  c = temp;
}
if (b < d) {
  let temp = b;
  b = d;
  d = temp;
}
if (b < e) {
  let temp = b;
  b = e;
  e = temp;
}
if (b < f) {
  let temp = b;
  b = f;
  f = temp;
}

if (c < d) {
  let temp = c;
  c = d;
  d = temp;
}
if (c < e) {
  let temp = c;
  c = e;
  e = temp;
}
if (c < f) {
  let temp = c;
  c = f;
  f = temp;
}

if (d < e) {
  let temp = d;
  d = e;
  e = temp;
}
if (d < f) {
  let temp = d;
  d = f;
  f = temp;
}

if (e < f) {
  let temp = e;
  e = f;
  f = temp;
}

console.log(`${a} ${b} ${c} ${d} ${e} ${f} `)