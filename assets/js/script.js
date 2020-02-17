var Mustache = require('mustache');

var skillsRequest = new XMLHttpRequest();
skillsRequest.open('GET', 'https://functions.remirobichet.fr/.netlify/functions/resume?type=skills.json', true);
skillsRequest.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        var skillsData = JSON.parse(this.response);
        var skillsTemplate = document.querySelector('[data-template="skills"]');
        skillsTemplate.innerHTML = Mustache.render(skillsTemplate.innerHTML, {skillsData: skillsData});
        skillsTemplate.classList.add('loaded');
    }
};
skillsRequest.send();

var careerRequest = new XMLHttpRequest();
careerRequest.open('GET', 'https://functions.remirobichet.fr/.netlify/functions/resume?type=career.json', true);
careerRequest.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        var careerData = JSON.parse(this.response);
        var careerTemplate = document.querySelector('[data-template="career"]');
        careerTemplate.innerHTML = Mustache.render(careerTemplate.innerHTML, {careerData: careerData});
        careerTemplate.classList.add('loaded');
    }
};
careerRequest.send();

var contactRequest = new XMLHttpRequest();
contactRequest.open('GET', 'https://functions.remirobichet.fr/.netlify/functions/resume?type=contact.json', true);
contactRequest.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        var contactData = JSON.parse(this.response);
        var contactTemplate = document.querySelector('[data-template="contact"]');
        contactTemplate.innerHTML = Mustache.render(contactTemplate.innerHTML, {contactData: contactData});
        contactTemplate.classList.add('loaded');
    }
};
contactRequest.send();
