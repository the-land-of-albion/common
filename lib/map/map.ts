import { Aldourmil } from "./cities/aldourmil.city";
import { Elesrith } from "./cities/elesrith.city";
import { Straashire } from "./cities/straashire.city";
import { City, CityKeys } from "./city";

class MapOfAlbion {
    cities: Map<CityKeys, City>;
    constructor(cities: City[]){
        this.cities = new Map<CityKeys, City>()
        cities.forEach((c) => this.cities.set(c.name, c));
        this.cities.forEach((cityIterator) => {
            for (let cityWithPassageFromOrigin of cityIterator.passages.values()){
                //origin elserith
                // cityWithPassageFromOrigin aldourmil
                cityWithPassageFromOrigin.passages.set(cityIterator.name, cityIterator);
            }
        })
    }
}

export const mapOfAlbion = new MapOfAlbion([Aldourmil, Elesrith, Straashire])