let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
   ]
   let user = {
    name: "John",
    age: 30,
    "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
  };
function filter(pobjects,property,meaning)
{
    let buffer=[];
    for (let i in  pobjects)
    {
    if(pobjects[i][property]===meaning)
    {
        buffer.push(pobjects[i]);
    }
    }
    return buffer;

}
let result = filter(objects, 'name', 'Иван');
console.log(result);