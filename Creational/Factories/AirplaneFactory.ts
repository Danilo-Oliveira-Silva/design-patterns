import { Airplane, CargoAirplane, PassengerAirplane } from "../Domains/Airplane";

abstract class AirplaneFactory {
    public abstract create (prefix: string, manufacturer: string, aircraft: string, payload: number, passengerCapacity: number): Airplane
};

class PassengerAirplaneFactory extends AirplaneFactory {
    public create (prefix: string, manufacturer: string, aircraft: string, passengerCapacity: number): PassengerAirplane {
        return new PassengerAirplane(prefix,manufacturer,aircraft,passengerCapacity);
    } 
};

class CargoAirplaneFactory extends AirplaneFactory{
    public create (prefix: string, manufacturer: string, aircraft: string, payload: number): CargoAirplane {
        return new CargoAirplane(prefix,manufacturer,aircraft,payload);
    }
};

export { PassengerAirplaneFactory, CargoAirplaneFactory, AirplaneFactory };