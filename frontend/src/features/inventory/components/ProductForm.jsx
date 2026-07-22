import { useState } from "react";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { useNavigate } from "react-router-dom";
import productApi from "../services/productApi";

export default function ProductForm() {

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
  const navigate = useNavigate();

  function handleChange(e) {

    const { name, value } = e.target;

    setForm({

      ...form,

      [name]: value,

    });

  }

  function handleImage(e) {

    setForm({

      ...form,

      image: e.target.files[0],

    });

  }

  async function submit(e) {

  e.preventDefault();

  try {

    await productApi.createProduct(form);

    alert("Product added successfully!");

    navigate("/inventory");

  }

  catch (error) {

    console.error(error);

    alert("Failed to add product.");

  }

}

  return (

    <form
      onSubmit={submit}
      className="rounded-3xl bg-white p-8 shadow-sm"
    >

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />

        <Input
          name="sku"
          placeholder="SKU"
          onChange={handleChange}
        />

        <Input
          name="barcode"
          placeholder="Barcode"
          onChange={handleChange}
        />

        <Input
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <Input
          name="supplier"
          placeholder="Supplier"
          onChange={handleChange}
        />

        <Input
          name="purchase_price"
          placeholder="Purchase Price"
          onChange={handleChange}
        />

        <Input
          name="selling_price"
          placeholder="Selling Price"
          onChange={handleChange}
        />

        <Input
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />

        <Input
          name="minimum_stock"
          placeholder="Minimum Stock"
          onChange={handleChange}
        />

        <input
          type="file"
          onChange={handleImage}
        />

      </div>

      <div className="mt-6">

        <Textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

      </div>

      <Button
        className="mt-8"
      >

        Save Product

      </Button>

    </form>

  );

}