/*
    생성자 함수 정의 연습
    2021. 10. 19
    */
//(객체)생성자 함수 정의 => java의 class역할
    function Product(name,price) {
        //생성자 함수 호출 직후에 빈 객체 {}가 생성되고 this와 연결한다.
        this.name = name;
        this.price = price;
        this.intro = function() {
            console.log(`제품 [${this.name}]의 가격은 ${this.price}원 입니다.`)
        }
    }
    //생성자 함수를 이용하여 객체를 생성
    let p1 = new Product(`볼펜`, 100);
    p1.brand = `monami`;

    let p2 = new Product(`샤프`, 500);

    p1.intro();
    p2.intro();