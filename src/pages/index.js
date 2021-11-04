import * as React from "react";
import MainNav from '../components/Navigation/MainNav';
import SkillCard from '../components/SkillCard/SkillCard';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid';
import { InstagramIcon, LinkedInIcon, GitHubIcon } from '../components/Icons/Icons';
import Img1 from '../images/img01.png';
import Img2 from '../images/img02.png';
import { Helmet } from "react-helmet";

import '../global.scss';

const IndexPage = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>Aniel Feyt</title>
      </Helmet>
      <MainNav />
      <main>
        <section id="intro">
          <div className="inner-section__container">
            <div className="intro-content__container">
              <div className="intro-content">
                <h1 initial="hidden">Nice to meet you.</h1>
                <h1>I'm <span className="purple-text">Aniel</span>.</h1>
                <h3>Web Developer</h3>
                {/* <p>I’m a young developer, motivated to create good looking websites and custom solutions for clients in this never-ending journey of learning new technologies and skills. I currently work as a developer from home while completing my final year of my qualification via the University of South Africa.</p> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam repudiandae incidunt eius laudantium ad voluptatum aliquid corporis quisquam quia accusantium, quaerat illum est nulla blanditiis possimus quam nam saepe eum. Pariatur commodi similique impedit sed fugiat blanditiis expedita amet vitae. Molestias, dolores quam et nobis maxime doloribus animi sed?</p>
                <div className="social-links">
                  <a href="https://github.com/anielfeyt" target="_blank" rel="noreferrer">
                    <GitHubIcon fill="#6e1ff8" width="30px" />
                  </a>
                  <a href="https://www.linkedin.com/in/aniel-feyt/" target="_blank" rel="noreferrer">
                    <LinkedInIcon fill="#6e1ff8" width="30px" />
                  </a>
                  <a href="https://www.instagram.com/anielfeyt/" target="_blank" rel="noreferrer">
                    <InstagramIcon fill="#6e1ff8" width="30px" />
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="into-image__container">
            {/* <img src={Img1} alt="Aniel Feyt" /> */}
          </div>
        </section>

        <section id="about">
          <div className="inner-section__container">
            <div className="about-content__container">
              <div className="about-content">
                <div className="about__header">
                  <h2>What I've been up to.</h2>
                  <h3>About me</h3>
                </div>
                {/* <p>Anything from custom sites using HTML, CSS and JavaScript to more modern solutions and workflows like ReactJs, GatsbyJs or WordPress.</p>
                <p>Besides my love for web technologies and other tech, I also have a passion for photography and art. In my free time I like to draw or paint some portraits, do a bit of sculpting or play some Minecraft to relax.</p> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum natus laboriosam aliquid quisquam nemo alias esse commodi deleniti, accusantium eius aut, veritatis labore, placeat possimus incidunt! Aliquam, iure maiores. Ex ut, laboriosam in quia excepturi quaerat temporibus. Expedita ut numquam, fugit et quis ipsa, illo aperiam similique, aliquid natus incidunt consequuntur. Odit, harum nihil nostrum provident vitae esse aspernatur ducimus impedit illo iure commodi consectetur optio necessitatibus blanditiis eius.</p>
              </div>
            </div>
          </div>
          <div className="about-image__container">
            {/* <img src={Img2} alt="Aniel Feyt" /> */}
          </div>
        </section>

        <section id="skills">
          <div className="inner-section__container">
            <div className="skills__header text-center">
              <h2>Technologies I use.</h2>
              <h3>Skill stack</h3>
            </div>
            <div className="skills-content__container">
              <SkillCard skill="HTML" value={5} valueText="years" overAYear />
              <SkillCard skill="CSS" value={5} valueText="years" overAYear />
              <SkillCard skill="JavaScript" value={3} valueText="years" overAYear />
              <SkillCard skill="PHP" value={4} valueText="years" overAYear />

              <SkillCard skill="MySQL" value={4} valueText="years" overAYear />
              <SkillCard skill="ReactJS" value={10} valueText="months" />
              <SkillCard skill="GatsbyJS" value={10} valueText="months" />
              <SkillCard skill="MongoDB" value={10} valueText="months" />

              <SkillCard skill="ExpressJS" value={10} valueText="months" />
              <SkillCard skill="Mongoose" value={10} valueText="months" />
              <SkillCard skill="Docker" value={10} valueText="months" />
              <SkillCard skill="SCSS" value={10} valueText="months" />

              <SkillCard skill="Mongoose" value={10} valueText="months" />
              <SkillCard skill="Git and GitHub" value={10} valueText="months" />
              <SkillCard skill="WordPress" value={5} valueText="year" overAYear />
              <SkillCard skill="Adobe XD" value={1} valueText="year" overAYear />
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="inner-section__container">
            <div className="projects__header text-center">
              <h2>Some of my work.</h2>
              <h3>Projects</h3>
            </div>
            <div className="projects-content__container">
              <ProjectGrid />
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="inner-section__container">
            <div className="contact__header text-center">
              <h2>Get in touch.</h2>
              <h3>Contact me</h3>
            </div>
            <div className="contact-content__container text-center">
              <p>anielfeyt(&#64;)busniverse.com</p>
              <p>Western Cape, South Africa</p>
              <div className="social-links">
                <a href="https://github.com/anielfeyt" target="_blank" rel="noreferrer">
                  <GitHubIcon fill="#6e1ff8" width="30px" />
                </a>
                <a href="https://www.linkedin.com/in/aniel-feyt/" target="_blank" rel="noreferrer">
                  <LinkedInIcon fill="#6e1ff8" width="30px" />
                </a>
                <a href="https://www.instagram.com/anielfeyt/" target="_blank" rel="noreferrer">
                  <InstagramIcon fill="#6e1ff8" width="30px" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default IndexPage;
