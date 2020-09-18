/**
 * Загрузка шрифтов
 *
 * https://github.com/bramstein/fontfaceobserver
 */

import FontFaceObserver from "fontfaceobserver";
import "./_fonts.scss";

const fonts = [
    new FontFaceObserver('Gilroy', {
        style: 'normal',
        weight: 500
    }),
    new FontFaceObserver('Gilroy', {
        style: 'italic',
        weight: 500
    }),
    new FontFaceObserver('Gilroy', {
        style: 'normal',
        weight: 600
    }),
    new FontFaceObserver('Gilroy', {
        style: 'normal',
        weight: 800
    })
];

Promise.all(fonts).then(function() {
    if (typeof document !== 'undefined') {
        document.documentElement.className = document.documentElement.className.replace(/\bno-fonts\b/, 'fonts-loaded');
        sessionStorage.fontsLoaded = true;
    }
});
