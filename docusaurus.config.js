const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: '学习大使',
    tagline: '学习大使',
    url: 'https://richardgong1987-learn.github.io',
    baseUrl: '/richardgong1987-learn/',
    organizationName: 'richardgong1987-learn', // Usually your GitHub org/user name.
    projectName: 'richardgong1987-learn', // Usually your repo name.
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    themeConfig: {
        navbar: {
            title: '学习大使',
            logo: {
                alt: '',
                src: '/img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'a-java/intro',
                    position: 'left',
                    label: 'Java架构师',
                },
                {
                    type: 'doc',
                    docId: 'c-computer/intro',
                    position: 'right',
                    label: '计算机科学',
                },
                {
                    href: 'https://github.com/richardgong1987-learn/richardgong1987-learn.git',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            additionalLanguages: ['powershell', 'java', 'php', 'rust'],
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
