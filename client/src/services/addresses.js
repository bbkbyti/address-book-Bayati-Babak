import api from './api-config'

export const getAllAddresses = async () => {
    const resp = await api.get('/addresses')
    return resp.data;
}