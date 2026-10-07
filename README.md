# Yu Xu — Data-Driven Portfolio & CV Site

[English](#english) · [中文](#中文) · [Live site](https://xuyu-kyra.github.io/)

## English

This repository is the source of my GitHub Pages portfolio and CV site. I turned a static resume into a data-driven Jekyll application so that project stories, evidence, media, and profile metadata can evolve without rewriting the page layout.

### The story

A portfolio should do more than list technologies. It should help a reviewer move from “what did this person build?” to “what decisions did they own, and can I inspect the evidence?”. I designed the site around that reading path: structured sections for education, experience, research interests, skills, and projects; project cards with outcomes, technology badges, images/videos, and code/demo links; and a responsive layout that remains usable on a phone.

### What I built

- A Jekyll/GitHub Pages site using `_data/*.yml` as the content model.
- A custom project-card component that supports media galleries, video previews, technology badges, achievements, GitHub links, live demos, and optional PDF links.
- Responsive SCSS for desktop and mobile layouts, with reusable theme tokens and accessible semantics.
- A lightweight JavaScript table of contents and scroll-reveal interaction for long-form portfolio reading.
- GitHub Pages build configuration, feed/SEO/sitemap plugins, local development instructions, and a PDF CV asset.

### Local development

```bash
cd docs
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000`. Edit profile metadata in `_config.yml` and project content in `_data/Projects.yml`; keep media under `assets/img/` or `assets/videos/`.

### Why it matters in a hiring context

This project demonstrates front-end implementation, content modelling, responsive UI, build/deployment hygiene, and the product judgment to make technical work legible to a non-specialist reviewer. The portfolio is itself an interface for evidence.

## 中文

这是我的 GitHub Pages 个人作品集与简历网站源码。我没有把简历写死在一个 HTML 页面里，而是把教育经历、工作经历、研究兴趣、技能和项目内容抽象成 `_data/*.yml` 数据模型，让内容迭代不需要反复改布局。

### 项目故事

作品集不应该只是技术名词列表，更应该让招聘者顺着页面回答三个问题：我做了什么、我主导了哪些关键决策、证据在哪里。为此我设计了数据驱动的项目卡片、媒体展示、技术标签、成果描述、GitHub/演示链接和响应式阅读路径。

### 我的主导工作

- 基于 Jekyll/GitHub Pages 建立数据驱动站点；
- 实现支持图片、视频、技术 badge、成果、源码、在线演示和 PDF 链接的项目卡片组件；
- 编写桌面端/移动端 SCSS 和可复用主题变量，兼顾响应式布局与可访问性；
- 用轻量 JavaScript 生成目录并实现滚动阅读反馈；
- 配置 GitHub Pages 构建、feed、SEO、sitemap、Bundler 本地开发流程和 PDF 简历资源。

### 本地运行

```bash
cd docs
bundle install
bundle exec jekyll serve --livereload
```

打开 `http://localhost:4000`。个人信息在 `_config.yml`，项目内容在 `_data/Projects.yml`，图片和视频分别放在 `assets/img/` 与 `assets/videos/`。

### 求职价值

这个项目体现的不只是 Jekyll，而是前端实现、内容建模、响应式交互、构建部署和信息表达能力：我把复杂技术项目重新组织成招聘者可以快速理解、继续验证的证据界面。

许可证：MIT。
