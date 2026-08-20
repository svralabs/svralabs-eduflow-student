import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowBack, HelpOutline, ShoppingBag, CheckCircle, PhotoCamera, Info, Home, ReceiptLong, AddCircle, Mail, Person } from 'lucide-react';

const DetailTransaksi = () => {
  return (
    <div className="bg-surface-container-low text-on-surface font-body-md min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="bg-surface sticky top-0 w-full z-40 flex items-center justify-between px-margin-mobile h-14 shadow-sm border-b border-outline-variant">
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low">
            <ArrowBack size={24} className="text-primary" />
          </button>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Detail Transaksi</h1>
        </div>
        <button className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low">
          <HelpOutline size={24} className="text-on-surface-variant" />
        </button>
      </header>

      <main className="max-w-2xl mx-auto px-margin-mobile py-lg space-y-lg">
        {/* Order Header & Stepper */}
        <section className="bg-surface-container-lowest p-md rounded-xl custom-shadow space-y-md">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-on-surface-variant font-label-md">ID Transaksi</p>
              <p className="font-headline-md text-on-surface">#JT-20260715-01</p>
            </div>
            <div className="bg-primary-container/10 px-3 py-1 rounded-full border border-primary-container/20">
              <span className="text-primary font-label-lg uppercase">Menunggu Pembayaran</span>
            </div>
          </div>

          {/* Horizontal Stepper */}
          <div className="relative pt-4 pb-2">
            <div className="flex items-center justify-between w-full">
              {/* Step 1: Done */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center z-10">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-[10px] text-on-surface-variant mt-2 text-center leading-tight">Order Masuk</span>
              </div>
              <div className="stepper-line bg-primary-container"></div>

              {/* Step 2: Done */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center z-10">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-[10px] text-on-surface-variant mt-2 text-center leading-tight">Diproses</span>
              </div>
              <div className="stepper-line bg-primary-container"></div>

              {/* Step 3: Done */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center z-10">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-[10px] text-on-surface-variant mt-2 text-center leading-tight">Barang Terbeli</span>
              </div>
              <div className="stepper-line bg-primary-container"></div>

              {/* Step 4: Active */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-6 h-6 rounded-full bg-primary ring-4 ring-primary/20 flex items-center justify-center z-10 active-glow">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-[10px] text-primary font-bold mt-2 text-center leading-tight">Pembayaran</span>
              </div>
              <div className="stepper-line bg-surface-container-highest"></div>

              {/* Step 5: Pending */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center z-10">
                </div>
                <span className="text-[10px] text-on-surface-variant mt-2 text-center leading-tight">Lunas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Item List */}
        <section className="space-y-md">
          <h2 className="font-label-lg text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
            <ShoppingBag size={18} />
            Daftar Belanja
          </h2>

          <div className="grid gap-sm">
            {/* Item 1 */}
            <div className="bg-surface-container-lowest p-sm pr-md rounded-xl flex items-center gap-md custom-shadow border border-white">
              <img alt="Bangkok Milk Tablet" className="w-20 h-20 rounded-lg object-cover bg-surface-container" src="https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu"/>
              <div className="flex-1 space-y-1">
                <p className="font-label-lg text-on-surface">Bangkok Milk Tablet</p>
                <div className="flex justify-between items-center">
                  <p className="text-on-surface-variant text-body-md">Qty: 5</p>
                  <p className="font-headline-md text-on-primary-container">Rp25.000</p>
                </div>
                <div className="flex items-center gap-1 text-tertiary">
                  <CheckCircle size={16} className="text-tertiary" />
                  <span className="text-[12px] font-medium">Terbeli</span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-surface-container-lowest p-sm pr-md rounded-xl flex items-center gap-md custom-shadow border border-white">
              <img alt="Lay's Truffle Thai" className="w-20 h-20 rounded-lg object-cover bg-surface-container" src="https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu"/>
              <div className="flex-1 space-y-1">
                <p className="font-label-lg text-on-surface">Lay's Truffle Thai</p>
                <div className="flex justify-between items-center">
                  <p className="text-on-surface-variant text-body-md">Qty: 2</p>
                  <p className="font-headline-md text-on-primary-container">Rp35.000</p>
                </div>
                <div className="flex items-center gap-1 text-tertiary">
                  <CheckCircle size={16} className="text-tertiary" />
                  <span className="text-[12px] font-medium">Terbeli</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown Card */}
        <section className="bg-surface-container-lowest rounded-2xl overflow-hidden custom-shadow border border-white">
          <div className="p-md space-y-3">
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Subtotal</span>
              <span>Rp195.000</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Jastip Fee</span>
              <span>Rp25.000</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Biaya Packing</span>
              <span>Rp10.000</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Ongkir</span>
              <span>Rp18.000</span>
            </div>
            <div className="pt-3 mt-1 border-t border-dashed border-outline-variant flex justify-between items-end">
              <span className="font-label-lg text-on-surface">Total Pembayaran</span>
              <span className="font-display-lg text-primary text-2xl">Rp248.000</span>
            </div>
          </div>
        </section>

        {/* Invoice Section */}
        <section className="bg-secondary/5 border border-secondary/10 p-md rounded-xl flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                <ReceiptLong size={24} />
              </div>
              <div>
                <p className="font-label-lg text-on-surface">Invoice Belanja</p>
                <p className="text-xs text-on-surface-variant">Dikirim ke Email & WhatsApp</p>
              </div>
            </div>
            <button className="bg-secondary text-white px-4 py-2 rounded-xl text-label-md font-bold hover:bg-secondary/90 transition-colors active:scale-95">
              Lihat Invoice
            </button>
          </div>
        </section>

        {/* Payment Section */}
        <section className="space-y-md">
          <h2 className="font-label-lg text-on-surface-variant uppercase tracking-wider">Bukti Pembayaran</h2>
          <div className="bg-surface border-2 border-dashed border-outline-variant rounded-2xl p-xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary transition-colors group" id="upload-area">
            <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container/20 group-hover:text-primary transition-colors">
              <PhotoCamera size={32} />
            </div>
            <div className="text-center">
              <p className="font-label-lg text-on-surface">Upload Bukti Bayar</p>
              <p className="text-xs text-on-surface-variant mt-1">Format JPG, PNG, atau PDF (Max 5MB)</p>
            </div>
          </div>
        </section>

        {/* Danger Zone Action */}
        <section className="pt-xl pb-base flex flex-col items-center gap-4">
          <button className="w-full py-4 border-2 border-error text-error font-headline-md rounded-xl hover:bg-error/5 transition-colors active:scale-[0.98]">
            Ajukan Pembatalan
          </button>
          <div className="flex items-start gap-2 max-w-[85%]">
            <Info size={18} className="text-error" />
            <p className="text-xs text-on-surface-variant text-center leading-relaxed italic">
              Pembatalan hanya bisa disetujui jika barang belum dibeli tim di lapangan. Silakan hubungi admin via chat untuk bantuan lebih lanjut.
            </p>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-3 bg-surface border-t border-outline-variant z-50">
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-all px-3 py-1 rounded-xl">
          <Home size={24} />
          <span className="font-label-md text-label-md">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-primary font-label-lg text-label-lg bg-primary-fixed-dim/20 rounded-xl px-3 py-1">
          <ReceiptLong size={24} />
          <span className="font-label-md text-label-md">Orders</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-all px-3 py-1 rounded-xl">
          <AddCircle size={24} />
          <span className="font-label-md text-label-md">Request</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-all px-3 py-1 rounded-xl">
          <Mail size={24} />
          <span className="font-label-md text-label-md">Inbox</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-all px-3 py-1 rounded-xl">
          <Person size={24} />
          <span className="font-label-md text-label-md">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default DetailTransaksi;