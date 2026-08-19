import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ReceiptText, ChevronRight, Settings, LogOut } from 'lucide-react'
import TopBar from '../components/TopBar.jsx'

const rows = [
  { icon: Mail, label: 'Email', value: 'anna.lane@eduflow.app' },
  { icon: Phone, label: 'Phone', value: '+62 812 3456 7890' },
  { icon: MapPin, label: 'School', value: 'SMA Negeri 1 Jakarta' },
]

export default function Profile() {
  return (
    <>
      <TopBar name="Anna Lane" />
      <main className="px-container-margin mt-2 space-y-6">
        <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
          <h2 className="text-headline-md text-on-surface mb-4">Account</h2>
          <ul className="divide-y divide-outline-variant/40">
            {rows.map(({ icon: Icon, label, value }) => (
              <li key={label} className="py-3 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-label-sm text-text-muted">{label}</p>
                  <p className="text-body-base font-semibold text-on-surface">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-headline-md text-on-surface mb-4">Recent transactions</h2>
          <Link
            to="/transaction/JT-20260715-01"
            className="block bg-surface-container-lowest rounded-3xl p-card-padding shadow-sm flex items-center gap-4 active:scale-[0.99] transition-transform"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary-container/10 text-primary flex items-center justify-center">
              <ReceiptText size={22} />
            </div>
            <div className="flex-1">
              <h3 className="text-body-base font-bold text-on-surface">Order #JT-20260715-01</h3>
              <p className="text-label-sm text-text-muted">Menunggu Pembayaran • Rp248.000</p>
            </div>
            <ChevronRight size={20} className="text-outline" />
          </Link>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <button className="bg-surface-container-lowest rounded-3xl p-card-padding shadow-sm flex flex-col items-start gap-3 active:scale-[0.98] transition-transform">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Settings size={18} />
            </div>
            <span className="text-body-base font-bold text-on-surface">Settings</span>
          </button>
          <button className="bg-surface-container-lowest rounded-3xl p-card-padding shadow-sm flex flex-col items-start gap-3 active:scale-[0.98] transition-transform">
            <div className="w-10 h-10 rounded-xl bg-error/10 text-error flex items-center justify-center">
              <LogOut size={18} />
            </div>
            <span className="text-body-base font-bold text-error">Sign out</span>
          </button>
        </section>
      </main>
    </>
  )
}
