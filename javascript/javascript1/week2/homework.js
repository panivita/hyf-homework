//Send emails
function sendEmailTo(recepient) {
    const weirdFormatRecepient = 'benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com';
    recepient = weirdFormatRecepient.split('|');
    for (i = 0; i < recepient.length; i++) { 
        console.log('email sent to ' + recepient[i]); 
    } 
}
sendEmailTo();

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
const fullname = getFullname(firstname, lastname, useFormalName);
console.log(fullname);*/

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
temperature = 21;
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
function addCandy(candyType, weight) {
    /*const candyArray = [{'candyType': ['Sweet', 'Chocolate', 'Toffee', 'Chewing-gum']},
    {'pricePerGram': [0.5, 0.7, 1.1, 0.03]}];
    for (let i = 0; i < candyArray.length; i++) {
        const price = candyArray[i].candyType * weight * candyArray[i].pricePerGram;
    }
    candyType = ['Sweet', 'Chocolate', 'Toffee', 'Chewing-gum'];
    const pricePerGram = [0.5, 0.7, 1.1, 0.03];
    for (var i = 0; i < candyType.length; i++) {
        for (var j = 0; j < pricePerGram.length; j++) {
            const price = candyType[i] * weight * pricePerGram[j];
        }
    }
    console.log(price);*/
    switch (candyType) {
        case 'sweet':
            price = weight * 0.5;
            break;
        case 'Chocolate':
            price = weight * 0.7;
            break;
        case 'Toffee':
            price = weight * 1.1;
            break;
        case 'Chewing-gum':
            price = weight * 0.03;
            break;
    }
    return boughtCandyPrices.push(price);
}
addCandy('sweet', 2);
addCandy('Chocolate', 30);

const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
    let totalPrice;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalPrice = price += boughtCandyPrices[i];
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


