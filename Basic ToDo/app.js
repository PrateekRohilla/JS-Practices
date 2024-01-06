const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const inp = document.querySelector("input");


btn.addEventListener("click", () => {

    let task = document.createElement("li");
    task.innerText = inp.value;
    ul.appendChild(task);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("del");
    task.appendChild(delBtn);

    inp.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});