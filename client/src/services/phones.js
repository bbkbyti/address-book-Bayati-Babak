import api from "./api-config";

export const getAllPhones = async () => {
    const resp = await api.get('/phones');
    return resp.data;
}

export const getOnePhone = async (id) => {
    const resp = await api.get(`/phones/${id}`)
    return resp.data
}

export const addPhone = async (phoneNumber) => {
    const resp = await api.post('/phones', { phone: phoneNumber })
    return resp.data
}

export const editPhone = async (id, phoneNumber) => {
    const resp = await api.put(`/phones/${id}`, { phone: phoneNumber })
    return resp.data
}

export const deletePerson = async (id) => {
    const resp = await api.delete(`/phones/${id}`)
    return resp
}
