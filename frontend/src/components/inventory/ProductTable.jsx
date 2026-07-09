import ProductRow from "./ProductRow";

export default function ProductTable({
  products,
  updateProduct,
  deleteProduct,
}) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
             <ProductRow
  key={product.id}
  product={product}
  updateProduct={updateProduct}
  deleteProduct={deleteProduct}
/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}