const { readFile } = require("./helper")

const puzzleInputFile = 'puzzle4.txt';

const code = async () => {
    let data = await readFile(puzzleInputFile);
    data = data.split('\r\n');
    console.log(data)
    const n = data.length, m = data[0].length
    let t = 0;
    const count = (i, j) => {
        let c = 0;
        try {
            if (data[i][j + 1] === 'M' && data[i][j + 2] === 'A' && data[i][j + 3] === 'S') {
                c++;
            }
        } catch (e) {

        }
        try {
            if (data[i + 1][j + 1] === 'M' && data[i + 2][j + 2] === 'A' && data[i + 3][j + 3] === 'S') {
                c++;
            }
        } catch (e) {

        }
        try {
            if (data[i - 1][j + 1] === 'M' && data[i - 2][j + 2] === 'A' && data[i - 3][j + 3] === 'S') {
                c++;
            }
        } catch (e) {

        }
        try {
            if (data[i][j - 1] === 'M' && data[i][j - 2] === 'A' && data[i][j - 3] === 'S') {
                c++;
            }
        } catch (e) {

        }
        try {
            if (data[i + 1][j - 1] === 'M' && data[i + 2][j - 2] === 'A' && data[i + 3][j - 3] === 'S') {
                c++;
            }
        } catch (e) {

        }
        try {
            if (data[i - 1][j - 1] === 'M' && data[i - 2][j - 2] === 'A' && data[i - 3][j - 3] === 'S') {
                c++;
            }
        } catch (e) {

        }
        try {
            if (data[i + 1][j] === 'M' && data[i + 2][j] === 'A' && data[i + 3][j] === 'S') {
                c++;
            }
        } catch (e) {

        }
        try {
            if (data[i - 1][j] === 'M' && data[i - 2][j] === 'A' && data[i - 3][j] === 'S') {
                c++;
            }
        } catch (e) {

        }
        return c;
    }
    const countX = (i, j) => {
        let t = 0
        try {
            if(data[i - 1][j - 1] === 'M' && data[i - 1][j + 1] === 'S' && data[i + 1][j - 1] === 'M' && data[i + 1][j + 1] === 'S') {
                t++;
            }
            if(data[i - 1][j - 1] === 'S' && data[i - 1][j + 1] === 'M' && data[i + 1][j - 1] === 'S' && data[i + 1][j + 1] === 'M') {
                t++;
            }
            if(data[i - 1][j - 1] === 'S' && data[i - 1][j + 1] === 'S' && data[i + 1][j - 1] === 'M' && data[i + 1][j + 1] === 'M') {
                t++;
            }
            if(data[i - 1][j - 1] === 'M' && data[i - 1][j + 1] === 'M' && data[i + 1][j - 1] === 'S' && data[i + 1][j + 1] === 'S') {
                t++;
            }
        } catch (error) {
        }
        return t;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (data[i][j] === 'A') {
                t += countX(i, j);
            }
        }
    }
    console.log(t)
}
code();