// Implement a click on todo item as fast as possible

const app = document.querySelector(".todo-app");
app.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("item"))
    console.log(" You clicked on item: " + e.target.innerText);
});
