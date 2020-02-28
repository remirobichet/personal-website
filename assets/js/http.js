import Mustache from 'mustache';

let httpGetFromType = (type, lang) => {
    let request = new XMLHttpRequest();
    request.open('GET', `https://functions.remirobichet.fr/.netlify/functions/resume?type=${type}.json&lang=${lang}`, true);
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

let httpGetData = (lang) => {
    httpGetFromType('skills', lang)
    httpGetFromType('career', lang)
    httpGetFromType('contact', lang)
};

export { httpGetData };
