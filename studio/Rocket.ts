import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    };
    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo) === true){
            this.cargoItems.push(cargo)
            return true;}
        return false
    };
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut)
            return true;}
        return false;
    }
    canAdd(item: Payload):boolean{
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };

    currentMassKg():number{
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    sumMass(items: Payload[]): number{
        let total: number = 0;
        for(let i = 0; i < items.length; i++){
           total += items[i].massKg;
        }
        return total
    };
};
   