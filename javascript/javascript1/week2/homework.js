//Flight booking fullname function
/*function getFullname(firstname, surname) {
    return firstname + surname;
}
const firstname = ['Victoria ', 'Mickel '];
const surname = ['Kush', 'Jensen'];
const fullname1 = getFullname(firstname[0], surname[0]);
const fullname2 = getFullname(firstname[1], surname[1]);
console.log(fullname1);
console.log(fullname2);*/

function getFullname(firstname, lastname, useFormalName) {
    if (useFormalName) {
       return 'Lord ' + firstname + ' ' + lastname;
    }
    else {
        return firstname + ' ' + lastname;
    }
}
const fullname = getFullname(firstname, lastname, useFormalName);
console.log(fullname);