import api from "./api-config";

export const getAllEmails = async () => {
    const resp = await api.get('/emails')
    return resp.data;
}