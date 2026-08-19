import { NavLink, useLocation } from 'react-router-dom'
import { Home, BookOpen, Calendar as CalendarIcon, User } from 'lucide-react'

const items = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/homework', icon: BookOpen, label: 'Homework' },
  { to: '/calendar', icon: CalendarIcon, label: 'Calendar' },
  { to: '/profile', icon: User, label: 'Profile' },
]

export default function BottomNav() {
  const { pathname } = useLocation()
  // Hide on nested/detail routes
  if (pathname.startsWith('/transaction/')) return null

  return (
    <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-4 py-3 mx-auto max-w-md bg-primary-container shadow-lg shadow-primary/20 rounded-full w-[90%]">
      {items.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          aria-label={label}
          className={({ isActive }) =>
            [
              'flex items-center justify-center rounded-full p-3 transition-transform active:scale-90',
              isActive
                ? 'bg-surface-container-lowest text-primary shadow-sm'
                : 'text-white/70 hover:bg-white/10',
            ].join(' ')
          }
        >
          <Icon size={22} strokeWidth={2} />
        </NavLink>
      ))}
    </nav>
  )
}
