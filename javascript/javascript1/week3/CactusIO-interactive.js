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
console.log(addActivity('23/7-18', 'Youtube', 30));

//Show my status
