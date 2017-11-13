/////////////////////////////////////////////////////////////////////////////
//var name = "john";
//console.log(name);
//console.log("name type : " + typeof(name));
//
//var last_name = "Smith";
//console.log(last_name);
//console.log("last_name type : " + typeof(last_name));
//
//var age = 26;
//console.log(age);
//console.log("age type : " + typeof(age));
//
//last_name = 20;
//console.log(last_name);
//console.log("last_name type : " + typeof(last_name));
//
//var fullAge = true;
//console.log(fullAge);
//console.log("fullAge type : " + typeof(fullAge));
//
//var earlyAge;
//console.log(earlyAge);
//console.log("earlyAge type : " + typeof(earlyAge)); // null
//
//// var x;
//console.log("u : " + u);
//var u = 3;

/////////////////////////////////////////////////////////////////////////////
//var name = "John";
//var name2 = "Jane";
//var age = 26;
//var age2 = 10;
//
//console.log(typeof(name));
//console.log(typeof(age));
//
//console.log(name + age);
//
//var unified = name + age;
//console.log(unified);
//console.log("unified type : " + typeof(unified));
//
//var num1 = 30;
//var num2 = 20;
//var sum = String(num1) + String(num2);
//console.log("sum : " + sum);
//
//var unified2 = name + (age+age2);
//console.log(unified2);
//
//var job, isMaried;
//job = "driver";
//isMaried = false;
//
//var str = name + " is a " + age + " job " + job + " is he married? " + isMaried;
//console.log(str);
//
//var str2 = "I\'m a student";
//console.log(str2);
//
////var html = "<html><head></head><body><h1>Hello world</h1></body></html>";
//var html = "<h1>Hello world</h>"
//document.write(html);
//
//var table = '<table border=1><tr><td>번호</td><td>타이틀</td><td>비고</td></tr><tr><td>1</td><td>HTML</td><td></td></tr><tr><td>2</td><td>css</td><td></td></tr></table>'
//document.write(table);
//
//var lastName=prompt("What is the last name?");
//console.log(lastName);
//
//document.write("<html><head></head><body><h3>"+lastName+"</h3></body></html>");
//alert(lastName);

/////////////////////////////////////////////////////////////////////////////
//var name = "John";
//var age = 26;
//var isMarried = "yes";
//var isMarried2 = "yes";
//
//if(isMarried == isMarried2){
//    console.log("John is married");
//}
//
//if(isMarried2 === isMarried2){
//    console.log("Jane is married");
//}
//
//if(isMarried === "no"){
//    console.log("John is married");
//}else{
//    console.log("I don\'t know");
//}
//
//if(23 == "23"){
//    console.log("23 ==");
//}
//if(23 === "23"){
//    console.log("23 === 3개");
//}
//
//var job = "driver";
//
//job = prompt("What does john do?");
//
//switch(job){
//    case "driver":
//        console.log("job is driver");
//        break;
//    case "teacher":
//        console.log("job is driver");
//        break;
//    case "coach":
//        console.log("job is driver");
//        break;
//
//    default :
//        console.log("I don\'t know");
//}

/////////////////////////////////////////////////////////////////////////////
//함수

function calcuateage(year, birth){
    var age = year - birth;

    if(age === 27){
        return "20대";
    }else if(age === 10){
        return "10대";
    }else if(age === 7){
        return "아동";
    }

    //console.log(age);
    return age;
}

var year = 2017;
var birth = 2011;

//var ageJohn = 2017 - 1990;
var ageJohn = calcuateage(year, birth);
//var ageMike = calcuateage(year, 2000);
//var ageMary = calcuateage(year, 2010);

console.log("ageJohn: " + ageJohn);
//console.log("ageMike: " + ageMike);
//console.log("ageMary: " + ageMary);

var scope = "global scope"

function checksope(scope){
    //scope = scope;
    console.log(scope);
    scope = "local scope";
}

checksope(scope);
console.log(scope);