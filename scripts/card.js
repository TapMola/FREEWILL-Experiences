const card = document.querySelector(".business-card");
const saveContact = document.querySelector("#saveContact");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (saveContact) {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Freewill Experiences",
    "ORG:Freewill Experiences",
    "TEL;TYPE=CELL:+34692052961",
    "EMAIL;TYPE=INTERNET:info.freewillexperiences@gmail.com",
    "ADR;TYPE=WORK:;;Calle Vicari Joaquim Fuster 94;Palma;Illes Balears;07006;Spain",
    "URL:https://www.instagram.com/freewill_experiences/",
    "NOTE:E-Foil rentals and premium boat experiences in Mallorca",
    "END:VCARD",
  ].join("\r\n");

  saveContact.href = URL.createObjectURL(
    new Blob([vcard], { type: "text/vcard;charset=utf-8" }),
  );
}

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
