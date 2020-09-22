import path from "path";
// import axios from "axios";
import { createSharedData } from "react-static/node";

import Document from "./src/components/Document";
import routes from "./src/constants/routes";
import getContent from "./src/utils/content";
import { processMarkdown, prepareCases } from "./src/utils/localData";
import { SITE_ROOT } from "./src/constants/conf";


async function getRoutes() {
    const content = await getContent();
    const preparedCases = prepareCases(content.cases);
    const visibleCases = preparedCases.filter(caseObj => caseObj.visible);
    const cases = createSharedData(visibleCases);

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
    getSiteData: async ({ dev }) => processMarkdown("./content/site.md"),
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
        'favicons-directory',
        [
            require.resolve('react-static-plugin-favicons'),
            {
                inputFile: path.resolve(__dirname, './public/images/favicon.svg'),
                outputDir: path.join(__dirname, 'dist', 'favicon'),
                configuration: {
                    path: '/favicon',
                    //     manifestRelativePaths: true,
                }
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sass'),
        require.resolve('react-static-plugin-sitemap'),
    ],
}
