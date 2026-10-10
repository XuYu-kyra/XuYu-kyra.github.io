# Yu Xu — Portfolio & CV Site

[Live site](https://xuyu-kyra.github.io/) · [English](#english) · [中文](#中文)

This repository contains the source and generated output for my bilingual portfolio: a single place to browse my robotics, AI, and software projects together with their code, demonstrations, and project-specific evidence.

## English

### About the site

The portfolio is built with Jekyll and published through GitHub Pages. Profile and project information is stored as structured YAML, while Liquid templates turn that content into reusable sections and project cards. This keeps content updates separate from layout code and makes the English and Chinese views share the same project structure.

The live site includes:

- a language switcher with the selected language saved in the browser;
- education, experience, skills, publications, and project sections driven by `_data/*.yml`;
- project cards with contribution summaries, technology tags, results, images, videos, repository links, and demos;
- responsive layouts for desktop and mobile;
- a generated table of contents, smooth navigation, and scroll-based section feedback;
- downloadable CV assets and GitHub Pages SEO, feed, and sitemap support.

### What I changed

I used an open-source Jekyll resume as the starting point, then adapted it into a project-focused bilingual portfolio. My work in this repository includes:

- restructuring the portfolio content into English/Chinese YAML fields;
- extending the Liquid project layout to support project metadata, contribution text, achievement lists, technology badges, media galleries, video playback, and external links;
- implementing the English/Chinese switcher and rebuilding the table of contents for the active language;
- customising the visual system and responsive behaviour in SCSS;
- preparing project images, demonstration media, links, and downloadable CV files;
- configuring the Jekyll build and publishing the generated site from `docs/`.

### Stack

| Area | Technology |
|---|---|
| Static site | Jekyll, GitHub Pages |
| Templates | Liquid, HTML |
| Content | YAML |
| Styling | SCSS / CSS |
| Interaction | Vanilla JavaScript, browser `localStorage` |
| Publishing | Bundler, GitHub Pages, SEO/feed/sitemap plugins |

### Repository structure

```text
test-site/
  _config.yml          site and profile configuration
  _data/               bilingual portfolio content
  _layouts/            Liquid page and project-card templates
  assets/css/          editable SCSS and theme rules
  assets/js/           language, navigation, and scroll behaviour
  assets/img|videos/   project media and CV assets

docs/                  generated GitHub Pages output
```

The editable source lives under `test-site/`; `docs/` is the generated site served by GitHub Pages.

### Run locally

```bash
cd test-site
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000`. Site-level metadata is in `test-site/_config.yml`; portfolio entries are under `test-site/_data/`; project media is under `test-site/assets/`.

### Attribution

This site is based on [Yankos/byanko55's `jekyll-professional-resume`](https://github.com/byanko55/jekyll-professional-resume), released under the MIT License. The upstream author and licence are preserved in [`test-site/jekyll-professional-resume.gemspec`](test-site/jekyll-professional-resume.gemspec) and [`test-site/LICENSE`](test-site/LICENSE). The bilingual content model, extended project presentation, media support, styling, interactions, and site-specific configuration described above are my adaptations.

---

## 中文

这个仓库是我的双语个人作品集与在线简历源码，用来集中展示机器人、AI 和软件项目，并为每个项目提供代码仓库、演示媒体、个人贡献和实现结果等可继续查阅的材料。

### 站点设计

网站使用 Jekyll 构建并通过 GitHub Pages 发布。个人信息和项目内容保存在结构化 YAML 中，Liquid 模板负责把数据渲染成统一的经历区块与项目卡片。这样可以把“内容更新”和“页面布局”分开维护，中英文也能共用同一套项目结构，而不是维护两份互相容易失步的页面。

当前站点包含：

- 中英文切换，并通过浏览器保存用户上次选择的语言；
- 由 `_data/*.yml` 驱动的教育、经历、技能、发表内容和项目模块；
- 支持个人贡献、技术标签、实现结果、图片、视频、源码与演示链接的项目卡片；
- 针对桌面端和移动端设计的响应式布局；
- 根据当前语言动态生成的页面目录、平滑导航和滚动位置反馈；
- 可下载简历，以及 GitHub Pages 的 SEO、feed 和 sitemap 配置。

### 我的定制工作

这个网站以开源 Jekyll 简历模板为起点，我在其上将页面改造成以项目证据为核心的双语作品集，主要完成了：

- 将作品集内容重构为成对的中英文字段，并整理到 YAML 数据文件中；
- 扩展 Liquid 项目模板，使其支持项目时间、类型、状态、个人贡献、成果列表、技术标签、媒体画廊、视频播放和外部链接；
- 实现中英文切换逻辑，并在切换语言后重新生成对应语言的目录；
- 使用 SCSS 调整视觉样式、项目卡片和不同屏幕尺寸下的排版；
- 整理项目图片、演示视频、仓库链接和可下载简历；
- 配置 Jekyll 构建流程，并将生成结果发布到 `docs/`。

### 技术栈

| 模块 | 技术 |
|---|---|
| 静态站点 | Jekyll、GitHub Pages |
| 页面模板 | Liquid、HTML |
| 内容管理 | YAML |
| 样式 | SCSS / CSS |
| 页面交互 | 原生 JavaScript、浏览器 `localStorage` |
| 构建发布 | Bundler、GitHub Pages、SEO/feed/sitemap plugins |

### 目录结构

```text
test-site/
  _config.yml          站点与个人信息配置
  _data/               双语作品集内容
  _layouts/            Liquid 页面与项目卡片模板
  assets/css/          可编辑的 SCSS 与主题规则
  assets/js/           语言、导航和滚动交互
  assets/img|videos/   项目媒体与简历资源

docs/                  GitHub Pages 的生成结果
```

实际编辑的源码位于 `test-site/`，`docs/` 保存构建后由 GitHub Pages 提供访问的静态文件。

### 本地运行

```bash
cd test-site
bundle install
bundle exec jekyll serve --livereload
```

启动后访问 `http://localhost:4000`。站点级信息位于 `test-site/_config.yml`，作品集内容位于 `test-site/_data/`，项目媒体位于 `test-site/assets/`。

### 模板来源

本站基于 [Yankos/byanko55 的 `jekyll-professional-resume`](https://github.com/byanko55/jekyll-professional-resume) 修改，原项目采用 MIT License。原作者与许可证信息保留在 [`test-site/jekyll-professional-resume.gemspec`](test-site/jekyll-professional-resume.gemspec) 和 [`test-site/LICENSE`](test-site/LICENSE)。上述双语内容模型、扩展后的项目展示、媒体支持、样式、交互和本站配置是我在模板基础上的定制工作。

