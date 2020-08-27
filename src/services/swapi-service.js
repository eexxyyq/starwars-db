import axios from "axios";

export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    headers = {
        'Access-Control-Allow-Headers': '*'
    };

    async getResource(url) {
        const res = await axios.get(`${this._apiBase}${url}`);
        if (res.status !== 200) {
            throw new Error('cant fetch');
        }
        return res.data;
    }

    async getAllPeople() {
        const res = await this.getResource(`/people`);
        return res.results.map(this._transformPeople);
    }

    async getPersonById(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPeople(person);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships`);
        return res.results.map(this._transformStarship);
    }

    async getStarshipById(id) {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    async getAllPlanet() {
        const res = await this.getResource(`/planets`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanetById(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet)
    }

    _extractId(url) {
        const regExp = /\/([0-9]*)\/$/;
        return url.match(regExp)[1];
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            cost: starship.cost_in_credits,
            length: starship.length,
            passengers: starship.passengers,
            crew: starship.crew,
            cargoCapacity: starship.cargo_capacity
        }
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            period: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPeople = (people) => {
        return {
            id: this._extractId(people.url),
            name: people.name,
            gender: people.gender,
            birthYear: people.birth_year,
            eyeColor: people.eye_color
        }
    }
}