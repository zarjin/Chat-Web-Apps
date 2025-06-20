import UserSlider from '../components/UserSlider'
import ChatRoom from '../components/ChatRoom'
export default function Chats() {
  return (
    <div className="w-full h-ful flex items-center justify-start overflow-hidden">
      <UserSlider />
      <ChatRoom />
    </div>
  )
}
