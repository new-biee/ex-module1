class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return `Name: ${this.name}. Weight: ${this.weight}`;
    }
}

let objAnimal1 = new Animal("Elephant", 45.6);
let info = objAnimal1.toString();
console.log(info);

let objAnimal2 = new Animal();
objAnimal2.setName("Mouse")
let info2 = objAnimal2.toString();
console.log(info2);


