import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import SwapiService from "./services/swapi-service";

const swapi = new SwapiService();
swapi.getAllPeople().then((people) => {
    people.forEach((person) => {console.log(person.name)});
});
swapi.getPersonById(1).then((body) => console.log(body))

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);


