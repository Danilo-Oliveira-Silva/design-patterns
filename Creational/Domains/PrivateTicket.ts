import { IPrivateTicket } from "../Interfaces/ITicket";
import Airport from "./Airport";
import Ticket from "./Ticket";

export default class PrivateTicket extends Ticket{
    private _from: Airport;
    private _to: Airport;

    constructor(privateTicket: IPrivateTicket) {
        super(privateTicket.passenger, privateTicket.date);
        this._from = privateTicket.from;
        this._to = privateTicket.to;
    }

    Book(): void {
        console.log(`Booking a private ticket to ${super.passenger.name}`);
    }
}