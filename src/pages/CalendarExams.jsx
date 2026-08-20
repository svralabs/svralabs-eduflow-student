import React, { useState, useEffect } from 'react';
import CalendarView from '../components/CalendarView';
import EventDetailModal from '../components/EventDetailModal';

export default function CalendarExams() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    fetchEvents();
  }, [currentDate]);

  const fetchEvents = async () => {
    try {
      const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      const response = await fetch(`/api/calendar/events?start=${startDate.toISOString()}&end=${endDate.toISOString()}`);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleDateChange = (date) => {
    setCurrentDate(date);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <header className="flex justify-between items-center px-container-margin py-4 w-full bg-background dark:bg-background">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high ring-2 ring-primary/10">
            <img className="w-full h-full object-cover" alt="Student portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Kog54SLJrp3bAkWlTq8XGO85uW45u3yTzYcsYPjce_FiaJe64qF0lDNO5FEBhhM9db2-k559EFfs2BgFCZOBVRjDqHxgndmA5WnnK6vHsHeIHRB4IK75yKNeS-NAqpMbGOuIK3sBK0zx36T7fMKAeL5bXmBDRc6_g4GZYAaq-fB3BfHNoUU2Nd9zjVOJmCJcnEZMhvx2TnFZ93w4EKMvp7ohsgXi4nL_-zCOKrsMdHgjmQVxR3g33A" />
          </div>
          <h1 className="font-headline-md-mobile text-headline-md-mobile font-bold text-primary">Good morning, Student</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-full transition-colors active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
      </header>
      <main className="px-container-margin mt-2">
        <CalendarView
          events={events}
          currentDate={currentDate}
          onEventClick={handleEventClick}
          onDateChange={handleDateChange}
        />
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-headline-md text-headline-md text-on-surface">Upcoming exams</h3>
          <button className="text-primary font-label-sm text-label-sm hover:underline">See all</button>
        </div>
        <div className="space-y-4">
          {events.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="bg-surface-card rounded-3xl p-card-padding shadow-sm flex items-start gap-4 active:scale-[0.98] transition-transform duration-200 cursor-pointer"
              onClick={() => handleEventClick(event)}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary-container/10 flex flex-col items-center justify-center">
                <span className="text-secondary-container font-bold text-xl">{new Date(event.date).getDate()}</span>
                <span className="text-secondary-container text-[10px] uppercase font-bold tracking-wider">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-heading-md text-heading-md text-on-surface mb-1">{event.title}</h4>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm mb-2">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      {isModalOpen && selectedEvent && (
        <EventDetailModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </div>
  );
}
