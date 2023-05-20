/*
1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
*/

masyvas = []

for (i = 0; i < 30; i++) {
    var atsitiktinis =  Math.floor((Math.random() * 21) + 5)
    masyvas[i] = atsitiktinis
}

console.log(masyvas)

/*
2. Naudodamiesi 1 uždavinio masyvu:
- Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
- Raskite didžiausią masyvo reikšmę;
- Suskaičiuokite visų reikšmių sumą;
- Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
- Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
- Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;
- Masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
- Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
*/

//Suskaičiuokite kiek masyve yra reikšmių didesnių už 10
didesnes = 0

for (i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        didesnes++
    }
}

console.log(didesnes)

//Raskite didžiausią masyvo reikšmę
didziausia = 0

for (i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > didziausia) {
        didziausia = masyvas[i]
    }
}

console.log(didziausia)

//Suskaičiuokite visų reikšmių sumą
suma = 0

for (i = 0; i < masyvas.length; i++) {
    suma += masyvas[i]
}

console.log(suma)

//Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas
var naujasMasyvas = []

for (i = 0; i < masyvas.length; i++) {
    naujasMasyvas[i] = masyvas[i] - i
}

console.log(naujasMasyvas)

//Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39
var papildymas = []

for (i = 0; i < 10; i++) {
    var atsitiktinis =  Math.floor((Math.random() * 21) + 5)
    papildymas[i] = atsitiktinis
}

masyvas = masyvas.concat(papildymas)
console.log(masyvas)

//Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių


/*
3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
*/



/*
4. Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.
*/



/*
5. Sugeneruokite masyvą, kurio reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvo ilgis 100. Masyvo reikšmės turi būti unikalios (t.y. neturi kartotis).
*/

