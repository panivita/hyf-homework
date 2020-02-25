const petersHouse = {
    name: 'Peter',
    gardenSizeInM2: 100,
    width: 8,
    height: 10,
    depth: 10,
    marketHousePrice: 2500000,
}

const juliasHouse = {
    name: 'Julia',
    gardenSizeInM2: 70,
    width: 5,
    height: 11,
    depth: 8,
    marketHousePrice: 1000000,
}

function houseVolume(house) {
    return house.width * house.height * house.depth;
}

function housePrice(house) {
    const volumeInMeters = houseVolume(house);
    return volumeInMeters * 2.5 * 1000 + house.gardenSizeInM2 * 300;
}

function estimat(house) {
    const personHousePrice = housePrice(house);
    if (personHousePrice < house.marketHousePrice) {
        console.log('You paying too much, ' + house.name);
    }
    else {
        console.log('You paying too little, ' + house.name);
    }

}

estimat(petersHouse);
estimat(juliasHouse);




