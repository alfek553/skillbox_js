let allUsers=[
    {name: 'Валя', age: 11},
    { name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 34}
   ]
   function getOlderUserArray(pbuffer)
   {
    let compare=0;
    let num='0';
    let numBuf= [];
    for( let i in pbuffer)
    {
       let box=pbuffer[i].age;
       if (box>compare)
       {
        compare=box;
        num=i;
       }
       else if (box ===compare)
       {
        // numBuf
        // num=i;
       }
    }
    return pbuffer[num].name;
   }
   console.log(getOlderUserArray(allUsers));
   