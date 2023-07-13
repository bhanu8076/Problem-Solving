var longestSubstring = function(s, k) {
    if(s.length < k) {
        return 0;
    }
    let charFrequencyObj = {};
    let maxLength = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(charFrequencyObj[s[i]]) {
            charFrequencyObj[s[i]]++;
        } else {
            charFrequencyObj[s[i]] = 1;
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(charFrequencyObj[s[i]] < k) {
            continue;
        }

        let j = i;
        while(j < s.length) {
            if(charFrequencyObj[s[j]] < k) {
                break;
            }
            maxLength = Math.max(maxLength, j-i+1);
            j++;
        }
    }

    return maxLength;
};

let inputObj = {
    firstCase : {
        s: 'aaabb',
        k: 3
    },
    secondCase : {
        s: 'ababbc',
        k: 2
    }
}

longestSubstring(inputObj.firstCase.s, inputObj.firstCase.k);
longestSubstring(inputObj.secondCase.s, inputObj.secondCase.k);