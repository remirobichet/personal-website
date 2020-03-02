import Mustache from 'mustache';
import {portfolio, intro, previous, sections, title} from '/assets/i18n/i18n.json';

let httpGetFromType = (type, lang = '') => {
    let request = new XMLHttpRequest();
    const url = `https://functions.remirobichet.fr/.netlify/functions/resume?type=${type}.json${lang ? `&lang=${lang}` : ''}`;
    request.open('GET', url, true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.response);
            let template = document.querySelector(`[data-template="${type}"]`);
            template.innerHTML = Mustache.render(template.innerHTML, {data});
            template.classList.add('loaded');
        }
    };
    request.send();
};

let getStaticData = (type, lang = '') => {
    let template = document.querySelector(`[data-template="${type.name}"]`);
    template.innerHTML = Mustache.render(template.innerHTML, {data: type[lang]});
    template.classList.add('loaded');
};

let getSectionNameData = (type, lang = '') => {
    let templates = document.querySelectorAll(`[data-text]`);
    templates.forEach((template) => {
        template.dataset.text = type[lang][template.dataset.text]
    });
};

let getTitleData = (type, lang = '') => {
    document.title = type[lang];
};

let httpGetData = (lang) => {
    httpGetFromType('skills');
    httpGetFromType('career', lang);
    httpGetFromType('contact');
    getStaticData(portfolio, lang);
    getStaticData(intro, lang);
    getStaticData(previous, lang);
    getSectionNameData(sections, lang);
    getTitleData(title, lang);
};

export { httpGetData };
