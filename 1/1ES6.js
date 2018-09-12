//ES6
"use strict";
function anketa(){
  let lastName=prompt("Ваша фамилия?",""),
      firstName=prompt("Ваше имя?",""),
      secondName=prompt("Ваше отчество?",""),
      years=prompt("Сколько вам лет?",18),
      gender = confirm("Ваш пол - мужской?"),
      pensioner;
    
  return `Ваше ФИО: ${lastName} ${firstName} ${secondName}
Ваш возраст в годах: ${years}
Ваш возраст в днях: ${(+years*365)}
Через 5 лет вам будет: ${(+years+5)}
Ваш пол: ${gender=(gender==true)?'мужской':'женский'}
Вы на пенсии: ${gender=(gender==true)?(pensioner=(years>=63)?pensioner='да':pensioner='нет'):(pensioner=(years>=58)?pensioner='да':pensioner='нет')}`;
};
console.log(anketa());