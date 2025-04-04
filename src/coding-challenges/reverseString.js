var reverseString = function (s) {
    // two pointers solution
    // time complexity of O(n)

    // get the characters of the input s
    // ask if the input is a array or string
    // let charArray = s.split('');
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        // keep track of one element
        let temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }

    // cheating way
    // s.reverse().join("");

    return s;
};