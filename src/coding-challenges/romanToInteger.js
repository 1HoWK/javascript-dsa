var romanToInt = function (s) {
    let map = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);

    let charArray = s.split("");

    let sum = 0;

    for (let i = 0; i < charArray.length; i++) {
        // since it is descending order, i need to comparee
        if (i + 1 < charArray.length && map.get(charArray[i]) < map.get(charArray[i + 1])) {
            // lesser, minus because adding the next character will get the correct value
            sum -= map.get(charArray[i]);
        } else {
            // larger, just add up
            sum += map.get(charArray[i]);
        }
    }

    return sum;
};