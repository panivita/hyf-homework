//Create an array of movies containing the movies with a short title (you define what short means)
const shortTitleMovies = movies.filter(m => m.title.length <= 5);
console.log(shortTitleMovies);

//Create an array of movie titles with long movie titles
const longTitleMovies = movies.filter(m => m.title.length > 35);
console.log(longTitleMovies);

//Count the number of movies made between 1980-1989 (including both the years)
const moviesMadeYears = movies.filter(m => m.year >= 1980 && m.year <= 1989);
console.log(`${moviesMadeYears.length} movies were made between 1980-1989 years`);

//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const newTag = movies.map(m => ({ ...m, tag: '' }));
const newTagMovies = newTag.map(m => {
    if (m.rating >= 7) {
        m.tag = 'Good';
    }
    else if (m.rating >= 4 && m.rating < 7) {
        m.tag = 'Average';
    }
    else {
        m.tag = 'Bad';
    }
    return m;
});
console.log(newTagMovies);

//Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const higherRatingMovies = movies
    .filter(movies => movies.rating > 6)
    .map(movies => movies.rating);
console.log(higherRatingMovies);

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
const moviesContainingKeywords = movies.filter(m =>
    m.title.match(/Surfer(?:$|\W)/) ||
    m.title.match(/Alien(?:$|\W)/) ||
    m.title.match(/Benjamin(?:$|\W)/));
console.log(moviesContainingKeywords.length);

const totalContainingKeywords = movies.reduce((acc, cur) => {
    if (cur.title.match(/Surfer(?:$|\W)/)) {
        acc.Surfer++;
    }
    if (cur.title.match(/Alien(?:$|\W)/)) {
        acc.Alien++;
    }
    if (cur.title.match(/Benjamin(?:$|\W)/)) {
        acc.Benjamin++;
    }
    return acc;
}, { Surfer: 0, Alien: 0, Benjamin: 0 });
console.log(totalContainingKeywords);

//Create an array of movies where a word in the title is duplicated.
const duplicateTitles = [];
movies
    .map(m => m.title.split(' '))
    .forEach(title => title.filter((item, index) => {
        if (title.indexOf(item) !== index) {
            duplicateTitles.push(title.join(" "));
        }
        else {
            false;
        }
    }));
console.log(duplicateTitles);

//Find the word that is mostly duplicated using sort. Optional
const buildCounters = movies => movies
    .map(m => m.title)
    .map(t => t.toLowerCase())
    .map(t => t.match(/(\w{4,})/g)) // we will dont match words: 'a', 'the', 'of' and other
    .reduce((acc, cur) => acc.concat(cur), [])
    .reduce((acc, cur) => {
        if (acc[cur] === undefined) {
            acc[cur] = 0;
        }
        acc[cur]++;
        return acc;
    }, {});

const counters = buildCounters(movies);
const result = [];
for (let word in counters) {
    result.push([word, counters[word]]);
}
result.sort(function (a, b) {
    return a[1] - b[1];
});

const mostlyDuplicatedWordArrey = result[result.length - 1];
const mostlyDuplicatedWord = mostlyDuplicatedWordArrey[0];
const mostlyDuplicatedWordCount = mostlyDuplicatedWordArrey[1];
console.log(`The word ${mostlyDuplicatedWord} is mostly duplicated, it duplicated ${mostlyDuplicatedWordCount} times`);

// Calculate the average rating of all the movies using reduce. Optional
const averageSumRating = movies.map(m => m.rating).reduce((acc, cur, int) => {
    acc.sum += cur;
    acc.average = acc.sum / (int + 1);
    return acc;
}, { sum: 0, average: 0 });
const averageRating = averageSumRating.average.toFixed(2);
console.log(`The average rating of all the movies is ${averageRating}`);

//Count the total number of Good, Average and Bad movies using reduce. Optional
const totalNumberTag = newTagMovies.map(m =>m.tag).reduce((acc, cur) => {
    if (cur.includes('Good')) {
        acc.Good++;
    }
    else if (cur.includes('Average')) {
        acc.Average++;
    }
    else {
        acc.Bad++;
    }
    return acc;
}, { Good: 0, Average: 0, Bad: 0 });
console.log(totalNumberTag);
