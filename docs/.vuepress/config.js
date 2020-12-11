module.exports = {
  title: '术与道',
  description: '道可道，非常道。名可名，非常名。',
  base: '/shuyudao/',
  themeConfig: {
    sidebar: 'auto',
    smoothScroll: true,
    repo: 'nashaofu/shuyudao',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: 'js 知识',
        items: [
          {
            text: '防抖',
            link: '/js 知识/防抖/'
          },
          {
            text: '节流',
            link: '/js 知识/节流/'
          },
          {
            text: 'camelCase 实现',
            link: '/js 知识/camelCase 实现/'
          },
          {
            text: 'Promise',
            link: '/js 知识/Promise/'
          },
          {
            text: '类与类的继承',
            link: '/js 知识/类与类的继承/'
          }
        ]
      },
      {
        text: '算法与数据结构',
        items: [
          {
            text: '堆',
            link: '/算法与数据结构/堆/'
          },
          {
            text: '二叉树',
            link: '/算法与数据结构/二叉树/'
          },
          {
            text: '排序算法',
            link: '/算法与数据结构/排序算法/'
          },
          {
            text: '拓扑排序',
            link: '/算法与数据结构/拓扑排序/'
          },
          {
            text: '洗牌算法',
            link: '/算法与数据结构/洗牌算法/'
          },
          {
            text: '大数加法',
            link: '/算法与数据结构/大数加法/'
          },
          {
            text: '反转链表',
            link: '/算法与数据结构/反转链表/'
          }
        ]
      }
    ]
  }
}
