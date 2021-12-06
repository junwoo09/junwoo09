/*
    클래스(class) 정의 연습
    2021. 10. 19
*/
class Product {
    //constructor()는 속성만 정의한다
    constructor(name, price){
        this.name = name;
        this.price = price;

    }
    //이후에 필요한 메소르들 추가
    intro() {
        console.log(`제품 [${this.name}]의 가격은 ${this.price}원 입니다.`);
    }
    //getter method 정의
    getName(){
        return "제품명은" + this.name + "입니다";
    }
    getPrice(){
        return this.price;
    }
}
//위에서 정의한 class로 객체 생성하기
let p1 = new Product(`볼펜`, 100);
let p2 = new Product(`샤프`, 200);

p1.intro();
p2.intro();

console.log(getName);