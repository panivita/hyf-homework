const seriesDurations = [
    {
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: 'Sopranos',
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: 'The Wire',
        days: 2,
        hours: 12,
        minutes: 0,
    },
    {
        title: 'Mythic Quest: Raven-s Banquet',
        days: 0,
        hours: 4,
        minutes: 30,
    }
]
function seriesWatch(seriesDurations) {
    let seriesWatchInMinArray = [];
    for (let i = 0; i < seriesDurations.length; i++) {
        const daysInMin = seriesDurations[i].days * 1440;
        const hoursInMin = seriesDurations[i].hours * 60;
        const min = seriesDurations[i].minutes
        const seriesWatchInMin = daysInMin + hoursInMin + min;
        seriesWatchInMinArray.push(seriesWatchInMin);
    }
    return seriesWatchInMinArray;
}
seriesWatch(seriesDurations);
console.log(seriesWatch(seriesDurations));

const averageLifespanInMin = 80 * 365 * 24 * 60;
const num = seriesWatch(seriesDurations);
const result1 = (num[0] * 100) / averageLifespanInMin;
console.log(result1);

/*function seriesPercentageAverageLifespan(seriesDurations) {
    const averageLifespanInMin = 80 * 365 * 24 * 60;
    const num = seriesWatch(seriesDurations);
    return (num * 100) / averageLifespanInMin;
}*/
//seriesWatchInMinArray = seriesWatchInMinArray[0];
//const result = seriesPercentageAverageLifespan(seriesDurations);
