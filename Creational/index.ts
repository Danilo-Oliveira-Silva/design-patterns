import Factory from "./Factory";
import { AbstractFactory, NormalTicketFactory, PrivateTicketFactory } from "./AbstractFactory";

const airportCGH = Factory.createAirport('CGH', 'Congonhas');
const airportBSB = Factory.createAirport('BSB','Brasília');

const flightCGHtoBSB = Factory.createFlight('FA0001', airportCGH, airportBSB);

const pJose = Factory.createPerson('José Oliveira', '155.383.918-01');
const pMaria = Factory.createPerson('Maria Silva', '093.240.818-02');

/* Use of Factory in child class */

//const ticketJose = Factory.createNormalTicket({ passenger: pJose, date: new Date(), recordLocator:'GL1K23', seat: '13F', flight: flightCGHtoBSB });
//const ticketMaria = Factory.createPrivateTicket({ passenger: pMaria, date: new Date(), from: airportCGH, to: airportBSB });

//const ticketJose = Factory.createTicket({ passenger: pJose, date: new Date(), recordLocator:'GL1K23', seat: '13F', flight: flightCGHtoBSB });
//const ticketMaria = Factory.createTicket({ passenger: pMaria, date: new Date(), from: airportCGH, to: airportBSB });

//ticketJose.Book();
//ticketMaria.Book();

/* Use of Abstract Factory */

let abstractFactory: AbstractFactory;

abstractFactory = new NormalTicketFactory();
const ticketJose = abstractFactory.createTicket({ passenger: pJose, date: new Date(), recordLocator:'GL1K23', seat: '13F', flight: flightCGHtoBSB });

abstractFactory = new PrivateTicketFactory();
const ticketMaria = abstractFactory.createTicket({ passenger: pMaria, date: new Date(), from: airportCGH, to: airportBSB });

ticketJose.Book();
ticketMaria.Book();
