//Flight booking fullname function
/*function getFullname(firstname, surname) {
    return firstname + surname;
}
const firstname = ['Victoria ', 'Mickel '];
const surname = ['Kush', 'Jensen'];
const fullname1 = getFullname(firstname[0], surname[0]);
const fullname2 = getFullname(firstname[1], surname[1]);
console.log(fullname1);
console.log(fullname2);

function getFullname(firstname, lastname, useFormalName) {
    if (useFormalName) {
       return 'Lord ' + firstname + ' ' + lastname;
    }
    else {
        return firstname + ' ' + lastname;
    }
}
const fullname = getFullname(firstname, lastname, useFormalName);
console.log(fullname);*/

//Event application
const howManyDaysFromToday = 2;
function getEventWeekday() {
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    return dayName[today + howManyDaysFromToday];
}
const eventWeekday = getEventWeekday();
console.log(eventWeekday);

//Weather wear
function whatWearBasedTemperature(temperature) {

    if (temperature <= 0) {
        return ' double-layered hooded down jacket';
    } else if (temperature <= 5) {
        return ' padded or Puffer Coat, Overcoats';
    } else if (temperature <= 10) {
        return' down or padded waterproof jacket';
    } else if (temperature <= 15) {
        return ' leather jackets, Biker jackets, Pea Coats';
    } else if (temperature <= 20) {
        return ' slip Skirt + Boots + Suede Jacket';
    } else {
        return ' shorts and a t-shirt';
    }
}
temperature = 21;
const clothesToWear = whatWearBasedTemperature(temperature);
console.log('When the temperature is ' + temperature + ' you should wear' + clothesToWear);
