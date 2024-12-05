const { readFile } = require("./helper")

const puzzleInputFile = 'puzzle3.input.txt';

const cal = (str) => {
    const nums = str.substring(4, str.length - 1).split(',').map(val => Number(val));
    // console.log(nums)
    return nums[0] * nums[1];
}

const code = async () => {
    let data = await readFile(puzzleInputFile);
    // const regex = /mul\(\d+,\d+\)/g
    // const mul = data.match(regex).reduce((p, v) => p + cal(v), 0);
    // console.log(mul)
    const regex = /(mul\(\d+,\d+\))|do\(\)|don't\(\)/g;
    data = data.match(regex);
    let total = 0, flag = true;
    for(let i = 0; i < data.length; i++) {
        if(data[i] === 'do()') {
            flag = true;
            continue;
        }
        if(data[i] === 'don\'t()') {
            flag = false;
            continue;
        }
        if(flag) {
            total += cal(data[i]);
        }
    }
    console.log(total)
}
code();