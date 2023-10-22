//задание 1

let password = prompt('Создайте пароль', '');
if (password.includes('-') && password.includes('_') && password.length >= 4) {
  console.log('Пароль надежный');
} else {
  console.log('Пароль недостаточно надёжный');
}

//задание 2
let name = 'ВаСя';
let surname = 'пуПкиН';

let nameFirst = name.substr(0, 1);
let nameScr = name.substr(1);
let nameNorm = nameFirst.toUpperCase() + nameScr.toLowerCase();

let surnameFirst = surname.substr(0, 1);
let surnameScr = surname.substr(1);
let surnameNorm = surnameFirst.toUpperCase() + surnameScr.toLowerCase();

name = nameNorm == name ? console.log('Имя осталось без изменений'): console.log('Имя было преобразовано');
surname = surnameNorm == surname ? console.log('Фамилия осталась без изменений') : console.log('Фамилия была преобразована');

console.log(name + surname);