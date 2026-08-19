import { Search, SlidersHorizontal, Music, ScrollText, Sigma, Compass, ClipboardCheck, ChevronRight } from 'lucide-react'
import TopBar from '../components/TopBar.jsx'

const subjects = [
  { name: 'Music', icon: Music, bg: 'bg-[#FFEFED]', fg: 'text-[#B2292F]' },
  { name: 'History', icon: ScrollText, bg: 'bg-[#FFF8E6]', fg: 'text-[#852F00]' },
  { name: 'Math', icon: Sigma, bg: 'bg-[#EEF2FF]', fg: 'text-[#4900E5]' },
  { name: 'Physics', icon: Compass, bg: 'bg-[#E6FBF0]', fg: 'text-[#008545]' },
]

const homework = [
  { name: 'Music', date: '19 May', icon: Music, bg: 'bg-[#FFEFED]', fg: 'text-[#B2292F]' },
  { name: 'Math', date: '21 May', icon: Sigma, bg: 'bg-[#EEF2FF]', fg: 'text-[#4900E5]' },
]

export default function Homework() {
  return (
    <>
      <TopBar name="Student" />

      <div className="px-container-margin mt-2">
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-3 bg-surface-container-lowest rounded-full p-1.5 shadow-sm border border-outline-variant/30"
        >
          <div className="flex-1 flex items-center pl-4 gap-3">
            <Search size={18} className="text-outline" />
            <input
              className="w-full bg-transparent border-none outline-none focus:ring-0 text-on-surface placeholder:text-outline/70 text-body-base py-2"
              placeholder="Search"
              type="text"
            />
          </div>
          <button
            type="button"
            aria-label="Filters"
            className="bg-primary text-white p-2.5 rounded-full flex items-center justify-center active:scale-90 transition-transform"
          >
            <SlidersHorizontal size={18} />
          </button>
        </form>
      </div>

      <section className="mt-8">
        <div className="flex justify-between items-end px-container-margin mb-4">
          <h2 className="text-heading-md text-on-background">Subjects</h2>
          <button className="text-label-sm text-primary font-semibold">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-container-margin hide-scrollbar">
          {subjects.map((s) => {
            const Icon = s.icon
            return (
              <button
                key={s.name}
                className={`flex items-center gap-2 ${s.bg} ${s.fg} px-4 py-2.5 rounded-full whitespace-nowrap active:scale-95 transition-transform`}
              >
                <Icon size={18} />
                <span className="text-label-sm font-bold">{s.name}</span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="mt-8">
        <div className="flex justify-between items-end px-container-margin mb-4">
          <h2 className="text-heading-md text-on-background">Homework</h2>
          <button className="text-label-sm text-primary font-semibold">See all</button>
        </div>
        <div className="grid grid-cols-2 gap-4 px-container-margin">
          {homework.map((h) => {
            const Icon = h.icon
            return (
              <article
                key={h.name}
                className="bg-surface-card p-card-padding rounded-3xl shadow-[0_4px_20px_rgba(73,0,229,0.04)] flex flex-col items-start gap-4 active:scale-[0.98] transition-transform"
              >
                <div className={`w-10 h-10 rounded-xl ${h.bg} ${h.fg} flex items-center justify-center`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-label-sm text-text-muted mb-1">{h.name}</h3>
                  <p className="text-body-base font-bold text-on-background">{h.date}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mt-8 px-container-margin">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-heading-md text-on-background">Tests</h2>
          <button className="text-label-sm text-primary font-semibold">See all</button>
        </div>
        <button className="w-full bg-surface-card p-card-padding rounded-3xl shadow-[0_4px_20px_rgba(73,0,229,0.04)] flex items-center gap-4 active:scale-[0.99] transition-transform">
          <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] text-[#4900E5] flex items-center justify-center">
            <ClipboardCheck size={28} />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-body-base font-bold text-on-background">Math Test April</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-label-sm text-text-muted">Math</span>
              <div className="w-1 h-1 rounded-full bg-outline/40" />
              <span className="text-label-sm text-text-muted">12 Quizzes</span>
            </div>
          </div>
          <ChevronRight size={20} className="text-outline" />
        </button>
      </section>
    </>
  )
}
