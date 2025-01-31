import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import logo_expressjs from "./logo-express.png";
import react_logo from "./logo-react.png";
import nodejs from "./logo-nodejs.png";
import postman from "./postman-icon.png";
import bootstrap from "./bootstrap.png";
import pycharm from "./pycharm.png";
import colab from "./colab.png";
import tailwind from "./tailwind.png";
import html from "./html.png";
import css from "./css.png";
import nextjs from "./nextjs.svg";
import frontend from "./frontend.png";
import backend from "./backend.png";
import fullstack from "./fullstack.png";
import mlai from "./mlai.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  logo_expressjs,
  react_logo,
  nodejs,
  postman,
  bootstrap,
  pycharm,
  colab,
  tailwind,
  html,
  css,
  nextjs,
  frontend,
  backend,
  fullstack,
  mlai,
};

export const workData = [
  {
    title: "Portfolio",
    description: "Front-end Development",
    bgImage:
      "https://images.pexels.com/photos/3584998/pexels-photo-3584998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "E-commerce App",
    description: "Full-stack Development",
    bgImage:
      "https://images.pexels.com/photos/6214371/pexels-photo-6214371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Blog App",
    description: "Full-stack Development",
    bgImage:
      "https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Movie App",
    description: "Full-stack Development",
    bgImage:
      "https://images.pexels.com/photos/6992948/pexels-photo-6992948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const serviceData = [
  {
    icon: assets.frontend,
    title: "Frontend Web Development",
    description: "Design and build responsive, visually appealing,...",
    id: "frontend",
  },
  {
    icon: assets.backend,
    title: "Backend Web Development",
    description: "Develop robust and scalable server-side...",
    id: "backend",
  },
  {
    icon: assets.fullstack,
    title: "Full-Stack Web Development",
    description: "Deliver end-to-end solutions by building dynamic,...",
    id: "fullstack",
  },
  {
    icon: assets.mlai,
    title: "Machine Learning & AI",
    description: "Implement fundamental machine learning models...",
    id: "mlai",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "JavaScript, Python, React Js, Next Js, HTML, CSS",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description:
      "Full-Stack Web Development Certification, MS Agricultural Engineering",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects, frontend, backend and full-stack",
  },
];

export const toolsData = [
  assets.mongodb,
  assets.logo_expressjs,
  assets.react_logo,
  assets.nodejs,
  assets.bootstrap,
  assets.tailwind,
  assets.vscode,
  assets.figma,
  assets.git,
  assets.postman,
  assets.pycharm,
  assets.colab,
];

export const skillsDescription = [
  {
    title: "Frontend Web Development",
    description:
      "Design and build responsive, visually appealing, and user-friendly interfaces with a strong focus on performance and accessibility. Proficient in HTML, CSS, Bootstrap, React, Next.js, and Tailwind CSS, I ensure seamless navigation and a polished user experience tailored to modern web standards.",
    tools: [
      assets.html,
      assets.css,
      assets.bootstrap,
      assets.react_logo,
      assets.nextjs,
      assets.tailwind,
    ],
    imgLink: "/frontend.gif",
    id: "frontend",
  },
  {
    title: "Backend Web Development",
    description:
      "Develop robust and scalable server-side applications and RESTful APIs using Node.js and Express.js. Expertise in implementing secure authentication, database integration, and ensuring high performance and reliability for web applications.",
    tools: [
      assets.mongodb,
      assets.nodejs,
      assets.logo_expressjs,
      assets.postman,
    ],
    imgLink: "/backend.gif",
    id: "backend",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Deliver end-to-end solutions by building dynamic, feature-rich full-stack applications using the MERN stack (MongoDB, Express.js, React, and Node.js). Skilled in creating efficient workflows, integrating APIs, and deploying applications to production environments.",
    tools: [
      assets.mongodb,
      assets.logo_expressjs,
      assets.react_logo,
      assets.nodejs,
    ],
    imgLink: "/fullstack.gif",
    id: "fullstack",
  },
  {
    title: "Machine Learning & AI",
    description:
      "Implement fundamental machine learning models using supervised learning techniques and customize AI models for specialized tasks such as computer vision. Leverage pre-trained models to enhance application capabilities and solve real-world problems effectively.",
    tools: [assets.pycharm, assets.colab],
    imgLink: "/mlai.gif",
    id: "mlai",
  },
];
