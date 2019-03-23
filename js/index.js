var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungS5 = new Phone("Samsung", 2999, "black");
var nokiaXs = new Phone("Nokia", 1500, "white");
var motorola36B = new Phone("Motorola", 990, "blue");

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

iPhone6S.printInfo();
samsungS5.printInfo();
nokiaXs.printInfo();
motorola36B.printInfo();