import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";

import productApi from "../services/productApi";

export default function ProductForm({

  initialData = null,

  isEdit = false,

}) {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [preview, setPreview] = useState(
    initialData?.image
      ? `http://127.0.0.1:5000${initialData.image}`
      : null
  );

  const [form, setForm] = useState({

    name: "",

    sku: "",

    barcode: "",

    category: "",

    supplier: "",

    purchase_price: "",

    selling_price: "",

    quantity: "",

    minimum_stock: "",

    description: "",

    image: null,

  });

  useEffect(() => {

    if (initialData) {

      setForm({

        name: initialData.name || "",

        sku: initialData.sku || "",

        barcode: initialData.barcode || "",

        category: initialData.category || "",

        supplier: initialData.supplier || "",

        purchase_price: initialData.purchase_price || "",

        selling_price: initialData.selling_price || "",

        quantity: initialData.quantity || "",

        minimum_stock: initialData.minimum_stock || "",

        description: initialData.description || "",

        image: null,

      });

      if (initialData.image) {

        setPreview(
          `http://127.0.0.1:5000${initialData.image}`
        );

      }

    }

  }, [initialData]);

  function handleChange(e) {

    const { name, value } = e.target;

    setForm((prev) => ({

      ...prev,

      [name]: value,

    }));

  }

  function handleImage(e) {

    const file = e.target.files[0];

    if (!file) return;

    setForm((prev) => ({

      ...prev,

      image: file,

    }));

    setPreview(URL.createObjectURL(file));

  }

  async function submit(e) {

    e.preventDefault();

    setLoading(true);

    try {

      if (isEdit) {

        await productApi.updateProduct(
          initialData.id,
          form
        );

        alert("Product updated successfully!");

      } else {

        await productApi.createProduct(form);

        alert("Product added successfully!");

      }

      navigate("/inventory");

    }

    catch (error) {

      console.error(error);

      alert("Something went wrong.");

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <form
      onSubmit={submit}
      className="rounded-3xl bg-white p-8 shadow"
    >

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          name="name"
          value={form.name}
          placeholder="Product Name"
          onChange={handleChange}
        />

        <Input
          name="sku"
          value={form.sku}
          placeholder="SKU"
          onChange={handleChange}
        />

        <Input
          name="barcode"
          value={form.barcode}
          placeholder="Barcode"
          onChange={handleChange}
        />

        <Input
          name="category"
          value={form.category}
          placeholder="Category"
          onChange={handleChange}
        />

        <Input
          name="supplier"
          value={form.supplier}
          placeholder="Supplier"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="purchase_price"
          value={form.purchase_price}
          placeholder="Purchase Price"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="selling_price"
          value={form.selling_price}
          placeholder="Selling Price"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="quantity"
          value={form.quantity}
          placeholder="Quantity"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="minimum_stock"
          value={form.minimum_stock}
          placeholder="Minimum Stock"
          onChange={handleChange}
        />

        <div>

          <input
            type="file"
            onChange={handleImage}
          />

          {preview && (

            <img
              src={preview}
              alt="Preview"
              className="mt-4 h-32 w-32 rounded-xl border object-cover"
            />

          )}

        </div>

      </div>

      <div className="mt-6">

        <Textarea
          name="description"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
        />

      </div>

      <div className="mt-8 flex gap-4">

        <Button type="submit">

          {loading

            ? "Saving..."

            : isEdit

            ? "Update Product"

            : "Save Product"}

        </Button>

        <Button

          type="button"

          variant="outline"

          onClick={() => navigate("/inventory")}

        >

          Cancel

        </Button>

      </div>

    </form>

  );

}