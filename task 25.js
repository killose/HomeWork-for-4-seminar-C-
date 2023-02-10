// Задача 25: Напишите цикл, который принимает на вход два числа (A и B) и возводит число A в 
// натуральную степень B.
// 3, 5 -> 243 (3⁵)
// 2, 4 -> 16

function isCalcDegree(A,B){
    let result = 1;
    for(let i = 0; i < B; i++){
       result *= A;
    }
    return result
  }
  
  console.log(isCalcDegree(3,5));


// function isCalculate(A,B){
//   return A**B
// }

// console.log(isCalculate(3,5));