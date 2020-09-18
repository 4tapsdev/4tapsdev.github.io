import slug from "slug";


export function slugify(str) {
  return slug(str.toLowerCase())
}

// remove no-digits chars from string
export function cleanPhone(str) {
  return str.replace(/[\D]+/g, "")
}

export function createMarkup(html) {
  return ({ __html: html })
}

export function castToBool(str) {
  return str.toLowerCase() === "yes";
}
