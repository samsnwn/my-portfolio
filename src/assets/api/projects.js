import lazyDevs from '../images/lazydevs.jpg'
import facelack from '../images/facelack.jpg'
import drumMachine from '../images/drum-machine.jpg'
import kanban from '../images/kanban.jpg'
import shop from '../images/shop.jpg'




const projects = [
  {
    name: "Authentication template generator",
    description:
      "Developing a tool for developers and teachers in which user can select front and back end settings and recieve starting templates for personal projects with included authentication and security. Technologies used: React, Styled Components, NodeJS/Express, MongoDB",
    image: lazyDevs,
    github: "https://github.com/samsnwn/mern-auth-form-generator",
    live: "https://lazydevs.onrender.com",
  },
  {
    name: "E-commerce shop",
    description: "Dummy E-commerce application with all functionalities implemented for future real online shop. Soon to be deployed. Technologies used: React, Tailwind, NodeJS, Express, MongoDB",
    image: shop,
    github: "https://github.com/samsnwn/E-commerce-project",
    live: "https://github.com/samsnwn/E-commerce-project",
  },
  {
    name: "Facelack",
    description:
      "Creating a Slack clone with personalized functionalties to put into practice all the skills adquired for Front-End. Technologies used: React, Context API, Styled Components, Firebase",
    image: facelack,
    github: "https://github.com/samsnwn/facelack",
    live: "https://facelack.vercel.app/",
  },
  {
    name: "Project Management Tool",
    description: "Project Management tool for personal use with drag and drop functionality",
    image: kanban,
    github: "https://github.com/samsnwn/project-management-tool",
    live: "https://github.com/samsnwn/project-management-tool",
  },
  {
    name: "Drum Machine",
    description: "Virtual drum machine with 2 different sound banks and volume control. Can be played with mouse or with the keyboard. Future implementation: Step sequencer to draw drum patterns",
    image: drumMachine,
    github: "https://github.com/samsnwn/drum-machine",
    live: "https://samsdrummachine.vercel.app/",
  }
];

export default projects;
