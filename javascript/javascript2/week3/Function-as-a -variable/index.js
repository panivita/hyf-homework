//Create an array with 3 items. All items should be functions. Iterate through the array and 
//call all the functions.
const arr = [
    function firstFun() {
        console.log('this is first function');
    },
    function secondFunc() {
        console.log('this is second function');
    },
    function thirdFunc() {
        console.log('this is third function');
    }
];
while (arr.length) {
    arr.shift().call();
}

const a = () => console.log('a');
const b = () => console.log('b');
const c = () => console.log('c');
const funcArr = [a, b, c];
funcArr.forEach((func) => func());

//Create a function as a const and try creating a function normally. Call both functions. 
function funcDeclaration() {
    console.log('Function declaration');
}
const funcExpression = () => console.log('Anonymous function expression');
funcDeclaration();
funcExpression();

//Create an object that has a key whose value is a function. Try calling this function.
const obj = {
    funcInObj: function () {
        console.log('This is a function in an object');
    },
};
obj.funcInObj();