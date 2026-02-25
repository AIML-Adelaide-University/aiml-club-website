import { useEffect, useState } from "react"
import { supabase } from "../supabase/client"

export default function EventsAdmin() {
  const [events, setEvents] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  const loadEvents = async () => {
    const { data } = await supabase.from("events").select("*").order("date")
    setEvents(data || [])
  }

  const addEvent = async () => {
    await supabase.from("events").insert([{ title, description, date }])
    setTitle(""); setDescription(""); setDate("")
    loadEvents()
  }

  const deleteEvent = async (id) => {
    await supabase.from("events").delete().eq("id", id)
    loadEvents()
  }

  useEffect(() => { loadEvents() }, [])

  return (
    <>
      <h4>Manage Events</h4>

      <input className="form-control mb-2" placeholder="Title"
        value={title} onChange={e => setTitle(e.target.value)} />

      <input className="form-control mb-2" placeholder="Description"
        value={description} onChange={e => setDescription(e.target.value)} />

      <input className="form-control mb-2" type="date"
        value={date} onChange={e => setDate(e.target.value)} />

      <button className="btn btn-success mb-4" onClick={addEvent}>
        Add Event
      </button>

      {events.map(e => (
        <div key={e.id} className="card p-3 mb-2">
          <strong>{e.title}</strong>
          <small>{e.date}</small>
          <p>{e.description}</p>
          <button className="btn btn-sm btn-outline-danger"
            onClick={() => deleteEvent(e.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  )
}