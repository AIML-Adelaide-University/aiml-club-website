import { Navigate } from "react-router-dom"
import { useAdmin } from "./useAdmin"

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAdmin()

  if (loading) return <p className="text-center mt-5">Loading...</p>
  if (!user) return <Navigate to="/admin/login" />

  return children
}