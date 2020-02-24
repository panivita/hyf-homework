const name = ['Peter', 'Julia'];
const conclusionAboutPrice = ['You paying too much,', 'You paying too little,'];
const petersHouse = {
    gardenSizeInM2: 100,
    width: 8,
    height: 10,
    depth: 10,
}

const juliasHouse = {
    gardenSizeInM2: 70,
    width: 5,
    height: 11,
    depth: 8,
}

function houseVolume(house) {
    return house.width * house.height * house.depth;
}

function housePrice(house) {
    const volumeInMeters = houseVolume(house);
    return volumeInMeters * 2.5 * 1000 + house.gardenSizeInM2 * 300;
}

const peterHousePrice = housePrice(petersHouse);
const juliaHousePrice = housePrice(juliasHouse);



if (peterHousePrice < 2500000) {
    console.log(conclusionAboutPrice[0] + ' ' + name[0]);
}
else {
    console.log(conclusionAboutPrice[1] + ' ' + name[0]);
}

if (juliaHousePrice < 1000000) {
    console.log(conclusionAboutPrice[0] + ' ' + name[1]);
}
else {
    console.log(conclusionAboutPrice[1] + ' ' + name[1]);
}


