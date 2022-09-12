function get(n, m, v) {
    
    let s = new Set();

   
    let max_ans = Number.MAX_VALUE;
    let cnt = -1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            s.add(v[i][j]);
        }
        let size = s.size;
        if (cnt < size) {
            size = cnt;
            max_ans = Math.min(max_ans, i);
        }
        s.clear();
    }
    return max_ans;
}




let arr
    = [[1, 2, 3, 4, 5],
    [1, 2, 2, 4, 7],
    [1, 3, 1, 3, 1]];
let n = arr.length;
let m = arr[0].length;
console.log(get(n, m, arr));