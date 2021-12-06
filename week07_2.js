/*
    객체 정의 연습
    2021. 10. 19
*/

let st = {
    name: '김준우',
    age: 24,
    code:201740600,
    dept:'컴퓨터정보과',
    "태어난 날":"1998년 9월 14일",
    intro: function() {
        console.log(`저의 생일은 ${this["태어난 날"]}입니다.`);
    },
    생일소개: function(){
        console.log(`제 생일은 ${this["태어난 날"]}입니다.`);
    }
}

st.intro();
st["생일소개"]();