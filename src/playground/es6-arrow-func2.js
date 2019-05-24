// this keyword and arguments object not bound with arrow func
//arguments object allows us to access all the argumante of the function 

const add = (a, b) => {
    //console.log(arguments); cant access arguments in arrow func
    return a+b;
}
console.log(add(10,5));

//this keyword
//we can use forEach instead of map . map can transforn the element passed to it while forEach can only access
//map though, does not affect the source array
//arrow function uses the this of its parent
const user = {
    name :'Archi',
    cities : ['noida','ny'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' +city + '!');
        return msg;
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers : [2,3,4],
    multiplyby : 3,
    multiply() {
        return this.numbers.map((num) => this.multiplyby * num);
    }
};

console.log(multiplier.multiply());

