import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionItem from '../components/TransactionItem';

export default function TransactionDetail() {
  const navigate = useNavigate();

  const transactionItems = [
    {
      id: 1,
      name: "Bangkok Milk Tablet",
      quantity: 5,
      price: "Rp25.000",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu"
    },
    {
      id: 2,
      name: "Lay's Truffle Thai",
      quantity: 2,
      price: "Rp35.000",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu"
    }
  ];

  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface sticky top-0 w-full z-40 flex items-center justify-between px-margin-mobile h-14 shadow-sm border-b border-outline-variant">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Detail Transaksi</h1>
        </div>
        <button className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low">
          <span className="material-symbols-outlined text-on-surface-variant">help_outline</span>
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
                  <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                </div>
                <span className="text-[10px] text-on-surface-variant mt-2 text-center leading-tight">Order Masuk</span>
              </div>
              <div className="stepper-line bg-primary-container"></div>
              {/* Step 2: Done */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                </div>
                <span className="text-[10px] text-on-surface-variant mt-2 text-center leading-tight">Diproses</span>
              </div>
              <div className="stepper-line bg-primary-container"></div>
              {/* Step 3: Done */}
              <div className="flex flex-col items-center flex-1 relative">
                <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
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
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Daftar Belanja
          </h2>
          <div className="grid gap-sm">
            {transactionItems.map(item => (
              <TransactionItem key={item.id} item={item} />
            ))}
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
      </main>
    </>
  );
}
