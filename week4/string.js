// 문자열 선언
var greeting = "Hello!";
var farewell = 'Bye!';
var myname = '김테킷';

var sentence = greeting + " " + myname;
var sentence = greeting + '\n' + myname;
console.log(sentence)

console.log(farewell + 2); //숫자열 문자열 붙여도 문자열로 변환해줌

// 이스케이프 시퀀스
var sentence = greeting + '\'' + myname;
var sentence = greeting + "\"" + myname;
var sentence = greeting + '\\' + myname;
console.log(sentence);


// 템플릿 리터럴
// 멀티라인 텍스트 작업 가능
// 이스케이프 시퀀스 필요 x
// 1.백틱
var a = `안녕하세요!`;
var a = `안녕하세요!
여러분:)`
console.log(a);

var price = 1000;
var b = '이 물건은 '+ price + '원 입니다.';
console.log(b);

// 2. 표현식 ${} 변수, 연산 삽입
var c = `이 물건은 ${price}원 입니다.`;
console.log(c);

var d = `이 물건은 ${200 + 450}원 입니다.`;
console.log(d);

// 문자열 함수
var abc = "I am Iron man";

// index0f
// 문자열의 특정 깂이 시작되는 위치
console.log(abc.indexOf("man"));
console.log(abc.indexOf("I"));

// slice
// 끝지점 문자 포함 x
console.log(abc.slice(0,4));

// toUpperCase(), toLowerCase()
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// startWith(), endsWith()
var efg = 'This is my car.';
console.log(efg.startsWith('Th'));
console.log(efg.startsWith('th'));

console.log(efg.endsWith('car.'));

// includes()
console.log(efg.includes('is'));
