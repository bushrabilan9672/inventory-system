import api from "../../../services/api";

const settingsApi = {

  async getSettings() {

    const response = await api.get("/settings");

    return response.data;

  },

  async updateSettings(data) {

    const response = await api.put("/settings", data);

    return response.data;

  },

};

export default settingsApi;