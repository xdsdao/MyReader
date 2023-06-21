// config.js
module.exports = {
    //base路径代表github仓库名称
    base: "/",
    title: 'MyReader',
    description: 'md文档在线阅读器',
    //主题参考https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        //md目录右侧显示
        subSidebar: 'auto',
        //顶部栏配置
        nav: [
            {text: '首页', link: '/'},
            {
                text: 'XDS 博客',
                items: [
                    {text: 'Github', link: 'https://github.com/xdsdao'},
                    {text: 'CSDN', link: 'https://blog.csdn.net/xds666'}
                ]
            }
        ],
        // 侧边栏配置
        sidebar: [
            {
                title: '导航栏',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "学前必读", path: "/"}
                ]
            },
            {
                title: "文章导航",
                path: '/note/blog/blog_0001', // 默认激活的选项
                collapsable: false, // 不折叠
                children: [
                    {title: "vuepress Github Actions", path: "/note/blog/blog_0001"}
                ],
            }
            ,
            {
                title: "电子书导航",
                path: '/note/book/book_0001', // 默认激活的选项
                collapsable: false,  // 不折叠
                children: [
                    {title: "《JAVA核心面试知识整理》", path: "/note/book/book_0001"},
					{title: "《Java开发手册(黄山版)》", path: "/note/book/book_0002"}
                ],
            }
        ]
    }
}
