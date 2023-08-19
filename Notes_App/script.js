const add = document.querySelector(".addnote");
const note = document.querySelector(".note");
const userInput = document.querySelector(".textmsg");
const submit = document.querySelector(".submit");
const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const posted = document.querySelector(".posted");

const dated = document.querySelector(".day");
const current = document.querySelector(".current");


let date = new Date();
let month = date.toLocaleString("default", {month: "long"});
let day = date.getDate();
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();
let am_pm = "";

if(hour >= 12){
    if(hour >12) hour-=12;
    am_pm = "PM";
}else {
    hour == 0;
    hr = 12;
    am_pm = "AM";
}

hour = hour < 10? "0" + hour : hour;
min = min < 10? "0" + min : min;

dated.innerHTML = `${month} ${day}, ${year}`;
current.innerHTML = `${hour}:${min} ${am_pm}`;

submit.addEventListener("click", () =>{
    let message = document.createElement("p");
    if((userInput.value == "")){
        return false;
    }else{
        note.classList.remove("hide");
        message.innerHTML = `<div class="posted">
        </p>${userInput.value} <a href="#"  class="fa-solid fa-heart"></a><i class="fa-solid fa-delete-left"></i>
        <p>${month} ${day}, ${year}
        </div>`;
    }
    note.append(message);
    userInput.value = "";
    modal.classList.add("hide");
    container.classList.remove("hide");
});

add.addEventListener("click", () => {
    modal.classList.remove("hide");
    container.classList.add("hide");
});