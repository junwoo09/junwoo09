/*
화살표 함수 연습
2021/10/8
*/

let average = (a ,b) => {return (a+b)/2;}
let max = (a, b) => {
    if (a>b)
    return a;
    else
    return b;
}
let maxOfThree =(a, b, c) => {
   return max(max(a,b),c)
/*if (a> b)
return max(a, c);
else
return max(b, c);
*/

}
console.log(maxOfThree(10, 20, 30))