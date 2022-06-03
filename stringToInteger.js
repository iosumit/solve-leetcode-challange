const stringToInteger = (s) => {
    let result = 0;
    let flag = false;
    let isOperatorFound = 0;
    let numberFound = false;
    let finalStr = "";

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        const element = s.charCodeAt(i);

        if ((isOperatorFound || numberFound) && (element == 32 || element == 43)) {
            finalStr = "0";
            break;
        } if (element == 45) {
            flag = true;
            isOperatorFound++;
        } else if (element >= 48 && element <= 57) {
            finalStr += ch;
            numberFound = true;
        } else if (element == 46) {
            finalStr = "0";
            break;
        } else if (!numberFound && element == 43) {
            isOperatorFound++;
        } else if (!numberFound && element == 32) {
            continue;
        } else {
            finalStr = "0";
            break;
        }
        // console.log(element);
    }
    result = parseInt(finalStr);
    console.log(typeof (result), parseInt(s));

    if (finalStr == "" || isOperatorFound > 1) {
        return 0;
    }

    let pow31 = Math.pow(2, 31);
    if ((-1 * pow31) <= result && pow31 < result) {
        return flag ? pow31 * -1 : pow31 - 1;
    }

    return flag && result != 0 ? result * -1 : result;
}
console.log(stringToInteger("00000-42a1234"))