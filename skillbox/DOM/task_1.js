
function createStudentCard(name,age)
{
    let div=document.createElement("div");
    let h2=document.createElement("h2");
    let span=document.createElement("span");
    document.body.append(div);
    div.prepend(h2);//отправляет в начало
    h2.textContent=name;
    div.append(span);
    span.textContent="Возраст: "+age;
}
createStudentCard("Игорь", 17);
// {/* <div>
// <h2>Игорь</h2>
// <span>Возраст: 17 лет</span>
// </div> */}