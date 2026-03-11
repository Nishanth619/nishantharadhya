import "../styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer (Animation & Web)</h4>
                <h5>Ateu Softwares</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Engineered RESTful API endpoints using PHP/MySQL for real-time mobile data synchronization. 
              Optimized rendering loops for interactive animations, achieving a stable 60 FPS and 
              reducing GPU usage by 25% on low-end devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
