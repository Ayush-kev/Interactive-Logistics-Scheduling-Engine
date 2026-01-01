/* =====================
   DRAG & DROP BOARD
===================== */

const board = document.querySelector(".board");

/* =====================
   DRAG START
===================== */
board.addEventListener("dragstart", (e) => {
  const task = e.target.closest(".task");
  if (!task) return;

  e.dataTransfer.setData("text/plain", "");
  e.dataTransfer.effectAllowed = "move";

  task.classList.add("dragging");
});

/* =====================
   DRAG END
===================== */
board.addEventListener("dragend", (e) => {
  const task = e.target.closest(".task");
  if (!task) return;

  task.classList.remove("dragging");
});

/* =====================
   DRAG OVER
===================== */
board.addEventListener("dragover", (e) => {
  const zone = e.target.closest(".drop-zone");
  if (!zone) return;

  e.preventDefault(); // REQUIRED to allow drop
  zone.classList.add("over");
});

/* =====================
   DRAG LEAVE
===================== */
board.addEventListener("dragleave", (e) => {
  const zone = e.target.closest(".drop-zone");
  if (!zone) return;

  zone.classList.remove("over");
});

/* =====================
   DROP
===================== */
board.addEventListener("drop", (e) => {
  const zone = e.target.closest(".drop-zone");
  const task = document.querySelector(".task.dragging");

  if (!zone || !task) return;

  zone.classList.remove("over");
  zone.appendChild(task);
});

