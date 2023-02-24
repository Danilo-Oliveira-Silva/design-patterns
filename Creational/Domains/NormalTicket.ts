import { INormalTicket } from "../Interfaces/ITicket";
import Flight from "./Flight";
import Person from "./Person";
import Ticket from "./Ticket";

export default class NormalTicket extends Ticket{
    private _recordLocator: string;
    private _seat: string;
    private _flight: Flight;

    constructor(normalTicket: INormalTicket) {
        super(normalTicket.passenger, normalTicket.date);
        this._recordLocator = normalTicket.recordLocator;
        this._flight = normalTicket.flight;
        this._seat = normalTicket.seat;
    }

    Book(): void {
        console.log(`Booking a normal ticket to ${super.passenger.name}`);
    }
}