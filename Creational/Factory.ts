import Airport from './Domains/Airport';
import Flight from './Domains/Flight';
import NormalTicket from './Domains/NormalTicket';
import Person from './Domains/Person';
import PrivateTicket from './Domains/PrivateTicket';
import { INormalTicket, IPrivateTicket } from './Interfaces/ITicket';
export default class Factory {

    static createAirport(IATA: string, name: string): Airport {
        return new Airport(IATA, name);
    }

    static createPerson(name: string, registration: string): Person {
        return new Person(name, registration);
    }

    static createFlight(number: String, from: Airport, to: Airport): Flight {
        return new Flight(number, from, to);
    }

    static createNormalTicket(normalTicket: INormalTicket) {
        return new NormalTicket(normalTicket);
    }

    static createPrivateTicket(privateTicket: IPrivateTicket) {
        return new PrivateTicket(privateTicket);
    }

    static createTicket(data: INormalTicket | IPrivateTicket) {
        if (Factory.isPrivateTicket(data)) {
            return Factory.createPrivateTicket(data);
        } else {
            return Factory.createNormalTicket(data);
        }
    }

    private static isPrivateTicket(object: any): object is IPrivateTicket {
        return 'from' in object;
    }

}