export default function CartModal({ isOpen, onClose, cart, onRemoveFromCart, onClearCart }) {
  if (!isOpen) return null;

  const totalHarga = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center pb-4 border-b">
          <h3 className="text-xl font-bold text-gray-800">Keranjang Belanja</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto flex-1 my-4 space-y-3">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Keranjang belanja masih kosong.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-xs text-indigo-600 font-medium">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromCart(index)}
                  className="text-xs text-red-500 hover:text-red-700 font-medium"
                >
                  Hapus
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="pt-4 border-t space-y-3">
            <div className="flex justify-between text-base font-bold text-gray-800">
              <span>Total:</span>
              <span className="text-indigo-600">
                Rp {totalHarga.toLocaleString("id-ID")}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={onClearCart}
                className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium transition"
              >
                Kosongkan
              </button>
              <button
                onClick={() => alert("Fitur Checkout akan dibuat di tahap berikutnya!")}
                className="w-2/3 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}