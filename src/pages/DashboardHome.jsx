import { useState, useEffect } from 'react';
import AnnouncementCard from '../components/AnnouncementCard';
import UpcomingDeadlineCard from '../components/UpcomingDeadlineCard';
import QuickActionButton from '../components/QuickActionButton';

export default function DashboardHome() {
  const [summary, setSummary] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [summaryRes, announcementsRes] = await Promise.all([
          fetch('/api/dashboard/summary'),
          fetch('/api/announcements')
        ]);

        if (!summaryRes.ok || !announcementsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const summaryData = await summaryRes.json();
        const announcementsData = await announcementsRes.json();

        setSummary(summaryData);
        setAnnouncements(announcementsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-error">{error}</div>;

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <header className="flex justify-between items-center px-container-margin py-4 w-full bg-background dark:bg-background">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbaVlS5vIMotgrFuZqYKufUUcCpEuGasl8ciHbdqaGdVeYla9jfYpfsVIT9dbeq-v1U2yYtAPIHUtsj_nIV7FA3eXfIG8FXw75LA-pornU4X212D8wcwZEAiiKp1FX-8uexdwp_u6Msy0BkOERxoTwmMYiUc41n4GCceDgT3E9Sseplv_O_yzZuIfARZb09JC_y5qGcXTsNzXeEYZlqFOM_jm5fIAfT5TLI04mJcIQ3pui29A6Hvg3w"
              alt="Anna Lane"
            />
          </div>
          <h1 className="font-headline-md-mobile text-headline-md-mobile font-bold text-primary">Good morning, Anna Lane!</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-colors active:scale-95">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
      </header>

      <main className="px-container-margin">
        <nav className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
          <QuickActionButton label="Forum" active={false} />
          <QuickActionButton label="Add. classes" active={false} />
          <QuickActionButton label="Lessons" active={true} />
        </nav>

        <div className="grid grid-cols-2 gap-4 mt-2">
          {summary?.subjects?.map((subject) => (
            <div
              key={subject.id}
              className={`rounded-3xl p-card-padding flex flex-col justify-between aspect-[4/5] relative overflow-hidden group active:scale-[0.98] transition-transform ${subject.bgColor}`}
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">{subject.icon}</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-headline-md text-headline-md mb-1">{subject.name}</h3>
                <p className={`text-on-${subject.bgColor.split('-')[0]}-container text-label-sm font-label-sm opacity-90`}>
                  Teacher: {subject.teacher}
                </p>
                <div className="mt-4 w-8 h-8 rounded-full overflow-hidden border border-white/30">
                  <img
                    className="w-full h-full object-cover"
                    src={subject.teacherImage}
                    alt={subject.teacher}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary mb-4">Announcements</h2>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary mb-4">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {summary?.deadlines?.map((deadline) => (
              <UpcomingDeadlineCard key={deadline.id} deadline={deadline} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
