import { useEffect, useState } from "react"
import { supabase } from "../supabase/client"
import friendsImg from "../assets/friends.png"

function Join() {
  const [joinLink, setJoinLink] = useState("")

  useEffect(() => {
    const fetchJoinLink = async () => {
      const { data } = await supabase
        .from("settings")
        .select("key, value")
        .eq("key", "join_link")
        .single()

      if (data?.value) setJoinLink(data.value)
    }

    fetchJoinLink()
  }, [])

  return (
    <div className="home-wrapper pixel-font">
      {/* HERO */}
      <section className="home-hero">
        <h1 className="handjet-title">
          <span className="typing" style={{ "--chars": 9 }}>
            JOIN US
          </span>
        </h1>

        <p className="home-tagline" style={{ maxWidth: 520, margin: "0 auto" }}>
          Be part of a student-led community exploring
          <br />
          AI, ML, and real-world innovation.
        </p>
      </section>

      {/* JOIN CARD */}
    <section className="join-section">
      <div className="pixel-card join-card">

        {/* 🦖 DINO FRIENDS IMAGE */}
        <img
          src={friendsImg}
          alt="AIML Dino Friends"
          className="join-hero-image"
        />

        <p style={{ textAlign: "center" }}>
          Whether you’re a beginner or experienced,
          <br />
          AIML Club is a place to learn, build, and grow.
        </p>

        <ul className="join-points">
          <li>• Hands-on workshops</li>
          <li>• Hackathons & challenges</li>
          <li>• Industry talks</li>
          <li>• Like-minded peers</li>
        </ul>

        {joinLink && (
          <a
            href={joinLink}
            target="_blank"
            rel="noreferrer"
            className="pixel-btn join-btn"
          >
            Join Now →
          </a>
        )}
      </div>
    </section>
    </div>
  )
}

export default Join