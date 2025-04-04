var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }

    let original = x;
    let lastDigit = 0;
    let reversed = 0;

    while(x>0){
        lastDigit = x% 10;
        reversed = (reversed*10) + lastDigit;
        x =  Math.floor(x / 10); // round off
    }

    return reversed === original;
    // 121
    // divide 10 = 12.1

    // 12
    // divide 10 = 1

};