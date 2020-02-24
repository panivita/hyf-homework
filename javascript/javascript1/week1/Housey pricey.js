let widthOfTheHouse;
let heightOfTheHouse;
let depthOfTheHouse;
let gardenSizeInM2;
let yourPrice;



function volumeInMeters (widthOfTheHouse, heightOfTheHouse, depthOfTheHouse) {
    return widthOfTheHouse * heightOfTheHouse * depthOfTheHouse;
}

function housePrice (volumeInMeters, gardenSizeInM2) {
    return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}





if (yourPrice > housePrice) {
    console.log('You paying too much');
}
else {
    console.log('You paying too little');
}


