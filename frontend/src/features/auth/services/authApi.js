import api from "../../../services/api";

const authApi = {
  login: async (credentials) => {
    const response = await api.post("/login", credentials);
    return response.data;
  },

  changePassword: async (passwordData) => {
    const response = await api.put("/change-password", passwordData);
    return response.data;
  },
};

export default authApi;