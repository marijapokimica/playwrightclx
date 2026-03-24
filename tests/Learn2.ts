

import { Learn } from './Learn';

class Learn2 extends Learn {

    year: number;

    constructor(initialNumber: number, stringvalue: string, year: number) {
        super(initialNumber, stringvalue);
        this.year = year;
    }


    name() {
        console.log(`${this.year} and ${this.stringValue} and ${this.numberValue} This is a function inside the Learn2 class.`);

    }

    learn2Method() {
        console.log("This is a method specific to Learn2 class.");
    }


}

let learn:Learn = new Learn2(42, "TypeScript", 2024);
learn.name(); 

