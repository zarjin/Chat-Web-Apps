import React from 'react'

export default function Header() {
  return (
    <header className="w-full h-20 bg-white shadow-lg flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <img
          src="/images/profile.png"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-sm"
        />
        <div>
          <span className="block text-xl font-bold text-gray-800">
            User Name
          </span>
          <span className="block text-sm text-gray-400">Online</span>
        </div>
      </div>
      <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-md hover:from-red-600 hover:to-pink-600 transition">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
          />
        </svg>
        Logout
      </button>
    </header>
  )
}
