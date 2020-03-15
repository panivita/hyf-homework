//Adding an activity
const activities = [];
function addActivity(date, activity, duration) {
    if (typeof (date) === 'string' && typeof (activity) === 'string' && typeof (duration) === 'number' && date && activity && duration) {
        const myActivity = {
            date: date,
            activity: activity,
            duration: duration,
        };
        activities.push(myActivity);
    }
    return activities;
}

addActivity('23/7-18', 'Youtube', 220);
addActivity('23/7-18', 'Facebook', 30);
addActivity('23/7-18', 'Google', 100);
console.log(activities);

//Show my status
function summaryDuration() {
    let sumDuration = 0;
    for (let i = 0; i < activities.length; i++) {
        sumDuration += activities[i].duration;
    }
    return sumDuration;
}
const currentSumDuration = summaryDuration();
function showStatus() {
    const numberActivities = activities.length;
    if (numberActivities === 0) {
        return -1;
    }
    else {
        return numberActivities;
    }
}
const resultShowStatus = showStatus();
if (resultShowStatus < 0) {
    console.log('Add some activities before calling showStatus');
}
else {
    console.log(`You have added ${resultShowStatus} activities. They amount to ${currentSumDuration} min. of usage`);
}


//Usage limit
function usageLimit(limit) {
    if (currentSumDuration > limit) {
        return -1;
    }
    else {
        const limitLefts = limit - currentSumDuration;
        return limitLefts;
    }
}
const resultUsageLimit = usageLimit(100);
if (resultUsageLimit < 0) {
    console.log('You have reached your limit, no more smartphoning for you!');
} else {
    console.log(`You have ${resultUsageLimit} min. before  the limit will be reached`);
}


//Extra feature
const limitActivity = 300;
function usageLimitActivity(activity, duration) {
    if (duration > limitActivity) {
        return `You have reached your limit for usage ${activity}, no more ${activity} for you!`;
    }
    else {
        const limitLefts = limitActivity - duration;
        return `You have ${limitLefts} min. before the limit for usage ${activity} will be reached`;
    }
}
const resultUsageLimitActivity = usageLimitActivity('Facebook', 200);
console.log(resultUsageLimitActivity);

function minutesLeft(activity, duration) {
    return limitActivity - duration;
}
const resultMinutesLeft = minutesLeft('Facebook', 200);
console.log(`You have ${resultMinutesLeft} min. before the limit for usage will be reached`);

//Optional
// Improve the addActivity
const activitiesImprove = [];
const today = new Date().toLocaleDateString();
function addActivityImprove(activity, duration) {
    if (typeof (activity) === 'string' && typeof (duration) === 'number' && activity && duration) {
        const myActivity = {
            date: today,
            activity: activity,
            duration: duration,
        };
        activitiesImprove.push(myActivity);
    }
    return activitiesImprove;
}

addActivityImprove('Youtube', 20);
addActivityImprove('Facebook', 300);
console.log(activitiesImprove);

//Improve the showStatus function by only showing the number of actitivies for that specific day.
function summaryDurationImprove() {
    let sumDuration = 0;
    for (let i = 0; i < activitiesImprove.length; i++) {
        sumDuration += activitiesImprove[i].duration;
    }
    return sumDuration;
}
const currentSumDurationImprove = summaryDuration();
function showStatusImprove() {
    const numberActivities = activitiesImprove.length;
    if (numberActivities === 0) {
        return -1;
    }
    else {
        let activitiesToday = [];
        for (let i = 0; i < activitiesImprove.length; i++) {
            if (activitiesImprove[i].date === today) {
                activitiesToday.push(activitiesImprove[i]);
            }
            return activitiesToday.length;
        }
    }
}
const resultShowStatusImprove = showStatusImprove();
if (resultShowStatusImprove < 0) {
    console.log('Add some activities before calling showStatus');
}
else {
    console.log(`You have added ${resultShowStatusImprove} activities. They amount to ${currentSumDurationImprove} min. of usage`);
}


//Create a function for calculating the activity a user has spent the most time on
function calculatingActivity() {
    let arrayDuration = [];
    for (let i = 0; i < activitiesImprove.length; i++) {
        const durationAle = activitiesImprove[i].duration;
        arrayDuration.push(durationAle);
    }
    const maxDuration = Math.max(...arrayDuration);
    const maxObject = activitiesImprove.find(n => n.duration === maxDuration);
    return maxObject.activity;
}

const resultCalculatingActivity = calculatingActivity();
console.log(`You have spent the most time on the ${resultCalculatingActivity}`);
