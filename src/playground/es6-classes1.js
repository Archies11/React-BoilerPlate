class Person {
    //constructor gets called whenevr a new instance of class is creatd
    constructor(name = 'Anonymous', age = 0) { //Anonymous is a default value
        //this refers to the class instance
        this.name = name; //someone who does not have a name gets Anonymous as name
        this.age = age;
    }
    getGreeting() { // this method gets called when called explicitly
        //return 'Hi I am ' + this.name + '!';
        return `Hi I am ${ this.name } !`; //we use backticks here
    }

    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old .`;
    }
}  

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //calls parent constructor func
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description = description + ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }

    hasLocation() {
        return !!this.location;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasLocation()) {
            greeting += ` I'm visiting from ${this.location}`;
        }

        return greeting;
    }
}

const me = new Traveller('Archisha', 19);
console.log(me.getGreeting());
//here if we make an instance without passing argument, we get name as undefined
