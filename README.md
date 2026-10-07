# Yu Xu — Portfolio & CV Site

[Live site](https://xuyu-kyra.github.io/) · [English](#english) · [中文](#中文)

**Stack:** Jekyll · GitHub Pages · Liquid · YAML · SCSS · JavaScript · GitHub Pages SEO/feed/sitemap plugins

## English

This repository powers my personal portfolio and CV site. The site keeps profile and project content in YAML, while the layout, project cards, media handling, and responsive behaviour live in reusable Jekyll components.

### What I customised

- Structured education, experience, research, skills, languages, publications, and projects as `_data/*.yml` content.
- Extended project cards with descriptions, achievements, technology badges, images, video previews, source links, live demos, and optional PDF links.
- Built responsive SCSS for desktop and mobile layouts, with shared theme tokens and accessible HTML semantics.
- Added a lightweight JavaScript table of contents and scroll-reveal behaviour for longer pages.
- Configured the GitHub Pages build, SEO/feed/sitemap plugins, local Bundler workflow, and downloadable CV assets.

### Repository layout

```text
test-site/
  _config.yml          site/profile metadata
  _data/               portfolio content
  _layouts/            page composition
  assets/css/          SCSS and theme rules
  assets/js/           table of contents and interactions
  assets/img|videos/   project media

docs/                  generated GitHub Pages output
```

### Edit and run locally

```bash
cd test-site
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000`. Update site metadata in `test-site/_config.yml`, project content in `test-site/_data/Projects.yml`, and media under `test-site/assets/`. The `docs/` directory contains generated site output rather than the editable YAML/Liquid source.

### Attribution

This site is based on [Yankos/byanko55's `jekyll-professional-resume`](https://github.com/byanko55/jekyll-professional-resume), released under the MIT License. The original author and licence are preserved in [`test-site/jekyll-professional-resume.gemspec`](test-site/jekyll-professional-resume.gemspec) and [`test-site/LICENSE`](test-site/LICENSE). My work is the portfolio content model, project/media presentation, styling, interactions, and site-specific configuration described above.

## 中文

这是我的个人作品集与在线简历网站源码。内容保存在 YAML 中，页面结构、项目卡片、媒体展示和响应式行为则由可复用的 Jekyll 组件负责，因此更新项目经历时不需要反复改页面布局。

### 我做的定制

- 把教育、经历、研究方向、技能、语言、发表内容和项目整理为 `_data/*.yml`；
- 扩展项目卡片，支持简介、成果、技术标签、图片、视频预览、源码、在线演示和可选 PDF；
- 编写桌面端/移动端 SCSS，统一主题变量并保留可访问的 HTML 语义；
- 用轻量 JavaScript 生成目录和滚动反馈；
- 配置 GitHub Pages 构建、SEO/feed/sitemap、本地 Bundler 流程和简历资源。

### 本地运行

在 `test-site/` 目录执行上面的 Bundler/Jekyll 命令，然后访问 `http://localhost:4000`。站点信息位于 `test-site/_config.yml`，项目内容位于 `test-site/_data/Projects.yml`，媒体资源位于 `test-site/assets/`；`docs/` 保存生成后的 GitHub Pages 文件。

### 模板来源

本站基于 [Yankos/byanko55 的 `jekyll-professional-resume`](https://github.com/byanko55/jekyll-professional-resume) 修改，原项目采用 MIT License。原作者与许可证信息保留在 [`test-site/jekyll-professional-resume.gemspec`](test-site/jekyll-professional-resume.gemspec) 和 [`test-site/LICENSE`](test-site/LICENSE)。我的工作主要是内容模型、项目/媒体展示、样式、交互和本站配置。
