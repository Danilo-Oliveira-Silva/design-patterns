// import {describe, expect, it, beforeEach} from 'jest-without-globals';
import { Airplane, CargoAirplane, PassengerAirplane } from "../Domains/Airplane";
import { AirplaneFactory, PassengerAirplaneFactory, CargoAirplaneFactory} from "../Factories/AirplaneFactory";

describe('Passenger airplane factory', () => {

    let passengerAirplaneFactory;
    beforeEach(() => {
        passengerAirplaneFactory = new PassengerAirplaneFactory();
    });

    it('is a instance of Airplane factory', () => {
        expect(passengerAirplaneFactory).toBeInstanceOf(AirplaneFactory);
    });
    it('is a instance of Passenger airplane factory', () => {
        expect(passengerAirplaneFactory).toBeInstanceOf(PassengerAirplaneFactory);
    });
    it('creates a airplane and passenger airplane product', () => {
        const E195 = passengerAirplaneFactory.create('PR-ABC', 'Embraer', 'E195', 118); 
        expect(E195).toBeInstanceOf(Airplane);
        expect(E195).toBeInstanceOf(PassengerAirplane);
    });
    it('does not create a cargo airplane product', () => {
        const E195 = passengerAirplaneFactory.create('PR-ABC', 'Embraer', 'E195', 118); 
        expect(E195).not.toBeInstanceOf(CargoAirplane);
    });
});


describe('Cargo airplane factory', () => {

    let cargoAirplaneFactory;
    beforeEach(() => {
        cargoAirplaneFactory = new CargoAirplaneFactory();
    });

    it('is a instance of Airplane factory', () => {
        expect(cargoAirplaneFactory).toBeInstanceOf(AirplaneFactory);
    });
    it('is a instance of Cargo airplane factory', () => {
        expect(cargoAirplaneFactory).toBeInstanceOf(CargoAirplaneFactory);
    });
    it('creates a airplane and cargo airplane product', () => {
        const B747 = cargoAirplaneFactory.create('PR-DEF', 'Boeing', 'B747', 137); 
        expect(B747).toBeInstanceOf(Airplane);
        expect(B747).toBeInstanceOf(CargoAirplane);
    });
    it('does not create a passenger airplane product', () => {
        const B747 = cargoAirplaneFactory.create('PR-DEF', 'Boeing', 'B747', 137); 
        expect(B747).not.toBeInstanceOf(PassengerAirplane);
    });
});