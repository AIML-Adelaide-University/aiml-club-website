import { useEffect, useState } from "react"
import { supabase } from "../supabase/client"

function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("id, title, description, event_date, url, image_url")
        .order("event_date", { ascending: true })

      if (!error) setEvents(data || [])
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div className="home-wrapper pixel-font">
      {/* 🔥 HERO (MATCHES HOME + ABOUT) */}
      <section className="home-hero">
        <h1 className="handjet-title">
          <span className="typing">EVENTS</span>
        </h1>

        <p className="home-tagline">
          Workshops, hackathons, talks, and hands-on AI experiences.
        </p>
      </section>

      {/* 📅 EVENTS */}
      <section className="home-section">
        {loading && <p>Loading events…</p>}

        {!loading && events.length === 0 && (
          <p>No upcoming events.</p>
        )}

        <div className="home-cards">
          {events.map((event) => (
            <div key={event.id} className="pixel-card">
              {event.image_url && (
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="home-card-image"
                />
              )}

              <h3>{event.title}</h3>

              <p style={{ opacity: 0.7, fontSize: "14px" }}>
                {new Date(event.event_date).toDateString()}
              </p>

              <p>{event.description}</p>

              {event.url && (
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn"
                >
                  Learn More →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Events