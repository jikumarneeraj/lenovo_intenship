import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import TestimonialSection from "../components/TestimonialSection";
import CTABanner from "../components/CTABanner";

function LandingPage() {
  return (
    <>
      <HeroSection />

      <section className="features-section">
        <FeatureCard
          title="Learn"
          description="Access beginner friendly courses and tutorials."
        />

        <FeatureCard
          title="Practice"
          description="Build projects and improve your skills."
        />

        <FeatureCard
          title="Grow"
          description="Prepare yourself for internships and placements."
        />
      </section>

      <TestimonialSection />

      <CTABanner />
    </>
  );
}

export default LandingPage;