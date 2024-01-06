const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const inp = document.querySelector("input");


btn.addEventListener("click", () => {
    let task = document.createElement("li");
    task.innerText = inp.value;
    ul.appendChild(task);
    inp.value = "";
});

