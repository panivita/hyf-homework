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
let totalSum = 0;

function seriesPercentageAverageLifespan(seriesWatchInMin) {
    const averageLifespanInMin = 80 * 365 * 24 * 60;
    const result = (seriesWatchInMin * 100) / averageLifespanInMin;
    return result;
}
for (let i = 0; i < seriesDurations.length; i++) {
    const daysInMin = seriesDurations[i].days * 24 * 60;
    const hoursInMin = seriesDurations[i].hours * 60;
    const min = seriesDurations[i].minutes
    const seriesWatchInMin = daysInMin + hoursInMin + min;
    totalSum += seriesWatchInMin;
    const calculatePercentage = seriesPercentageAverageLifespan(seriesWatchInMin).toFixed(3);
    console.log(seriesDurations[i].title + ' took ' + calculatePercentage + '% of my life');
}
function totalSeriesDuration () {
const total = seriesPercentageAverageLifespan(totalSum).toFixed(3);
    return 'In total that is ' + total + '% of my life';
}

console.log(totalSeriesDuration());

