const dogYearOfBirth = 2015;
const dogYearFuture = 2027; 
let dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
   dogYear *= 7;
   console.log('Your dog will be ' + dogYear +  ' dog years old in ' + dogYearFuture);
}
else {
    console.log('Your dog will be ' + dogYear +  ' human years old in ' + dogYearFuture);
}