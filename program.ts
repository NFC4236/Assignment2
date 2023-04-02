 abstract class Vehicle{

   constructor(
    private _make:string,
    private _model: string,
    private _year: number,
    private _rented:boolean){ }

    public getmake (){
              return this._make;
    }

    public setmake(makeNew:string){
          this._make = makeNew;
    }

    public getmodel (){
          
        return this._model;
    }

    public setmodel (newModel:string){
          this._model= newModel;
    }

    public getyear(){
        return this._year;
    }

    public setyear (newYear: number){
        this._year= newYear;
    }

    public getrented(){
        return this._rented;
    }

    public setrented (newRent: boolean){
        this._rented= newRent;
    }

    abstract rentalRate() : number ;

    public rent(){
         return "vehicle is available";
    }
    public return(condition1:boolean){
        return "vehicle is already rented";
    }
}

class Car extends Vehicle {

    constructor(
        carMake:string,
        carModel: string,
        carYear: number,
        carRented: boolean,
        private carPrice: number,
        private carColor: string ){
            super(carMake, carModel, carYear , carRented );
         }

    rentalRate() {
        return this.carPrice;
       
    }

}

class Truck extends Vehicle{

    constructor(
        truckMake:string,
        truckModel: string,
        truckYear: number,
        truckRented: boolean,
        private truckPrice: number,
        private truckcolor: string ){
            super(truckMake, truckModel, truckYear, truckRented );
         }

    rentalRate() {
        return this.truckPrice;
    }

}

class Motorcycle extends Vehicle{

    constructor(
        motorCyclemake:string,
        motorcycleModel: string,
        motorcycleYear: number,
        motorcycleRented: boolean,
        private motorcycleRent: number,
        private motorcycleColor: string ){
            super(motorCyclemake, motorcycleModel, motorcycleYear, motorcycleRented );
         }
    rentalRate() {
        return this.motorcycleRent;

  }
}

const vehicle1 = new Car ("Audi", "A3", 2011, true,3000 , "Blue");
const vehicle2 = new Truck ("Pickup", "2016F", 2013, false,5000 , "Yellow");
const vehicle3 = new Motorcycle ("Beta", "20-cc", 2015, true,1000 , "Black");

console.log(vehicle1);
console.log(vehicle1.rent());
console.log("Price :"+vehicle1.rentalRate());

console.log(vehicle2);
console.log(vehicle2.rent());
console.log("Price :"+vehicle2.rentalRate());

console.log(vehicle3);
console.log(vehicle3.rent());
console.log("Price :"+vehicle3.rentalRate());

