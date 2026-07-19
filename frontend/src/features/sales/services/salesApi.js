import api from "../../../services/api";

const salesApi = {

  async getProducts() {

    const response = await api.get("/products");

    return response.data;

  },

  async createSale(data) {

    const response = await api.post("/sales", data);

    return response.data;

  },

};

export default salesApi;