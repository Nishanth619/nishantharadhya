import { useState, useCallback } from "react";
import "../styles/Work.css";
import WorkImage from "../ui/WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";

const projects = [
  {
    title: "NearTransfer",
    category: "File Sharing App",
    tools: "Flutter, TCP/UDP, SQLite",
    image: `${import.meta.env.BASE_URL}images/neartransfer.jpg`,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.neartransfer.app",
  },
  {
    title: "PDF Hub",
    category: "Privacy-First PDF Toolkit",
    tools: "Flutter, ML Kit, AdMob",
    image: `${import.meta.env.BASE_URL}images/pdfhub.jpg`,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.pdfhub.app",
  },
  {
    title: "PDFGen",
    category: "Document Generation Utility",
    tools: "Flutter, PDF APIs, Local Storage",
    image: `${import.meta.env.BASE_URL}images/pdfgen2.jpg`,
    playStoreLink: "#",
  },
  {
    title: "Geocam Pro",
    category: "Geotagging Camera App",
    tools: "Flutter, CameraX, Location API",
    image: `${import.meta.env.BASE_URL}images/geocm.jpeg`,
    playStoreLink: "#",
  },
  {
    title: "SmartZip",
    category: "File Compression Utility",
    tools: "Flutter, Isolates, Method Channels",
    image: `${import.meta.env.BASE_URL}images/smartzip.jpg`,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.nishanth.smartpdfconverter",
  },
  {
    title: "Focus Hub",
    category: "Productivity Suite",
    tools: "Flutter, Hive DB, Notification API",
    image: `${import.meta.env.BASE_URL}images/focushub.jpg`,
    playStoreLink: "#",
  },
  {
    title: "FrameCraft Studio",
    category: "Animation Creator",
    tools: "Flutter, FFmpeg, CustomPainter",
    image: `${import.meta.env.BASE_URL}images/pdfgen.jpg`,
    playStoreLink: "#",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-badges">
                          {project.playStoreLink && (
                            <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className="store-badge play-store">
                              <FaGooglePlay className="badge-icon" />
                              <div className="badge-text">
                                <span className="small-text">GET IT ON</span>
                                <span className="large-text">Google Play</span>
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
