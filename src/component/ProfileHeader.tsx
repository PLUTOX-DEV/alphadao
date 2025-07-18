import { useState, useRef, useEffect } from "react"
import {useProfiles} from "../hooks/useProfile"
import { useAuth } from "../context/AuthContext"



import { useNavigate } from "react-router-dom" // or `next/router` if using Next.js

export function ProfileMenu() {
  const{loading, error , profiles} = useProfiles()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const {logout} = useAuth()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setOpen(!open)} className="focus:outline-none">
        <span>Gm,{profiles?.fullname || "Guest"}</span>
        <img
          src=""
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-purple-500"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50 overflow-hidden">
          <button
            onClick={() => {
              navigate("/dashboard")
              setOpen(false)
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => {
              logout()
              setOpen(false)
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}