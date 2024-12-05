const { readFile } = require("./helper")

const puzzleInputFile = 'puzzle1.input.txt';

const code = async () => {
    let data = await readFile(puzzleInputFile);
    data = data.split('\r\n').map(v => v.split('   ').map(v => Number(v)));
    const a = data.map(v => v[0]);
    const b = data.map(v => v[1]);
    // a.sort();
    // b.sort();
    // let v = 0;
    // for(let i = 0; i < a.length; i++) {
    //     v += Math.abs(a[i] - b[i]);
    // }
    const ma = {};
    const mb = {};
    for(let i = 0; i < a.length; i++) {
        if(!(a[i] in ma)) {
            ma[a[i]] = 0;
        }
        ma[a[i]]++;
        if(!(b[i] in mb)) {
            mb[b[i]] = 0;
        }
        mb[b[i]]++;
    }
    let v = 0;
    for(let k in ma) {
        console.log(k, ma[k], (mb[k] ?? 0))
        v += Number(k) * ma[k] * (mb[k] ?? 0);
    }
    console.log(v)
}
code();