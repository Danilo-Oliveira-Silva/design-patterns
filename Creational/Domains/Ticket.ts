import Person from "./Person";

export default abstract class Ticket {
    
    private _passenger: Person;
    private _date: Date;

    constructor(passenger: Person, date: Date) {
        this._passenger = passenger;
        this._date = date;
    }

    get passenger(): Person {
        return this._passenger;
    }

    abstract Book(): void;
}