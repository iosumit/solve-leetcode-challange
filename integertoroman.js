/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let s = "";
    let pos = 1;

    while (num > 0) {
        dig = num % 10;
        s = getRomanDigits(dig, pos) + s;
        num = parseInt(num / 10);
        pos = pos * 10;
    }
    return s;

};
const getRomanDigits = function (dig, pos) {
    let roman = {};
    roman[1] = 'I';
    roman[5] = 'V';
    roman[10] = 'X';
    roman[50] = 'L';
    roman[100] = 'C';
    roman[500] = 'D';
    roman[1000] = 'M';

    if (dig * pos in roman) return roman[dig * pos];

    else if ((dig + 1) * pos == pos * 10) {
        return roman[pos] + roman[(dig + 1) * pos];
    } else if ((dig + 1) * pos == pos * 5) {
        return roman[pos] + roman[(dig + 1) * pos];
    } else {
        let s = dig > 5 ? roman[pos * 5] : "";
        dig = dig > 5 ? (dig - 5) : dig;
        while (dig > 0) {
            s += roman[pos];
            dig--;
        }
        return s
    }
}
console.log(intToRoman(3));