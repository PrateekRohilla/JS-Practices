/*
Valid password
- min 8 chars
- 1 capital letter, 1 small letter, 1 digit
- 1 special character
*/

function validatePassword(password) {
    
    if (password.length < 8) {
        return false;
    }

    var hasCapitalLetter = /[A-Z]/.test(password);

    var hasSmallLetter = /[a-z]/.test(password);

    var hasDigit = /\d/.test(password);

    var hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (hasCapitalLetter && hasSmallLetter && hasDigit && hasSpecialCharacter) {
        return true;
    } else {
        return false;
    }
}



//regex - one liner
function validatePass(password) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password);
}




let password = "83A49shd!!";

if (validatePassword(password))
    console.log("valid");
else
    console.log("not valid");










/*
regex explanation
`^` start of the string
`(?=.*[A-Z])`contains at least one uppercase letter
`(?=.*[a-z])` contains at least one lowercase letter
`(?=.*\d)` contains at least one digit
`(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])` contains at least one special character
`.{8,}` string must be at least 8 characters long
`$` end of string
*/