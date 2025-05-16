 function addtask(){
     let t=document.getElementById("t");
     let item=document.createElement("li");
     item.textContent = t.Value;
     let i= document.getElementById("tasks");
     i.appendChild(item);
}

