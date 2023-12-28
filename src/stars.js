export function stars() {
  const count = 300;
  const sections = document.querySelector(".star");

  for (let i = 0; i < count; i++) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    console.log(window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    const size = Math.random() * 5;
    star.style.left = x - 10 + "px";

    star.style.top = y - 10 + "px";

    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    const durations = Math.random() * 2;
    star.style.animationDelay = durations + "s";
    sections.appendChild(star);
  }
}
