const volumeInMeters = [8*10*10, 5*11*8];
const gardenSizeInM2 = [100, 70];
const housePrice = [volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300, volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300];
const name = ['Peter', 'Julia'];
const conclusionAboutPrice = ['You paying too much,', 'You paying too little,'];



/*function housePrice (volumeInMeters, gardenSizeInM2) {
    return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}
*/




if (housePrice[0] < 2500000) {
    console.log(conclusionAboutPrice[0] + ' ' + name[0]);
}
else {
    console.log(conclusionAboutPrice[1] + ' ' + name[0]);
}

if (housePrice[1] < 1000000 ) {
    console.log(conclusionAboutPrice[0] + ' ' + name[1]);
}
else {
    console.log(conclusionAboutPrice[1] + ' ' + name[1]);
}


