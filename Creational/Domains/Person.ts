export default class Person {
    private _name: string;
    private _registration: string;

    constructor(name: string, registration: string) {
        this._name = name;
        this._registration = registration;
    }

    get name(): string {
        return this._name;
    }
}