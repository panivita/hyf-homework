function getReply(command) {
    const sentences = [{
        question: 'Hello my name is' + name,
        answer: 'Nice to meet you' + name,
    },
    {
        question: 'What is my name',
        answer: 'Your name is' + name,
    },
    {
        question: 'Add' + action + 'to my todo',
        answer: action + 'added to your todo',
    },
    {
        question: 'Remove' + action + 'from my todo',
        answer: action + 'removed from your todo',
    },
    {
        question: 'What is on my todo?',
        answer: myTodo,
    },
    {
        question: 'What day is it today?',
        answer: dayToday,
    },
    {
        question: 'What is' + mathematic ,
        answer: math,
    },
    {
        question: 'My favorite dish is' + dish,
        answer: 'Dish saived',
    },
    {
        question: 'What is my favorite dish?',
        answer: 'Your favorite dish is' + dish,
    },
    {
        question: 'Set a timer for' + minut,
        answer: 'Timer set for' + minut + 'minutes',
    },
    {
        question: 'Add Bike ride the' + date + 'to my calendar',
        answer: 'Bike ride added to your calendar',
    },
    {
        question: 'What am I doing this week?',
        answer: 'This week you have' + eventCalendar.lenght + 'event:' + eventCalendar,
    }
    ];

}