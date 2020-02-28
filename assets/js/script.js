import { httpGetData } from './http'

/* Set lang */
document.documentElement.lang = window.localStorage.getItem('lang') || 'fr';

httpGetData(document.documentElement.lang);
