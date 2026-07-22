import api from "../../../services/api";

const productApi = {

  getProducts: async () => {
    const response = await api.get("/products");
    return response.data;
  },

  getProduct: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  createProduct: async (product) => {

  const formData = new FormData();

  Object.keys(product).forEach((key) => {

    if (product[key] !== null && product[key] !== "") {

      formData.append(key, product[key]);

    }

  });

  const response = await api.post(
    "/products",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;

},

  updateProduct: async (id, product) => {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  },

  deleteProduct: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },

};

export default productApi;