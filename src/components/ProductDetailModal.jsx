export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl"
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />

        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-1">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-indigo-600 my-2">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
        <p className="text-gray-600 text-sm mb-6">
          Produk berkualitas tinggi yang siap menemani aktivitas harian maupun hobi kamu.
        </p>

        <button
          onClick={() => {
            onAddToCart(product);
            onClose();
          }}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-medium transition"
        >
          + Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}