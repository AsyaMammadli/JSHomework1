

// 1
let helloWorld = "salam dunya";
console.log(helloWorld);

// 2
let someNumber = 5;
console.log(someNumber);

// 3
let a = Number(prompt("enter some number"))*2;
console.log(a);

// 4
let b = Number(prompt("enter number 1"));
let c = Number(prompt("enter number 2"));
console.log(b * c);

// 5
let name = prompt("enter ur name");
let surname = prompt("enter ur surname");
let age = prompt("enter ur age");

console.log(`Mənim adım ${name}, soyadım ${surname}, yaşım isə ${age}-dir`);


// 6 
// İstifadəçidən 2 rəqəm və hesablama simvolu alın.Əgər hesablama simvolu * olarsa vurma, .olarsa bölmə, - olarsa çıxma və + olarsa toplama əməliyyatı yerinə yetirilsin.Tapşırığı həm if..else həm də switch..case ilə yerinə yetirin.

let num1 = prompt("enter num1");
let num2 = prompt("enter num2");
let symbol = prompt("enter symbol");
let result = 0;

if (symbol=='*') {
     result =  num1 * num2 ;
}
else if (symbol=='.') {
     result =  num1 / num2 ;
}
else if (symbol=='-') {
     result =  num1 - num2 ;
}
else if (symbol=='+') {
     result =  num1 + num2 ;
} else {
    console.log(`symbol ${symbol} is not allowed`);
}
console.log(result);


switch (symbol) {
        case "*":
        result = num1*num2;
        console.log(result);  
        break;
    
        case ".":
        result = num1/num2;
        console.log(result);  
        break;
    
        case  "+":
        result = num1+num2;
        console.log(result);  
        break;
    
        case  "-":
        result = num1-num2;
        console.log(result);
        break;      
}

// 7 
// Ədədin kubunu göstərən proqram yazın.

let a3 = prompt("ədədi daxil et")
let cube = a*a*a;

let cube2 = Math.pow (a, 3)

console.log(cube);


// 8 Düzbucaqlı fiqurumuz var. İstifadəçidən düzbucaqlının eni və uzunluğunu alaraq onun perimetr və sahəsini hesablayan proqram yazın.

let width = Number(prompt("düzbucaqlının eni"));
let length = Number(prompt("düzbucaqlının uzunlugu"));

let perimetr = (width + length)*2;
console.log(perimetr);

let area = width*length;
console.log(area);


// 9.   Üçbucağın 2 bucağının qiymətini istifadəçidən alın. İstifadəçinin yazdığı dəyər üçbucağın bucaqları cəmindən böyük olarsa ozaman istifadəçidən yenidən dəyər daxil etməsini tələb edin. Əgər daxil edilən hər iki dəyər uyğundursa üçbucağın 3-cü bucağının ölçüsünü hesablayın. Misal: İstifadəçi 50 və 75 daxil edərsə 3-cü tərəf 55-ə bərabər olacaq.

let angle1 = Number(prompt("enter angle 1"));

while (angle1>180){
    angle1 = Number(prompt("yenidən dəyər daxil et"));
}
console.log(angle1);

let angle2 = Number(prompt("enter angle 2"));

while (angle2>180){
    angle2 = Number(prompt("yenidən dəyər daxil et"));
}
console.log(angle2);

let angle3 = 180 - (angle1 + angle2);

alert(angle3);

// 10 
// "4,3,5,2,6,8,1" rəqəmindən ibarət sətrimiz var.İstifadəçidən hər hansı bir rəqəm yazmasını tələb edərək həmin rəqəmin sətirdə olub olmaması yoxlayın.Əgər rəqəm ədəd varsa “xx rəqəmi massivdə var” və ya “xx rəqəmi massivdə yoxdur” şəklində ekrana yazı çıxarın.

//11
// (8x+45):25-9 sadə düsturuna uyğun funksiya düzəldin. Funksiya x-i qəbul edərək hesablama aparsın.
let someNumber11 = Number(prompt("enter some number"));
let c11 = calculate(b);
console.log(c11);

function calculate(x) {
     let result = (8 * x + 45) / 25 - 9;
     return result;
}

//12
// ədədin faizini və faizinə görə ədədi tapan funksiya düzəldin.

let n = Number(prompt("enter number"));
let p = Number(prompt("enter percent"));

let d = findPercent(n, p);
console.log(d);

let e = findNumberByPercent(n, p)
console.log(e);

function findPercent (x,y) {
     let result = (x * y) / 100;
     return result;
}

function findNumberByPercent (x,y) {
     let result = (x * 100) / y;
     return result;
}












