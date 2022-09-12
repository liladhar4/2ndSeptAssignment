(function(){

    function binarySerch(arr, n, x){

        let i=0, j= n-1;
        while(i<n && j>=0){
            if(arr[i][j]==x){
                return true;
            }
            if(arr[i][j]>x){
                j--;
            }else{
                i++;
            }
        }
        return false;
    }

    let matrix2d = [[10, 20, 30, 40 ],[ 15, 25, 35, 45 ],[ 27, 29, 37, 48 ],[ 32, 33, 39, 50 ]];
    let n = matrix2d.length;
    let x = 33;
    console.log(`in 2d matrix ${x} is present?==>  ` +binarySerch(matrix2d, n ,x));


})();