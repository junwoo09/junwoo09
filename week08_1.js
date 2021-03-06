/*
    카페운영 객체 모델링
    2021. 10 .20
*/
//==============================================================
//class 음료 설계
//==============================================================
class 메뉴 {
    constructor (메뉴명, 가격) {
        this.메뉴명 = 메뉴명;
        this.가격 = 가격;
        this.판매량 = 0;
    }
    //========================================================
    //메뉴의 현재 판매 상황을 출력
    메뉴현황(보기옵션=`현황`) {
        if(보기옵션 == "현황")
            console.log(`[${this.메뉴명}]:${this.가격}원, 판매량: ${this.판매량}개 판매금액: ${this.가격 * this.판매량}원`);
        else
            console.log(`[${this.메뉴명}]: ${this.가격}원`);
    }
}


//==============================================================
//class 가게 설계
class 가게 {
    constructor(가게명, 위치) {
        this.가게명 = 가게명;
        this.위치 = 위치;
        this.판매메뉴 = []; //가게 생성시에는 메뉴가 없으므로 빈 배열
        console.log(`[${this.가게명}] 카페가 [${this.위치}]에 새로 오픈했습니다.`);
        console.log(`판매할 메뉴를 등록해주세요.`);
    }
//============================================
//새메뉴를 가게의 판매메뉴 속성에 추가한다.

   메뉴등록(새메뉴) {
    this.판매메뉴.push(새메뉴);
    console.log(`새 메뉴 [${새메뉴.메뉴명}]가 추가되어 현재 메뉴는 총 [${this.판매메뉴.length}]개 입니다`);
    
    }
//================================
메뉴목록() {
    console.log(`====[메 뉴]==(${this.가게명})===`)
    for(let 메뉴 of this.판매메뉴)
        메뉴.메뉴현황(`메뉴보기`);
        console.log(`======================`)
    }

//=====================================================

판매현황(){
    console.log(`=============[판매 현황]=======(${this.가게명})===================`)
    for(let 메뉴 of this.판매메뉴)
        메뉴.메뉴현황();
        console.log(`========================================`)

}
//===================================================
//-------------------------------------------------------------------------
//고객이 주문한 메뉴(string)과 일치하는 메뉴를 판매메뉴에서 찾아 반환한다.
메뉴찾기(메뉴명) {
    for(let 메뉴 of this.판매메뉴)
        if(메뉴명 == 메뉴.메뉴명)
        return 메뉴;
    //여기까지 오면 메뉴찾기 실패한것이므로
    return null; //null값을 리턴한다
}
//-------------------------------------------------
//메뉴(string)와 수량(number)을 받아서 판매 처리를 한다.
// 처리할 내용: 해당 메뉴를 찾아서 속성 판매량을 수량만큼 더해준다.
    판매(메뉴, 수량) {
        let 요구한메뉴 = this.메뉴찾기(메뉴);
        if(요구한메뉴) { //메뉴를 찾았으므로 판매처리를 한다.
            요구한메뉴.판매량 += 수량;
        } else {
            console.log(`주문하신 메뉴 [${메뉴}]가 없습니다.`);
        }
    }
}
//=======================================================
let cafe = new 가게(`컴퓨터 정보과`, `미래관 6층 605호`);

cafe.메뉴등록(new 메뉴(`아메리카노`, 2000));
cafe.메뉴등록(new 메뉴(`카페라떼`, 2500));
cafe.메뉴등록(new 메뉴(`바닐라라떼`, 3000));

cafe.판매(`아메리카노`, 10);
cafe.판매(`카페라떼`, 5);
cafe.판매(`바닐라라떼`);

cafe.판매현황();