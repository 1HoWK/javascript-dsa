/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {

    // a = [1, 2, 3]
    // b = [3, 2, 1]
    let p1 = 0;
    let p2 = 0;

    let aScore = 0;
    let bScore = 0;
    while (p1 < a.length && p2 < b.length) {
        if (a[p1] > b[p1]) {
            aScore += 1;
        } else if (b[p1] > a[p1]) {
            bScore += 1;
        }
        p1++;
        p2++;
    }

    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] > b[i]) aScore++;
    //     else if (a[i] < b[i]) bScore++;
    // }
    return [aScore, bScore];
}