var largestElements = function (elements, n) {
    // sort descending
    // real copy using spread operator
    let arr = [...elements].sort((a, b) => b - a);
    return arr.slice(0, n);
}