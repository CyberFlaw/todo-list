const makeList = document.getElementById("button");
const container = document.getElementById("container");
const input = document.getElementById("input");
const clear = document.getElementById("reset");

makeList.addEventListener("click", (event) => {
  event.preventDefault();

  if (input.value === "") {
    alert("Enter a taks");
  } else {
    const cover = document.createElement("div");
    cover.classList.add("cover");

    const list = document.createElement("li");
    list.classList.add("list");
    list.innerText = input.value;

    const check = document.createElement("button");
    check.classList.add("btn-check");
    check.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true" ></i>';

    const trash = document.createElement("button");
    trash.classList.add("btn-trash");
    trash.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

    cover.appendChild(list);
    cover.appendChild(check);
    cover.appendChild(trash);
    container.appendChild(cover);

    input.value = "";
  }
});

container.addEventListener("click", (event) => {
  const item = event.target;

  if (item.classList[0] === "btn-trash") {
    item.parentElement.remove();
  }

  if (item.classList[0] === "btn-check") {
    item.parentElement.classList.toggle("checked");
  }
});

clear.addEventListener("click", (event) => {
  container.innerHTML = "";
});

// ✨
