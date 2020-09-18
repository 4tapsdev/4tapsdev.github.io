import React from "react";
import Safe from "react-safe";

import { cleanObj } from "../utils/helpers";
import routes from "../constants/routes";


const renderMeta = (siteData, routeInfo) => {
    if (!siteData || !routeInfo || !routeInfo.path) {
        return null
    }

    if (routeInfo.data.page) {
    // if (routeInfo.path === routes.home && routeInfo.data.page) {
        const pageData = cleanObj(Object.assign({}, routeInfo.data.page));
        const mergedData = Object.assign({}, siteData, pageData);
        return (
            <React.Fragment>
                <title>{mergedData.title}</title>
                <meta name="description" content={mergedData.desc} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={mergedData.og_title} />
                <meta property="og:description" content={mergedData.og_desc} />
                <meta property="og:url" content={mergedData.og_url} />
                <meta property="og:image" content={mergedData.og_image_url} />
                <meta property="og:image:type" content={mergedData.og_image_type} />
                <meta property="og:image:width" content={mergedData.og_image_width} />
                <meta property="og:image:height" content={mergedData.og_image_height} />

                <meta name="twitter:title" content={mergedData.twitter_title} />
                <meta name="twitter:description" content={mergedData.twitter_desc} />
                <meta name="twitter:image" content={mergedData.twitter_image_url} />
            </React.Fragment>
        )
    }

    // if (routeInfo.path === routes.cases.all && routeInfo.data.page) {
    //     const pageData = cleanObj(Object.assign({}, routeInfo.data.page));
    //     const mergedData = Object.assign({}, siteData, pageData);
    //     return (
    //         <React.Fragment>
    //             <title>{mergedData.title}</title>
    //             <meta name="description" content={mergedData.desc} />
    //
    //             <meta property="og:type" content="website" />
    //             <meta property="og:title" content={mergedData.og_title} />
    //             <meta property="og:description" content={mergedData.og_desc} />
    //             <meta property="og:url" content={mergedData.og_url} />
    //             <meta property="og:image" content={mergedData.og_image_url} />
    //             <meta property="og:image:type" content={mergedData.og_image_type} />
    //             <meta property="og:image:width" content={mergedData.og_image_width} />
    //             <meta property="og:image:height" content={mergedData.og_image_height} />
    //
    //             <meta name="twitter:title" content={mergedData.twitter_title} />
    //             <meta name="twitter:description" content={mergedData.twitter_desc} />
    //             <meta name="twitter:image" content={mergedData.twitter_image_url} />
    //         </React.Fragment>
    //     )
    // }
};

export default (props) => {
    const {Html, Head, Body, children, state: { siteData, routeInfo } } = props;

    const fonts_js = `
        document.documentElement.className = document.documentElement.className.replace(/\\bno-js\\b/, 'js');
        // Загрузка шрифтов (оптимизация при повторном заходе) см. https://github.com/bramstein/fontfaceobserver
        if (sessionStorage.fontsLoaded) {
            document.documentElement.className = document.documentElement.className.replace(/\\bno-fonts\\b/, 'fonts-loaded');
        }
        if (!(matchMedia('(hover: none)').matches)) {
          document.documentElement.classList.add('can-hover');
        }
      `;

    const ym = `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
        m[i].l=1*new Date();
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
        ym(27302507, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true }); 
      `;

    return (
        <Html lang="en-US" className="no-fonts">
            <Head>
                {renderMeta(siteData, routeInfo)}

                <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                <meta name="referrer" content="unsafe-url" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <Safe.script>{fonts_js}</Safe.script>
                <Safe.script>{ym}</Safe.script>
            </Head>
            <Body>
                {children}
            </Body>
        </Html>
    )
}
