/*Day 4: uppercase-all and lowercase-all strings using built in function */

function capitalize(name){
    return name.toUpperCase().trim();
}

function lowercase(Lname){
    return Lname.toLowerCase().trim();
}

const name = "hello";
const Lname = "WORLD";
console.log(capitalize(name));
console.log(lowercase(Lname));



