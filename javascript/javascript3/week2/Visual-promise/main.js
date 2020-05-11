//translateOneByOne - Should translate the circles one at a time from their random start position to their
//target see the target positions below. Log something out after each element has been moved

const redBox = document.querySelector(".marks li:nth-child(1)");
const blueBox = document.querySelector(".marks li:nth-child(2)");
const greenBox = document.querySelector(".marks li:nth-child(3)");

const translateOneByOne = () => {
  moveElement(redBox, { x: 20, y: 300 })
    .then(() => {
      console.log("Red element has been moved");
    })
    .then(() => {
      return moveElement(blueBox, { x: 400, y: 300 }).then(() => {
        console.log("Blue element has been moved");
      });
    })
    .then(() => {
      return moveElement(greenBox, { x: 400, y: 20 }).then(() => {
        console.log("Green element has been moved");
      });
    });
};
//translateOneByOne();
//translateAllAtOnce - Should translate all the circles at the same time from their random start position
//to their target. Log out something after all elements have been moved

const translateAllAtOnce = () => {
  const getRedElement = moveElement(redBox, { x: 20, y: 300 });
  const getBlueElement = moveElement(blueBox, { x: 400, y: 300 });
  const getGreenElement = moveElement(greenBox, { x: 400, y: 20 });
  Promise.all([getRedElement, getBlueElement, getGreenElement]).then(() => {
    console.log("Red, blue and green elements has been moved");
  });
};
translateAllAtOnce();
