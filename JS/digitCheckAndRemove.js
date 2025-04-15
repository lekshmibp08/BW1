const nums = [1234, 5678, 9012, 3456, 7890, 2345, 6789];

function hasDigit(num, digit) {
    while(num > 0) {
        if(num % 10 === digit) {
            return true;
        }
        num = Math.floor(num/10);
    }
    return false;
}

const filtered = nums.filter(num => !hasDigit(num, 6));

console.log(filtered);

