import * as React from "react";
import MainNav from '../components/Navigation/MainNav';
import SkillCard from '../components/SkillCard/SkillCard';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid';
import { InstagramIcon, LinkedInIcon, GitHubIcon } from '../components/Icons/Icons';
import Img1 from '../images/img01.png';
import Img2 from '../images/img02.png';

import '../global.scss';

const IndexPage = () => {

  return (
    <React.Fragment>
      <MainNav />
      <main>
        <section id="intro">
          <div className="inner-section__container">
            <div className="intro-content__container">
              <div className="intro-content">
                <h1 initial="hidden">Nice to meet you.</h1>
                <h1>I'm <span className="purple-text">Aniel</span>.</h1>
                <h3>Web Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero corporis itaque porro temporibus quisquam voluptatibus totam et, quae enim sint excepturi obcaecati aspernatur sequi at labore, eligendi, molestiae nisi aperiam.</p>
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
            <img src={Img1} alt="Aniel Feyt" />
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nostrum cum maxime aliquid accusantium, assumenda ullam excepturi sit, aut explicabo modi incidunt corrupti sed laboriosam eos illo debitis mollitia. Harum?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cumque minus dolore error! Ipsam laboriosam tenetur totam distinctio? Aspernatur ullam doloremque sequi odio quisquam laudantium at earum, quibusdam recusandae praesentium.</p>
                <button className="btn">Download CV</button>
              </div>
            </div>
          </div>
          <div className="about-image__container">
            <img src={Img2} alt="Aniel Feyt" />
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