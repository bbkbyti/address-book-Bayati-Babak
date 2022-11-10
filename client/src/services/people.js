import api from './api-config'

export const getAllPeople = async () => {
    const resp = await api.get('/people');
    return resp.data;
}

export const getOnePerson = async (id) => {
    const resp = await api.get(`/people/${id}`)
    return resp.data;
}

export const addPerson = async (personData) => {
    const resp = await api.post('/people', { person: personData })
    return resp.data;
}

export const editPerson = async (id, personData) => {
    const resp = await api.put(`/people/${id}`, { person: personData })
    return resp.data;
}

export const deletePerson = async (id) => {
    const resp = await api.delete(`/people/${id}`);
    return resp;
}