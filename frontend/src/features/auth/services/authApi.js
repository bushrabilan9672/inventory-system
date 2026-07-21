import api from "../../../services/api";

const authApi = {
  login: async (credentials) => {
    const response = await api.post("/login", credentials);
    return response.data;
  },
};

export default authApi;