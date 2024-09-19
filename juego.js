var pregunta1 = document.getElementById("pg1");
var pregunta2 = document.getElementById("pg2");
var pregunta3 = document.getElementById("pg3");
var pregunta4 = document.getElementById("pg4");
var pregunta5 = document.getElementById("pg5");
var p1_1 = document.getElementById("p1_1");
var p1_2 = document.getElementById("p1_2");
var p2_1 = document.getElementById("p2_1");
var p2_2 = document.getElementById("p2_2");
var p3_1 = document.getElementById("p3_1");
var p3_2 = document.getElementById("p3_2");
var p4_1 = document.getElementById("p4_1");
var p4_2 = document.getElementById("p4_2");
var p5_1 = document.getElementById("p5_1");
var p5_2 = document.getElementById("p5_2");

function p1_op1(){
    pregunta1.style.display ="none";
    p1_1.style.display ="block";
}
function p1_op2(){
    pregunta1.style.display ="none";
    p1_2.style.display ="block";
}

function preg2(){
    p1_1.style.display = "none";
    p1_2.style.display = "none";
    pregunta2.style.display ="block";
}

function p2_op1(){
    pregunta2.style.display ="none";
    p2_1.style.display ="block";
}
function p2_op2(){
    pregunta2.style.display ="none";
    p2_2.style.display ="block";
}

function preg3(){
    p2_1.style.display = "none";
    p2_2.style.display = "none";
    pregunta3.style.display ="block";
}

function p3_op1(){
    pregunta3.style.display ="none";
    p3_1.style.display ="block";
}
function p3_op2(){
    pregunta3.style.display ="none";
    p3_2.style.display ="block";
}

function preg4(){
    p3_1.style.display = "none";
    p3_2.style.display = "none";
    pregunta4.style.display ="block";
}

function p4_op1(){
    pregunta4.style.display ="none";
    p4_1.style.display ="block";
}
function p4_op2(){
    pregunta4.style.display ="none";
    p4_2.style.display ="block";
}

function preg5(){
    p4_1.style.display = "none";
    p4_2.style.display = "none";
    pregunta5.style.display ="block";
}

function p5_op1(){
    pregunta5.style.display ="none";
    p5_1.style.display ="block";
}
function p5_op2(){
    pregunta5.style.display ="none";
    p5_2.style.display ="block";
}
function inicio(){
    p5_1.style.display = "none";
    p5_2.style.display = "none";
    window.location.href ="menu.html";
}