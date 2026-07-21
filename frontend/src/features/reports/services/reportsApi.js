import api from "../../../services/api";

const reportsApi = {

  async getDashboardStats() {

    const response = await api.get("/dashboard");

    return response.data;

  },

  async getMonthlySales() {

    const response = await api.get("/reports/monthly-sales");

    return response.data;

  },

  async getTopProducts() {

  const response = await api.get("/reports/top-products");

  return response.data;

},

async getLowStock() {

  const response = await api.get("/reports/low-stock");

  return response.data;

},

};


export default reportsApi;