//events in js
//  mouse events, keyboard evenrs, form events, print events
let btn1= document.querySelector("#btn1");
  
btn1.onclick = ()  => {
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);
};

let div=document.querySelector("div");

div.onmouseover = () =>{
    console.log("you are inside div");
};

