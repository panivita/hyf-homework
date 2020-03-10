//Adding an activity
const activities = [];
function addActivity(date, activity, duration) {
    if (typeof (date) === 'string' && typeof (activity) === 'string' && typeof (duration) === 'number' && date && activity && duration) {
        const myActivities = {
            date: date,
            activity: activity,
            duration: duration,
        };
        activities.push(myActivities);
    }
    return activities;
}

addActivity('23/7-18', 'Youtube', 220);
addActivity('23/7-18', 'Facebook', 30);
addActivity('23/7-18', 'Google', 100);
console.log(activities);

//Show my status
function summaryDirection() {
    let sumDuration = 0;
    for (let i = 0; i < activities.length; i++) {
        sumDuration += activities[i].duration;
    }
    return sumDuration;
}

function showStatus() {
    if (activities.length === 0) {
        return 'Add some activities before calling showStatus';
    }
    else {
        const numberActivities = activities.length;
        return 'You have added ' + numberActivities + ' activities. They amount to ' + summaryDirection() + ' min. of usage';
    }
}
console.log(showStatus());

//Usage limit
function usageLimit(limit) {
    if (summaryDirection() > limit) {
        return 'You have reached your limit, no more smartphoning for you!';
    }
}
console.log(usageLimit(300));

//Extra feature

//Optional
// Improve the addActivity
const activitiesImprove = [];
const today = new Date().toLocaleDateString();
function addActivityImprove(activity, duration) {
    if (typeof (activity) === 'string' && typeof (duration) === 'number' && activity && duration) {
        const myActivities = {
            date: today,
            activity: activity,
            duration: duration,
        };
        activitiesImprove.push(myActivities);
    }
    return activitiesImprove;
}
addActivityImprove('Youtube', 100);
addActivityImprove('Facebook', 300);

//Improve the showStatus function by only showing the number of actitivies for that specific day.
function showStatusImprove() {
    let activitiesToday = [];
    let sumDuration = 0;
    for (let i = 0; i < activitiesImprove.length; i++) {
        sumDuration += activitiesImprove[i].duration;
        if (activitiesImprove[i].date === today) {
            activitiesToday.push(activitiesImprove[i]);
        }
    }
    if (activitiesImprove.length === 0) {
        return 'Add some activities before calling showStatus';
    }
    else {
        return 'You have added ' + activitiesToday.length + ' activities today. They amount to ' + sumDuration + ' min. of usage';;
    }
}
console.log(showStatusImprove());

//Create a function for calculating the activity a user has spent the most time on
function calculatingActivity() {
    let arrayDuration = [];
    for (let i = 0; i < activitiesImprove.length; i++) {
        const durationAle = activitiesImprove[i].duration;
        arrayDuration.push(durationAle);
        const maxDuration = Math.max(...arrayDuration);

        if (activitiesImprove[i].duration === maxDuration) {
            ;
        }
    }
}
console.log(calculatingActivity());