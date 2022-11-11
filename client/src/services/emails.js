import api from "./api-config";

export const getAllEmails = async () => {
    const resp = await api.get('/emails')
    return resp.data;
}

export const getOneEmail = async (id) => {
    const resp = await api.get(`/emails/${id}`)
    return resp.data
}

export const addEmail = async (emailData) => {
    const resp = await api.post(`/emails`, { email: emailData })
    return resp.data
}

export const editEmail = async (id, emailData) => {
    const resp = await api.put(`/emails/${id}`, { email: emailData })
    return resp.data;
}

export const deleteEmail = async (id) => {
    const resp = await api.delete(`/emails/${id}`)
    return resp;
}