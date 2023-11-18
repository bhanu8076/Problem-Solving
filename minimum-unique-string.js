const getMinimumUniqueSubstring = (str) => {
    const charFrequency = {};
    let result = '';
    for(let i = 0; i < str.length; i++) {
        if(charFrequency[str[i]]) {
            charFrequency[str[i]] ++;
        } else {
            charFrequency[str[i]] = 1;
        }
    }
    for(let i = 0; i < str.length; i++) {
        charFrequency[str[i]]--;
        if(!charFrequency[str[i]]) {
            result += str[i];
        }
    }
    return result;
}

console.log(getMinimumUniqueSubstring('abcba'));