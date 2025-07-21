import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setOpen(!open)} className="focus:outline-none">
        <span>Menu</span>
        <img
          src="/default-avatar.png"
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-purple-500"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50 overflow-hidden">
          <button
            onClick={() => {
              navigate("/dashboard");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
