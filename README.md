# Unity Knowledge Base Web

A simple but polished **Next.js 15 + MDX** documentation site for the Unity knowledge base.

## Included features

- **filesystem-backed docs** from `content/docs/`
- **full-text search** across titles, descriptions, headings, and page content
- **dark mode** with persisted theme choice
- **Apple-inspired docs UI** with soft panels, generous spacing, and clean typography
- **sticky sidebar navigation** with collapsible groups
- **table of contents** for long pages
- **breadcrumb navigation**
- **reading progress indicator**
- **copy button for code blocks**
- **MDX callout components** for warnings, tips, and checklists
- **related pages** section for better cross-linking
- **auto-generated backlinks** between docs pages
- **docs landing cards** for section-based browsing
- **section icons** for scanning major docs areas faster
- **dark mode**
- **breadcrumb navigation**
- **reading progress indicator**
- **search result highlighting**
- **syntax highlighting support** via MDX rendering pipeline
- **page-level tags** such as beginner/intermediate/advanced
- **edit this page** links

## Stack
- Next.js 15
- App Router
- MDX/Markdown rendered from the filesystem
- `next-mdx-remote` for MDX rendering

## Run

```bash
cd /home/user/unity-knowledge-nextjs
npm install
npm run dev
```

Then open:

`http://localhost:3000`

## Content source

The docs are stored in:

- `content/docs/`
- navigation source: `content/mkdocs.yml`

## Notable routes

- `/` landing page
- `/docs` docs home with section tiles
- `/docs/what-to-read-by-need`
- `/docs/questions/...` direct-answer pages

## MDX components available

You can use these in `.mdx` files:

- `<Callout type="info" title="...">`
- `<Tip title="...">`
- `<Warning title="...">`
- `<Checklist title="...">`

See:

- `/docs/resources/mdx-callout-components`

## Notes

This project is scaffolded and ready for install/run.
If you want, the next step can be:

- full-text search highlighting
- section icons
- reading progress bar
- code tabs / advanced MDX components
- Algolia or remote search later
