import {
  html,
  css,
  javascript,
  react,
  redux,
  typescript,
  styledComponents,
  git,
  github,
  vsc,
} from "./logos";

export const frontSkills = [
  {
    name: "HTML",
    src: html,
  },
  {
    name: "CSS",
    src: css,
  },
  {
    name: "Styled Components",
    src: styledComponents,
  },
  {
    name: "Javascript",
    src: javascript,
  },
  {
    name: "React",
    src: react,
  },
  {
    name: "Redux",
    src: redux,
  },
  {
    name: "Typescript (In Progress)",
    src: typescript,
  },
];

export const otherSkills = [
  {
    name: "Git",
    src: git,
  },
  {
    name: "GitHub",
    src: github,
  },
  {
    name: "Visual Studio Code",
    src: vsc,
  },
];

export const projects = [
  {
    name: "Pokedex",
    screenshot: "imgs/pokedex.png",
    description:
      "This Pokedex app not only shows a list of Pokemon, but also all relevant details about the one you select such as their description, abilities and evolution.",
    tech: [
      "React",
      "React-Router-Dom",
      "Redux",
      "Redux Async Thunk",
      "Axios",
      "Responsive",
    ],
    url: {
      live: "",
      github: "https://github.com/JKG009/pokedex",
    },
  },
  {
    name: "Golden Wok Takeaway Website",
    screenshot: "imgs/goldenWok.png",
    description:
      "Tired from being constantly asked if we had a website at a takeaway restuarant I was working at, I took the initiative to build one. The website answers all FAQs I hear, includes a menu which I designed specifically for the website and also utilize Google Maps to show our location.",
    tech: [
      "React",
      "React-Router-Dom",
      "Styled-Components",
      "Google-Maps-React",
      "Responsive",
    ],
    url: {
      live: "",
      github: "https://github.com/JKG009/Takeaway-Website",
    },
  },
  {
    name: "Skyrim Alchemy App",
    screenshot: "imgs/skyrimAlchemyTool.png",
    description:
      "Based on the Elder Scrolls video game series. This small project solves the issue of an in-game skill being overly complex and user-unfriendly. If you've never played Skyrim before, you will definitely be confused but there is a detailed readme on the Github link and information on how to use the app on the live site.",
    tech: ["React", "Redux", "Styled-Components"],
    url: {
      live: "",
      github: "https://github.com/JKG009/Skyrim-Alchemy-App",
    },
  },
  {
    name: "Flashcard App",
    screenshot: "imgs/flashcard.png",
    description:
      "A simple app that you can use as a studying tool. This was one of my first solo project after finishing the basics of frontend development. It utilizes local storage to save and delete the cards so they can be reused.",
    tech: ["React", "Styled-Components", "Local Storage"],
    url: {
      live: "",
      github: "https://github.com/JKG009/Flashcard-App",
    },
  },
];

export const social = {
  github: "https://github.com/JKG009",
  linkedIn: "https://www.linkedin.com/in/geoffrey-lee-6120b11ab/",
};
