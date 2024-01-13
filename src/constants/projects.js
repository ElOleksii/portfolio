export const projects = [
  {
    title: "Crypto Currency Tracker",
    description:
      "This site allows you to add cryptocurrency and monitor its price.",
    img: "src/public/currency.png",
    demoLink: "https://eloleksiy.github.io/currency-tracker/",
    githubLink: "https://github.com/ElOleksiy/currency-tracker, Tailwind",
    stack: "React, Tailwind",
  },
  {
    title: "Monsterr Slayer Game",
    description:
      "Turn-based game, the main goal of which is to fight a monster.",
    img: "@/public/monsterSlayerGame.png",
    demoLink: "https://github.com/ElOleksiy/vue-game",
    githubLink: "",
    stack: "Vue JS",
  },
];

Array.prototype.last = function () {
  console.log(this[this.length - 1]);
};
const num = [1, 2, 3];
console.log(num.last());
