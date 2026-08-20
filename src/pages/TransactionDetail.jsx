import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusTimeline from '../components/StatusTimeline';

const TransactionDetail = () => {
  const navigate = useNavigate();

  const transaction = {
    id: '#JT-20260715-01',
    status: 'Menunggu Pembayaran',
    items: [
      {
        id: 1,
        name: 'Bangkok Milk Tablet',
        quantity: 5,
        price: 25000,
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu',
        status: 'Terbeli'
      },
      {
        id: 2,
        name: "Lay's Truffle Thai",
        quantity: 2,
        price: 35000,
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu',
        status: 'Terbeli'
      }
    ],
    subtotal: 195000,
    fee: 25000,
    packing: 10000,
    shipping: 18000,
    total: 248000
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Implement download functionality
    console.log('Download receipt');
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest">
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
              <p className="font-headline-md text-on-surface">{transaction.id}</p>
            </div>
            <div className="bg-primary-container/10 px-3 py-1 rounded-full border border-primary-container/20">
              <span className="text-primary font-label-lg uppercase">{transaction.status}</span>
            </div>
          </div>
          <StatusTimeline status={transaction.status} />
        </section>

        {/* Item List */}
        <section className="space-y-md">
          <h2 className="font-label-lg text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Daftar Belanja
          </h2>
          <div className="grid gap-sm">
            {transaction.items.map(item => (
              <div key={item.id} className="bg-surface-container-lowest p-sm pr-md rounded-xl flex items-center gap-md custom-shadow border border-white">
                <img
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover bg-surface-container"
                  src={item.image}
                />
                <div className="flex-1 space-y-1">
                  <p className="font-label-lg text-on-surface">{item.name}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-on-surface-variant text-body-md">Qty: {item.quantity}</p>
                    <p className="font-headline-md text-on-primary-container">Rp{item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-1 text-tertiary">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-[12px] font-medium">{item.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Breakdown Card */}
        <section className="bg-surface-container-lowest rounded-2xl overflow-hidden custom-shadow border border-white">
          <div className="p-md space-y-3">
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Subtotal</span>
              <span>Rp{transaction.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Jastip Fee</span>
              <span>Rp{transaction.fee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Biaya Packing</span>
              <span>Rp{transaction.packing.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Ongkir</span>
              <span>Rp{transaction.shipping.toLocaleString()}</span>
            </div>
            <div className="pt-3 mt-1 border-t border-dashed border-outline-variant flex justify-between items-end">
              <span className="font-label-lg text-on-surface">Total Pembayaran</span>
              <span className="font-display-lg text-primary text-2xl">Rp{transaction.total.toLocaleString()}</span>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 bg-primary-container/10 text-primary font-label-lg py-3 rounded-xl border border-primary-container/20 active:scale-95 transition-transform"
            onClick={handlePrint}
          >
            Cetak
          </button>
          <button
            className="flex-1 bg-primary text-on-primary font-label-lg py-3 rounded-xl active:scale-95 transition-transform"
            onClick={handleDownload}
          >
            Unduh
          </button>
        </div>
      </main>
    </div>
  );
};

export default TransactionDetail;
