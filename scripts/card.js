const card = document.querySelector(".business-card");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (card && !reduceMotion && matchMedia("(pointer: fine)").matches) {
  card.addEventListener("pointermove", (event) => {
    const box = card.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    card.style.setProperty("--rx", `${(-y * 1.5).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(x * 1.5).toFixed(2)}deg`);
  });
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });
}
