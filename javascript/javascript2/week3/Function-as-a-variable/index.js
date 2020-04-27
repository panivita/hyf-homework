//Create an array with 3 items. All items should be functions. Iterate through the array and
//call all the functions.
const funcArr = [
  () => console.log("this is first function"),
  () => console.log("this is second function"),
  () => console.log("this is third function"),
];

funcArr.forEach((func) => func());

//Create a function as a const and try creating a function normally. Call both functions.
function funcDeclaration() {
  console.log("Function declaration");
}
const funcExpression = () => console.log("Anonymous function expression");
funcDeclaration();
funcExpression();

//Create an object that has a key whose value is a function. Try calling this function.
const obj = {
  funcInObj: () => console.log("This is a function in an object"),
};

obj.funcInObj();
