import { Routes, Route, Navigate } from 'react-router-dom'
import BottomNav from './components/BottomNav.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Homework from './pages/Homework.jsx'
import Calendar from './pages/Calendar.jsx'
import Profile from './pages/Profile.jsx'
import TransactionDetail from './pages/TransactionDetail.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background pb-32">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transaction/:id" element={<TransactionDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
    </div>
  )
}
