export const projects = [
  {
    id: 0,
    title: "Recipe Website",
    date: "2025",
    description:
      "Passion project for keeping my recipes stored and accessible. Lots of fun design like almost fully generic controller code. Strong use of interfaces. Some unnecessary exercises like writing my own simple auth, which I would never recommend. Social network design between saving recipes and having ingredients as graph nodes with weighted relationships from recipes. Allows for easy analytical queries to recommend recipes",
    tags: [
      "Scala",
      "ZIO",
      "Neo4J",
      "Angular",
      "Mailgun",
      "Cloudflare",
      "Docker",
      "SeaweedFS",
      "Authentik",
    ],
    codeLink: "https://github.com/specialthing44/recipe-website",
    projectLink: "https://cooking.spencers.cc/",
  },
  {
    id: 1,
    title: "Key-Value Store",
    date: "2025",
    description:
      "A key-value store built in C++ from scratch. Implements a log-structured merge tree (LSM tree) with Bloom Filters for efficient write operations and uses a combination of in-memory and on-disk storage to handle large datasets. Custom buffer management and file I/O optimizations are included to enhance performance. Supports basic operations such as put, get, and delete, along with range queries.",
    tags: ["C++"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    date: "2024",
    description:
      "This site was built using ReactJs and Tailwind CSS. It is a fairly standard static single page application. I tend to not believe in over-engineering things, and I have a lot more interest in UX than UI. Thus I have tried to keep the site as simple as possible, while still being visually appealing. I've learned some things from making this, as this was my first real web project, for example, I will never use JS instead of TS unless I have to.",
    image: `${process.env.PUBLIC_URL}/portfolio.png`,
    tags: ["ReactJs", "Tailwind CSS"],
    codeLink: "https://github.com/specialthing44/portfolio",
    projectLink: "https://spencer-perkins.vercel.app/",
  },
  {
    id: 3,
    title: "Interactive Research Platform",
    date: "2023",
    description:
      "A third year school project where I worked with an Agile team to make a React/Java web platform that facilitates the realtime interaction of humans and software agents in various decision-based games. I Created an API for website-game interaction, designed the Python game logic and reinforcement learning models, and stored and analyzed the game data using MYSQL.",
    tags: [
      "React Js",
      "Java",
      "Python",
      "Api",
      "Reinforcement Learning",
      "MYSQL",
    ],
  },
  {
    id: 4,
    title: "PetFinder Clone",
    date: "2023",
    description:
      "A third year school project where I worked with an team of 2 developers to create a clone of the PetFinder website using React, Django, and RestAPI. We implemented a user-friendly UI, a search and filter system, and a database system to store and retrieve pet information.",
    tags: ["React Js", "Python", "Django", "RestApi", "Bootstrap"],
  },
  {
    id: 5,
    title: "Java Tamagotchi Game",
    date: "2022",
    description:
      "A second year school project where I collaborated with a team of developers to create a Tamagotchi-style videogame in Java with a Swing UI that strictly followed Clean Architecture, MVC, and SOLID Principles. We implemented a database system allowing for online user interaction and saved games, handled input processing and passthrough, and performed debugging with Junit.",
    tags: ["Java", "Swing", "MVC", "SOLID", "JUnit"],
  },
  {
    id: 6,
    title: "Predictive Model with Web UI",
    date: "2021",
    description:
      "A first year school project where we utilized Python with Pandas and Numpy to aggregate data and create a SKLearn-based predictive model to assess the impact of COVID-19 restrictions on restaurants. We used statistical analysis and visualization to draw conclusions for balancing COVID rates with business success and used DASH to display our results with web UI.",
    tags: ["Python", "SKLearn", "DASH", "Pandas", "Numpy"],
  },
];
