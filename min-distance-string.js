/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    let minDistance = Infinity;  // Initialize minimum distance as infinity
    let targetIndex = -1;

    for (let i = startIndex; i < words.length; i++) {
        if (words[i] === target) {
            console.log({difference : i-targetIndex, minDistance});
            if (targetIndex === -1 || i - targetIndex < minDistance) {
                // Update targetIndex and minDistance
                targetIndex = i;
                minDistance = i - startIndex;
            } else {
                break;  // No need to search further if the distance is increasing
            }
        }
    }

    for (let i = startIndex - 1; i >= 0; i--) {
        if (words[i] === target) {
            console.log({difference : startIndex - i, minDistance});
            if (targetIndex === -1 || startIndex - i < minDistance) {
                // Update targetIndex and minDistance
                targetIndex = i;
                minDistance = startIndex - i;
            } else {
                break;  // No need to search further if the distance is increasing
            }
        }
    }

    return minDistance;


};