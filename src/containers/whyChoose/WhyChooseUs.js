import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      {/* Left Section: Text */}
      <div className="text-section">
        <h2 className="heading">
          Why Choose Us <span>?</span>
        </h2>
        <ul className="features-list">
          <li>
            <strong>Proven Expertise:</strong> With years of experience in the
            SEO industry, we understand what it takes to succeed in the
            ever-evolving search landscape.
          </li>
          <li>
            <strong>Customized Solutions:</strong> We create SEO strategies that
            align with your unique business goals, ensuring sustainable growth
            and measurable results.
          </li>
          <li>
            <strong>Transparent Approach:</strong> We keep you informed at every
            step, offering detailed insights and progress reports to keep your
            campaign on track.
          </li>
          <li>
            <strong>Data-Driven Results:</strong> Our SEO techniques are backed
            by thorough research and analytics, ensuring maximum ROI.
          </li>
        </ul>
      </div>

      {/* Right Section: Statistics */}
      <div className="stats-section">
        <div className="stat-circle small">
          <span>11+</span>
          <p>Team</p>
        </div>
        <div className="stat-circle medium">
          <span>40+</span>
          <p>Clients</p>
        </div>
        <div className="stat-circle large">
          <span>24/ hrs</span>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
