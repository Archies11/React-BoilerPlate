const square= function (x) {
    return x * x;
};

const squareArrow = (x) => x*x;
// aboveis the short hand notation of the definition.
//we can use return staement and a bracket in case we want to even in arrow func.

//arrow func are anonymous so we assign the value of these finct to  a 
//varialbe so that we can referance it anywhere in the code.

const getfirstname = (fullname) => fullname.split(' ')[0];

console.log(getfirstname('Archisha Baranwla'));
 