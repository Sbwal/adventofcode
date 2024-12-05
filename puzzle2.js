const { readFile } = require("./helper")

const puzzleInputFile = 'puzzle2.input.txt';

const valid = (a) => {
    let f = a[1] > a[0];
    for(let i = 1; i < a.length; i++) {
        let d = a[i] - a[i - 1];
        let c = 0;
        if(f) {
            if(d < 1 || d > 3){
                return false;
            }
            
        }
        else {
            if(d > -1 || d < -3){
                return false;
            }
        }
    }   
    return true;
}

const validDamp = (a) => {
    if(valid(a)) return true;
    console.log(a)
    for(let i = 0; i < a.length; i++) {
        const ar = [...a.slice(0, i), ...a.slice(i + 1, a.length)];
        console.log(ar)
        if(valid(ar)) {
            return ar;
        } 
    }
}

const code = async () => {
    let data = await readFile(puzzleInputFile);
    data = data.split('\r\n').map(v => v.split(' ').map(v => Number(v)));
    // console.log(data)
    console.log((data.reduce((p, v) => (validDamp(v) ? 1 : 0) + p, 0)));
}
code();