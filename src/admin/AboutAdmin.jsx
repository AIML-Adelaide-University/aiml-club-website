import { useEffect, useState } from "react"
import { supabase } from "../supabase/client"

export default function AboutAdmin() {
  const [content, setContent] = useState("")

  const loadAbout = async () => {
    const { data } = await supabase.from("about").select("*").single()
    if (data) setContent(data.content)
  }

  const saveAbout = async () => {
    await supabase.from("about").upsert({ id: 1, content })
    alert("About content updated")
  }

  useEffect(() => { loadAbout() }, [])

  return (
    <>
      <h4>Edit About Page</h4>
      <textarea
        className="form-control mb-2"
        rows="6"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button className="btn btn-primary" onClick={saveAbout}>
        Save About Content
      </button>
    </>
  )
}