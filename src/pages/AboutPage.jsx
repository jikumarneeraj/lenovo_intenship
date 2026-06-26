import "../styles/about.css";

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About SkillPath</h1>

      <p>
        SkillPath is an online learning platform created to help students
        develop practical skills and prepare for the technology industry.
      </p>

      <div className="about-box">
        <h3>Our Mission</h3>

        <p>
          To provide simple and accessible learning resources that help
          students become confident developers.
        </p>
      </div>

      <div className="about-box">
        <h3>What We Offer</h3>

        <ul>
          <li>Beginner friendly courses</li>
          <li>Project based learning</li>
          <li>Career guidance</li>
          <li>Industry ready skills</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;