




const arr1 = []
function arrPush(array, min, max){
  let middle = array / 2
  for(let i = 0; i <= array ; i++){
    minimalRandom = Math.random() * min
    maximalRandom = Math.random() * max
    if(i <= middle){
      arr1.push(Math.trunc(minimalRandom));
    } else {
      arr1.push(Math.trunc(maximalRandom));
    }
  }
  return arr1
}
console.log(arrPush(8, 12, 100));