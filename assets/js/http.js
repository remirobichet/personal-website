import {ready} from './base'
import Mustache from 'mustache';

const API_URL = 'https://functions.remirobichet.fr/.netlify/functions/api/';

let httpGetFromApi = (api, lang, callback) => {
    return new Promise((resolve) => {
        let request = new XMLHttpRequest();
        const url = `${API_URL}${api}?lang=${lang}`;
        request.open('GET', url, true);
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                let data = {...data, ...JSON.parse(request.response)};
                return callback(data).then(() => resolve());
            }
        };
        request.send();
    });
};

let setData = (data) => {
    return new Promise((resolve) => {
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
            resolve();
        });
    });

};

let httpGetData = (lang) => {
    return new Promise((resolve) => {
        const me = httpGetFromApi('me', lang, setData);
        const website = httpGetFromApi('website', lang, setData);
        Promise.all([me, website]).then(() =>{
            resolve();
        });
    });
};

export {httpGetData};
