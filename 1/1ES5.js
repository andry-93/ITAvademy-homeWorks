//ES5
"use strict";
function anketa(){
  var lastName=prompt("Ваша фамилия?",""),
      firstName=prompt("Ваше имя?",""),
      secondName=prompt("Ваше отчество?",""),
      years=prompt("Сколько вам лет?",18),
      gender = confirm("Ваш пол - мужской?"),
      pensioner;
  if (gender==true){
    gender="мужской";
    if (years>=63){
      pensioner="да";
    }
    else {
      pensioner="нет";
    }
  }
  else{
    gender="женский";
    if (years>=58){
      pensioner="да";
    }
    else {
      pensioner="нет";
    }
  }
    
  return "Ваше ФИО: "+lastName+" "+firstName+" "+secondName+"\nВаш возраст в годах: "+years+"\nВаш возраст в днях: "+(+years*365)+"\nЧерез 5 лет вам будет: "+(+years+5)+"\nВаш пол: "+gender+"\nВы на пенсии: "+pensioner;
};
console.log(anketa());