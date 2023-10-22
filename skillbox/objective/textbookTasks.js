/**задача 1
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
 */
let schedule = {};
let schedul={};
schedul["8:30"] = "get up";
function isEmpty(object)
{
    for (let property in object)
    {
            return true;
    }
            return false;

}
console.log( isEmpty(schedule) ); // true

console.log( isEmpty(schedul) ); // false

/**задача 2
У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/
let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      }
function isEmpty(object)
{
        let sum=0;
    for (let i in object)
    {
        // console.log(i);
            sum+=object[i];
    }
            return sum;

}
console.log( isEmpty(salaries) );

/**задача 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };
function multiplyNumeric(object)
{
        for (let key in object)
        {
                if((typeof(object[key]))==="number")
                {
                        object[key]*=2;
                }
        }
}

multiplyNumeric(menu);
console.log(menu);