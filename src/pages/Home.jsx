import { useEffect, useState } from "react"
import { supabase } from "../supabase/client"
import workshopImg from "../assets/workshop.jpg"
import hackathonImg from "../assets/hackathon.png"
import talkImg from "../assets/talk.jpeg"

function Home() {

  return (
     <div className="home-wrapper pixel-font">
      {/* 🔥 HERO */}
      <section className="home-hero">
        <h1 className="handjet-title">
            <span className="typing">AIML Club</span>
        </h1>
                <p className="home-subtitle">
          Artificial Intelligence & Machine Learning
        </p>
        <p className="home-tagline">
          A student-led community exploring AI, ML, and real-world tech.
        </p>

      </section>

      {/* ⚙️ WHAT WE DO */}
        <section className="home-section">

        <div className="home-cards">
            <div className="pixel-card">
            <h3>Workshops</h3>
            <img
                src={workshopImg}
                alt="Workshops"
                className="home-card-image"
            />
            
            <p>
                Practical AI & ML workshops designed to build technical expertise, strengthen
                professional soft skills, and connect students with real industry challenges
                and mentors.
            </p>
            </div>

            <div className="pixel-card">
            <h3>Hackathons</h3>
            <img
                src={hackathonImg}
                alt="Hackathons"
                className="home-card-image"
            />
            
            <p>
            Collaborative hackathons designed to strengthen problem-solving skills,
            explore AI prompt engineering and prompt injection techniques, and foster
            an entrepreneurial mindset through fast-paced, real-world challenges.
            </p>
            </div>

            <div className="pixel-card">
            <h3>Talks</h3>
            <img
                src={talkImg}
                alt="Talks"
                className="home-card-image"
            />
            
            <p>
            Expert-led talks featuring industry professionals, researchers, and academics
            sharing insights on AI, machine learning, career pathways, and emerging trends
            shaping the future of technology.
            </p>
            </div>
        </div>
        </section>

    </div>
  )
}

export default Home