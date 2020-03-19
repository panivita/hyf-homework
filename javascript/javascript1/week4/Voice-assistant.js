//const savedNames = [];
let name = '';
const myTodo = [];
let dish = '';
let faction = '';
const date = new Date();
const events = [];
function getReply(command) {
    const answers = {
        answer1: 'Nice to meet you',
        answer2: 'Your name is',
        answer3: 'added to your todo',
        answer4: 'removed from your todo',
        answer5: 'saived som your favorite dish',
        answer6: 'Your favorite dish is',
        answer7: 'Timer set for',
        answer8: 'added to your calendar',
        answer9: 'This week you have',
    };
    const sentences = {
        question1: /Hello\s+my\s+name\s+is\s+([A-Z]\w+)/,
        question2: /What\s+is\s+my\s+name/,
        question3: /Add/,
        question4: /Remove/,
        question5: /What\s+is\s+on\s+my\s+todo\?/,
        question6: /What\s+day\s+is\s+it\s+today\?/,
        question7: /What\s+is\s+(-?\d+)\s+([\+\*\-\/])\s+(-?\d+)/,
        question8: /My\s+favorite\s+dish\s+is/,
        question9: /What\s+is\s+my\s+favorite dish/,
        question10: /Set\s+a\s+timer\s+for\s+(\d+) minut/,
        question11: /([0-3]*\d\/[0-1]*\d\/\d{4})\s+to\s+my\s+calendar/,
        question12: /What\s+am\s+I\s+doing\s+this\s+week?/,
    };

    function getName(command) {
        const n = command.split(" ");
        name = n[n.length - 1];
        return `${answers.answer1} ${name}`;
    }
    function repeatName(command) {
        return `${answers.answer2} ${name}`;
    }
    function getAction(command) {
        const n = command.split(" ");
        action = n[1];
        return `${action} ${answers.answer3}`;
    }
    function removeAction(command) {
        const n = command.split(" ");
        removedAction = n[1];
        return `${removedAction} ${answers.answer4}`;
    }

    function getToDo(command) {
        myTodo.push(action);
        return `You have ${myTodo.length} todos: ${myTodo.toString()}`;
    }

    function getDish(command) {
        const n = command.split(" ");
        dish = n.slice(4, n.lenght);
        return `${dish.toString()} ${answers.answer5}`;
    }

    function getDish1(command) {
        return `${answers.answer6} ${dish.toString()}`;
    }

    function addDate(command) {
        const d = new Date();
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        const dayToday = `${da}. of ${mo} ${ye}`;
        return dayToday;
    }
    function calculate(command) {
        const regex = sentences.question7;
        const found = command.match(regex);
        const x = +found[1];
        const y = +found[3];
        const operator = found[2];
        switch (operator) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '*':
                return x * y;
            case '/':
                return x / y;
        }
    }

    function getTimer(command) {
        const regex = sentences.question10;
        const found = command.match(regex);
        const minut = +found[1];
        setTimeout(function () {
            console.log('Timer done');
        }, minut * 60 * 1000);
        return `${answers.answer7} ${minut} minutes`;
    }

    function getEvent(command) {
        const n = command.split(" ");
        event = `${n[1]} ${n[2]}`;
        //date = n[n.lenght -4];
        events.push({
            name: event,
            date,
        });
        return `${event} ${answers.answer8}`;
    }

    function doingThisWeek(command) {
        const startWeek = date.getDate() - date.getDay() + 1;
        const endWeek = startWeek + 6;
        const eventWeek = [];
        for (let i = 0; i < events.length; i++) {
            if (events[i].date.getDate() >= startWeek && events[i].date.getDate() <= endWeek) {
                eventWeek.push(events[i]);
            }
        }
        let myAnswer = `${answers.answer9} ${eventWeek.length} event:`;
        if (eventWeek.length !== 0) {
            for (let i = 0; i < eventWeek.length; i++) {
                myAnswer += `${eventWeek[i].name} on ${eventWeek[i].date.toDateString()}`;
            }
        }
        return myAnswer;
    }

    if (sentences.question1.test(command)) {
        return getName(command);
    }
    if (sentences.question2.test(command)) {
        return repeatName(command);
    }
    if (sentences.question11.test(command)) {
        return getEvent(command);
    }
    if (sentences.question12.test(command)) {
        return doingThisWeek(command);
    }
    if (sentences.question3.test(command)) {
        return getAction(command);
    }
    if (sentences.question4.test(command)) {
        return removeAction(command);
    }
    if (sentences.question5.test(command)) {
        return getToDo(command);
    }
    if (sentences.question6.test(command)) {
        return addDate(command);
    }
    if (sentences.question7.test(command)) {
        return calculate(command);
    }
    if (sentences.question8.test(command)) {
        return getDish(command);
    }
    if (sentences.question9.test(command)) {
        return getDish1(command);
    }
    if (sentences.question10.test(command)) {
        return getTimer(command);
    }
}

console.log(getReply('Hello my name is Victoria'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 4 * 3'));
console.log(getReply('My favorite dish is lasagne'));
console.log(getReply('What is my favorite dish'));
console.log(getReply('Set a timer for 4 minutes'));
console.log(getReply('Add Bike ride the 3/5/2019 to my calendar'));
console.log(getReply('What am I doing this week?'));