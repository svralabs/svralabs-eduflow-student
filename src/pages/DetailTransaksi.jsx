import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetailTransaksi() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="bg-surface sticky top-0 w-full z-40 flex items-center justify-between px-margin-mobile h-14 shadow-sm border-b border-outline-variant">
<div className="flex items-center gap-4">
<button className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low">
<span className="material-symbols-outlined text-primary">arrow_back</span>
</button>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Detail Transaksi</h1>
</div>
<button className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low">
<span className="material-symbols-outlined text-on-surface-variant">help_outline</span>
</button>
</header>
<main className="max-w-2xl mx-auto px-margin-mobile py-lg space-y-lg">

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

<div className="relative pt-4 pb-2">
<div className="flex items-center justify-between w-full">

<div className="flex flex-col items-center flex-1 relative">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center z-10">
<span className="material-symbols-outlined text-white text-[16px]" style={{"fontVariationSettings": "wght 700"}}>check</span>
</div>
<span className="text-[10px] text-on-surface-variant mt-2 text-center leading-tight">Order Masuk</span>
</div>
<div className="stepper-line bg-primary-container"></div>

<div className="flex flex-col items-center flex-1 relative">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center z-10">
<span className="material-symbols-outlined text-white text-[16px]" style={{"fontVariationSettings": "wght 700"}}>check</span>
</div>
<span className="text-[10px] text-on-surface-variant mt-2 text-center leading-tight">Diproses</span>
</div>
<div className="stepper-line bg-primary-container"></div>

<div className="flex flex-col items-center flex-1 relative">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center z-10">
<span className="material-symbols-outlined text-white text-[16px]" style={{"fontVariationSettings": "wght 700"}}>check</span>
</div>
<span className="text-[10px] text-on-surface-variant mt-2 text-center leading-tight">Barang Terbeli</span>
</div>
<div className="stepper-line bg-primary-container"></div>

<div className="flex flex-col items-center flex-1 relative">
<div className="w-6 h-6 rounded-full bg-primary ring-4 ring-primary/20 flex items-center justify-center z-10 active-glow">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<span className="text-[10px] text-primary font-bold mt-2 text-center leading-tight">Pembayaran</span>
</div>
<div className="stepper-line bg-surface-container-highest"></div>

<div className="flex flex-col items-center flex-1 relative">
<div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center z-10">
</div>
<span className="text-[10px] text-on-surface-variant mt-2 text-center leading-tight">Lunas</span>
</div>
</div>
</div>
</section>

<section className="space-y-md">
<h2 className="font-label-lg text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span> Daftar Belanja
            </h2>
<div className="grid gap-sm">

<div className="bg-surface-container-lowest p-sm pr-md rounded-xl flex items-center gap-md custom-shadow border border-white">
<img alt="Bangkok Milk Tablet" className="w-20 h-20 rounded-lg object-cover bg-surface-container" src="https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu"/>
<div className="flex-1 space-y-1">
<p className="font-label-lg text-on-surface">Bangkok Milk Tablet</p>
<div className="flex justify-between items-center">
<p className="text-on-surface-variant text-body-md">Qty: 5</p>
<p className="font-headline-md text-on-primary-container">Rp25.000</p>
</div>
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "FILL 1"}}>check_circle</span>
<span className="text-[12px] font-medium">Terbeli</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-sm pr-md rounded-xl flex items-center gap-md custom-shadow border border-white">
<img alt="Lay's Truffle Thai" className="w-20 h-20 rounded-lg object-cover bg-surface-container" src="https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu"/>
<div className="flex-1 space-y-1">
<p className="font-label-lg text-on-surface">Lay's Truffle Thai</p>
<div className="flex justify-between items-center">
<p className="text-on-surface-variant text-body-md">Qty: 2</p>
<p className="font-headline-md text-on-primary-container">Rp35.000</p>
</div>
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "FILL 1"}}>check_circle</span>
<span className="text-[12px] font-medium">Terbeli</span>
</div>
</div>
</div>
</div>
</section>

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

<section className="bg-secondary/5 border border-secondary/10 p-md rounded-xl flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">receipt_long</span>
</div>
<div>
<p className="font-label-lg text-on-surface">Invoice Belanja</p>
<p className="text-xs text-on-surface-variant">Dikirim ke Email &amp; WhatsApp</p>
</div>
</div>
<button className="bg-secondary text-white px-4 py-2 rounded-xl text-label-md font-bold hover:bg-secondary/90 transition-colors active:scale-95">
                    Lihat Invoice
                </button>
</div>
</section>

<section className="space-y-md">
<h2 className="font-label-lg text-on-surface-variant uppercase tracking-wider">Bukti Pembayaran</h2>
<div className="bg-surface border-2 border-dashed border-outline-variant rounded-2xl p-xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary transition-colors group" id="upload-area">
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container/20 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-3xl">photo_camera</span>
</div>
<div className="text-center">
<p className="font-label-lg text-on-surface">Upload Bukti Bayar</p>
<p className="text-xs text-on-surface-variant mt-1">Format JPG, PNG, atau PDF (Max 5MB)</p>
</div>
</div>
</section>

<section className="pt-xl pb-base flex flex-col items-center gap-4">
<button className="w-full py-4 border-2 border-error text-error font-headline-md rounded-xl hover:bg-error/5 transition-colors active:scale-[0.98]">
                Ajukan Pembatalan
            </button>
<div className="flex items-start gap-2 max-w-[85%]">
<span className="material-symbols-outlined text-error text-[18px]">info</span>
<p className="text-xs text-on-surface-variant text-center leading-relaxed italic">
                    Pembatalan hanya bisa disetujui jika barang belum dibeli tim di lapangan. Silakan hubungi admin via chat untuk bantuan lebih lanjut.
                </p>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-3 bg-surface border-t border-outline-variant z-50">
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-all px-3 py-1 rounded-xl">
<span className="material-symbols-outlined">home</span>
<span className="font-label-md text-label-md">Home</span>
</button>
<button className="flex flex-col items-center justify-center text-primary font-label-lg text-label-lg bg-primary-fixed-dim/20 rounded-xl px-3 py-1">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>receipt_long</span>
<span className="font-label-md text-label-md">Orders</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-all px-3 py-1 rounded-xl">
<span className="material-symbols-outlined">add_circle</span>
<span className="font-label-md text-label-md">Request</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-all px-3 py-1 rounded-xl">
<span className="material-symbols-outlined">mail</span>
<span className="font-label-md text-label-md">Inbox</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-all px-3 py-1 rounded-xl">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-label-md">Profile</span>
</button>
</nav>


    </div>
  );
}
