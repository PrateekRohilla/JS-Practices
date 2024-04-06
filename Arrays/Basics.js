//create array
let arr = [1, 2, 3, 4, 5];

//JS array can hold multiple type of values
let arr2 = ["hi", 1, true];

//can also create array using array class
let fruits = new Array("Apple", "Banana", "grapes", "cherry");

//length property
let a = arr.length;

//get last element
let last = arr[arr.length - 1];

//array of objects
let arrObj = [
    { num: 1, color: "red" },
    { num: 2, color: "green" },
    { num: 3, color: "blue" },
];


//traversal

//basic for loop way
for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);


//for in - gives index number  
for (let elem in fruits)
    console.log(elem);


//for of - gives the element
for (let elem of fruits)
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



//Array operations

//push( ) - adds at end & returns new length
console.log(fruits.push("mango"));
console.log(fruits);

//unshift( ) - adds at begin & returns new length
console.log(fruits.unshift("orange"));
console.log(fruits);

//pop( ) - removes last element & returns removed element
console.log(fruits.pop());
console.log(fruits);

//shift( ) - removes first element & returns removed element
console.log(fruits.shift());
console.log(fruits);

/*
arr.splice( )
    - a function to do various operations(add, remove, replace)
        depending on the parameters passed

    syntax - 
    arr.splice(start, deleteCount, item1, item2, itemN)
    start - index number from where it start processing
    deleteCount - (optional) number of elems to delete
    item - (optional) elements to add or replace

    return 
    - an array containing the deleted elements
    - if only one element is removed, array of one element is returned
    - if no element removed, empty array returned

    -- splice changes the original array --
*/

//starting from second index delete all elems
console.log(fruits.splice(2));

//delete all elements
console.log(fruits.splice(0));

//only delete elem at index 2
console.log(fruits.splice(2, 1));

//removes elem at 2nd index & add "papaya" there
console.log(fruits.splice(2, 1, "papaya"));

//remove 1 elem & add two - "guava", "litchi"
console.log(fruits.splice(2, 1, "guava", "litchi"));

//remove nothing add "guava" starting from 2nd index
console.log(fruits.splice(2, 0, "guava", "pineapple"));

//add elem at last
console.log(fruits.splice(arr.length, 0, "melon"));

//add at begin
console.log(fruits.splice(0, 0, "melon"));



//Is given value an array or not -> use toString.call()
console.log(toString.call(fruits));
//o/p -> [object Array]