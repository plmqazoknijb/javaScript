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

// String 이어 붙이기
var prefix = "program";
var suffix = "mer";
var word = prefix.concat(suffix);
var word_length = word.length;
console.log("word : ", word);
console.log("word_length : ", word_length);

// String 다루기
function solution4(str){
    return str[0]
}
function solution5(str){
    return str.substr(0,2);
}

// 배열 만들기
var arr = [1,2,3,4,5];
console.log(arr);

function solution6(arr){
    return arr[0]
}
var result = solution6([1,2,3,4,5])
console.log(result)

// 배열 사용하기
var arr = [1,2,3]
arr.unshift("begin")
arr.push("end")
console.log(arr);

// 주석
//Hello World를 출력하는 코드입니다.
console.log("Hello World");

// if문
var age = 25;
if(age < 20){
    console.log("20세 미만입니다.");
}
else{
    console.log("20세 이상입니다.");	
}

function solution7(age){
    //age가 20이상, 30미만이면 20대
    if(20 <= age && age < 30){
        return true;
    }
    else{
        return false;
    }
}

function solution8( year ){
    if (year % 4 == 0){
        return true
    }else{
        return false
    }
}

// switch문
function solution( month ){
    switch(month){
        case 2:
            return "28"
        case 4:
        case 6:
        case 9:
        case 11:
            return "30"
        default:
            return "31"
    }
}