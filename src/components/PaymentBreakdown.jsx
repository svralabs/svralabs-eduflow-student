export default function PaymentBreakdown({ subtotal, fee, packing, shipping, total }) {
  return (
    <section className="bg-surface-container-lowest rounded-2xl overflow-hidden custom-shadow border border-white">
      <div className="p-4 space-y-3">
        <div className="flex justify-between text-body-md text-on-surface-variant">
          <span>Subtotal</span>
          <span>Rp{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-body-md text-on-surface-variant">
          <span>Jastip Fee</span>
          <span>Rp{fee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-body-md text-on-surface-variant">
          <span>Biaya Packing</span>
          <span>Rp{packing.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-body-md text-on-surface-variant">
          <span>Ongkir</span>
          <span>Rp{shipping.toLocaleString()}</span>
        </div>
        <div className="pt-3 mt-1 border-t border-dashed border-outline-variant flex justify-between items-end">
          <span className="font-label-lg text-on-surface">Total Pembayaran</span>
          <span className="font-display-lg text-primary text-2xl">Rp{total.toLocaleString()}</span>
        </div>
      </div>
    </section>
  );
}
