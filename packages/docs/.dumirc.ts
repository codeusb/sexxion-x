import { defineConfig } from 'dumi';

export default defineConfig({
  // themeConfig: {
  //   name: 'd-test',
  // },
  outputPath: 'docs_dist',
  favicons: ['https://pic.imgdb.cn/item/64a8fcf91ddac507cc96f555.png'],
  themeConfig: {
    name: 'sexxion-x',
    favicon: 'https://pic.imgdb.cn/item/64a8fcf91ddac507cc96f555.png',
    logo: 'https://pic.imgdb.cn/item/64a8fcf91ddac507cc96f555.png',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '基础组件', link: '/uis' }, // components会默认自动对应到src文件夹
      { title: '业务组件', link: '/works' },
    ],
    footer: false,
    socialLinks: {
      github: 'https://github.com/codeusb/sexxion-x',
    },
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src' },
      { type: 'ui', dir: 'src/ui' },
      { type: 'work', dir: 'src/work' },
    ],
  },
  base: '/sexxion-x/',
  publicPath: '/sexxion-x/',
  styles: [
    `.dumi-default-header-left {
      width: 220px !important;
      transform: translateX(-30px);
    }
    .dumi-default-features-item {
      text-align: center;
    }
    .dumi-default-hero-title span{
      font-size: 120px;
    }
   `,
  ],
});
