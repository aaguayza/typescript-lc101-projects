"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    ;
    // sumMass(items: Payload[]): number{
    //     let total: number =0;
    //     for(let i = 0; i< items.length; i++){
    //        total += items[i].massKg;
    //     }
    //     return total
    // };
    Rocket.prototype.addCargo = function (cargo) {
        // let output: boolean = true
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
        // }else{
        //     output = false;
        // }
        // return output;
    };
    ;
    Rocket.prototype.addAstronaut = function (astronaut) {
        // let output: boolean;
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        // }else{
        //     output = false;
        // }
        return false;
    };
    Rocket.prototype.canAdd = function (item) {
        // let output: boolean = false;
        // if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
        //     output = true
        // };
        // return output;
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    ;
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    ;
    //the boolean isnt being seen by the function>
    // canAdd(item: Payload):boolean{
    //     let output: boolean = false;
    //     if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
    //         output = true
    //     };
    //     return output;
    // };
    // addCargo(cargo: Cargo): boolean{
    //     let output: boolean = true
    //     if(this.canAdd(cargo) === true){
    //         this.cargoItems.push(cargo)
    //         output = true;
    //     }else{
    //         output = false;
    //     }
    //     return output;
    // };
    // addAstronaut(astronaut: Astronaut): boolean{
    //     let output: boolean;
    //     if(this.canAdd(astronaut) === true){
    //         this.astronauts.push(astronaut)
    //         output = true;
    //     }else{
    //         output = false;
    //     }
    //     return output;
    // }
    Rocket.prototype.sumMass = function (items) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
    };
    ;
    return Rocket;
}());
exports.Rocket = Rocket;
;
