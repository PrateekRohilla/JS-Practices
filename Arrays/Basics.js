//create array
let arr = [1,2,3,4,5];

//JS array can hold multiple type of values
let arr2 = ["hi", 1, true];

//can also create array using array class
let fruits = new Array("Apple", "Banana", "grapes");

//length property
let a = arr.length;

//get last element
let last = arr[arr.length - 1];

//array of objects
let arrObj = [
    {num: 1, color: "red"},
    {num: 2, color: "green"},
    {num: 3, color: "blue"},
];


//traversal

//basic for loop way
for(let i=0;i<arr.length;i++)
    console.log(arr[i]);


//for in - gives index number  
for(let elem in fruits)
    console.log(elem);


//for of - gives the element
for(let elem of fruits)
    console.log(elem);


/*
forEach
    - takes callback function as an argument
    - cannot be break in between execution 
        (break keyword gives error)
*/
fruits.forEach((elem, index) => {
    console.log(elem, index);
})
