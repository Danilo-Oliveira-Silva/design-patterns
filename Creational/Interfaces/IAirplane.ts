interface IAirplane {
    prefix: string;
    manufacturer: string;
    aircraft: string;
}

interface IPassengerAirplane extends IAirplane {
    passengerCapacity: number;
    buyTicket(): void;
}

interface ICargoAirplane extends IAirplane {
    payload: number;
    loadCargo(weight: number)
}

export { 
    IAirplane, 
    ICargoAirplane, 
    IPassengerAirplane,
}