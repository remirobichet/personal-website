import {httpGetData} from './http'
import {ready} from './base'

const lang = window.localStorage.getItem('lang') || 'fr';

/* Set lang on html tag */
document.documentElement.lang = lang;

httpGetData(document.documentElement.lang);

ready(() => {
    document.querySelector(`.lang-switcher[data-lang="${lang}"]`).classList.add('active');
    document.querySelector('.lang-switcher:not(.active)').addEventListener('click', () => {
        localStorage.setItem('lang', document.querySelector('.lang-switcher:not(.active)').dataset.lang);
        window.location.reload();
    });
});
