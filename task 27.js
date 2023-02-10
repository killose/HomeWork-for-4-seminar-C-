// Задача 27: Напишите программу, которая принимает на вход число и выдаёт сумму цифр в числе.
// 452 -> 11
// 82 -> 10
// 9012 -> 12

function calc(num){
    let isStrNum = String(num);
    let summ = 0;
    for(let i = 0; i < isStrNum.length; i++){
      summ += Number(isStrNum[i]);
    }
    return Number(summ)
  }


  console.log(calc(452));
  console.log(calc(82));
  console.log(calc(9012));