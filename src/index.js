
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix && matrix.length > 0){
    let arr = [];
    for(let n = 0; n < matrix.length; n++){
        if(n % 2 == 0){
          for(let m = 0; m < matrix[n].length; m++){
              arr.push(matrix[n][m]);
          }
        }else{
          for(let m = matrix[n].length-1; m >= 0; m--){
              arr.push(matrix[n][m]);
        }
    }
  }
  return arr;
  }
  else{
      return [];
  }
}
