import api from "../../../services/api";

const customerApi = {

    async getCustomers() {

        const response = await api.get("/customers");

        return response.data;

    }

};

export default customerApi;