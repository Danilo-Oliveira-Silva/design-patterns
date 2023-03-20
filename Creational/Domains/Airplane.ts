import { IAirplane, ICargoAirplane, IPassengerAirplane } from "../Interfaces/IAirplane";

abstract class Airplane implements IAirplane {
    constructor(private _prefix: string,
        private _manufacturer: string,
        private _aircraft: string) {}
    
    get prefix(): string {
        return this._prefix
    }

    get manufacturer(): string {
        return this._manufacturer;
    }

    get aircraft(): string {
        return this._aircraft;
    }
}


class PassengerAirplane extends Airplane implements IPassengerAirplane {
    
    constructor(prefix: string, manufacturer: string, aircraft: string, private _passengerCapacity: number) {
        super(prefix, manufacturer, aircraft);
    }
    
    get prefix(): string {
        return super.prefix
    }

    get manufacturer(): string {
        return super.manufacturer;
    }

    get aircraft(): string {
        return super.aircraft;
    }

    get passengerCapacity(): number {
        return this._passengerCapacity;
    }

    public buyTicket(): void {
        console.log(`New ticket emitted to ${this.manufacturer} ${this.aircraft} - Prefix: ${this.prefix}`);
    }
}

class CargoAirplane extends Airplane implements ICargoAirplane {
    constructor(prefix: string, manufacturer: string, aircraft: string, private _payload: number) {
        super(prefix, manufacturer, aircraft);
    }

    get prefix(): string {
        return super.prefix
    }

    get manufacturer(): string {
        return super.manufacturer;
    }

    get aircraft(): string {
        return super.aircraft;
    }

    get payload(): number {
        return this._payload;
    }

    public loadCargo(weight: number){
        console.log(`${weight} loaded to ${this.manufacturer} ${this.aircraft} - Prefix: ${this.prefix}`);
    }
}

export { Airplane, PassengerAirplane, CargoAirplane }