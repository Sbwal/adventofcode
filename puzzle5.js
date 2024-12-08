const { readFile } = require("./helper")

const puzzleInputFile = 'puzzle5.txt';

const code = async () => {
    let data = await readFile(puzzleInputFile);
    data = data.split('\r\n').map(v => v.split('|'));
    // console.log(data)
    const al = {};
    let testcases = 0;
    for(let i = 0; i < data.length; i++) {
        if(data[i].length === 1) {
            testcases = i + 1;
            break;
        }
        const [a, b] = data[i];
        if(!(a in al)) {
            al[a] = new Set();
        }
        al[a].add(b);
    }
    // console.log(al)
    // let ar = [];
    // const visited = new Set();
    // const dfs = (v) => {
    //     if(visited.has(v)) {
    //         return;
    //     }
    //     visited.add(v);
    //     if(v in al) {
    //         for(let i = 0; i < al[v].length; i++) {
    //             dfs(al[v][i]);
    //         }
    //     }
    //     ar.push(v);
    // }
    // for(let v in al) {
    //     dfs(v);
    // }
    // ar = ar.reverse();
    // ar.sort();
    // console.log(ar)
    // const map = {};
    // for(let i = 0; i < ar.length; i++) {
    //     map[ar[i]] = i;
    // }
    // console.log(map)
    // const verify = (arr) => {
    //     for(let i = 1; i < arr.length; i++) {
    //         let idx0 = map[arr[i - 1]];
    //         let idx1 = map[arr[i]];
    //         if(idx0 > idx1) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    // let sum = 0;
    // for(let i = testcases; i < data.length; i++) {
    //     const test = data[i][0].split(',');
    //     // console.log(test)
    //     if(verify(test)) {
    //         sum += Number(test[test.length / 2 | 0])
    //     }
    // }
    const verify = (arr) => {
        for(let i = 1; i < arr.length; i++) {
            let a = arr[i - 1], b = arr[i];
            if(!al[a].has(b)) {
                return false;
            }
        }
        return true;
    }
    let sum = 0;
    for(let i = testcases; i < data.length; i++) {
        const test = data[i][0].split(',');
        // console.log(test)
        if(verify(test)) {
            continue;
        }
        test.sort((a, b) => {
            if(!al[a].has(b)) {
                return 1;
            }
            return -1;
        })
        sum += Number(test[test.length / 2 | 0])
    }
    console.log(sum)
}
code();