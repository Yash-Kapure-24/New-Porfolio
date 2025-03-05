import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Online Code Editor",
      des: "Built a fully functional online code editor with support for multiple programming languages, real-time collaboration, and syntax highlighting. Designed for developers and students to practice coding efficiently.",
      mission: "Full-Stack Developer, UI/UX Designer",
      language: "React JS, Node.js, Express, MongoDB, CodeMirror",
      images: "https://www.figma.com/community/resource/b08f66ee-6bea-41a7-88cf-1b820900ef65/thumbnail",
    },
    {
      name: "OTT Platform",
      des: "Developed a feature-rich OTT platform offering on-demand video streaming with collaborative viewing options. Users can create watch parties and interact in real time while enjoying content.",
      mission: "Full-Stack Developer, System Architect",
      language: "React JS, Node.js, Express, MongoDB, WebRTC, AWS",
      images: "https://d274cmdd0goq94.cloudfront.net/wp-content/uploads/2024/11/Top-OTT.png",
    },
    {
      name: "E-Learning Platform",
      des: "Designed an interactive e-learning platform with video courses, quizzes, progress tracking, and personalized recommendations. Focused on user engagement and content accessibility.",
      mission: "Full-Stack Developer, Recommendation System Implementation",
      language:
        "React JS, Node.js, Express, MongoDB, AI Recommendation Algorithms",
      images: "https://www.shutterstock.com/image-photo/elearning-on-laptop-learning-icon-600nw-2477739923.jpg",
    },
    {
      name: "E-Commerce Website",
      des: "Developed a dynamic e-commerce platform with product listings, secure checkout, order management, and payment gateway integration. Optimized for performance and scalability.",
      mission: "Full-Stack Developer, Payment Integration",
      language: "React JS, Node.js, Express, MongoDB, Stripe API",
      images: "https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with.jpg",
    },
    {
      name: "Gemini AI Clone",
      des: "Built a Gemini AI-powered chatbot application with advanced natural language processing capabilities. Integrated API for intelligent conversations and contextual responses.",
      mission: "Front-end Developer, API Integration",
      language: "React JS, Gemini AI API, Tailwind CSS",
      images: "https://i.ytimg.com/vi/0yboGn8errU/maxresdefault.jpg",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className='projects Projects' ref={scrollTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        I have worked on various projects, including web applications, SaaS
        platforms, and AI-powered tools. My projects focus on delivering
        high-performance, user-friendly experiences using the latest web
        technologies.
      </div>

      <div className='list'>
        {listProjects.map((value, key) => (
          <div
            className='item'
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className='images'>
              <img src={value.images} alt='' />
            </div>
            <div className='content'>
              <h3>{value.name}</h3>
              <div className='des'>{value.des}</div>
              <div className='mission'>
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className='des'>{value.mission}</div>
                </div>
              </div>
              <div className='mission'>
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className='des'>{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
