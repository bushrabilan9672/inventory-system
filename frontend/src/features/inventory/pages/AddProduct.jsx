import ProductForm from "../components/ProductForm";

export default function AddProduct() {

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Add Product

        </h1>

        <p className="mt-2 text-slate-500">

          Create a new product in your inventory.

        </p>

      </div>

      <ProductForm />

    </div>

  );

}