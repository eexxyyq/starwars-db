import axios from "axios";

export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    async getResource(url) {
        const res = await axios.get(`${this._apiBase}${url}`);
        if (res.status !== 200) {
            throw new Error('cant fetch');
        }
        return await res.data;
    }

    async getAllPeople() {
        const res = await this.getResource(`/people`);
        return res.results;
    }

    async getPersonById(id) {
        return await this.getResource(`/people/${id}`);
    }
}