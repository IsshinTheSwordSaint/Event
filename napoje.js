//zadanie 1
let napoj = {
    nazwa: "Napój orzeźwiający",
    objetosc: "500ml",
    cena: 3.20
};
//zadanie 2
let napoje = [
    {
        nazwa: "Woda",
        objetosc: "500ml",
        cena: 1.19
    },
    {
        nazwa: "Cola orginal zero",
        objetosc: "1,5L",
        cena: 4.49

    },
    {
        nazwa: "Sprite",
        objetosc: "330ml",
        cena: 4.20
    }
]
console.log("Dlugosc tablicy wynosi: " + napoje.length);
//zadanie 3
function DaneNapoju(piciu) {
    console.log(piciu);
}
DaneNapoju(napoj);
//zadanie 4
console.log("");
napoje.push(napoj);
napoje.forEach(picku => console.log(picku));
//zadanie 5
let napojev2 = napoje.slice();
napojev2.pop();
console.log("Dlugosc pierwotnej tablicy: ", napoje.length);
console.log("Dlugosc kopii pierwszej tablicy: ", napojev2.length);
//zadanie 6
function Suma(a){
    let suma = 0;
    for(let i = 0; i<a.length; i++)
    {
        suma+=a[i].cena;
    }
return suma;
}
console.log("Suma cen napojów wynosi: ",Suma(napojev2).toFixed(2));
