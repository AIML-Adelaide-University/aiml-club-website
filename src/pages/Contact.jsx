import { useEffect, useState } from "react"
import { supabase } from "../supabase/client"
import mailIcon from "../assets/icons/mail.svg?url"
import instagramIcon from "../assets/icons/instagram.svg?url"
import linkedinIcon from "../assets/icons/linkedin.svg?url"
import discordIcon from "../assets/icons/discord.svg?url"

function Contact() {
  const [settings, setSettings] = useState({})
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase
        .from("settings")
        .select("key, value")

      const map = {}
      data?.forEach(item => {
        map[item.key] = item.value
      })

      setSettings(map)
    }

    fetchSettings()
  }, [])

  const mailtoLink = () => {
    const subject = encodeURIComponent("AIML Club Contact")
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )

    return `mailto:${settings.contact_email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="home-wrapper pixel-font">
      {/* HERO */}
      <section className="home-hero contact-hero">
        <h1 className="handjet-title">
          <span className="typing" style={{ "--chars": 10 }}>
            CONTACT US
          </span>
        </h1>

        <p className="home-tagline" style={{ maxWidth: 520, margin: "0 auto" }}>
          Have a question, idea, or want to collaborate?
          <br />
          We’d love to hear from you.
        </p>
      </section>

      {/* FORM */}
      <section className="contact-section">
        <div className="pixel-card contact-card">
          <input
            className="pixel-input"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="pixel-input"
            placeholder="Your Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            className="pixel-input"
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />

          <a href={mailtoLink()} className="pixel-btn">
            Send Message →
          </a>
        </div>
      </section>

      {/* ICON LINKS */}
     <div className="contact-icons">

  {settings.contact_instagram && (
    <a href={settings.contact_instagram} target="_blank" rel="noreferrer">
      <img src={instagramIcon} alt="Instagram" className="contact-icon" />
    </a>
  )}

  {settings.contact_linkedIn && (
    <a href={settings.contact_linkedIn} target="_blank" rel="noreferrer">
      <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
    </a>
  )}

  {settings.contact_discord && (
    <a href={settings.contact_discord} target="_blank" rel="noreferrer">
      <img src={discordIcon} alt="Discord" className="contact-icon discord" />
    </a>
  )}
</div>
    </div>
  )
}

export default Contact