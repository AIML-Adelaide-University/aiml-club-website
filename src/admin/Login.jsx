import { useState } from "react"
import { supabase } from "../supabase/client"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) setError(error.message)
    else window.location.href = "/admin/dashboard"
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-3">Admin Login</h2>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleLogin}>
        <input className="form-control mb-2"
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input className="form-control mb-3"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-info w-100">Login</button>
      </form>
    </div>
  )
}

export default Login