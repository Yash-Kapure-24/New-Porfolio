import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "Ad ad in cillum ut labore irure aliqua. Ex sit dolore ipsum id duis nostrud veniam. Nisi duis ut veniam ut eiusmod occaecat ullamco ullamco. Consequat eu sunt ut elit dolor sint magna magna velit ex. Excepteur occaecat reprehenderit tempor veniam.",
      icon: faCss3,
    },
    {
      name: "Javascript",
      des: "Sunt nostrud nulla qui cillum mollit aute anim anim aliqua aute magna tempor. Do culpa culpa excepteur officia ut eu deserunt proident sint non ut do magna minim. Sunt et excepteur tempor culpa irure non exercitation. Amet nostrud ex aute incididunt incididunt ipsum.",
      icon: faJs,
    },
    {
      name: "ReactJs",
      des: "Voluptate qui adipisicing dolore pariatur laboris deserunt consectetur reprehenderit. Esse dolor elit ullamco duis quis aliquip fugiat ipsum nisi est et. Nisi ut deserunt excepteur irure aliquip proident ",
      icon: faReact,
    },
    {
      name: "Node.js",
      des: "A powerful JavaScript runtime built on Chrome's V8 engine. Used for building scalable, high-performance backend applications with event-driven and non-blocking architecture.",
      icon: faNodeJs,
    },
    {
      name: "GitHub",
      des: "A leading platform for version control and collaboration. Enables developers to track changes, work together efficiently, and deploy projects with Git-based workflows.",
      icon: faGithub,
    },
  ]);
  return (
    <section className='skills Skills' ref={scrollTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        It's My Expertise
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        I specialize in full-stack web development using the MERN stack. My
        expertise includes building responsive web applications, creating
        dynamic user interfaces with React, developing RESTful APIs with Node.js
        and Express, and managing databases with MongoDB
      </div>

      <div className='list'>
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className='des'>{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
