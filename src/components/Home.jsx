import React, { useRef } from "react";
import CustomHook from "./CustomHook";
function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className='home Home'>
      <div className='content'>
        <div className='name'>
          I'm <span>Yash Kapure</span>
        </div>
        <div className='des'>
          Passionate Full-Stack MERN Developer with a strong foundation in
          building scalable web applications. Experienced in developing dynamic
          user interfaces and robust backend solutions. Always eager to learn
          new technologies and contribute to innovative projects.
        </div>

        <a
          href='public/Yash-Kapure-CV.pdf'
        >
          Download My CV
        </a>
      </div>
      <div className='avatar'>
        <div className='card'>
          <img
            src='https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg'
            alt=''
          />
          <div className='info'>
            <div>MERN Stack-Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
