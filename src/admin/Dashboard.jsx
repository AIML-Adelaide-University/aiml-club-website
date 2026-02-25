import { supabase } from "../supabase/client"
import EventsAdmin from "./EventsAdmin"
import AboutAdmin from "./AboutAdmin"

function Dashboard() {
  const logout = async () => {
    await supabase.auth.signOut()
    window.location.href = "/"
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-4">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </div>

      <EventsAdmin />
      <hr className="my-5" />
      <AboutAdmin />
    </div>
  )
}

export default Dashboard