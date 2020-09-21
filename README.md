## Commands

Project install. Be sure that you have the latest node and npm installed, then clone this repository and run:

```bash
git clone git@github.com:4tapsdev/4tapsdev.github.io.git
npm install
```

To run a developer environment:

```bash
npm start
```

To test a production build locally, do:

```bash
npm run stage
npm run serve
```

To run a production build for deployment:

```bash
npm run build
```

Deploy, may require entering a username and password from the github, if you cloned the repository via https:

```bash
npm run deploy
```

## Content

Page content is stored in markdown files in the *content* folder.
We have four content types: site, pages, blocks and collections.

**Site** - shared values for all pages like phones, emails, default meta tags content etc...

**Pages** - values for unique pages. Mainly contains header of page.

**Blocks** - values for unique blocks. The content for the blocks was separated from the pages, since the block can potentially be displayed on any page.

**Collections** - values for all enumerable site objects.

Let's look at the file structure. Fields come first:

```bash
---
visible: "Yes"
title: ClutchPoints
short_desc: ClutchPoints is the 6th largest sports media in the US.

... some fileds ...

show_in_review_block: "Yes"
reviewer: Nish Patel
image_review_mobile_centrize: "No"
---
```

And after the fields there can be markdown markup, which turns into html string:

```bash
---
visible: "Yes"
title: ClutchPoints
short_desc: ClutchPoints is the 6th largest sports media in the US.
---
## Heading
paragraph

paragraph
## Heading
```
It is displayed, for example, on the case page.

#### Fields values
When filling content for string values, it is desirable to enclose it in quotes, especially for strings with special characters. For example let's look at the home page title:

```bash
title: "Launch your\nideas "
```

For boolean fields need to use "Yes" / "No" strings:

```bash
visible: "Yes"
```

#### Markdown text
Some pages (each case for example) generate html from markdown.
Use [markdown cheat-sheet](https://www.markdownguide.org/cheat-sheet/) for editing markdown page text.

#### Apply changes
After complete editing:

```bash
npm run deploy
```
