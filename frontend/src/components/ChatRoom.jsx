import Header from './Header'

export default function ChatRoom() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <div className="chat-container flex flex-col items-center justify-center h-full">
        <div className="chat-box w-full max-w-2xl h-[70vh] bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-6 overflow-y-auto border border-gray-200">
          <div className="message-list flex flex-col space-y-6">
            {/* Example messages */}
            <div className="message self-start max-w-[70%] bg-blue-100 p-3 rounded-2xl rounded-bl-sm shadow">
              <p className="text-gray-800 text-sm">User: Hello!</p>
            </div>
            <div className="message self-end max-w-[70%] bg-green-100 p-3 rounded-2xl rounded-br-sm shadow">
              <p className="text-gray-800 text-sm">
                Bot: Hi there! How can I help you today?
              </p>
            </div>
          </div>
        </div>

        <form className="input-area mt-6 w-full max-w-2xl flex items-center space-x-3 bg-white/90 rounded-xl shadow px-4 py-3 border border-gray-200">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-indigo-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
