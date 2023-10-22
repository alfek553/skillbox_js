let str='тевирп';
let strReverse;
let buf=[];
len=str.length-1;
for(let i=len;i>=0;i--)
{
        buf[(len-i)]=str[i]
        console.log(buf[len-i]);
}
for(let i=0;i<str.length;i++)
{
        if(strReverse===undefined)
        {
                strReverse =(buf[i])
        }else
        {
                strReverse+=String(buf[i]);
        }
    
}
console.log(strReverse);