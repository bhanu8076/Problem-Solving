function countBullsAndCows (str1, str2) {
    const str1Array = str1.split('');
    const str2Array = str2.split('');

    let bulls = 0;
    let cows = 0;
    
    for (let i = 0; i < str1Array.length; i++) {
        if(str2Array[i] === str1Array[i]) {
            bulls++;

            str1Array[i] = null;
            str2Array[i] = null;
        }
    }

    for (let i = 0; i < str1Array.length; i++) {
        if (str1Array[i] !== null) {
            let charFound = str2Array.indexOf(str1Array[i]);

            if(charFound !== -1) {
                cows++;
                str2Array[charFound] = null; 
            }
        }
    }

    return `${bulls}A${cows}B`;
}

const secret = "1807";
const guess = "7810";
const result = countBullsAndCows(secret, guess);
console.log(result);