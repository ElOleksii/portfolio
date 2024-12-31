import currencyTracker from "../public/currency.png";
import fitnessWorkout from "../public/fitness-workout.png";
import easyCookAi from "../public/easyCookAi.png";
import weatherApp from "../public/weatherApp.png";

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
        name: "React, WebSocket",
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
        name: "SCSS, Parcel",
        color: "text-pink-500",
      },
    ],
  },
  {
    title: "EasyCookAI Landing Page",
    description:
      "I developed the landing page during one of my courses. It’s a frontend project written in React.",
    img: easyCookAi,
    demoLink: "https://eloleksii.github.io/easycookai/",
    githubLink: "https://github.com/ElOleksii/easycookai",
    tags: [
      {
        name: "React",
        color: "text-orange-500",
      },
    ],
  },
  {
    title: "Weather App",
    description: "Application that shows the current weather in a given city.",
    img: weatherApp,
    demoLink: "https://eloleksii.github.io/weather-app/",
    githubLink: "https://github.com/ElOleksii/weather-app",
    tags: [
      {
        name: "React, TypeScript, Tailwind, Axios, Zustand, OpenWeatherAPI ",
        color: "text-violet-500",
      },
    ],
  },
];
