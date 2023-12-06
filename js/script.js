let resultPowNumber = 1;
let count = 0;

function powNumber(number, degree) {
    resultPowNumber *= number;
    count++;
    if (count === degree) {
        return number;
    }
    powNumber(number, degree);
    return resultPowNumber;
}

console.log(powNumber(10, 4))