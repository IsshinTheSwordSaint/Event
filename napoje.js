//zadanie 1
let napoj = {
    nazwa: "Napój orzeźwiający",
    objetosc: "500ml",
    cena: "3,20 zł"
};
//zadanie 2
let napoje = [
    {
        nazwa: "Woda",
        objetosc: "500ml",
        cena: "1,19 zł"
    },
    {
        nazwa: "Cola orginal zero",
        objetosc: "1,5L",
        cena: "4,49"

    },
    {
        nazwa: "Sprite",
        objetosc: "330ml",
        cena: "4,20zl"
    }
]
console.log("Dlugosc tablicy wynosi: " + napoje.length);
//zadanie 3
function DaneNapoju(piciu) {
    console.log(piciu);
}
DaneNapoju(napoj);
