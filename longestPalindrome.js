const longestPalindrome = (s) => {

    let longst = "";
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {

        let l = i, r = i;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if (r - l + 1 > maxLen) {
                maxLen = r - l + 1;
                longst = s.substring(l, r + 1);
            }
            l--;
            r++;
        }
        l = i, r = i + 1;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if (r - l + 1 > maxLen) {
                maxLen = r - l + 1;
                longst = s.substring(l, r + 1);
            }
            l--;
            r++;
        }
    }
    return longst;

}

console.log(longestPalindrome("cbbd"));