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
    const result = (seriesWatchInMin * 100) / averageLifespanInMin;
    return result;
}
function calculateSeriesWatchTime(serie) {
    const daysInMin = serie.days * 24 * 60;
    const hoursInMin = serie.hours * 60;
    const minutesInMin = serie.minutes
    const seriesWatchInMin = daysInMin + hoursInMin + minutesInMin;
    return seriesWatchInMin;
}
function currentSeriesDuration() {
    const result = [];
    for (let i = 0; i < seriesDurations.length; i++) {
        const serie = seriesDurations[i];
        const seriesWatchInMin = calculateSeriesWatchTime(serie);
        const spandPercentage = seriesPercentageAverageLifespan(seriesWatchInMin)
        result.push({ serie, spandPercentage });
    }
    return result;
}

const mapPercentage = currentSeriesDuration();
let totalSum = 0;
for (let i = 0; i < mapPercentage.length; i++) {
    const serieWithPercentage = mapPercentage[i];
    console.log(serieWithPercentage.serie.title + ' took ' + serieWithPercentage.spandPercentage.toFixed(3) + '% of my life');
    totalSum += serieWithPercentage.spandPercentage;
}

console.log('In total that is ' + totalSum.toFixed(3) + '% of my life');

