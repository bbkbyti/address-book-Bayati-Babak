import api from "./api-config";

export const getAllPhones = async () => {
    const resp = await api.get('/phones');
    return resp.data;
}