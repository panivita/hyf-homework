// Creating new scope
const scoped = (function() {
  const redBox = document.querySelector(".marks li:nth-child(1)");
  const blueBox = document.querySelector(".marks li:nth-child(2)");
  const greenBox = document.querySelector(".marks li:nth-child(3)");
  const span = document.querySelector("span");
  const targets = document.querySelectorAll("ul.targets li");

  const setTargetFulfilled = (box, targetBox) => {
    return new Promise((resolve) => {
      box.addEventListener("transitionend", () => {
        targetBox.classList.add("fulfilled");
        resolve();
      });
    });
  };

  const f1 = setTargetFulfilled(redBox, targets[0]);
  const f2 = setTargetFulfilled(blueBox, targets[1]);
  const f3 = setTargetFulfilled(greenBox, targets[2]);
  Promise.all([f1, f2, f3]).then(() => span.classList.add("shown"));

  /**
   * @param {DOMelement} boxToMove - A DOM element of the box to move
   * @param {Position} newPosition - An object specifying the new position of the box. x, y
   * @return {Promise<any>}
   */

  function moveElement(boxToMove, newPosition) {
    return new Promise((resolve) => {
      boxToMove.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
      boxToMove.addEventListener("transitionend", resolve);
    });
  }
  return moveElement;
})()
window.moveElement = scoped;
