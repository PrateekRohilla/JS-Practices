const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const inp = document.querySelector("input");


btn.addEventListener("click", () => {
    console.log(inp.value);
    let task = document.createElement("li");
    let taskItem = document.createTextNode(inp.value);
    task.appendChild(taskItem);
    ul.appendChild(task);
    inp.value = "";
});

