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


function seriesPercentageAverageLifespan(seriesWatchInMin) {
    const averageLifespanInMin = 80 * 365 * 24 * 60;
    const result = seriesWatchInMin * 100 / averageLifespanInMin;
    return result;
}
function calculateSeriesWatchTimeInMin(series) {
    const daysInMin = series.days * 24 * 60;
    const hoursInMin = series.hours * 60;
    const minutesInMin = series.minutes
    const seriesWatchInMin = daysInMin + hoursInMin + minutesInMin;
    return seriesWatchInMin;
}
function currentSeriesDuration() {
    const result = [];
    for (let i = 0; i < seriesDurations.length; i++) {
        const series = seriesDurations[i];
        const seriesWatchInMin = calculateSeriesWatchTimeInMin(series);
        const percentageOfTimeSpentWatchingThisSeries = seriesPercentageAverageLifespan(seriesWatchInMin);
        result.push({ series, percentageOfTimeSpentWatchingThisSeries });
    }
    return result;
}
const mapPercentage = currentSeriesDuration();
let totalSum = 0;
for (let i = 0; i < mapPercentage.length; i++) {
    const seriesWithPercentage = mapPercentage[i];
    console.log(`${seriesWithPercentage.series.title} took ${seriesWithPercentage.percentageOfTimeSpentWatchingThisSeries.toFixed(3)}% of my life`);
    totalSum += seriesWithPercentage.percentageOfTimeSpentWatchingThisSeries;
}

console.log(`In total that is ${totalSum.toFixed(3)}% of my life`);

