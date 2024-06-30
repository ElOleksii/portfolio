import currencyTracker from "../public/currency.png";
import monsterSlayerGame from "../public/monsterSlayerGame.png";

export const projects = [
  {
    title: "Crypto Currency Tracker",
    description:
      "This site allows you to add cryptocurrency and monitor its price.",
    img: currencyTracker,
    demoLink: "https://eloleksii.github.io/currency-tracker/",
    githubLink: "https://github.com/ElOleksii/currency-tracker",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
    ],
  },
  {
    title: "Monsterr Slayer Game",
    description:
      "Turn-based game, the main goal of which is to fight a monster.",
    img: monsterSlayerGame,
    demoLink: "",
    githubLink: "https://github.com/ElOleksii/vue-game",
    tags: [
      {
        name: "vue",
        color: "text-green-500",
      },
    ],
  },
];
