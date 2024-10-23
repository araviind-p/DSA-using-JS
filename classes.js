class Car {
    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }
    show() {
        console.log(`${this.brand} is ${this.price} expensive`);
    }
}

const car1 = new Car("BMW", 5000000)
car1.show()

const car2 = new Car("Bens", 9000000)
car2.show()