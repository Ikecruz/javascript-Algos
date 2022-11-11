/* 
    Question:

    Create a method in the Person class which returns how another person's age compares. 
    Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, 
    return a sentence in the following format:

    {other person name} is {older than / younger than / the same age as} me.

*/

// Create person class
class Person{
    // Person constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    compareAge = (otherPerson) => {
        let str;

        if (otherPerson.age > this.age) {
            str = otherPerson.name + " is older than me";
        }

        if (otherPerson.age < this.age) {
            str = otherPerson.name + " is younger than me";
        }

        if (otherPerson.age == this.age) {
            str = otherPerson.name + " is this same age as me";
        }

        return str;
    }
}

// Test
let p1 = new Person("Evar", 12)

let p2 = new Person("Cruz", 17)

console.log(p1.compareAge(p2))

//@devcruz