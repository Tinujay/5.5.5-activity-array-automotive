//this includes the vehicle class as a module
const {Vehicle} = require('./vehicle')    //look back at 

class Car extends Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = maximumPassengers
        this.passenger = passenger
        this.numberOfWheels = numberOfWheels
        this.maximumSpeed = maximumSpeed
        this.fuel = fuel
        this.scheduleService = scheduleService
        this.updatedPassenger = []
    }

    loadPassenger(num) {
        this.updatedPassenger.push(num)
        if (this.updatedPassenger < this.maximumPassengers){
            console.log('We have room for more!')
        } else {
            console.log("We're full!")
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log('Engine started');
            return this.started === true
        } else {
            console.log('Need gas');
            return this.started === false
        }
    }

    service(mileage) {
        if (this.mileage > 30000) {
            console.log('Time for maintenance')
            return this.scheduleService == true
        } else {
            console.log('Car not due for maintenance')
        }
    }
}
    

const mercurySedan = new Car ("Mecury","Sedan", 1965, "white", 12000, 5, 0, 4, 160, 10, "false")
console.log(mercurySedan)
mercurySedan.loadPassenger(6)
console.log(mercurySedan.updatedPassenger)
mercurySedan.start()
mercurySedan.service()
//this shows how to call from this module...



