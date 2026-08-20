import { useNavigate } from 'react-router-dom';
import Timeline from '../components/Timeline';
import PaymentBreakdown from '../components/PaymentBreakdown';

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

export default function TransactionDetail() {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest">
      <header className="bg-surface sticky top-0 w-full z-40 flex items-center justify-between px-4 md:px-6 h-14 shadow-sm border-b border-outline-variant">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Detail Transaksi</h1>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low"
        >
          <span className="material-symbols-outlined text-on-surface-variant">print</span>
        </button>
      </header>

      <main className="max-w-2xl mx-auto px-4 md:px-6 py-6 space-y-6">
        <section className="bg-surface-container-lowest p-4 rounded-xl custom-shadow space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-on-surface-variant font-label-md">ID Transaksi</p>
              <p className="font-headline-md text-on-surface">{transaction.id}</p>
            </div>
            <div className="bg-primary-container/10 px-3 py-1 rounded-full border border-primary-container/20">
              <span className="text-primary font-label-lg uppercase">{transaction.status}</span>
            </div>
          </div>
          <Timeline />
        </section>

        <section className="space-y-4">
          <h2 className="font-label-lg text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Daftar Belanja
          </h2>
          <div className="grid gap-3">
            {transaction.items.map(item => (
              <div key={item.id} className="bg-surface-container-lowest p-3 pr-4 rounded-xl flex items-center gap-3 custom-shadow border border-white">
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

        <PaymentBreakdown
          subtotal={transaction.subtotal}
          fee={transaction.fee}
          packing={transaction.packing}
          shipping={transaction.shipping}
          total={transaction.total}
        />
      </main>
    </div>
  );
}
