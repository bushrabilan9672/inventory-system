import api from "../../../services/api";

const dashboardApi = {
  async getDashboard() {
    const response = await api.get("/dashboard");
    return response.data;
  },
};

export default dashboardApi;