/*
   익명함수 연습
   2021.10, 8
   */

   let daysOfMonth = function (month) {
       let days = 0;
       if(month<1 || month>12)
       return `입력값 ${month}는 잘못된 값입니다`;
       switch (month){
        case 2:
            days = 28;
            break;

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
         default:
            days = 30;
            break;
       }
      return `${month}월은 ${days}일까지 입니다`;
    

   }