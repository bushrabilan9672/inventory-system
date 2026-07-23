import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ProductForm from "../components/ProductForm";
import productApi from "../services/productApi";

export default function EditProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadProduct();

  }, []);

  async function loadProduct() {

    try {

      const data = await productApi.getProduct(id);

      setProduct(data);

    }

    catch (err) {

      console.error(err);

      alert("Product not found.");

      navigate("/inventory");

    }

    finally {

      setLoading(false);

    }

  }

  if (loading) {

    return (

      <div className="p-8">

        Loading product...

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Edit Product

        </h1>

        <p className="mt-2 text-slate-500">

          Update product information.

        </p>

      </div>

      <ProductForm

        initialData={product}

        isEdit={true}

      />

    </div>

  );

}