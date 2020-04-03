import {httpGetData} from './http';
import {ready} from './base';
import {parse} from 'tag-to-emoji';

const lang = window.localStorage.getItem('lang') || 'fr';
const theme = window.localStorage.getItem('theme') || 'light';

/* Set lang on html tag */
document.documentElement.lang = lang;
document.documentElement.dataset.theme = theme;

httpGetData(document.documentElement.lang).then(() => onReady());

let onReady = () => {
    ready(() => {
        /* Parse tag-to-emoji */
        let body = document.querySelector('body');
        body.innerHTML = parse(body.innerHTML);

        /* Set lang */
        document.querySelector(`.lang-switcher[data-lang="${lang}"]`).classList.add('active');
        document.querySelector('.lang-switcher:not(.active)').addEventListener('click', () => {
            localStorage.setItem('lang', document.querySelector('.lang-switcher:not(.active)').dataset.lang);
            window.location.reload();
        });

        /* Set theme */
        document.querySelector(`.theme-switcher[data-theme="${theme}"]`).classList.add('active');
        document.querySelectorAll('.theme-switcher').forEach((value) => {
            value.addEventListener('click', function() {
                localStorage.setItem('theme', this.dataset.theme);
                document.documentElement.dataset.theme = this.dataset.theme;
                [...this.parentNode.children].forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
};

