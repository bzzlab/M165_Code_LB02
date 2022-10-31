//Import der eigenen Module und die von Drittanbietern.
let mongoose = require("mongoose");
//let dbConfig = ??
//let sc = ??
//Export Klasse
module.exports = class Restaurant {
    collName = 'restString';
    coll = 'restaurants';

    constructor() {
        //Verbindung zur Datenbank auf Basis von dbConfig erstellen
        //??
        //Dem Objekt z.B. Restaurant das initialisierte Model auf Basis von
        //Schema sc zuweisen
        //??
    }

    /**
     * Methode, welche alle Restaurants ausgibt, die Teilstring partOfName im Feld name enthalten.
     * Ausgabe: name, cuisine, borough, jedoch keine Document-ID
     * @param partOfName: Teilstring
     */
    getRestaurantsByName(partOfName) {
        //??
    }

    /**
     * Methode, welche die Anzahl Restaurants im Bezirk X ausgibt.
     * Ausgabe-Text: Number of restaurants in X: Y
     * @param borough
     */
    getCountByBorough(borough) {
        //??
    }

}
