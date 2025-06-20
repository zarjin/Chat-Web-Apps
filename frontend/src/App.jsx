import { BrowserRouter, Routes, Route } from 'react-router'
import Chats from './pages/Chats'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chats />} />
      </Routes>
    </BrowserRouter>
  )
}
