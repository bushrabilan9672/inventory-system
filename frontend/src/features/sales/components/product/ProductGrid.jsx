import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  addToCart,
}) {
  if (!products || products.length === 0) {
    return (
      <div className="bg-white rounded-xl border shadow-sm p-10 text-center">
        <h2 className="text-xl font-semibold text-slate-700">
          No Products Found
        </h2>

        <p className="text-slate-500 mt-2">
          Products from your inventory will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}