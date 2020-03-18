function getReply(command) {
    const eventCalendar = [];
    const answers = {
        answer1: 'Nice to meet you',
        answer2: 'Your name is',
        answer3: 'added to your todo',
        answer4: 'removed from your todo',
        answer5: 'saived som your favorute dish',
        answer6: 'Your favorite dish is',
        answer7: 'Timer set for',
        answer8: 'Bike ride added to your calendar',
        answer9: 'This week you have' + eventCalendar.lenght + 'event:' + eventCalendar,
    };
    const sentences = {
        question1: /Hello my name is/,
        question2: /What is my name/,
        question3: /Add/,
        question4: /Remove/,
        question5: /on my todo?/,
        question6: /What day is it today?/,
        question7: /[+ - * /]/,
        question8: /My favorite dish is/,
        question9: /What is my favorite dish/,
        question10: /Set a timer for [0-9] minut/,
        question11: /Add Bike ride the' + date + 'to my calendar/,
        question12: /What am I doing this week?/,
    };
    function getName() {
        const n = command.split(" ");
        const name = n[n.length - 1];
        function saveName() {
            if (sentences.question1.test(command)) {
                return name;
            }
        }
        return saveName();
    }
    const savedName = getName();

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
        return dish.toString();
    }
    const dish = getDish(command);
    
    function saveDish() {
        if (sentences.question8.test(command)) {
            return dish;
        }
    }
    function getMinut(command) {
        const n = command.split(" ");
        const minut = n[n.length - 2];
        return minut; 
    }
    const minut = getMinut(command);

    const savedDish = saveDish();
    if (sentences.question1.test(command)) {
        return `${answers.answer1} ${savedName}`;
    }
    if (sentences.question2.test(command)) {
        return `${answers.answer2} ${savedName}`;
    }
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
    /*if (sentences.question7.test(command)) {
        const exemple = command.slice(8, command.lenght);
        const math = eval(exemple);
        return `${exemple} = ${math}`;
    }*/
    if (sentences.question8.test(command)) {
        return `${dish} ${answers.answer5}`;
    }
    if (sentences.question9.test(command)) {
        return `${answers.answer6} ${savedDish}`;
    }
    if (sentences.question10.test(command)) {
        return `${answers.answer7} ${minut} minutes`;
    }

}

console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('Add singing in the shower to my todo'));
//console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3 + 3'));
console.log(getReply('My favorite dish is lasagne'));
//console.log(getReply('What is my favorite dish'));
console.log(getReply('Set a timer for 4 minutes'));
//console.log(getReply());