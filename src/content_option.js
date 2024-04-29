import CodeOfAPIProjectImage from "./assets/img/pf.jpg";

const logotext = "FRAOL";
const meta = {
  title: "Fraol",
  description:
    "I’m Fraol Demisse React _ Full stack developer,currently living in Addis Ababa, Ethiopia. I am a student at the Unity University, studying Computer Science.",
};

const introdata = {
  title: "I’m Fraol Demisse",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop full stack web apps",
  },
  description:
    "I have experience in developing web applications using React, and Node.js. I am also familiar with javascript, php, sql, and mongoDB.",
  your_img_url: CodeOfAPIProjectImage,
};

const dataabout = {
  title: "About myself",
  aboutme:
    "I am a quick learner and a hard worker. I am passionate about coding and I love to learn new things.",
};
const studytimeline = [
  {
    jobtitle: "Undergraduate Student",
    where: "Unity University",
    date: "2022 - present",
  },
  {
    jobtitle: "MERN Stack Student",
    where: "Evangadi Tech",
    date: "2023 - 2024",
  },
];

const skills = [
  {
    name: "PHP",
    value: 75,
  },
  {
    name: "Javascript",
    value: 85,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "Jquery",
    value: 70,
  },
  {
    name: "Node.js",
    value: 80,
  },
];

const services = [
  {
    title: "React Development",
    description:
      "I specialize in crafting dynamic and responsive web applications using the latest React technologies. Whether it's building from scratch or enhancing existing projects, I ensure seamless user experiences and robust functionality.",
  },
  {
    title: "Mobile Apps",
    description:
      "Transforming ideas into engaging mobile experiences is my expertise. I develop cross-platform mobile applications using React Native, leveraging the power of React to deliver high-performance apps for both iOS and Android platforms.",
  },
  {
    title: "Wordpress Design",
    description:
      "With a keen eye for design and functionality, I create custom WordPress websites tailored to meet your specific needs. From theme customization to plugin integration, I ensure your website stands out with a polished and professional look.",
  },
];

const dataportfolio = [
  {
    img: "/assets/img/AmazonClone.png",
    description: "Amazon Clone made with React, Redux, Firebase, and Stripe.",
    link: "https://clonezon.netlify.app/",
  },
  {
    img: "/assets/img/NetflixClone.png",
    description: "Netflix Clone made with React, Redux, and Firebase.",
    link: "#",
  },
  {
    img: "/assets/img/AppleClone.png",
    description: "Apple Clone made with React and Redux.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "fraolashebir84@gmail.com",
  YOUR_FONE: "+251 799 48 19 94",
  description:
    "I am available for freelance work. Connect with me via email or phone.",
  // create an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_b9lc8ue",
  YOUR_TEMPLATE_ID: "template_t6wupuu",
  YOUR_USER_ID: "x9dBr4QYQ76PRRbmw",
};

const socialprofils = {
  telegram: "https://t.me/fraol_ad",
  github: "https://github.com/Fraol-D",
  linkedin: "https://www.linkedin.com/in/fraol-demisse-218b89239/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  studytimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
