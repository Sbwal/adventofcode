const { readFile } = require("./helper")

const puzzleInputFile = 'puzzle6.txt';

const code = async () => {
    let data = await readFile(puzzleInputFile);
    data = data.split('\r\n').map(v => v.split(''));
    const n = data.length, m = data[0].length;
    const dir = {
        '>': 'v',
        'v': '<',
        '<': '^',
        '^': '>'
    }
    const move = {
        '>': [0, 1],
        'v': [1, 0],
        '<': [0, -1],
        '^': [-1, 0]
    }
    const find = () => {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (data[i][j] in dir) {
                    return [i, j];
                }
            }
        }
    }
    const inValid = (im, jm) => {
        return im >= n || im < 0 || jm >= m || jm < 0;
    }
    const returnBack = (x, y, pd) => {
        let i = x, j = y;
        let c = 0;
        while (true) {
            let im = i + move[pd][0];
            let jm = j + move[pd][1];
            if (inValid(im, jm)) {
                return false;
            }
            if (data[im][jm] === '#' || data[im][jm] === 'o') {
                pd = dir[pd];
                continue;
            }
            i = im;
            j = jm;
            if(x === i && y === j) {
                return true;
            }
        }
    }
    let [i, j] = find();
    let pd = data[i][j];
    let c = 0;
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
        data[im][jm] = 'o';
        // console.clear();
        // process.stdout.write('\x1Bc')
        // console.log('\n\n\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
        // console.log(data.map(v => v.join('')).join('\n'));
        const val = returnBack(i, j, pd);
        if(val) {
            c++;
        }
        data[im][jm] = '.';
        i = im;
        j = jm;
    }

    // console.log(data.map(v => v.join('')).join('\n'));
    console.log(c)

    // let c = 0;
    // for (i = 0; i < n; i++) {
    //     for (j = 0; j < m; j++) {
    //         if (data[i][j] === 'x') {
    //             c++;
    //         }
    //     }
    // }
    // console.log(c)

}
code();