import Airport from "../Domains/Airport";
import Flight from "../Domains/Flight";
import Person from "../Domains/Person";

interface ITicket {
    passenger: Person;
    date: Date;
}

interface INormalTicket extends ITicket {
    recordLocator: string;
    seat: string;
    flight: Flight;
}

interface IPrivateTicket extends ITicket {
    from: Airport;
    to: Airport;
}

export {
    ITicket,
    INormalTicket,
    IPrivateTicket,
}