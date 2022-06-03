const zigzagConv = (s, numRows) => {
    if (numRows == 1) {
        return s;
    }
    let result = "";
    let gaps = 2 * (numRows - 1);
    for (let i = 0; i < numRows; i++) {
        // const element = array[i];
        let currGap = 2 * (numRows - i - 1);
        let index = i;
        while (index < s.length) {
            console.log(currGap, i, index, result);
            result += s[index];
            if (currGap) {
                index += currGap;
                currGap = gaps - currGap;
            }
            else {
                currGap = gaps - currGap;
                index += currGap;
            }

        }

    }
    return result;
}
console.log(zigzagConv("PAYPALISHIRING", 4));