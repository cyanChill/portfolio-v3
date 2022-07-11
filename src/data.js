export const Technologies = [
  {
    icon: "/images/technologies/html5.svg",
    name: "HTML5",
  },
  {
    icon: "/images/technologies/css3.svg",
    name: "CSS3",
  },
  {
    icon: "/images/technologies/javascript.svg",
    name: "JavaScript",
  },
  {
    icon: "/images/technologies/react.svg",
    name: "React",
  },
  {
    icon: "/images/technologies/nextjs.svg",
    name: "NextJS",
  },
  {
    icon: "/images/technologies/bootstrap.svg",
    name: "Bootstrap",
  },
  {
    icon: "/images/technologies/sass.svg",
    name: "SASS",
  },
  {
    icon: "/images/technologies/npm.svg",
    name: "NPM",
  },
  {
    icon: "/images/technologies/nodejs.svg",
    name: "NodeJS",
  },
  {
    icon: "/images/technologies/express.svg",
    name: "Express",
  },
  {
    icon: "/images/technologies/firebase.svg",
    name: "Firebase",
  },
  {
    icon: "/images/technologies/mongodb.svg",
    name: "MongoDB",
  },
  {
    icon: "/images/technologies/heroku.svg",
    name: "Heroku",
  },
  {
    icon: "/images/technologies/netlify.svg",
    name: "Netlify",
  },
];

export const Projects = [
  {
    onLeft: false,
    preview: {
      video: "/media/next-instagram.mp4",
      thumbnail: "/media/next-instagram.png",
    },
    name: "Next-Instagram",
    description:
      "This is an Instagram clone built mainly using NextJS. It contains features such as media sharing and chat messaging. This app uses Firebase to store the images and MongoDB for all other data.",
    techDescription:
      "Built using NextJS, MongoDB, Firebase, and hosted on Heroku.",
    links: {
      repository: "https://github.com/cyanChill/NextJS-Instagram",
      liveSite: "https://cyanchill-instagram.herokuapp.com/",
    },
  },
  {
    onLeft: true,
    preview: {
      video: "/media/gradschoolzero.mp4",
      thumbnail: "/media/gradschoolzero.png",
    },
    name: "GradSchoolZero",
    description:
      "This is a mock graduation management application using JSON Server as a mock database. With this app, an admin user (Registrar user) can add classes, students, and instructors while also controlling the periods when students can register for classes, when classes are running, and when grades are to be due.",
    techDescription:
      "Built using React, React-Router, Bootstrap, and JSON Server.",
    links: {
      repository: "https://github.com/CityDevsCCNY/GradSchoolZero",
    },
  },
  {
    onLeft: false,
    preview: {
      video: "/media/library.mp4",
      thumbnail: "/media/library.png",
    },
    name: "Library App",
    description:
      "This is a library app where you can add books to your virtual library to keep track of your reading progress. This utilizes localstorage to store information on the books you've read.",
    techDescription: "Built using Javascript.",
    links: {
      repository: "https://github.com/cyanChill/Library-App",
      liveSite: "https://cyanchill.github.io/Library-App/",
    },
  },
  {
    onLeft: true,
    preview: {
      video: "/media/todo-list.mp4",
      thumbnail: "/media/todo-list.png",
    },
    name: "Todo List App",
    description:
      "This is a simple todo list app which you can organize your todos by categories and see them displayed in one of the categories accessed in the sidebar. There's 3 level of priorities you can select and set due dates for each task.",
    techDescription: "Built using Javascript.",
    links: {
      repository: "https://github.com/cyanChill/JavaScript-Todo-List",
      liveSite: "https://cyanchill.github.io/JavaScript-Todo-List/",
    },
  },
  {
    onLeft: false,
    preview: {
      video: "/media/shopping-cart.mp4",
      thumbnail: "/media/shopping-cart.png",
    },
    name: "Shopping Cart App",
    description:
      "This is a shopping cart app that's modeled after lttstore.com. You can login with a Google account and store your cart in Firebase instead of localstorage if you aren't logged in.",
    techDescription: "Built using React, React-Router, and Firebase.",
    links: {
      repository:
        "https://github.com/cyanChill/React-Shopping-Cart-App/tree/main",
      liveSite: "https://cyanchill-shopping-cart-app.netlify.app/",
    },
  },
  {
    onLeft: true,
    preview: {
      video: "/media/space-tour.mp4",
      thumbnail: "/media/space-tour.png",
    },
    name: "Space Tourism Site",
    description:
      "This is my implementation of Frontend Mentor's Space Tourism multi-page website. I originally did this project in plain HTML, CSS, and JavaScript, then translated the project over to React and improved the overall project structure and styling along the way.",
    techDescription: "Built using React and React-Router.",
    links: {
      repository: "https://github.com/cyanChill/Space-Tourism-Site",
      liveSite: "https://cyanchill-space-tourism.netlify.app/",
    },
  },
];

const otherProjects = [
  {
    onLeft: true,
    preview: { video: "/media/waldo.mp4", thumbnail: null },
    name: "Where's Waldo",
    description:
      "This is an implementation of Where's Waldo using an image by STE PHA NIE. This is a simple and fun game where the top scores are displayed on the level selection page.",
    techDescription: "Built using React, React-Router, and Firebase.",
    links: {
      repository: "https://github.com/cyanChill/React-Wheres-Waldo",
      liveSite: "https://cyanchill-wheres-waldo-app.netlify.app/",
    },
  },
];
