// 변수 선언 및 초기화
var a = 2;

//변수의 활용
var message = "출력될 문자열입니다.";
console.log(message);

// 기본 자료형
var n = 1;
console.log(typeof(n));

var b = true;
console.log(typeof(b));

var s = "문자열입니다.";
console.log(typeof(s));

// Number
var str="3.141592는 Pi의 근사값입니다."

var pi_int = parseInt(str);
console.log("pi_int의 값은", pi_int, "입니다." );

var pi_float = parseFloat(str);
console.log("pi_float의 값은", pi_float, "입니다." );

// String
console.log("쌍따옴표\"를 문자열 안에 쓸 수 있습니다.");
console.log("문자열입니다.\n그리고 줄을 바꿔서 다음 문자열입니다.");

// Object
var obj = {name:"송은원", age:"19"};

var book = {"title":"어린왕자"};
console.log("제목:", book.title);

// undefined와 null
var a;  //undefined
var b = null;   //null
console.log("a의 자료형 :", typeof(a), "입니다.");
console.log("b의 자료형 :", typeof(b), "이고, 값은", b, "입니다.");

// 산술 연산자
var a = 10;
var b = 7;
var c = a+b;    //a와 b의 합
var d = a-b;    //a와 b의 차
var e = a*b;    //a와 b의 곱
console.log("a와 b의 합 :", c);
console.log("a와 b의 차 :", d);
console.log("a와 b의 곱 :", e);

// 함수
function solution1(a,b){
    return a+b
}

// 관계연산자
function solution2(a,b){
    return a > b
}
function solution3(a,b){
    return a && b
}