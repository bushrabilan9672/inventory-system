import api from "../../../services/api";

const SalesAPI = {
  // Sales
  getSales() {
    return api.get("/sales");
  },

  getSale(id) {
    return api.get(`/sales/${id}`);
  },

  createSale(data) {
    return api.post("/sales", data);
  },

  deleteSale(id) {
    return api.delete(`/sales/${id}`);
  },

  // Products
  getProducts() {
    return api.get("/products");
  },

  // Customers
  getCustomers() {
    return api.get("/customers");
  },

  // Dashboard
  getDashboard() {
    return api.get("/dashboard");
  },
};

export default SalesAPI;