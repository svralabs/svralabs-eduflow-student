import { useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft, HelpCircle, Check, ShoppingBag, CheckCircle2,
  Receipt, Camera, Info,
} from 'lucide-react'

const steps = ['Order Masuk', 'Diproses', 'Barang Terbeli', 'Pembayaran', 'Lunas']
const ACTIVE_STEP = 3 // 0-indexed → "Pembayaran"

const items = [
  {
    name: 'Bangkok Milk Tablet', qty: 5, price: 'Rp25.000',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu',
  },
  {
    name: "Lay's Truffle Thai", qty: 2, price: 'Rp35.000',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu',
  },
]

const costs = [
  ['Subtotal', 'Rp195.000'],
  ['Jastip Fee', 'Rp25.000'],
  ['Biaya Packing', 'Rp10.000'],
  ['Ongkir', 'Rp18.000'],
]

export default function TransactionDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [proof, setProof] = useState(null)
  const inputRef = useRef(null)

  const onPick = (e) => {
    const f = e.target.files?.[0]
    if (f) setProof(f)
  }

  return (
    <div className="bg-[#f3f4f6] min-h-screen text-on-surface pb-24">
      <header className="bg-surface sticky top-0 w-full z-40 flex items-center justify-between px-container-margin h-14 shadow-sm border-b border-outline-variant/40">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            aria-label="Back"
            className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low"
          >
            <ArrowLeft size={20} className="text-primary" />
          </button>
          <h1 className="text-lg font-bold text-on-surface">Detail Transaksi</h1>
        </div>
        <button aria-label="Help" className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low">
          <HelpCircle size={20} className="text-on-surface-variant" />
        </button>
      </header>

      <main className="max-w-2xl mx-auto px-container-margin py-6 space-y-6">
        <section className="bg-surface-container-lowest p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-on-surface-variant text-xs font-medium">ID Transaksi</p>
              <p className="text-lg font-bold text-on-surface">#{id}</p>
            </div>
            <div className="bg-[#ff8c00]/10 px-3 py-1 rounded-full border border-[#ff8c00]/20">
              <span className="text-[#904d00] text-xs font-bold uppercase">Menunggu Pembayaran</span>
            </div>
          </div>

          <div className="pt-4 pb-2">
            <div className="flex items-center justify-between w-full">
              {steps.map((label, i) => {
                const done = i < ACTIVE_STEP
                const active = i === ACTIVE_STEP
                return (
                  <div key={label} className="contents">
                    <div className="flex flex-col items-center flex-1 relative min-w-0">
                      <div
                        className={[
                          'w-6 h-6 rounded-full flex items-center justify-center z-10',
                          done && 'bg-[#ff8c00]',
                          active && 'bg-[#904d00] ring-4 ring-[#904d00]/20',
                          !done && !active && 'bg-surface-container-highest',
                        ].filter(Boolean).join(' ')}
                      >
                        {done && <Check size={14} strokeWidth={3} className="text-white" />}
                        {active && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className={`text-[10px] mt-2 text-center leading-tight ${active ? 'text-[#904d00] font-bold' : 'text-on-surface-variant'}`}>
                        {label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`h-0.5 flex-grow mx-1 -mt-4 ${i < ACTIVE_STEP ? 'bg-[#ff8c00]' : 'bg-surface-container-highest'}`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
            <ShoppingBag size={16} /> Daftar Belanja
          </h2>
          <div className="grid gap-2">
            {items.map((it) => (
              <div key={it.name} className="bg-surface-container-lowest p-2 pr-4 rounded-xl flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-white">
                <img alt={it.name} className="w-20 h-20 rounded-lg object-cover bg-surface-container" src={it.img} />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-bold text-on-surface">{it.name}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-on-surface-variant text-sm">Qty: {it.qty}</p>
                    <p className="text-lg font-bold text-[#904d00]">{it.price}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#006c47]">
                    <CheckCircle2 size={14} />
                    <span className="text-xs font-medium">Terbeli</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-white">
          <div className="p-4 space-y-3">
            {costs.map(([k, v]) => (
              <div key={k} className="flex justify-between text-sm text-on-surface-variant">
                <span>{k}</span>
                <span>{v}</span>
              </div>
            ))}
            <div className="pt-3 mt-1 border-t border-dashed border-outline-variant/60 flex justify-between items-end">
              <span className="text-sm font-bold text-on-surface">Total Pembayaran</span>
              <span className="text-2xl font-extrabold text-[#904d00]">Rp248.000</span>
            </div>
          </div>
        </section>

        <section className="bg-[#0453cd]/5 border border-[#0453cd]/10 p-4 rounded-xl flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#356ee7]/20 flex items-center justify-center text-[#0453cd]">
                <Receipt size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">Invoice Belanja</p>
                <p className="text-xs text-on-surface-variant">Dikirim ke Email & WhatsApp</p>
              </div>
            </div>
            <button className="bg-[#0453cd] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#0453cd]/90 transition-colors active:scale-95">
              Lihat Invoice
            </button>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Bukti Pembayaran</h2>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={[
              'w-full border-2 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 transition-colors',
              proof
                ? 'border-[#006c47] bg-[#006c47]/5'
                : 'bg-surface border-dashed border-outline-variant hover:border-[#904d00]',
            ].join(' ')}
          >
            <div className={[
              'w-14 h-14 rounded-full flex items-center justify-center',
              proof ? 'bg-[#006c47]/20 text-[#006c47]' : 'bg-surface-container-high text-on-surface-variant',
            ].join(' ')}>
              {proof ? <CheckCircle2 size={28} /> : <Camera size={28} />}
            </div>
            <div className="text-center">
              {proof ? (
                <>
                  <p className="text-sm font-bold text-[#006c47]">File Berhasil Dipilih</p>
                  <p className="text-xs text-on-surface mt-1 font-bold">{proof.name}</p>
                  <p className="text-xs text-[#904d00] underline mt-2">Ganti File</p>
                </>
              ) : (
                <>
                  <p className="text-sm font-bold text-on-surface">Upload Bukti Bayar</p>
                  <p className="text-xs text-on-surface-variant mt-1">Format JPG, PNG, atau PDF (Max 5MB)</p>
                </>
              )}
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*,application/pdf"
              className="hidden"
              onChange={onPick}
            />
          </button>
        </section>

        <section className="pt-6 pb-2 flex flex-col items-center gap-4">
          <button className="w-full py-4 border-2 border-error text-error font-bold rounded-xl hover:bg-error/5 transition-colors active:scale-[0.98]">
            Ajukan Pembatalan
          </button>
          <div className="flex items-start gap-2 max-w-[85%]">
            <Info size={16} className="text-error mt-0.5 flex-shrink-0" />
            <p className="text-xs text-on-surface-variant text-center leading-relaxed italic">
              Pembatalan hanya bisa disetujui jika barang belum dibeli tim di lapangan. Silakan hubungi admin via chat untuk bantuan lebih lanjut.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
