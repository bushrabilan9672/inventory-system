import axios from "axios";

const API = "http://127.0.0.1:5000";

const stockMovementApi = {

  async getMovements() {

    const response = await axios.get(`${API}/stock-movements`);

    return response.data;

  },

};

export default stockMovementApi;