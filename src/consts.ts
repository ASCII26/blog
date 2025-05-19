// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "沐洒布吉岛";
export const SITE_DESCRIPTION = "Welcome to my website!";

// 个人网站的基本信息
export const PERSONAL_INFO = {
  name: '您的姓名',
  title: '职位或头衔',
  avatar: '/avatar.jpg', // 你需要在public目录下放置头像
  email: 'your.email@example.com',
  location: '城市, 国家',
  bio: '简短的个人介绍，描述你是谁，做什么工作等.',
};

// 博客分类
export const BLOG_CATEGORIES = [
  '技术', 
  '职场', 
  '生活', 
  '读书笔记'
];

// 社交媒体链接
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  weibo: 'https://weibo.com/yourusername',
  zhihu: 'https://zhihu.com/people/yourusername',
};

// 技能列表
export const SKILLS = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML/CSS'],
  frameworks: ['React', 'Vue', 'Angular', 'Astro', 'Express.js'],
  tools: ['Git', 'Docker', 'VS Code', 'Webpack', 'Figma'],
  databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  other: ['RESTful API', 'GraphQL', 'CI/CD', '敏捷开发', '微服务架构']
};

// 教育和工作经历
export const EXPERIENCES = {
  education: [
    {
      institution: '大学名称',
      degree: '学位名称',
      field: '专业领域',
      startDate: '2015',
      endDate: '2019',
      description: '简短描述您的学习经历和成就'
    }
  ],
  work: [
    {
      company: '公司名称',
      position: '职位名称',
      startDate: '2019',
      endDate: '至今',
      description: '描述您的工作职责和成就'
    },
    {
      company: '前公司名称',
      position: '职位名称',
      startDate: '2017',
      endDate: '2019',
      description: '描述您的工作职责和成就'
    }
  ]
};
