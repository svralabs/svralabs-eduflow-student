import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TransactionItem from '../components/TransactionItem';

export default function TransactionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await fetch(`/api/transactions/${id}`);
        if (!response.ok) throw new Error('Failed to fetch transaction');
        const data = await response.json();
        setTransaction(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [id]);

  const handleDownloadReceipt = () => {
    // Implement receipt download logic
    console.log('Downloading receipt...');
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-error">{error}</div>;
  if (!transaction) return <div className="text-center py-8">No transaction found</div>;

  return (
    <div className="min-h-screen bg-surface-container-lowest">
      <header className="bg-surface sticky top-0 w-full z-40 flex items-center justify-between px-margin-mobile h-14 shadow-sm border-b border-outline-variant">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-transform hover:bg-surface-container-low"
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
        <section className="bg-surface-container-lowest p-md rounded-xl custom-shadow space-y-md">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-on-surface-variant font-label-md">ID Transaksi</p>
              <p className="font-headline-md text-on-surface">{transaction.id}</p>
            </div>
            <div className={`bg-${transaction.statusColor}/10 px-3 py-1 rounded-full border border-${transaction.statusColor}/20`}>
              <span className={`text-${transaction.statusColor} font-label-lg uppercase`}>{transaction.status}</span>
            </div>
          </div>

          <div className="relative pt-4 pb-2">
            <div className="flex items-center justify-between w-full">
              {transaction.steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center flex-1 relative">
                    <div className={`w-6 h-6 rounded-full ${step.completed ? `bg-primary-container` : 'bg-surface-container-highest'} flex items-center justify-center z-10 ${step.active ? 'ring-4 ring-primary/20 active-glow' : ''}`}>
                      {step.completed ? (
                        <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                      ) : step.active ? (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      ) : null}
                    </div>
                    <span className={`text-[10px] ${step.active ? 'text-primary font-bold' : 'text-on-surface-variant'} mt-2 text-center leading-tight`}>{step.label}</span>
                  </div>
                  {index < transaction.steps.length - 1 && (
                    <div className={`stepper-line ${step.completed ? 'bg-primary-container' : 'bg-surface-container-highest'}`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-md">
          <h2 className="font-label-lg text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Daftar Belanja
          </h2>
          <div className="grid gap-sm">
            {transaction.items.map((item) => (
              <TransactionItem key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-2xl overflow-hidden custom-shadow border border-white">
          <div className="p-md space-y-3">
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Subtotal</span>
              <span>{transaction.subtotal}</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Jastip Fee</span>
              <span>{transaction.jastipFee}</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Biaya Packing</span>
              <span>{transaction.packingFee}</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Ongkir</span>
              <span>{transaction.shippingFee}</span>
            </div>
            <div className="pt-3 mt-1 border-t border-dashed border-outline-variant flex justify-between items-end">
              <span className="font-label-lg text-on-surface">Total Pembayaran</span>
              <span className="font-display-lg text-primary text-2xl">{transaction.total}</span>
            </div>
          </div>
        </section>

        <section className="bg-secondary/5 border border-outline-variant rounded-2xl p-md space-y-md custom-shadow">
          <div className="flex justify-between items-center">
            <h2 className="font-label-lg text-on-surface-variant uppercase tracking-wider">Invoice</h2>
            <button
              onClick={handleDownloadReceipt}
              className="flex items-center gap-2 text-primary font-label-md"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              Unduh Invoice
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Tanggal Transaksi</span>
              <span>{transaction.date}</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Metode Pembayaran</span>
              <span>{transaction.paymentMethod}</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Status Pembayaran</span>
              <span className={`text-${transaction.statusColor}`}>{transaction.status}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
