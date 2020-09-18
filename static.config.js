// import fs from "fs";
import path from "path";
// import axios from "axios";
// import marked from "marked";
// import GrayMatter from "gray-matter";
import { createSharedData } from "react-static/node";

import Document from "./src/components/Document";
import routes from "./src/constants/routes";
import getContent from "./src/utils/content";
import { prepareCases } from "./src/utils/localData";
import { SITE_ROOT } from "./src/constants/conf";
// import siteMarkdown from "./content/site.md";


// async function processMarkdown (markdown) {
//     const files = await readFiles(paths)
//   const parsed = await parseFiles(files)
//   const converted = parsed.map(entry => Object.assign({}, entry, { html: Marked(entry.__content) }))
//
//     console.log(markdown);
//   const { content, data } = GrayMatter(markdown);
//   const html = marked(content);
//   return { content: html, ...data }
// }

async function getRoutes() {
    const content = await getContent();
    const cases = createSharedData(prepareCases(content.cases).filter(caseObj => caseObj.visible));

    return [
        {
            path: routes.home,
            template: 'src/containers/Home',
            getData: () => ({
                page: content.pages.home,
                about_block: content.blocks.about,
                process_block: content.blocks.process,
                cases_block: content.blocks.cases,

                advantages: content.advantages,
                specialties: content.specialties,
                steps: content.steps,
            }),
            sharedData: {
                cases,
            },
        },
        {
            path: routes.cases.all,
            template: 'src/containers/Cases',
            getData: () => ({
                page: content.pages.cases,
            }),
            sharedData: {
                cases,
            },
            children: cases.data.map(caseObj => ({
                path: `/${caseObj.slug}`,
                template: 'src/containers/Case',
                getData: () => ({
                    page: caseObj,
                    tiles_block: content.blocks.tiles,
                }),
                sharedData: {
                    cases,
                },
            })),
        },
        {
            path: '404',
            template: 'src/containers/404',
        },
    ]
}

export default {
    siteRoot: SITE_ROOT,
    Document: Document,
    getSiteData: async ({ dev }) => ({
        // general head meta
        title: '4taps',
        desc: '4Taps – your technology partner in mobile, AR and machine learning',

        // twitter head meta
        twitter_title: '4taps',
        twitter_desc: '4Taps – your technology partner in mobile, AR and machine learning',
        twitter_image_url: `${SITE_ROOT}/images/brand.svg`,

        // OG head meta
        og_title: '4taps',
        og_desc: '4Taps – your technology partner in mobile, AR and machine learning',
        og_url: SITE_ROOT,
        og_image_url: `${SITE_ROOT}/images/brand.svg`,
        og_image_type: "image/svg",
        og_image_width: "101",
        og_image_height: "24",

        // contacts
        address: 'Palo Alto Networks 3000 Tannery Way Santa Clara, CA 95054.',
        phoneLA: "(310) 498-7895",
        phoneMoscow: "(903) 333-1616",
        email: "taptap@4taps.me",
    }),
    // getSiteData: async ({ dev }) => processMarkdown(siteMarkdown),
    getRoutes: async () => {
        try {
            return await getRoutes()
        } catch (error) {
            console.error('Error while building the routes!', error.message)
            // Don't try to display the stacktrace here, it will cause a strange error
            process.exit(1) // throwing an error does not stop the building process
        }
    },
    plugins: [
        [
            require.resolve('react-static-plugin-favicons'),
            {
                inputFile: path.resolve(__dirname, './src/images/favicon.svg'),
                // outputDir: path.join(__dirname, 'dist', 'favicon'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sass'),
        require.resolve('react-static-plugin-sitemap'),
    ],
}
