//var name = "John";
//var name2 = "Janne";
//var number = 20;
//var check = true;
//var check2 = false;
//
////함수
//function dispaly(){
//    console.log("안녕하세요");
//}
//
//var displayCon2 = function(){
//    console.log("안녕하세요2...");
//}
//
////배열
//var arr = ["John", "Jane", "mark", "Tom"];
//var arr2 = new Array("John1", "Jane2", "mark2", "Tom2");
//var arr3 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
//var arr4 = ["John", 11, true, arr2, displayCon2];
//
//document.write(arr);
//
//var tag = "<h1>안녕하세요</h1>";
//document.write(tag);
//
//var number2 = 10;
//console.log(number2);
//
//number2 = number2 + 1;
//console.log(number2);
//
//number2++;
//console.log(number2);
//
//number2 += 1;
//console.log(number2);
//
//number += 3;
//console.log(number2);
//
//for(var i=0; i<10; i++){
//    console.log(i);
//}
//
//for(var i=0; i<10; i++){
//    if(i % 2){
//        console.log("짝수 : " + i);
//    }
//}
//
//for(var i=0; i<10; i+=2){
//    console.log("짝수2 : " + i);
//}
//
//var str = "";
//if(str){
//    console.log("str true");
//}else{
//    console.log("str false");
//}

/////////////////////////////////////////////////////////////////////////////////////////

//var i = 0;
//
//while(true){
//    if(i >= 10){
//        console.log("안녕하세요. i=" + i );
//        break;
//    }
//    console.log("i = " + i);
//
//    i++;
//}
//
//i = 0;
//
//while(i <= 10){
//    console.log("안녕하세요. i=" + i );
//
//    i++;
//}

/////////////////////////////////////////////////////////////////////////////////////////
//
//var col = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var col1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//var col2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
//var col3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
//var col4 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
//var col5 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
//var col6 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
//var col7 = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
//var col8 = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
//var col9 = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
//
//var row = [col, col1, col2, col3, col4, col5, col6, col7, col8, col9];

//console.log(col[3]);
//console.log(col.length);
//
//for(var i=0; i<col7.length; i++){
//    console.log(col7[i]);
//}
//
//col.push(11);
//
//var col10 = [];
//
//for(var i=100; i<=120; i++){
//    col10.push(i);
//}
//
//console.log(col10);

//for(var i=0; i<10; i++){
//    for(var j=0; j<10; j++){
//        console.log(row[i][j]);
//    }
//}
//
//// 1~100까지 입력하고, 출력하는 2차원 배열
//var num_arr = [];
//var num = [];
//
//for(var i=0; i<=9; i++){
//    num = [];
//    for(var j=1; j<=10; j++){
//        num.push((i*10) + j);
//    }
//    num_arr.push(num);
//}
//
//for(var i=0; i<10; i++){
//    for(var j=0; j<10; j++){
//        document.write(num_arr[i][j] + ", ");
//    }
//    document.write("<br/>");
//}

/////////////////////////////////////////////////////////////////////////////////////////

//var name = "John";
//var birth = 20;
//
//function getAge(birthArg){
//    var num = 2017 - birthArg;
//
//    return num;
//}
//
//var person = {
//    name : "John",
//    birth : 2000,
//    getAge : function (){
//        var num = 2017 - this.birth;
//
//        return num;
//    }
//}
//
//console.log(person.getAge());
//person.birth = 2010;
//console.log(person.getAge());
//person.name = "Mike";
//console.log(person);

//var person2 = new Object();
//person2.name = "Jane";
//person2.birth = 2001;
//person2.getAge = function (birthArg){
//    var num = 2017 - birthArg;
//
//    return num;
//}
//
//console.log(person2.name);
//console.log(person2["name"]);

//var building = {
//    nation : "korea",
//    city : "seoul",
//    birth : 1980,
//    period : function(){
//        return 2017 - this.birth;
//    },
//    maker : ["John", "Jane", "Mike"]
//}
//
//var building = new Object();
//building.nation = "China";
//building.city = "Beijing";
//building.birth = 200;
//building.period = function(){
//    return 2017 - this.birth;
//}
//building.maker[0] = "John2";
//building.maker[1] = "Jane2";
//
//console.log(building);

/////////////////////////////////////////////////////////////////////////////////////////

// 몇초후 실행
//setTimeout(function(){
//    //alert("2초후 표시됩니다.");
//    window.open("http://naver.com");
//}, 2000);

// 매시간마다 실행
//var i = 0;
//
//setInterval(function(){
////    console.log("[" + i + "] 번째");
////    i++;
//    console.log(Math.round(Math.random()*10)+1);
//}, 2000);

// 날짜
//var date = new Date();
//console.log(date.getYear() + 1900);
//console.log(date.getFullYear() + "년");
//console.log((date.getMonth()+1) + "월");
//console.log(date.getDate() + "일");
//console.log(date.getDay() + "요일");
//console.log(date.getHours() + "시");
//console.log(date.getMinutes() + "분");
//console.log(date.getMilliseconds() + "초");