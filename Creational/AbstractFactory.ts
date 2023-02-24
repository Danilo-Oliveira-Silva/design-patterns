import NormalTicket from "./Domains/NormalTicket";
import PrivateTicket from "./Domains/PrivateTicket";
import Ticket from "./Domains/Ticket";
import { INormalTicket, IPrivateTicket, ITicket } from "./Interfaces/ITicket";

interface AbstractFactory {
    createTicket(ticket: INormalTicket | IPrivateTicket): Ticket;
}

class NormalTicketFactory implements AbstractFactory{
    createTicket(normalTicket: INormalTicket): Ticket {
        return new NormalTicket(normalTicket);
    }
}

class PrivateTicketFactory implements AbstractFactory {
    createTicket(privateTicket: IPrivateTicket): Ticket {
        return new PrivateTicket(privateTicket);
    }
}

export {
    AbstractFactory,
    NormalTicketFactory,
    PrivateTicketFactory,
}