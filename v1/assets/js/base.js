let ready = (f) => {
    if (document.readyState !== 'loading'){
        f();
    } else {
        document.addEventListener('DOMContentLoaded', f);
    }
};

export { ready };
