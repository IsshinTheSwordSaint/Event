//zadanie 1
let event = {
    title : "Koncert Chivasa",
    date : "2024-10-27" ,
    location : "Gdańsk"
};
console.log(event);

//zadanie 2
let participant = {};
participant.name = "Artur";
participant.email = "uT_4003@zsp3zamosc.pl";

console.log(participant.name);
console.log(participant.email);

//zadanie 3
let events = [
    {
        name : "Koncert zespołu Y" ,
        date : "2024-07-05" ,
        location : "Kraków"
    },
    {
        name : "Festiwal Filmowy" ,
        date : "2024-08-05" ,
        location : "Gdańsk"
    },
    {
        name : "Wysatwa Sztuki" ,
        date : "2024-09-10" ,
        location : "Wrocław"
    }
];

//zadanie 4
let event4 = {
    name : "Seminarium o JavaScript" ,
    date : "2024-10-15",
    location : "Łódź"
};

events.push(event4);
console.log(events);

//zadanie 5
let newEvents = events.slice(2,4);
console.log(newEvents);

//zadanie 6
events.shift()
console.log("Długość tablicy po usunięciu: " + events.length)
events.forEach(name => console.log("Nazwa wydarzenia: " + name.name));

//zadanie 7
events.forEach(date => console.log("Data wydarzenia: " + date.date));