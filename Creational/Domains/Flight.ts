import Airport from "./Airport";

export default class Flight {
    private _number: String;
    private _from: Airport;
    private _to: Airport;

    constructor(number: String, from: Airport, to: Airport) {
        this._number = number;
        this._from = from;
        this._to = to;
    }
}