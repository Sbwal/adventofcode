const { readFile } = require("./helper")
const puzzleInputFile = 'test.txt';

const code = async () => {
    let data = await readFile(puzzleInputFile);
    data = data.split('\r\n').map(v => v.split(''));
    const n = data.length, m = data[0].length;
    const dir = {'>': 'v','v': '<','<': '^','^': '>'}
    const move = {'>': [0, 1],'v': [1, 0],'<': [0, -1],'^': [-1, 0]}
    const find = () => {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (data[i][j] in dir) {
                    return [i, j];
                }
            }
        }
    }
    const inValid = (im, jm) => im >= n || im < 0 || jm >= m || jm < 0;
    const returnBack = (x, y, pdo) => {
        let pd = pdo;
        const map = Array(n).fill().map(_ => Array(m).fill(0));
        let i = x, j = y;
        let c = 0;
        while (true) {
            let im = i + move[pd][0];
            let jm = j + move[pd][1];
            if (inValid(im, jm)) {
                return false;
            }
            map[im][jm]++;
            if (map[im][jm] > 4) {
                return false;
            }
            if (data[im][jm] === '#' || data[im][jm] === 'o') {
                pd = dir[pd];
                continue;
            }
            i = im;
            j = jm;
            if (x === i && y === j) {
                return true;
            }
        }
    }
    let [i, j] = find();
    let pd = data[i][j];
    data[i][j] = '.';
    let c = 0;
    const otrue = Array(n).fill().map(_ => Array(m).fill(false));
    const op = Array(n).fill().map(_ => Array(m).fill(false));
    while (true) {
        let im = i + move[pd][0];
        let jm = j + move[pd][1];
        if (inValid(im, jm)) {
            break;
        }
        if (data[im][jm] === '#') {
            pd = dir[pd];
            continue;
        }
        if (!otrue[im][jm]) {
            otrue[im][jm] = true;
            data[im][jm] = 'o';
            const val = returnBack(i, j, pd);
            if (val) {
                op[i][j] = true;
                c++;
            }
            data[im][jm] = '.';
        }
        i = im;
        j = jm;
    }
    for(let i = 0; i < n; i++) {
        let s = '';
        for(let j = 0; j < m; j++) {
            if(op[i][j]) {
                s += '0';
            }
            else {
                s += data[i][j];
            }
        }
        console.log(s)
    }
    console.log(c)

}
code();