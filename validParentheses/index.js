// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens){
    while(parens.indexOf("()") >= 0) {
        parens = parens.replace("()", "");
    }
    return !parens.length;
}

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true