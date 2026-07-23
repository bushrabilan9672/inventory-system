import {
  Eye,
  Pencil,
  Trash2,
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function ProductTable({

  products,

  deleteProduct,

}) {

  const navigate = useNavigate();

  return (

    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">Product</th>

            <th>SKU</th>

            <th>Category</th>

            <th>Supplier</th>

            <th>Stock</th>

            <th>Selling Price</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {products.length === 0 ? (

            <tr>

              <td
                colSpan="7"
                className="p-8 text-center text-slate-500"
              >

                No products found.

              </td>

            </tr>

          ) : (

            products.map((product) => (

              <tr
                key={product.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <img

                      src={
                        product.image
                          ? `http://127.0.0.1:5000${product.image}`
                          : "https://placehold.co/60x60"
                      }

                      alt={product.name}

                      className="h-14 w-14 rounded-lg object-cover"

                    />

                    <div>

                      <p className="font-semibold">

                        {product.name}

                      </p>

                      <p className="text-sm text-slate-500">

                        {product.barcode}

                      </p>

                    </div>

                  </div>

                </td>

                <td>{product.sku}</td>

                <td>{product.category}</td>

                <td>{product.supplier}</td>

                <td>

                  <span

                    className={

                      product.quantity <= product.minimum_stock

                        ? "font-semibold text-red-600"

                        : "font-semibold text-green-600"

                    }

                  >

                    {product.quantity}

                  </span>

                </td>

                <td>

                  KSh {Number(product.selling_price).toLocaleString()}

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    {/* View */}

                    <Eye

                      size={18}

                      className="cursor-pointer text-blue-600"

                      onClick={() =>

                        navigate(`/inventory/details/${product.id}`)

                      }

                    />

                    {/* Edit */}

                    <Pencil

                      size={18}

                      className="cursor-pointer text-green-600"

                      onClick={() =>

                        navigate(`/inventory/edit/${product.id}`)

                      }

                    />

                    {/* Stock In */}

                    <ArrowDownCircle

                      size={18}

                      className="cursor-pointer text-emerald-600"

                      onClick={() =>

                        navigate(`/inventory/stock-in/${product.id}`)

                      }

                    />

                    {/* Stock Out */}

                    <ArrowUpCircle

                      size={18}

                      className="cursor-pointer text-orange-600"

                      onClick={() =>

                        navigate(`/inventory/stock-out/${product.id}`)

                      }

                    />

                    {/* Delete */}

                    <Trash2

                      size={18}

                      className="cursor-pointer text-red-600"

                      onClick={() =>

                        deleteProduct(product.id)

                      }

                    />

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}