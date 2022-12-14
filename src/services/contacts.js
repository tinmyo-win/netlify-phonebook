import axios from "axios";
const baseUrl = 'https://subtle-selkie-d9d7d2.netlify.app/.netlify/functions/index/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)

}

const create = newContact => {
    const request = axios.post(baseUrl, newContact)
    return request.then(response => response.data)
}

const update = (id, newContact ) => {
    const request = axios.put(`${baseUrl}/${id}`, newContact)
    return request.then(response => response.data)
}

const deleteContact = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deleteContact}