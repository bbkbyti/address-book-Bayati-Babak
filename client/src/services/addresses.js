import api from './api-config'

export const getAllAddresses = async () => {
    const resp = await api.get('/addresses')
    return resp.data;
}

export const getOneAddress = async (id) => {
    const resp = await api.get(`/addresses/${id}`)
    return resp.data
}

export const addAddress = async (addressData) => {
    const resp = await api.post('/addresses', { address: addressData })
    return resp.data
}

export const editAddress = async (id, addressData) => {
    const resp = await api.put(`/addresses/${id}`, { address: addressData })
    return resp.data
}

export const deleteAddress = async (id) => {
    const resp = await api.delete(`/addresses/${id}`)
    return resp;
}
