"use script";
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
console.log(`Car: ${car.brand}., Tank: ${car.fuelTank} liter., Owner car: ${car.ownerFullName}`);

////  difference

    function difference(arg1, arg2) {
        return arg1.filter(item => arg2.indexOf(item) === -1);

    }

    console.log(difference([1,2,3,4], [7,6,5,4,3]));
    console.log(difference([7,6,5,4,3], [1,2,3,4]));


//// User

    function Cutaway(user) {
        this.name = user.name;
        this.prof = user.prof;
    }

    function User(name, age, prof) {
        this.name = name;
        this.age = age;
        this.prof = prof;
        Object.defineProperty(
            this,
            "mainInfo",
            {
                get: function()
                {
                    return `Имя: ${this.name}., Возраст: ${this.age}., Род деетильности: ${this.prof}.`;
                }
            }
            );
        Object.defineProperty(
            this,
            "cutaway",
            {
                get: function()
                {
                    return new Cutaway(this);
                }
            }
            );

    }

    const user = new User('Коля', '25', 'Frontend-deweloper');

    console.log(user);
    console.log(user.mainInfo);
    console.log(user.cutaway);

};