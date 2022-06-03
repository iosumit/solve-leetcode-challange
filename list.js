let x = 'sum,min,mul,div,vir,s';

let arr = [];
let cur = '';
for (let i = 0; i < x.length; i++) {
    if (x[i] == ',') {
        arr.push(cur);
        cur = '';
    } else {
        cur += x[i];
        if (x.length - 1 == i) {
            arr.push(cur);
        }
    }
}

console.log(arr);