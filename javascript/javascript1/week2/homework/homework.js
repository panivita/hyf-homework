//Send emails
function sendEmailTo(recepient) {
    // But really it only logs out a string
    console.log('email sent to ' + recepient);
}
function sendEmails() {
    const weirdFormatRecepient = 'benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com';
    const recepient = weirdFormatRecepient.split('|');
    for (i = 0; i < recepient.length; i++) { 
        sendEmailTo(recepient[i]); 
    } 
}
sendEmails();

//Flight booking fullname function
function getFullname(firstname, surname) {
    return firstname + surname;
}
const fullname1 = getFullname('Victoria ', 'Kush');
const fullname2 = getFullname('Marina ', 'Kush');
console.log(fullname1);
console.log(fullname2);

function getFullnameFormal(firstname, lastname, useFormalName) {
    if (!firstname || !lastname) {
       return 'Missing name';
    }
    else if (useFormalName) {
       return 'Lord ' + firstname + ' ' + lastname;
    }
    else {
        return firstname + ' ' + lastname;
    }
}
const fullname = getFullnameFormal();
console.log(fullname);

//Event application

function getEventWeekday(days) {
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const fullDate = new Date();
    const today = fullDate.getDay();
    const dayEvent = (today + days) % 7;
    return dayName[dayEvent];
}
const eventWeekday = getEventWeekday(13);
console.log('The event will be held on a ' + eventWeekday);

//Weather wear
function whatWearBasedTemperature(temperature) {

    if (temperature <= 0) {
        return ' double-layered hooded down jacket';
    } else if (temperature <= 5) {
        return ' padded or Puffer Coat, Overcoats';
    } else if (temperature <= 10) {
        return ' down or padded waterproof jacket';
    } else if (temperature <= 15) {
        return ' leather jackets, Biker jackets, Pea Coats';
    } else if (temperature <= 20) {
        return ' slip Skirt + Boots + Suede Jacket';
    } else {
        return ' shorts and a t-shirt';
    }
}
const temperature = 21;
const clothesToWear = whatWearBasedTemperature(temperature);
console.log('When the temperature is ' + temperature + ' you should wear' + clothesToWear);

//Student manager
const class07Students = [];
function addStudentToClass(studentName) {
    if (!studentName) {
        return 'Please enter a name';
    } else if (class07Students.indexOf(studentName) !== -1) {
        return 'Student ' + studentName + ' is already in the class';
    } else if (studentName === 'Queen' || class07Students.length <= 5) {
        class07Students.push(studentName);
        return 'Student ' + studentName + ' added to class 07';
    } else {
        return 'Cannot add more students to class 07';
    }
}
function getNumberOfStudents() {
    return class07Students.length;
}

//Candy helper
const boughtCandyPrices = [];
function pricer(candyType){
    switch (candyType) {
        case 'Sweet':
            return 0.5;
        case 'Chocolate':
            return 0.7;
        case 'Toffee':
            return 1.1;
        case 'Chewing-gum':
            return 0.03;
    }
}
function addCandy(candyType, weight) {
    const pricePerGr = pricer(candyType);
    const price = weight * pricePerGr;
    return boughtCandyPrices.push(price);
}
addCandy('Sweet', 2);
addCandy('Chocolate', 13);
// addCandy('Toffee', 3000);

const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
    let totalPrice = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalPrice += boughtCandyPrices[i];
    }
    if (totalPrice <= amountToSpend) {
        return true;
    }
    else {
        return false;
    }
}
if (canBuyMoreCandy()) {
    console.log('You can buy more, so please do!');
} else {
    console.log('Enough candy for you!');
}


