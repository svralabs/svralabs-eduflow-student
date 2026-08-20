import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Screen1DashboardHome from './pages/Screen1DashboardHome';
import Screen2HomeworkSearch from './pages/Screen2HomeworkSearch';
import Screen3CalendarExamsSchedule from './pages/Screen3CalendarExamsSchedule';
import DetailTransaksi from './pages/DetailTransaksi';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">eduflow-student</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Screen 1 Dashboard Home</Link>
            <Link to="/screen-2-homework-search" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Screen 2 Homework Search</Link>
            <Link to="/screen-3-calendar-exams-schedule" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Screen 3 Calendar Exams Schedule</Link>
            <Link to="/detail-transaksi" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Transaksi</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<Screen1DashboardHome />} />
          <Route path="/screen-2-homework-search" element={<Screen2HomeworkSearch />} />
          <Route path="/screen-3-calendar-exams-schedule" element={<Screen3CalendarExamsSchedule />} />
          <Route path="/detail-transaksi" element={<DetailTransaksi />} />
          <Route path="*" element={<Screen1DashboardHome />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
