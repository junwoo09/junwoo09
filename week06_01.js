/*
  함수 정의 연습
  2021. 10. 06
  */

  //함수 정의(선언)
  function doubleX(n) {
      return 2*n;
  }
  function square(n) {
    return n*n;
  }
  function average(a,b) {
    return (a+b)/2;
  }
  function sayHello(name){
    console.log(`안녕하세요 ${name}씨`)
    console.log ("안녕하세요" + name + "씨");
  }

//정의된 함수 호출
sayHello(" 김준우");