let num = 1234;
let digit;

while(num > 0){
    digit = num%10;
    console.log(digit);

    num = Math.floor(num/10);
}
