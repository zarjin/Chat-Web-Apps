import { FaCircle } from 'react-icons/fa'

const users = [
  { id: 1, name: 'Alice Johnson', status: 'online', initials: 'AJ' },
  { id: 2, name: 'Bob Smith', status: 'offline', initials: 'BS' },
  { id: 3, name: 'Charlie Lee', status: 'online', initials: 'CL' },
  { id: 4, name: 'Diana Prince', status: 'away', initials: 'DP' },
]

const statusColors = {
  online: 'text-green-400',
  offline: 'text-gray-400',
  away: 'text-yellow-400',
}

export default function ChatUserList() {
  return (
    <div className="w-80 h-screen bg-white shadow-xl p-6 flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Chats</h2>
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition mb-2 cursor-pointer"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow">
                <span className="text-lg text-white font-semibold">
                  {user.initials}
                </span>
              </div>
              <FaCircle
                className={`absolute bottom-0 right-0 text-xs ${
                  statusColors[user.status]
                } bg-white rounded-full`}
                style={{ border: '2px solid white' }}
              />
            </div>
            <div>
              <div className="font-medium text-gray-800">{user.name}</div>
              <div className="text-xs text-gray-500 capitalize">
                {user.status}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition">
        Profile
      </button>
    </div>
  )
}
