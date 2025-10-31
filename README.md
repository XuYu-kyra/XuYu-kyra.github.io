## Yu Xu - CPD Site

This repository contains a data-driven Jekyll site for my resume/portfolio. Sections are defined in `_data/*.yml` and rendered with a custom layout and styles. The site includes a rich Projects component with images/videos, badges for tech stacks, and links to GitHub and live demos.

### Highlights
- Data-first content: edit YAML files in `_data/` to update sections
- Project cards: image/video preview, description, achievements, tech badges, links
- Responsive, clean UI with hover effects and accessible semantics

## Structure
```
.
├── _config.yml                # Site metadata and profile information
├── _data/                     # Section content (YAML)
│   ├── Education.yml
│   ├── Experience.yml
│   ├── Projects.yml
│   ├── Publications.yml
│   ├── Languages.yml
│   └── Skills.yml
├── _layouts/
│   └── index.html             # Site layout (renders all sections)
├── assets/
│   ├── css/style.scss         # Main stylesheet (cards, badges, responsive)
│   ├── img/                   # Icons and images
│   └── js/main.js             # Section animations / table of contents
└── index.markdown             # Entrypoint (uses the layout)
```

## Components and Behavior

### 1) Sections (`_data/*.yml`)
Each file represents a section. Required front-matter in each YAML file:
- `subject`: section title (also used as the DOM id)
- `listing-order`: order on the page (ascending = higher)
- `icon`: icon path shown next to the title
- `contents`: array of items for that section

Example (Education):
```yml
subject: Education
listing-order: 1
icon: "/assets/img/graduation-cap.svg"
contents:
  - title: The University of Manchester, Msc in Robotics
    date: Sep. 2025 - Now
```

### 2) Projects component
Projects are rendered as cards with media on the left and details on the right. Supported fields:
- `title` (string): project name
- `description` (string): short subtitle/summary shown under the title
- `tech_stack` (list[string]): shown as horizontal badges
- `achievements` (list[string]): bullet points
- `image` (path/url): preview image
- `demo_video` (path/url, optional): a GIF/MP4 overlay on hover
- `github` (url, optional): Code button
- `live_demo` (url, optional): Demo button
- Other optional metadata you added (e.g., `period`, `project_type`, `status`, `category`) will be ignored by the layout unless you decide to render them.

Example (Projects.yml):
```yml
subject: Projects
listing-order: 3
icon: "/assets/img/clipboard-list.svg"
contents:
  - title: "RAG-based Historical Character Dialogue System"
    description: "AI-powered historical character interaction platform"
    period: "Dec 2024 - May 2025"
    tech_stack: ["Python", "BeautifulSoup", "BERT", "RoBERTa", "Weaviate", "Flask", "DeepSeek API", "GPT-SoVITS", "HTML/CSS/JavaScript"]
    achievements:
      - "Built multi-source data pipeline by crawling and cleaning content from historical texts"
      - "Created knowledge retrieval system using SentenceTransformer"
    image: "/assets/img/dongao.png"
    demo_video: "/assets/videos/Team5-Requirements Evaluation.gif"
    github: "https://github.com/yourusername/rag-historical-dialogue"
    live_demo: "https://your-demo-site.com"
```

### 3) Styling
Core styles live in `assets/css/style.scss`. Key classes:
- `.project-card`, `.project-item`: card container and list item
- `.project-visual`, `.project-image`, `.project-media`, `.video-overlay`: media area and hover overlay
- `.project-content`, `.project-title`, `.project-description`: textual content
- `.tech-stack`, `.tech-tag`: horizontal tech badges
- `.project-links`, `.project-link`, `.github-link`, `.demo-link`, `.pdf-link`: action buttons

Responsive behavior:
- Desktop: media left, content right
- Mobile: stacked layout, buttons wrap

### 4) Icons and assets
- Section icons live in `assets/img/` (e.g., `graduation-cap.svg`)
- Additional icons are available under `resources/svgs/`
- A PDF icon was added for optional document links: `assets/img/file-pdf.svg`

## Editing Content
1. Edit the YAML files under `_data/`
2. Use plain text for `description`; achievements go under `achievements:` as a list
3. Put local images into `assets/img/` and videos/GIFs into `assets/videos/`
4. Restart or refresh your Jekyll server to see changes

## Local Development
Prerequisites: Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000` in your browser.

## Customization Tips
- Adjust colors and spacing in `assets/css/style.scss`
- Update profile and social links in `_config.yml`
- Add or remove sections by creating/removing YAML files in `_data/`

## License
MIT