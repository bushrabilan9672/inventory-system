import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  addToCart,
}) {

  if (products.length === 0) {

    return (

      <div className="rounded-xl border bg-white p-10 text-center text-slate-500">

        No products found.

      </div>

    );

  }

  return (

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">

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