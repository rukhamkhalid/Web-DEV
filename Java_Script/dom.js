// console.log("Hello");
// alert("HI");
// console.dir(document.body);
// let heading= document.getElementById("heading");
// console.dir(heading);

// let heading2=document.getElementsByClassName("heading2");
// console.dir(heading2);
// console.log(heading2);


// let firstel=document.querySelector("p");//1st element
// console.dir(firstel);

// let allel=document.querySelectorAll("p");//all element
// console.dir(allel);
//inner text property for change
let h1=document.querySelector("h1");
console.dir(h1.innertext);
h1.innerText =h1.innerText + " from Ruhhiii channel";//concatinate +jorny k leay


let divs= document.querySelectorAll(".box");
// console.log(divs[1]);

let idx=1;
for (div of divs){
    div.innerText= `new unique value  ${idx}`;
    idx++;
}