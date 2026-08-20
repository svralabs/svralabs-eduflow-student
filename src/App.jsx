import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Screen1DashboardHome from './pages/Screen1DashboardHome';
import Screen2HomeworkSearch from './pages/Screen2HomeworkSearch';
import Screen3CalendarExamsSchedule from './pages/Screen3CalendarExamsSchedule';
import DetailTransaksi from './pages/DetailTransaksi';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screen1DashboardHome />} />
<Route path='/screen-1-dashboard-home' element={<Screen1DashboardHome />} />
<Route path='/screen-2-homework-search' element={<Screen2HomeworkSearch />} />
<Route path='/screen-3-calendar-exams-schedule' element={<Screen3CalendarExamsSchedule />} />
<Route path='/detail-transaksi' element={<DetailTransaksi />} />
        <Route path="*" element={<Screen1DashboardHome />} />
      </Routes>
    </BrowserRouter>
  );
}
