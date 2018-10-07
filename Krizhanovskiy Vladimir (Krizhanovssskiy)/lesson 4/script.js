window.onload = function () {

function Car(brand, fuelTank, ownerFullName) {
    this.brand = brand;
    this.fuelTank = fuelTank;

    let fullNameArray = ownerFullName.split(' ');
    if (fullNameArray.length !== 2) {
        this.ownerFullName = 'John Doe';
    } else {
        this.ownerFullName = ownerFullName;
    }

    this.getFirstNamePart = () => fullNameArray[0];
    this.getSecondNamePart = () => fullNameArray[1];

}

const car = new Car('mitsubishi', 70, 'Jack Wilson');

console.log(car.getFirstNamePart());
console.log(car.getSecondNamePart());
console.log('Car: ' + car.brand + '. Tank: ' + car.fuelTank + ' liter. Owner car: ' + car.ownerFullName);

};