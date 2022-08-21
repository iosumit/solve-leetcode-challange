import Case from "./cases.js";

const cases = [
    new Case("2", "6", "3"),
    new Case("123", "56088", "456"),
    new Case("999", "998001", "999"),
    new Case("9133", "0", "0"),
    new Case("123456789", "121932631112635269", "987654321"),
];
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    // Other
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let arr = Array(num1.length + num2.length).fill(0);

    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");

    for (let i = 0; i < num1.length; i++) {
        const n1 = num1.charCodeAt(i) - 48;
        for (let j = 0; j < num2.length; j++) {
            const n2 = num2.charCodeAt(j) - 48;

            let digit = n1 * n2;
            // console.log(n1, n2, digit, arr[i + j]);
            arr[i + j] += digit;
            arr[i + j + 1] += Math.floor(arr[i + j] / 10);
            arr[i + j] = arr[i + j] % 10;
            // console.log(n1, n2, digit, arr[i + j]);
        }
    }
    let w = arr.length - 1;
    while (arr[w] == 0) {
        w--;
    }
    return arr.splice(0, w + 1).reverse().join("");

    // XXXXXXXXXXXXXXXXXXXXXXXXXXXX
    let carry = 0;
    let mul = [];
    let currentMul = "";
    let zeros = "";
    let swap = "";
    // Swap
    if (num2.length > num1.length) {
        swap = num1;
        num1 = num2;
        num2 = swap;
    }

    for (let i = num2.length - 1; i >= 0; i--) {
        let secOp = num2.charCodeAt(i) - 48;

        for (let j = num1.length - 1; j >= 0; j--) {
            let firOp = num1.charCodeAt(j) - 48;

            let m = ((secOp * firOp) + carry);
            currentMul = (m % 10) + currentMul;
            carry = Math.floor(m / 10);
        }
        let x = 0;
        currentMul = carry == 0 ? currentMul : (carry + currentMul);
        while (x < i) {
            currentMul = "0" + currentMul;
            x++
        }
        carry = 0;
        currentMul += zeros;
        mul.push(currentMul);
        zeros += "0"
        currentMul = "";
    }
    // console.log(mul.join("+"), carry);
    let r = 0;
    let currentsum = 0;
    let sum = "";
    let sumcarry = 0;
    while (r < mul[0].length) {
        for (let i = 0; i < mul.length; i++) {
            currentsum += mul[i].charCodeAt(mul[i].length - r - 1) - 48;
        }
        let s = (currentsum + sumcarry);
        sum = (s % 10) + sum;
        sumcarry = Math.floor(s / 10);

        currentsum = 0;
        r += 1;
    }
    if (mul[0].length < mul[mul.length - 1].length) {
        sum = ((mul[mul.length - 1].charCodeAt(0) - 48) + sumcarry) + sum
    }
    // sum = sumcarry == 0 ? sum : (sumcarry + sum);
    if (intConverter(sum) == 0) {
        return "0";
    }
    return sum;
};

function intConverter(n) {
    if (n == "") {
        return 0;
    }
    let number = 0;
    for (let i = 0; i < n.length; i++) {
        number = (number * 10) + (n.charCodeAt(i) - 48)
    }
    return number;
}

cases.forEach(element => {
    let a = multiply(element.nums, element.target);
    console.log("ANS", a, element.ans);
});