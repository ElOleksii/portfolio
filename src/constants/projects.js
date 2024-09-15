import currencyTracker from "../public/currency.png";
import fitnessWorkout from "../public/fitness-workout.png";

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
    title: "Fitness Workout Landing",
    description: "This is simple landing example about Fitness Workout",
    img: fitnessWorkout,
    demoLink: "https://eloleksii.github.io/fitness-site/",
    githubLink: "https://github.com/ElOleksii/fitness-site",
    tags: [
      {
        name: "scss, parcel",
        color: "text-pink-500",
      },
    ],
  },
];
