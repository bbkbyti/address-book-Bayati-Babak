import api from './api-config'

export const getAllPeople = async () => {
    const resp = await api.get('/people');
    return resp.data;
}