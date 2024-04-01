let nums = [2,8,1,9,2,4,7,1,2];

/*
indexOf(searchElement, startIndex)   
    startIndex optional (0 is default)
    returns index
    if multiple - returns first occurence
*/ 
console.log(nums.indexOf(4));
console.log(nums.indexOf(1,3));


/*
lastIndexOf()    
    start search from backwards
    returns last occurence
    startIndex default -> array.length-1
*/
console.log(nums.lastIndexOf(2));
console.log(nums.lastIndexOf(4,7));


//includes()        - returns boolean
console.log(nums.includes(4));


//conditional based searching

let marks = [23,56,10,34,80,46,12,34,43,79,70];

//find( )   - returns element
let avg = marks.find((mark) => {
    return mark > 50;
})
console.log(avg);

//findIndex     - returns index
let topper = marks.findIndex((mark) => {
    return mark >= 80;
})
console.log(topper);

//filter        - retuns new array
let passed = marks.filter((mark) => {
    return mark > 33;
})
console.log(passed);
