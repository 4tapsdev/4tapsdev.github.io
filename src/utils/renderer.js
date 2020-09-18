import marked from "marked";


const renderer = new marked.Renderer();

renderer.heading = (text, level) => {
    if (level === 2) {
        return `<h${level} class="section-label">${text}</h${level}>`;
    }

    return `<h${level}>${text}</h${level}>`;
}

renderer.paragraph = (text) => {
    return `<p class="plain-text">${text}</p>`;
}

export default renderer;
