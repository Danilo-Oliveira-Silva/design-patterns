export default class Airport {
    private _IATA: string;
    private _name: string;

    constructor(IATA: string, name: string){
        this._IATA = IATA;
        this._name = name;
    }
}