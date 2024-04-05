let fruits = ["banana", "orange", "grapes", "apples"];

//sort() modifies original array
fruits.sort();
console.log(fruits);

/*
descending 
    - pass callback fn as compare fn
    - compare fn returns three values
        -1, 0 & 1
*/


/*
sort() always consider array values as string 
even if the values are numbers

to sort numeric array use compare fn
fn exp
    1st condt. 
        - if compare fn returns -1, a comes before b
    2nd condt. 
        - if compare fn returns 1, b comes before a
    3rd condt. 
        - if compare fn returns 0, positions remains same
*/
let nums = [2,6,3,6,4,86,42,89,53];
nums.sort(function(a,b){
    if(a<b)
        return -1;
    if(a>b)
        return 1;
    if(a==b)
        return 0;
});
console.log(nums)

/*
for numeric descending
     a<b -> 1
     a>b -> -1
*/


//sort object literal
const emp = [
    {id:101 , salary:4000},
    {id:102 , salary:1000},
    {id:103 , salary:3000},
    {id:104 , salary:2000},
]

//sort object based on salaries
emp.sort(function(a,b){
    if(a.salary < b.salary)
        return -1;
    if(a.salary > b.salary)
        return 1;
    if(a.salary == b.salary)
        return 0;
})

console.log(emp);