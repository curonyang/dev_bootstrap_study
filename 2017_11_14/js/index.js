
//function calculateAge(age){
//    return 2017 - age;
//}
//
//var ageJohn = calculateAge(1990);
//console.log(ageJohn);
///////////////////////////////////////////////////////////////////////////////////////////////
//function checkRetirement(name, age, retirementyear, endage){
//    var end = endage - age;
//
//    if(age >= endage){
//        document.write(name + "는 이미 은퇴했습니다.");
//        end = 0;
//    }else{
//        document.write(name + "는 은퇴까지 " + end + "년 남았습니다.");
//    }
//
//    // 브라우저 출력 : 은퇴의 기준년도는 2017년 입니다.
//    document.write("<br>은퇴의 기준년도는 " + retirementyear + "년 입니다.");
//
//    return end;
//}
//
//function yearsUntilRetirement(name, year, retirementyear, endage){
//    var age = retirementyear - year;
//
//    console.log("이름 : " + name);
//    console.log("나이 : " + age);
//
//    var remainYear = checkRetirement(name, age, retirementyear, endage);
//
//    return remainYear;
//}
//
//var remainYear = yearsUntilRetirement("John", 1980, 2017, 65);
//
//if(remainYear != 0){
//    document.write("<br><br>" + "은퇴는 " + remainYear + "년 남았습니다.");
//}

///////////////////////////////////////////////////////////////////////////////////////////////

//function sum(num, num2){
//    return num + num2;
//}
//function minus(num, num2){
//    return num - num2;
//}
//function gob(num, num2){
//    return num * num2;
//}
//
//var num1 = 2;
//var num2 = 5;
//var operator = "+" ;
//
//document.write("(" + num1 + " + " + num2 + ") = " + sum(num1, num2) + "<br/>");
//document.write("(" + num1 + " - " + num2 + ") = " + minus(num1, num2) + "<br/>");
//document.write("(" + num1 + " * " + num2 + ") = " + gob(num1, num2));

///////////////////////////////////////////////////////////////////////////////////////////////

//var name = "John";
//
//function third(){
//    var c = "Hey";
//    console.log("third Hey");
//}
//
//function second(){
//    var b = "Hi!";
//    third();
//    console.log("second Hi");
//}
//
//function first(){
//    var a = "Hello";
//    second();
//    console.log("first Hello");
//}
//
//first();

///////////////////////////////////////////////////////////////////////////////////////////////

function first(par){
    console.log("test");
}

var first2 = function (par){
    console.log("test");
}

var names = ["John", "Jane", "Mark"];
var numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var testArr = [1, "John", true, names];

document.write(names);
document.write("<br>");
document.write(testArr);

document.write(names[1] + "<br/>");
names.push("Log");
document.write(names + "<br/>");
names.push("Log2");
document.write(names + "<br/>");

document.write("names의 길이 : " + names.length + "<br/>");
document.write("names의 마지막 값 : " + names[names.length-1] + "<br/>");

// 배열에 데이터 유무 확인 indexOf()
console.log(names.indexOf("Jane"));
console.log(names.indexOf("Log4"));

// 초기값; 비교해서 첨/거짓; 액션
for(var i=0; i<numbers.length; i++){
    console.log((i+1) + " = " + numbers[i]);
}

for(var i=2; i<=7; i++){
    console.log((i+1) + " = " + numbers[i]);
}

for(var i=0; i<numbers.length; i++){
    if(i <= 3 || i >= 6){
        if(numbers[i] == 17){
            console.log("17입니다.");
        }else{
            console.log(i + " : " + numbers[i]);
        }
    }else{
        console.log("-------------------------------------")
    }
}

