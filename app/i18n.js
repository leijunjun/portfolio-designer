export const languages = ['en', 'zh'];

export const defaultLanguage = 'en';

export const languageLabels = {
  en: 'English',
  zh: '中文',
};

export const translations = {
  en: {
    common: {
      skipToMain: 'Skip to main content',
      scrollToProjects: 'Scroll to projects',
      languageToggle: 'Switch language',
      themeToggle: 'Toggle theme',
    },
    meta: {
      home: {
        title:
          'Lei Junjun | Principal Lei | AI Product Manager Private-Domain Fission Growth Officer',
        description:
          'Personal site of Lei Junjun, focused on retail marketing, private-domain fission growth, and independent AI app development.',
      },
      contact: {
        title: 'Contact',
        description:
          'Send me a message if you’re interested in discussing a project or if you just want to say hi',
      },
      domains: {
        title: 'Domain Investments',
        description:
          'Every domain I collect points to a niche business scenario that could be reimagined by AI.',
      },
      uses: {
        title: 'Uses',
        description: 'A list of hardware and software I use to do my thing',
      },
      articles: {
        title: 'Articles',
        description:
          'A collection of technical design and development articles. May contain incoherent ramblings.',
      },
    },
    nav: {
      projects: 'Projects',
      domains: 'Domains',
      details: 'Details',
      articles: 'Articles',
      contact: 'Contact',
    },
    intro: {
      name: 'known as Principal Lei',
      role: 'AI Product Manager',
      disciplines: [
        'Local Store Marketing',
        'Private Domain Referral Growth',
        'Full-Stack Development',
      ],
    },
    home: {
      projects: [
        {
          title: 'Private-Domain Customer Acquisition, Built for Extreme Referral Growth',
          description:
            'Customized for chain brands and customer-acquisition teams, helping them launch referral campaigns quickly and at scale',
          buttonText: 'View project',
          modelAlt: 'Liebianbao product dashboard and mobile campaign screens',
        },
        {
          title: 'Video game progress tracking',
          description:
            'Design and development for a video game tracking app built in React Native',
          buttonText: 'View website',
          modelAlt: 'App login screen',
        },
        {
          title: 'Biomedical image collaboration',
          description:
            'Increasing the amount of collaboration in Slice, an app for biomedical imaging',
          buttonText: 'View project',
          modelAlt: 'Annotating a biomedical image in the Slice app',
        },
      ],
      domains: {
        title: 'Domain Investments',
        description:
          'Every domain I collect points to a niche business scenario that could be reimagined by AI.',
        buttonText: 'View domains page',
        tag: 'Collected domains',
        items: [
          {
            name: 'gongchang.ai',
            status: 'Smart Factory',
            description:
              'A domain focused on intelligent factory scenarios, from digital operations to AI-assisted manufacturing workflows.',
          },
          {
            name: 'bookoff.cn',
            status: 'Discount Book Ecommerce',
            description:
              'A domain for a book discount ecommerce concept, where AI could improve merchandising, pricing, and conversion.',
          },
          {
            name: 'chedada.cn',
            status: 'Automotive Platform / Community',
            description:
              'A domain aimed at an automotive platform or enthusiast community with room for AI-driven content, matching, and services.',
          },
          {
            name: 'gotools.io',
            status: 'Global Tools Directory',
            description:
              'A domain for an overseas tools site, suitable for curating software, workflows, and AI utility products for a global audience.',
          },
        ],
      },
      profile: {
        title: 'About',
        paragraphs: [
          'I’m Lei Junjun, a product manager who has moved from software services into hands-on AI application building.',
          'One question has stayed at the center of my work for a long time: how can AI genuinely help brick-and-mortar businesses?',
          'Not by stopping at a few lines of copy or a few generated images, but by becoming part of the full chain of store operations, private-domain growth, campaign conversion, and team training.',
          'Drawing on years of experience serving physical stores and customer-acquisition teams, I’m building a product portfolio around AI-powered private-domain fission growth.',
          'I believe the AI products that create real long-term value will not be the ones that merely demonstrate capability, but the ones that fit into industry scenarios, solve specific problems, and produce measurable outcomes.',
        ],
        buttonText: 'Send me a message',
        tag: 'About me',
        imageAlt: 'Portrait of Lei Junjun in a navy suit',
      },
    },
    projectDetails: {
      liebianbao: {
        name: 'Yituihuo Liebianbao',
        description:
          'Yituihuo Liebianbao is an AI-powered private-domain referral growth system for stores, serving medical aesthetics, beauty, education and training, local services, and chain locations. Through campaign mechanics such as red-envelope referrals, short-video referrals, livestream referrals, refer-two-get-one, free-with-purchase campaigns, two-level distribution, and tiered group buying, it helps stores reactivate existing customers, acquire new customers, drive campaign conversion, unify payment collection, support next-day settlement, and review performance data. It is built for brand owners, chain stores, customer-acquisition teams, and private-domain operations teams.',
        linkLabel: 'Visit website',
        tags: [
          '8000+ Campaigns Distilled',
          'Extreme Referral Growth',
          'Zero-Cost Collaboration',
          '"Customer Flow Shortage" Private-Domain Growth Playbook',
        ],
      },
    },
    footer: {
      crafted: 'Crafted by yours truly',
    },
    contact: {
      title: 'Say hello',
      honeypotLabel: 'Name',
      emailLabel: 'Your email',
      messageLabel: 'Message',
      sending: 'Sending...',
      send: 'Send message',
      completeTitle: 'Message Sent',
      completeText: 'I’ll get back to you within a couple days, sit tight',
      backHome: 'Back to homepage',
      errors: {
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Please enter a message.',
        emailTooLong: 'Email address must be shorter than 512 characters.',
        messageTooLong: 'Message must be shorter than 4096 characters.',
      },
    },
    uses: {
      title: 'Uses',
      description:
        'A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background.',
      design: 'Design',
      development: 'Development',
      system: 'System',
      designItems: [
        {
          before: '',
          linkOne: 'Figma',
          middle:
            ' is my primary tool for UI design these days. Made the switch from Sketch in 2020 and haven’t looked back. I’ve also created ',
          linkTwo: 'a few plugins',
          after: ' that you can install.',
        },
        {
          before:
            'Any motion graphics I create are created in Adobe After Effects. So far I haven’t found a non-Adobe product that’s as good. If anyone has suggestions please ',
          linkOne: 'message me',
          after: '.',
        },
        {
          before: 'For any 3D models and video editing I use ',
          linkOne: 'Blender',
          after:
            '. Since 2.8 it’s become way simpler to use and in a lot of ways better than expensive paid tools like 3DS Max or Maya.',
        },
      ],
      developmentItems: [
        {
          before: 'I use ',
          linkOne: 'VSCodium',
          after:
            ' as my text editor, with the Tokyo Night theme and Operator Mono as my typeface of choice.',
        },
        'Firefox is my main browser for both development and general use.',
        {
          before: '',
          linkOne: 'React',
          after:
            ' is my front end Javascript library of choice. The component-centric mental model is the first thing that truly made sense to me as a designer.',
        },
        {
          before: 'For 3D effects and image shaders I use ',
          linkOne: 'three.js',
          after:
            '. It has a bit of a learning curve but you can do some really powerful stuff with it.',
        },
        {
          before:
            'For CSS I’ve used a myriad pre-processors and css-in-js solutions like styled-components, but these days I’m using vanilla CSS with ',
          linkOne: 'PostCSS',
          after: ' to get upcoming CSS features today.',
        },
        {
          before: 'For Javascript animations I use ',
          linkOne: 'Framer Motion',
          after: ', it’s a great way to add spring animations to React and three.js.',
        },
        {
          before: 'For building and testing UI components in isolation I use ',
          linkOne: 'Storybook',
          middle: '. Check out the ',
          linkTwo: 'storybook for this website',
          after: '.',
        },
      ],
      systemRows: [
        ['Desktop', 'Custom built'],
        ['Operating system', 'Arch Linux (by the way)'],
        ['Browser', 'Zen Browser'],
        ['Monitor', '1440p IPS 144hz LG 27GL850'],
        ['Keyboard', 'Tofu65'],
        ['Mouse', 'Logitech G403'],
        ['Laptop', 'Macbook Pro 14″'],
        ['Headphones', 'Audio Technica ATH-M50x/Apple Airpods'],
        ['Microphone', 'Blue Yeti'],
      ],
    },
    articles: {
      latest: 'Latest articles',
      featured: 'Featured',
      readArticle: 'Read article',
      readMore: 'Read more',
      comingSoon: 'Coming soon...',
    },
  },
  zh: {
    common: {
      skipToMain: '跳到主要内容',
      scrollToProjects: '滚动到项目',
      languageToggle: '切换语言',
      themeToggle: '切换主题',
    },
    meta: {
      home: {
        title: '雷钧钧 ｜ 雷校长 ｜ AI 产品经理 私域裂变增长官',
        description:
          '雷钧钧的个人站点，聚焦门店营销、私域裂变增长和 AI 应用独立开发。',
      },
      contact: {
        title: '联系',
        description: '如果你想聊聊项目，或只是想打个招呼，可以给我发消息。',
      },
      domains: {
        title: '域名投资',
        description: '每一个被收藏的域名，背后都对应着一个可能被 AI 重构的细分业务场景。',
      },
      uses: {
        title: '工具',
        description: '我日常用于设计和开发的硬件、软件与工具清单。',
      },
      articles: {
        title: '文章',
        description: '一些关于设计与开发的技术文章，偶尔也会有随笔。',
      },
    },
    nav: {
      projects: '项目',
      domains: '域名',
      details: '关于',
      articles: '文章',
      contact: '联系',
    },
    intro: {
      name: 'HI,我是雷校长',
      role: 'AI产品经理',
      disciplines: ['门店营销', '私域裂变增长', '全栈开发'],
    },
    home: {
      projects: [
        {
          title: '私域拓客，极致裂变之选',
          description: '为连锁品牌和拓客团队定制，帮助他们快速、批量落地老带新活动',
          buttonText: '查看项目',
          modelAlt: '裂变宝产品后台与移动端活动页面',
        },
        {
          title: '电子游戏进度追踪',
          description: '一款使用 React Native 构建的游戏追踪应用的设计与开发',
          buttonText: '访问网站',
          modelAlt: '应用登录界面',
        },
        {
          title: '生物医学图像协作',
          description: '提升 Slice 中的协作体验，这是一款用于生物医学成像的应用',
          buttonText: '查看项目',
          modelAlt: '在 Slice 应用中标注生物医学图像',
        },
      ],
      domains: {
        title: '域名投资',
        description:
          '每一个被收藏的域名，背后都对应着一个可能被 AI 重构的细分业务场景。',
        buttonText: '查看域名页',
        tag: '收藏域名',
        items: [
          {
            name: 'gongchang.ai',
            status: '智能工厂',
            description: '聚焦智能工厂场景，适合承载从数字化运营到 AI 辅助生产协同的一整套业务想象。',
          },
          {
            name: 'bookoff.cn',
            status: '图书折扣电商站',
            description:
              '面向图书折扣电商业务，未来可以结合 AI 做选品、定价、推荐与转化优化。',
          },
          {
            name: 'chedada.cn',
            status: '汽车类平台/社区',
            description:
              '适合承载汽车平台或垂直社区产品，具备结合 AI 做内容分发、用户匹配和服务连接的空间。',
          },
          {
            name: 'gotools.io',
            status: '海外工具站',
            description:
              '适合面向海外用户的工具站点，用来组织软件工具、工作流产品和 AI 应用导航。',
          },
        ],
      },
      profile: {
        title: '关于',
        paragraphs: [
          'HI我是雷钧钧，网名雷校长',
          '一名从软件服务走向 AI 应用实践的产品经理。',
          '长期关注一个问题：',
          'AI 到底怎样才能真正帮到实体商家？',
          '不是停留在写几句文案、做几张图片，而是进入门店经营、私域增长、活动成交和团队训练的完整链路。',
          '基于多年服务实体门店和拓客团队的经验，我正在围绕“AI 私域裂变增长”打造一套产品矩阵。',
          '我相信，未来真正有价值的 AI 产品，一定是能嵌入行业场景，解决具体问题，创造真实结果。',
        ],
        buttonText: '给我发消息',
        tag: '关于我',
        imageAlt: '雷校长身穿深色西装的肖像照',
      },
    },
    projectDetails: {
      liebianbao: {
        name: '一推火裂变宝',
        description:
          '一推火裂变宝是一套门店 AI 私域裂变增长系统，主要服务医美、美业、教培、本地生活和连锁门店。它通过红包裂变、短视频裂变、直播裂变、推二返一、消费全免、二级分销和阶梯拼团等活动玩法，帮助门店激活老客户、获取新客户、实现活动成交、统一收款、次日结算和数据复盘。适合品牌方、连锁门店、拓客团队和私域运营团队使用。',
        linkLabel: '访问网站',
        tags: [
          '8000+场活动经验沉淀',
          '极致老带新裂变',
          '合作 0 成本',
          '《客流荒》私域专著实战之作',
        ],
      },
    },
    footer: {
      crafted: '由本人亲手制作',
    },
    contact: {
      title: '打个招呼',
      honeypotLabel: '姓名',
      emailLabel: '你的邮箱',
      messageLabel: '消息内容',
      sending: '发送中...',
      send: '发送消息',
      completeTitle: '消息已发送',
      completeText: '我会在几天内回复你，请稍等一下',
      backHome: '返回首页',
      errors: {
        emailInvalid: '请输入有效的邮箱地址。',
        messageRequired: '请输入消息内容。',
        emailTooLong: '邮箱地址必须少于 512 个字符。',
        messageTooLong: '消息内容必须少于 4096 个字符。',
      },
    },
    uses: {
      title: '工具',
      description:
        '这是一份相对完整的清单，记录我日常用于设计、写代码和创作的工具、应用、硬件等等。没错，背景里确实是 Johnny Mnemonic 的 GIF。',
      design: '设计',
      development: '开发',
      system: '系统',
      designItems: [
        {
          before: '',
          linkOne: 'Figma',
          middle:
            ' 是我现在主要使用的 UI 设计工具。我在 2020 年从 Sketch 切换过来之后就没有回头。我也做过',
          linkTwo: '几个插件',
          after: '，你可以直接安装。',
        },
        {
          before:
            '我做的动效基本都使用 Adobe After Effects。目前还没找到同样好用的非 Adobe 产品。如果你有推荐，欢迎',
          linkOne: '给我留言',
          after: '。',
        },
        {
          before: '做 3D 模型和视频剪辑时，我会使用 ',
          linkOne: 'Blender',
          after:
            '。从 2.8 版本开始它变得简单很多，在不少方面也比 3DS Max 或 Maya 这类昂贵工具更好用。',
        },
      ],
      developmentItems: [
        {
          before: '我用 ',
          linkOne: 'VSCodium',
          after: ' 作为文本编辑器，主题是 Tokyo Night，字体偏好 Operator Mono。',
        },
        'Firefox 是我开发和日常使用的主浏览器。',
        {
          before: '',
          linkOne: 'React',
          after:
            ' 是我偏爱的前端 JavaScript 库。它以组件为中心的思维方式，是第一个真正让我作为设计师也能理解的前端模型。',
        },
        {
          before: '做 3D 效果和图像着色器时，我使用 ',
          linkOne: 'three.js',
          after: '。它有一点学习曲线，但能做出非常强大的效果。',
        },
        {
          before:
            'CSS 方面，我用过很多预处理器和 styled-components 这类 css-in-js 方案，但现在主要使用原生 CSS 搭配 ',
          linkOne: 'PostCSS',
          after: '，提前用上一些未来 CSS 特性。',
        },
        {
          before: 'JavaScript 动画方面，我使用 ',
          linkOne: 'Framer Motion',
          after: '，它很适合给 React 和 three.js 添加弹簧动画。',
        },
        {
          before: '为了独立构建和测试 UI 组件，我使用 ',
          linkOne: 'Storybook',
          middle: '。也可以看看这个网站的 ',
          linkTwo: 'storybook',
          after: '。',
        },
      ],
      systemRows: [
        ['台式机', '自组装'],
        ['操作系统', 'Arch Linux（顺便一提）'],
        ['浏览器', 'Zen Browser'],
        ['显示器', '1440p IPS 144hz LG 27GL850'],
        ['键盘', 'Tofu65'],
        ['鼠标', 'Logitech G403'],
        ['笔记本', 'Macbook Pro 14″'],
        ['耳机', 'Audio Technica ATH-M50x / Apple Airpods'],
        ['麦克风', 'Blue Yeti'],
      ],
    },
    articles: {
      latest: '最新文章',
      featured: '精选',
      readArticle: '阅读文章',
      readMore: '查看更多',
      comingSoon: '即将发布...',
    },
  },
};

export function isSupportedLanguage(language) {
  return languages.includes(language);
}

export function getPreferredLanguage(acceptLanguage, cookieLanguage) {
  if (isSupportedLanguage(cookieLanguage)) {
    return cookieLanguage;
  }

  if (!acceptLanguage) {
    return defaultLanguage;
  }

  return acceptLanguage
    .split(',')
    .map(item => item.trim().split(';')[0].toLowerCase())
    .some(language => language === 'zh' || language.startsWith('zh-'))
    ? 'zh'
    : defaultLanguage;
}

export function getText(language, path) {
  const dictionary = translations[isSupportedLanguage(language) ? language : defaultLanguage];

  return path.split('.').reduce((value, key) => value?.[key], dictionary);
}
