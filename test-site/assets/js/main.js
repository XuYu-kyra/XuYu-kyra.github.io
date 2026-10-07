document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const tocbox = document.querySelector('.toc-box');
    const subjects = Array.from(document.querySelectorAll('.subject'));
    const contents = document.querySelectorAll('.subject, .item');
    const languageButtons = document.querySelectorAll('[data-language]');

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

    function rebuildTableOfContents(language) {
        if (!tocbox) return;

        tocbox.replaceChildren();

        subjects.forEach(function (subject) {
            const heading = subject.querySelector('.subject-name');
            const label = heading && heading.querySelector('.lang-' + language);
            if (!heading || !label) return;

            const tocItem = document.createElement('li');
            const itemLink = document.createElement('a');

            itemLink.classList.add('content-link');
            itemLink.textContent = label.textContent.trim();
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

        languageButtons.forEach(function (button) {
            const isActive = button.dataset.language === selectedLanguage;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        rebuildTableOfContents(selectedLanguage);

        if (rememberChoice) {
            saveLanguage(selectedLanguage);
        }
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

        tocItems.forEach(function (tocItem) {
            tocItem.classList.remove('active');
        });

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
