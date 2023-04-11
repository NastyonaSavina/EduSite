import { Link } from "react-router-dom";
import "./Hero.css";


export const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-area container">
          <h1 className="hero-title">Welcome to EduSite</h1>
          <p className="hero-text">
            Education helps you develop critical skills like decision-making,
            mental agility, problem-solving, and logical thinking. People face
            problems in their professional as well as personal lives. In such
            situations, their ability to make rational and informed decisions
            comes from how educated and self-aware they are.
          </p>
          <Link to="/courses">
          <button className="hero-btn" type="button" >
            Explore Courses
          </button>
          </Link>
        </div>
      </section>
    );
} 