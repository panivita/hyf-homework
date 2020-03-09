function bookPlaneTickets() {
    // draw
    console.log('Plane tickets booked');
    requestVacationDays();
    // draw
}

 function bookHotel() {
    console.log('Hotel booked');
    // draw
    planItinerary();
    // draw
}

function requestVacationDays() {
    // draw
    console.log('Vacation days requested');
    // draw
}

function planItinerary() {
    console.log('Itinerary done');
    // draw
}

function planTrip() {
    bookPlaneTickets();
    // draw
    bookHotel();
    // draw
    console.log('Trip planned');
}
// draw
planTrip();
// draw