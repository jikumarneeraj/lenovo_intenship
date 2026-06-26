import "../styles/landing.css";

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <h2>What Our Students Say</h2>

      <div className="testimonial-card">
        <p>
          "The projects on SkillPath helped me gain confidence in web
          development."
        </p>

        <h4>- Rahul Sharma</h4>
      </div>

      <div className="testimonial-card">
        <p>
          "I started as a beginner and now I can build complete websites."
        </p>

        <h4>- Neeraj Kumar</h4>
      </div>
    </section>
  );
}

export default TestimonialSection;