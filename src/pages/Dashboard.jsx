import { useState } from 'react'
import { Star, FileText, GraduationCap, BookOpen, BarChart3, ChevronRight } from 'lucide-react'
import TopBar from '../components/TopBar.jsx'

const filters = ['Forum', 'Add. classes', 'Lessons']

const subjects = [
  {
    name: 'Culture',
    teacher: 'Dianne Russell',
    icon: Star,
    bg: 'bg-primary-container',
    text: 'text-white',
    sub: 'text-on-primary-container',
    accent: 'bg-white/20',
    blob: 'bg-white/10',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGDpMQgF7UzYJxe16SDU3ReifMBnxRe0lsEqxwu6NZkCn-z4atIUN8eWV9p0T3-SIx2q9J5mnA08V1U1XTrtT4B9ALceueYjzcnj6oovWIqEOrJWcHtMAveor-FlfVwyXPTnMqNC1ITTKyVMBacwG6DCJKxfZs4-VLZdry2Lyr0VQ7IyYCoZTb1NaaLa_AeYBxCJeqRxX3tMa7nvr6eO1F75De6XCVwiSQ_F54hVaruE9UZyLakc4iIA',
  },
  {
    name: 'History',
    teacher: 'Amy Adams',
    icon: FileText,
    bg: 'bg-secondary-container',
    text: 'text-white',
    sub: 'text-on-secondary-container',
    accent: 'bg-white/20',
    blob: 'bg-white/10',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBDX690UKVtjMnIxfuHsXyoyu0YahpRbozwZa8L2UEJ-w44Kd-us7nzFOkN_uoMQiFQrgzH34IhRNR8NpLHwlEkN__KE0aOTGO2Owzitinc3vS8thJugGnqz8HoouWxL_iss7IK3U-uJ4bVnGHp0tUfuM95dlta9mLIrUFb-5jOr2AFAW3gmSw7hlJM5kGH6lrConDdFjk5y3rEVeqtRh2BVRBd6gstkqvBpeRs5Nod42jWWhcbts34Ug',
  },
  {
    name: 'Math',
    teacher: 'Amy Johnson',
    icon: GraduationCap,
    bg: 'bg-tertiary-yellow',
    text: 'text-on-tertiary-fixed',
    sub: 'text-on-tertiary-fixed-variant',
    accent: 'bg-black/10',
    blob: 'bg-black/5',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAkj09cpe3G8aYPk5yQsRkdwNfWVfjqxaqvI9aeTOv5dLmVUG6hWDGZDm9wpUPvcz8BkJd0W0ZaeYSikeZ6jhDeWXOtw044j2R9X8Hci0Iwlgc53oyO1D1a3wC6fsiPD7TRi4Jojex4hBSR7GUzZ2OsMFvepIk-qu7y5heRkhkV42U9URWuam_4jgVlIjMZwoaWCKgquegE9c7KAWbOCHlR-IHp9XfuwjaOkphNdKOJ-2LxVLa8uOUxQ',
  },
  {
    name: 'Literature',
    teacher: 'Leona Smith',
    icon: BookOpen,
    bg: 'bg-quaternary-green',
    text: 'text-white',
    sub: 'text-white/90',
    accent: 'bg-white/30',
    blob: 'bg-white/20',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_5wHQUOQ-pMI554Xzpo9OLdmYAYyR-baPpVBCqYy4Ay5XRsbOttJ7tmEuJyoZWqqouVsJtCNyGEmXcos8DsqqYNZwloz_DWT8RroHXMtNkh0IY8JQP3Z42Lso-VPgotNBROQx4x8CH5keyl7_WnMx7A-ngmRAqRDeXWrYecP-hXuHLTAFbWT_vovX9Zd82Fw5FjFOywLCBCql73H6TE9PfQb-1Dj942zhZOZ-t5v7bQTjMBtj1Bq_ow',
  },
]

export default function Dashboard() {
  const [active, setActive] = useState('Lessons')

  return (
    <>
      <TopBar name="Anna Lane" />
      <main className="px-container-margin">
        <nav className="flex gap-2 overflow-x-auto py-4 hide-scrollbar" aria-label="Filters">
          {filters.map((f) => {
            const isActive = active === f
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={[
                  'px-6 py-2.5 rounded-full text-label-sm font-medium whitespace-nowrap transition-all',
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                    : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high',
                ].join(' ')}
              >
                {f}
              </button>
            )
          })}
        </nav>

        <div className="grid grid-cols-2 gap-4 mt-2">
          {subjects.map((s) => {
            const Icon = s.icon
            return (
              <article
                key={s.name}
                className={`${s.bg} rounded-3xl p-card-padding flex flex-col justify-between aspect-[4/5] relative overflow-hidden active:scale-[0.98] transition-transform`}
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 ${s.blob} rounded-full blur-2xl`} />
                <div className="flex justify-between items-start">
                  <div className={`w-10 h-10 ${s.accent} rounded-xl flex items-center justify-center`}>
                    <Icon size={20} className={s.text} />
                  </div>
                </div>
                <div className="relative">
                  <h3 className={`${s.text} text-headline-md mb-1`}>{s.name}</h3>
                  <p className={`${s.sub} text-label-sm opacity-90`}>Teacher: {s.teacher}</p>
                  <div className="mt-4 w-8 h-8 rounded-full overflow-hidden border border-white/30">
                    <img className="w-full h-full object-cover" src={s.avatar} alt={s.teacher} />
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <button className="mt-4 w-full p-card-padding bg-surface-container-lowest rounded-3xl flex items-center justify-between border border-outline-variant/30 hover:bg-surface-container-low transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <BarChart3 size={22} className="text-primary" />
            </div>
            <div className="text-left">
              <h4 className="text-heading-md text-on-surface">Weekly Progress</h4>
              <p className="text-label-sm text-text-muted">85% of goals completed</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-outline" />
        </button>
      </main>
    </>
  )
}
