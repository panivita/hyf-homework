function getName(command) {
    const n = command.split(" ");
    const name = n[n.length - 1];
    return name;
}
const name = getName(command);
function saveName() {
    if (sentences.question1.test(command)) {
        return name;
    }
}
const savedName = saveName(command);

const myTodo = [];
function addAction(command) {
    const n = command.split(" ")
    const action = n[1];
    return action;
}
const action = addAction(command);

function getDish(command) {
    const d = command.split(" ");
    const dish = d.slice(4, d.lenght);
    return dish;
}
const dish = getDish(command);
function saveDish() {
    if (sentences.question8.test(command)) {
        return dish;
    }
}
const savedDish = saveDish();

if (sentences.question1.test(command)) {
    return `${answers.answer1} ${name}`;
}
/*if (sentences.question2.test(command)) {
    return `${answers.answer2} ${savedName}`;
}*/
if (sentences.question3.test(command)) {
    //myTodo.push(savedAction);
    return `${action} ${answers.answer3}`;
}
if (sentences.question4.test(command)) {
    //myTodo.pop(savedAction);
    return `${action} ${answers.answer4}`;
}
if (sentences.question5.test(command)) {
    //myTodo.push(savedAction);
    return myTodo;
}
if (sentences.question6.test(command)) {
    const d = new Date();
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    const dayToday = `${da}. of ${mo} ${ye}`;
    return dayToday;
}
if (sentences.question7.test(command)) {
    const expression = command.slice(8, command.lenght);
    const math = eval(expression);
    return `${expression} = ${math}`;

}
/*
if (sentences.question8.test(command)) {
    const d = command.split(" ");
    const dish = d.slice(4, d.lenght);
    return `${dish} ${answers.answer5}`;
}
if (sentences.question9.test(command)) {
    return `${answers.answer6} ${savedDish}`;
}*/

}
console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('Add singing in the shower to my todo'));
//console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3 * 3'));
//console.log(getReply('My favorite dish is lasagne'));
//console.log(getReply('What is my favorite dish'));
//console.log(getReply());
//console.log(getReply());