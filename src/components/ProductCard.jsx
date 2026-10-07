export default function ProductCard({ product, onAddToCart, onClickProduct }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col justify-between">
      <div 
        className="cursor-pointer"
        onClick={() => onClickProduct(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition duration-300"
        />
        <div className="p-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-gray-800 mt-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-indigo-600 font-bold mt-2">
            Rp {product.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      <div className="p-4 pt-0">
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition"
        >
          + Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}