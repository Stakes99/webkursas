/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
*/

var vardas = "Jonas"
var pavarde = "Jonaitis"

if (vardas.length < pavarde.length) {
    console.log(vardas);
  } else {
    console.log(pavarde);
  }

/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/

console.log(vardas.toUpperCase() + " " + pavarde.toLowerCase())

/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

var pirmosRaides = vardas[0] + pavarde [0]

console.log(pirmosRaides)

/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

var paskutinesRaides = vardas.slice(-3) + pavarde.slice(-3)
console.log(paskutinesRaides)

/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/

var whoWasInParis = "An American in Paris"
console.log(whoWasInParis.replace(/a/gi, "*"))


/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/

var space = "2001: A Space Odyssey"
var life = "It's a Wonderful Life"

function naikintiBalses(str) {
    return str.replace(/[aeiou]/gi, "")
}

console.log(`${naikintiBalses(whoWasInParis)}`)
console.log(`${naikintiBalses(space)}`)
console.log(`${naikintiBalses(life)}`)

/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/

var starwars = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"
console.log(starwars)
console.log(`Epsiode number: ${starwars[starwars.length - 14]}`)

/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/

var menace = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood"
var gasdintojas = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale"

function kiekZodziuTrumpesniu(str) {
    var zodziai = str.split(" ")
    var kiekis = 0
    for (var i = 0; i < zodziai.length; i++) {
        if (zodziai[i].length <= 5) {
          kiekis++;
        }
    }
    return kiekis
}

kiekZodziuTrumpesniu(menace)
kiekZodziuTrumpesniu(gasdintojas)

/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/

var atsitiktines = ""
var raides = "abcdefghijklmnopqrstuvwxyz"

for (var i = 0; i < 3; i++){
    atsitiktines += raides.charAt(Math.floor(Math.random() * 25))
}

console.log(atsitiktines)

/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/

var zodziai = menace.split(" ").concat(gasdintojas.split(" "))

// išmaišo masyva Fisher-Yates algoritmu
function ismaisytiMasyva(masyvas){
    var esamasIndeksas = masyvas.length
    var laikinaLaikmena, atsitiktinisIndeksas

    while(esamasIndeksas != 0) {
        atsitiktinisIndeksas = Math.floor(Math.random() * esamasIndeksas)
        esamasIndeksas -= 1

        // sukeičia žodžius
        laikinaLaikmena = masyvas[esamasIndeksas]
        masyvas[esamasIndeksas] = masyvas[atsitiktinisIndeksas]
        masyvas[atsitiktinisIndeksas] = laikinaLaikmena
    }

    return masyvas;
}

console.log(ismaisytiMasyva(zodziai).slice(0, 10).join(" "))
