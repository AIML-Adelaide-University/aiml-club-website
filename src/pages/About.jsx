import communityImg from "../assets/community.jpg"
import industryImg from "../assets/industry.jpg"
import learningImg from "../assets/learning.jpg"

function About() {
  return (
    <div className="home-wrapper pixel-font">
      {/* 🔥 HERO */}
      <section className="home-hero">
        <h1 className="handjet-title">
          <span className="typing">ABOUT US</span>
        </h1>

        <p
          className="home-tagline"
          style={{ maxWidth: "720px", margin: "24px auto" }}
        >
          The AIML Club at the Adelaide University is a student-led community
          passionate about Artificial Intelligence, Machine Learning, and emerging
          technologies shaping the future.
        </p>
      </section>

      {/* 🎯 MISSION */}
      <section className="home-section">
        <h2>Our Mission</h2>
        <p style={{ maxWidth: "720px", margin: "16px auto" }}>
          We aim to bridge the gap between theory and practice by providing students
          with hands-on experience, industry exposure, and a collaborative environment
          to explore AI and ML beyond the classroom.
        </p>
      </section>

      {/* 🧠 FOCUS */}
      <section className="home-section">
        <h2>What We Focus On</h2>

        <div className="home-cards">
          <div className="pixel-card">
            <h3>Learning</h3>
                        <img
                            src={learningImg}
                            alt="Learning"
                            className="home-card-image"
                        />
            <p>
              Strong foundations in AI and Machine Learning through workshops,
              tutorials, and guided projects.
            </p>
          </div>

          <div className="pixel-card">
            <h3>Industry</h3>
                    <img
                            src={industryImg}
                            alt="Industry"
                            className="home-card-image"
                        />
            <p>
              Meaningful industry engagement, real-world problems, and career
              development opportunities.
            </p>
          </div>

          <div className="pixel-card">
            <h3>Community</h3>
                    <img                        
                    src={communityImg}                      
                    alt="Community"                        
                    className="home-card-image"                    
                    />    
            <p>
              An inclusive, student-driven space to collaborate, experiment,
              and grow together.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About