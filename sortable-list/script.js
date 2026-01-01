const list = document.getElementById("sortableList");

let items = [
  "Item One",
  "Item Two",
  "Item Three",
  "Item Four",
  "Item Five"
];

let dragIndex = null;

/* =====================
   RENDER
===================== */
function render() {
  list.innerHTML = "";

  items.forEach((text, index) => {
    const li = document.createElement("li");
    li.className = "sortable-item";
    li.draggable = true;
    li.dataset.index = index;
    li.textContent = text;
    list.appendChild(li);
  });
}

render();

/* =====================
   DRAG EVENTS
===================== */
list.addEventListener("dragstart", (e) => {
  const item = e.target.closest(".sortable-item");
  if (!item) return;

  dragIndex = Number(item.dataset.index);
  item.classList.add("dragging");
  e.dataTransfer.setData("text/plain", "");
});

list.addEventListener("dragend", (e) => {
  const item = e.target.closest(".sortable-item");
  if (!item) return;

  item.classList.remove("dragging");
});

list.addEventListener("dragover", (e) => {
  const item = e.target.closest(".sortable-item");
  if (!item) return;

  e.preventDefault();
  item.classList.add("over");
});

list.addEventListener("dragleave", (e) => {
  const item = e.target.closest(".sortable-item");
  if (!item) return;

  item.classList.remove("over");
});

list.addEventListener("drop", (e) => {
  const item = e.target.closest(".sortable-item");
  if (!item) return;

  const dropIndex = Number(item.dataset.index);

  if (dragIndex === dropIndex) return;

  const movedItem = items.splice(dragIndex, 1)[0];
  items.splice(dropIndex, 0, movedItem);

  dragIndex = null;
  render();
});

