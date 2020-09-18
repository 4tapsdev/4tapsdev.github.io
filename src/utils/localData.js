import path from "path";
import jdown from "jdown";
import { reverse } from "named-urls";

import renderer from "./renderer";
import routes from "../constants/routes";
import { slugify, createMarkup, castToBool } from "./text";


export function prepareCases (data) {
    return data.map(caseObj => {
        const slug = slugify(caseObj.title);
        return  {
            ...caseObj,
            slug: slug,
            url: reverse(routes.cases.detail.show, { slug: slug }),
            visible: castToBool(caseObj.visible),
            show_in_review_block: castToBool(caseObj.show_in_review_block),
            mobile_centrize: castToBool(caseObj.image_review_mobile_centrize),
            body: createMarkup(caseObj.contents)
        }
    })
}

export async function fetchLocalData() {
    const folderPath = path.resolve(process.cwd(), 'content');
    const json = await jdown(folderPath, { markdown: { renderer } });
    return json
}
