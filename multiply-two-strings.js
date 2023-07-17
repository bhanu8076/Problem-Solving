var multiply = function(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const result = new Array(len1 + len2).fill(0);

    for(let i = len1 - 1; i >= 0; i--) {
        for(let j = len2 - 1; j >= 0; j--) {
            const product = Number(num1[i]) * Number(num2[j]);
            const sum = result[i + j + 1] + product;
            result[i+j] += Math.floor(sum / 10);
            result[i+j+1] = sum % 10;
        }
    }
  while (result[0] === 0 && result.length > 1) {
    result.shift();
  }
  
  return result.join('');
};

const input = {
    firstCase: {
        num1: '123',
        num2: '456'
    },
    secondCase: {
        num1: '2',
        num2: '3'
    }
};

console.log(multiply(input.firstCase.num1, input.firstCase.num2));
console.log(multiply(input.secondCase.num1, input.secondCase.num2));