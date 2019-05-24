let namelet = 'Archi';
console.log('namelet', namelet);

//we can redefine thesame var i nthe same code tiwth the same name but in case of let and
//const, redefining the same variable is not allowed.
//let allows us to reassign the value to a variable but cosnt does not 
//allow us to do this.
//var is function scoped ie if a var is defined and assigned in a func,
//the var cant be accessed directly outside the fucntion body.this isture for let and const also.
//let and const are also block scoped unlike var
//eg.

var fullname= 'Archi Baranwal' ;
if (fullname){
    var firstname = fullname.split(' ')[0];
    console.log(firstname);
}
// here we can  access var outside the if atatement also. but we cant do this 
//if firstname would have been let or const
//we first define all varialbes as const and change them to lt if we
//see that any of the variables need to be reassigned.