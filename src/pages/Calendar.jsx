import { useState } from 'react'
import { ChevronLeft, ChevronRight, User } from 'lucide-react'
import TopBar from '../components/TopBar.jsx'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

// Events per (monthIndex 0-11, day) — sample from Stitch May layout
const EVENTS_SEED = {
  4: { // May
    1: { badge: null },
    7: { badge: '+2' },
    17: { badge: '+2' },
    29: { ring: true },
  },
}

function buildMonth(year, monthIdx) {
  const first = new Date(year, monthIdx, 1)
  const startWeekday = (first.getDay() + 6) % 7 // Monday = 0
  const daysInMonth = new Date(year, monthIdx + 1, 0).getDate()
  const prevMonthDays = new Date(year, monthIdx, 0).getDate()

  const cells = []
  for (let i = startWeekday - 1; i >= 0; i--) cells.push({ day: prevMonthDays - i, outside: true })
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, outside: false })
  while (cells.length % 7 !== 0) cells.push({ day: cells.length - daysInMonth - startWeekday + 1, outside: true })
  return cells
}

const upcomingExams = [
  {
    day: 17, month: 'May', title: 'Math Test', instructor: 'Dr. Anna Lesli',
    tint: 'bg-secondary-container/10', color: 'text-secondary-container',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj9-AQiE5wlPFS2n4jtt6wgSbwXhU76Dl9aGqsi3vV9CeyHeuXOjP0L1dnhSRgAfQVvI8qYAv1hvcwAu6ygCCieVyXU3_t51XKTaTc1sYVJ8Xhsr_QyDb8Jpfb7GPfYdwRhUwErw7Oa7Vtl-YdmwalXKqc4EaN-5JhSkrHN5Nros3sY9AbGH6y3OvcGk7qlS6nqZ55BVhrwkOnhmP4mqtgiUpIJBeJETZcUPHoRWd6oCdqJMI6F_UDeA',
  },
  {
    day: 17, month: 'May', title: 'History Test', instructor: 'Dr. Kate Adams',
    tint: 'bg-[#fe6060]/10', color: 'text-[#fe6060]',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQn1lVva9poPwhoit-2TYvrWjevh6TtcZel4lYEOppA9uUL9XEZPEmw4jA3kYIVVmCctjRaJkBAWQQR4ChAwx4hsOrIF_DOo1mvPG489nWIBPgv5bMkPFP3BcIRIFrTuOAgDVt0Db9COxphKX8LzpKQWrDEmYQ0L8c_MHFOAiXAUFCbBAAeywO87QzeUcQm7xdZPHlQi5d0toWN9er7_pgvPWYvPcHyoAl61y0NpkHrx-1j1hBLC9t3w',
  },
  {
    day: 20, month: 'May', title: 'Physics Quiz', instructor: 'Prof. Marcus J.',
    tint: 'bg-primary-fixed-dim', color: 'text-primary',
    avatar: null,
  },
]

export default function CalendarPage() {
  const [year, setYear] = useState(2026)
  const [monthIdx, setMonthIdx] = useState(4) // May
  const [selected, setSelected] = useState(1)

  const cells = buildMonth(year, monthIdx)
  const events = EVENTS_SEED[monthIdx] || {}

  const shift = (delta) => {
    let m = monthIdx + delta
    let y = year
    if (m < 0) { m = 11; y-- }
    if (m > 11) { m = 0; y++ }
    setMonthIdx(m); setYear(y); setSelected(null)
  }

  return (
    <>
      <TopBar name="Student" />
      <main className="px-container-margin mt-2">
        <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-headline-md text-on-surface">{MONTHS[monthIdx]}</h2>
            <div className="flex gap-2">
              <button aria-label="Previous month" onClick={() => shift(-1)}
                className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
                <ChevronLeft size={20} />
              </button>
              <button aria-label="Next month" onClick={() => shift(1)}
                className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-outline">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="calendar-grid text-on-surface-variant text-label-sm mb-4">
            {['Mo','Tu','We','Th','Fr','Sa','Su'].map((d) => <div key={d}>{d}</div>)}
          </div>

          <div className="calendar-grid gap-y-4">
            {cells.map((c, i) => {
              if (c.outside) {
                return <div key={i} className="w-10 h-10 mx-auto flex items-center justify-center text-outline-variant">{c.day}</div>
              }
              const ev = events[c.day]
              const isSelected = selected === c.day
              const isEvent = ev && ev.badge
              const isRing = ev && ev.ring

              const base = 'relative w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-colors'
              let cls = `${base} text-on-surface hover:bg-surface-container-high`
              if (isSelected) cls = `${base} bg-secondary-container text-white`
              else if (isEvent) cls = `${base} bg-primary text-white shadow-md shadow-primary/20`
              else if (isRing) cls = `${base} border-2 border-primary-fixed-dim text-primary`

              return (
                <div key={i} className="flex items-center justify-center">
                  <button onClick={() => setSelected(c.day)} className={cls} aria-label={`${MONTHS[monthIdx]} ${c.day}`}>
                    {c.day}
                    {isEvent && (
                      <span className="absolute -top-1 -right-1 bg-secondary text-[10px] px-1 rounded-full text-white border-2 border-surface-container-lowest">
                        {ev.badge}
                      </span>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
        </section>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-headline-md text-on-surface">Upcoming exams</h3>
          <button className="text-primary text-label-sm hover:underline">See all</button>
        </div>

        <div className="space-y-4">
          {upcomingExams.map((e, idx) => (
            <button
              key={idx}
              className="w-full bg-surface-card rounded-3xl p-card-padding shadow-sm flex items-start gap-4 active:scale-[0.98] transition-transform text-left"
            >
              <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${e.tint} flex flex-col items-center justify-center`}>
                <span className={`${e.color} font-bold text-xl`}>{e.day}</span>
                <span className={`${e.color} text-[10px] uppercase font-bold tracking-wider`}>{e.month}</span>
              </div>
              <div className="flex-grow">
                <h4 className="text-heading-md text-on-surface mb-1">{e.title}</h4>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-surface-container-high flex items-center justify-center">
                    {e.avatar
                      ? <img className="w-full h-full object-cover" src={e.avatar} alt={e.instructor} />
                      : <User size={14} className="text-outline" />}
                  </div>
                  <p className="text-on-surface-variant text-label-sm">Instructor • {e.instructor}</p>
                </div>
              </div>
              <ChevronRight size={20} className="self-center text-outline" />
            </button>
          ))}
        </div>
      </main>
    </>
  )
}
