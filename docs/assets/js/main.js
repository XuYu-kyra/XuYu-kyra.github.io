document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const tocbox = document.querySelector('.toc-box');
    const subjects = Array.from(document.querySelectorAll('.subject'));
    const contents = document.querySelectorAll('.subject, .item');
    const languageButtons = document.querySelectorAll('[data-language]');
    const translations = [];

    function bindHtml(element, chineseHtml) {
        if (!element) return;
        translations.push({ element: element, en: element.innerHTML, zh: chineseHtml });
    }

    function bindDirectText(parent, chineseText) {
        if (!parent) return;
        const textNode = Array.from(parent.childNodes).find(function (node) {
            return node.nodeType === Node.TEXT_NODE && node.textContent.trim();
        });
        if (!textNode) return;

        const label = document.createElement('span');
        label.textContent = textNode.textContent.trim();
        parent.replaceChild(label, textNode);
        bindHtml(label, chineseText);
    }

    function listHtml(items) {
        return items.map(function (item) { return '<li>' + item + '</li>'; }).join('');
    }

    const sectionNames = ['教育经历', '关于我', '项目经历', '研究兴趣', '专业技能', '语言能力'];
    subjects.forEach(function (subject, index) {
        bindDirectText(subject.querySelector('.subject-name'), sectionNames[index]);
    });

    const educationItems = document.querySelectorAll('#Education .item');
    const education = [
        ['曼彻斯特大学，机器人学硕士', '2025年9月—至今'],
        ['香港大学，计算机科学本科交换项目', '2024年9月—2025年1月'],
        ['厦门大学，数字媒体技术工学学士', '2021年9月—2025年6月']
    ];
    educationItems.forEach(function (item, index) {
        bindHtml(item.querySelector('.content-header > p'), education[index][0]);
        bindDirectText(item.querySelector('.content-date'), education[index][1]);
    });

    bindHtml(
        document.querySelector('[id="About me"] .item > p'),
        '曼彻斯特大学机器人学硕士在读，具有软件工程背景，并曾赴香港大学计算机科学专业交流学习。现寻求机器人、人工智能、计算机视觉及软件工程方向的毕业生岗位，关注如何构建贯通感知、决策与用户应用的可靠智能系统。具备 ROS 2 机器人系统、计算机视觉、自然语言处理和全栈开发经验，能够参与从数据处理、模型开发到系统集成、测试与部署的完整工程流程。善于跨学科团队协作与沟通，重视工程落地，并习惯从产品和用户需求出发解决技术问题。'
    );

    const projectTranslations = [
        {
            title: '面向移动操作机器人的 ROS 2 视觉系统',
            meta: ['2026年1月—2026年5月', '团队机器人项目', '已完成'],
            description: '为移动操作机器人平台开发视觉子系统，实现白色料箱搜索、彩色积木检测和三维定位，并与抓取放置流程完成集成。',
            captions: ['机器人系统运行验证视频', 'ROS 2 视觉功能包结构'],
            details: [
                ['项目目标', '构建 ROS 2 感知流程，从 RGB-D 相机数据中检测料箱和彩色积木、估计三维位姿，并为导航与操作模块提供可靠的感知结果。'],
                ['个人贡献', '在团队项目中负责视觉模块，完成基于 HSV 的斑点检测、RGB-D 三维投影、积木与料箱分类及时间序列平滑，并开发 RViz 可视化和调试工具，支持系统测试与集成。'],
                ['项目成果', listHtml(['发布二维检测结果和物体三维位姿，供机器人下游任务调用', '将搜索阶段的白色料箱检测与操作阶段的多色物体检测解耦', '通过多帧确认和指数移动平均平滑提升检测稳定性', '增加终端摘要、RViz 标记和图像标注等调试节点'])],
                ['项目亮点', listHtml(['设计模块化 ROS 2 功能包结构，并为不同运行阶段配置 launch 文件', '利用对齐深度图与相机内参估计物体位置及偏航角', '实现轻量级跟踪逻辑，减少复杂场景中的误检', '完善功能包文档，便于团队复用和后续扩展'])]
            ]
        },
        {
            title: '基于 RAG 的历史人物对话系统',
            meta: ['2024年12月—2025年5月', '个人项目', '已完成'],
            description: '融合语言模型、知识检索与语音合成技术，开发以历史人物孙策为原型的智能对话系统，提升角色对话的真实感与史实一致性。',
            captions: ['项目界面概览', '对话系统演示', '代码仓库结构与后端模块'],
            details: [['项目亮点', listHtml(['通过抓取和清洗多类历史文本构建数据流程，并处理人物别名消歧', '使用 SentenceTransformer 构建知识检索系统，高并发场景下延迟降低 30%', '设计结合角色专属提示模板的 RAG 流程，提高回答的史实准确性', '集成 GPT-SoVITS，实现实时文本转语音', '开发响应式 Web 界面及用户反馈机制'])]]
        },
        {
            title: 'PetCare AI——智能宠物医疗对话系统',
            meta: ['2023年6月—2024年7月', '个人项目', '已完成'],
            description: '主导开发面向宠物问诊场景的 AI 对话系统，利用自然语言处理技术模拟宠物医生与用户之间的交流。',
            captions: ['PetCare AI 项目封面', '项目结构概览'],
            details: [['项目亮点', listHtml(['基于 Django 设计后端逻辑，负责请求处理与数据库管理', '结合 BERT 与 GPT-3 实现自然语言处理和上下文感知回复', '使用 jieba 完成中文分词与文本处理', '设计可扩展的系统架构，支持用户个性化功能'])]]
        },
        {
            title: "Let's Buy——面向老年用户的 AI 购物平台",
            meta: ['2023年4月—2024年6月', '个人项目', '已完成'],
            description: '开发面向 55 至 85 岁老年用户的 AI 在线服装购物平台，针对其使用习惯优化购物与推荐体验。',
            captions: ['虚拟试衣功能演示', '小程序与后端结构'],
            details: [['项目亮点', listHtml(['实现 KNN 模型，为用户提供个性化服装尺码推荐', '收集并清洗老年服装尺码表，完成训练数据准备', '通过交叉验证与超参数调优优化模型表现', '结合多种过滤算法提升推荐准确率'])]]
        },
        {
            title: '基于面部表情的音乐推荐系统',
            meta: ['2023年2月—2024年4月', '个人项目', '已完成'],
            description: '开发个性化音乐推荐系统，通过面部表情识别感知用户情绪，并据此进行音乐筛选与推荐。',
            captions: ['应用界面概览', 'Django 项目结构与功能模块'],
            details: [['项目亮点', listHtml(['使用 OpenCV 与 DeepFace 构建面部表情识别模块', '运用自然语言处理技术完成歌词数据处理与分析', '结合情感词典实现情绪标签生成', '设计并实现从情绪识别到音乐推荐的完整逻辑'])]]
        }
    ];

    document.querySelectorAll('.project-item').forEach(function (project, index) {
        const translation = projectTranslations[index];
        if (!translation) return;

        bindHtml(project.querySelector('.project-title'), translation.title);
        project.querySelectorAll('.project-meta-pill').forEach(function (pill, metaIndex) {
            bindHtml(pill, translation.meta[metaIndex]);
        });
        bindHtml(project.querySelector('.project-description'), translation.description);
        project.querySelectorAll('.project-media-caption').forEach(function (caption, captionIndex) {
            bindHtml(caption, translation.captions[captionIndex]);
        });
        project.querySelectorAll('.project-detail-block').forEach(function (block, detailIndex) {
            const detail = translation.details[detailIndex];
            if (!detail) return;
            bindHtml(block.querySelector('.project-detail-title'), detail[0]);
            bindHtml(block.querySelector('p, .project-achievements'), detail[1]);
        });
        project.querySelectorAll('.github-link').forEach(function (link) {
            bindHtml(link, '<img src="/assets/img/github.svg" alt="GitHub">源代码');
        });
        project.querySelectorAll('.demo-link').forEach(function (link) {
            bindHtml(link, '<img src="/assets/img/globe.svg" alt="在线演示">演示');
        });
    });

    const researchTranslations = [
        '检索增强生成（RAG）与大语言模型在人物性格建模及对话系统中的应用',
        '多模态人机交互与认知机器人',
        '面向情感计算、行为分析与机器人环境感知的计算机视觉',
        '基于用户状态（如表情、行为）与偏好的个性化推荐算法',
        '机器人强化学习与自主移动系统'
    ];
    document.querySelectorAll('[id="Research Interests"] .content-header > p').forEach(function (item, index) {
        bindHtml(item, researchTranslations[index]);
    });

    const skillTranslations = [
        ['编程语言', 'Python、C、C++、C#、JavaScript、HTML、CSS、SQL'],
        ['机器人技术与中间件', 'ROS 2（Jazzy）、RViz、RGB-D 感知、vision_msgs、物体位姿估计、机器人视觉流程集成'],
        ['人工智能与机器学习', 'BERT、RoBERTa、SentenceTransformers、RAG 流程、GPT-SoVITS、scikit-learn、TensorFlow、PyTorch、KNN、协同过滤、基于内容的推荐'],
        ['计算机视觉与感知', 'OpenCV、DeepFace、HSV 颜色分割、斑点检测、面部表情识别、深度投影、多帧平滑'],
        ['Web 与应用开发', 'Flask、Django、Streamlit、Jekyll、响应式前端开发、REST 风格应用流程'],
        ['数据与开发工具', 'Weaviate、BeautifulSoup、Git、GitHub、Linux、AWS、Unity、Maya、After Effects']
    ];
    document.querySelectorAll('#Skills .item').forEach(function (item, index) {
        bindHtml(item.querySelector('.content-header > p'), skillTranslations[index][0]);
        bindHtml(item.querySelector(':scope > p'), skillTranslations[index][1]);
    });

    const languageTranslations = [
        "普通话（<em>母语</em>）：<span style='color: goldenrod; margin: auto 8px; font-family: cursive;'>●●●●●</span>",
        "粤语（<em>母语</em>）：<span style='color: indianred; margin: auto 8px; font-family: cursive;'>●●●●●</span>",
        "英语：<span style='color: cornflowerblue; margin: auto 8px; font-family: cursive;'>●●●◐○</span>"
    ];
    document.querySelectorAll('#Languages .content-header > p').forEach(function (item, index) {
        bindHtml(item, languageTranslations[index]);
    });

    bindDirectText(document.querySelector('#footer > span'), '版权所有 © 2024 |');

    function getStoredLanguage() {
        try {
            return localStorage.getItem('portfolio-language') === 'zh' ? 'zh' : 'en';
        } catch (error) {
            return 'en';
        }
    }

    function saveLanguage(language) {
        try {
            localStorage.setItem('portfolio-language', language);
        } catch (error) {
            // Switching still works when browser storage is unavailable.
        }
    }

    function rebuildTableOfContents() {
        if (!tocbox) return;
        tocbox.replaceChildren();

        subjects.forEach(function (subject) {
            const heading = subject.querySelector('.subject-name');
            if (!heading) return;

            const tocItem = document.createElement('li');
            const itemLink = document.createElement('a');
            itemLink.classList.add('content-link');
            itemLink.textContent = heading.textContent.trim();
            itemLink.href = '#' + subject.id;
            itemLink.addEventListener('click', function (event) {
                event.preventDefault();
                heading.scrollIntoView({ behavior: 'smooth' });
            });
            tocItem.append(itemLink);
            tocbox.append(tocItem);
        });
    }

    function setLanguage(language, rememberChoice) {
        const selectedLanguage = language === 'zh' ? 'zh' : 'en';
        root.lang = selectedLanguage === 'zh' ? 'zh-CN' : 'en';

        translations.forEach(function (translation) {
            translation.element.innerHTML = translation[selectedLanguage];
        });
        languageButtons.forEach(function (button) {
            const isActive = button.dataset.language === selectedLanguage;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
        rebuildTableOfContents();

        if (rememberChoice) saveLanguage(selectedLanguage);
    }

    languageButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            setLanguage(button.dataset.language, true);
        });
    });

    setLanguage(getStoredLanguage(), false);

    setInterval(function () {
        const scrollPos = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const tocItems = tocbox ? Array.from(tocbox.querySelectorAll('li')) : [];
        let currentSubjectIndex = -1;

        tocItems.forEach(function (tocItem) { tocItem.classList.remove('active'); });
        subjects.forEach(function (subject, index) {
            const heading = subject.querySelector('.subject-name');
            if (!heading) return;
            const headingPosition = heading.getBoundingClientRect().top + window.scrollY - windowHeight / 2;
            if (scrollPos > headingPosition) currentSubjectIndex = index;
        });
        Array.from(contents).forEach(function (content) {
            const contentPosition = content.getBoundingClientRect().top + window.scrollY - windowHeight;
            if (!content.classList.contains('appear') && scrollPos >= contentPosition) {
                content.classList.add('appear');
            }
        });
        if (currentSubjectIndex >= 0 && tocItems[currentSubjectIndex]) {
            tocItems[currentSubjectIndex].classList.add('active');
        }
    }, 200);
});
