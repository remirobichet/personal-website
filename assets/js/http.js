import {ready} from './base'
import Mustache from 'mustache';

const API_URL = 'https://functions.remirobichet.fr/.netlify/functions/api/';

let httpGetFromApi = (api, lang, callback) => {
    let request = new XMLHttpRequest();
    const url = `${API_URL}${api}?lang=${lang}`;
    request.open('GET', url, true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            let data = {...data, ...JSON.parse(request.response)};
            callback(data);
        }
    };
    request.send();
};

let setData = (data) => {
    ready(() => {
        Object.entries(data).forEach(([key, el]) => {
            let template = document.querySelector(`[data-template="${key}"]`);
            if (template) {
                if (typeof el === 'string') {
                    template.innerHTML = el;
                } else {
                    template.innerHTML = Mustache.render(template.innerHTML, {data: el});
                    template.classList.add('loaded');
                }
            }
            if (key === 'title') {
                document.title = el;
            }
            if (key === 'sections') {
                let text = document.querySelectorAll(`[data-text]`);
                text.forEach((template) => {
                    template.dataset.text = el[template.dataset.text];
                    template.classList.add('loaded');
                });
            }
        });
    });
};

let httpGetData = (lang) => {
    httpGetFromApi('me', lang, setData);
    httpGetFromApi('website', lang, setData);
};

export {httpGetData};