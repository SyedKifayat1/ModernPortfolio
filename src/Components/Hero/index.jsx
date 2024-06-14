import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import me from "../../assets/me.png"
import Achievement from "../../Commons/Achievement";
const Hero = () => {
  return (
    <section id="hero">
      <div className="wrapper info-container">
        <div className="column">
          <h3 className="sub-title" data-aos="fade-up">
            Hi, I'm <span className="primary">Syed Kifayat</span>
          </h3>
          <h1 className="heading-1" data-aos="fade-up">
            A <span className="gradient-text">Fullstack</span> Web Developer
          </h1>
          <p className="muted" data-aos="fade-up" data-aos-delay='200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            fugit obcaecati quia suscipit nesciunt voluptatem eius officiis eum
            dicta? Non, aliquid nulla consequuntur temporibus magnam doloribus
            accusantium illo magni veritatis?
          </p>
          <div className="flex-center buttons-wrapper">
            <Link to='services' smooth={true} className="btn primary" data-aos="fade-left" data-aos-delay='1200' data-aos-offset="50">Learn More</Link>
            <Link to='contact' smooth={true} className="btn" data-aos="fade-left" data-aos-delay='1500' data-aos-offset="50">Get started</Link>
          </div>
        </div>
        <div className="column hero-image" data-aos="fade-left" data-aos-delay='200'>
          <img src={me} alt="" />
        </div>
      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
