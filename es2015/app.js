//let
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

//const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = []; On ne peut pas modifier citiesId 
citiesId.push("tokyo");
console.log(citiesId);

//Création d'objet
function getWeather(cityId) {
    let city = cityId;
    let temperature = 20;
    return { city: `${city}`, temperature: `${temperature}` }

}
console.log(getWeather("Paris"));

//Affectation destructurée
const weather = {
    city: 'Paris',
    temperature: 20
}
const {
    city: c,
    temperature: t
} = weather;
console.log(c);
console.log(t)

//Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId, "\n" + nycId, "\n" + othersCitiesId.length);

//classe
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return "Trip [" + this.id + ",", this.name + ",", this.imageUrl + "]";
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jps");
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());