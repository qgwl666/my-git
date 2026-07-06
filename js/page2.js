const pageData = {
  pageTitle: "文章",
  nav: {
    menuList: [
      {
        text: "首页",
        link: "./index.html?js=./js/page1.js",
        isCurrent: false
      },
      {
        text: "文章",
        link: "./index.html?js=./js/page2.js",
        isCurrent: true
      },
      {
        text: "音乐",
        link: "./index.html?js=./js/page3.js",
        isCurrent: false
      },
      {
        text: "视频",
        link: "./index.html?js=./js/page4.js",
        isCurrent: false
      },
      {
        text: "相册",
        link: "./index.html?js=./js/page5.js",
        isCurrent: false
      },
      {
        text: "精彩",
        link: "./index.html?js=./js/page6.js",
        isCurrent: false
      }
    ]
  },
  content: `
    <div style="padding: 10px;">
      <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;">📚 文章列表</h2>

      <div style="display: grid; gap: 12px;">
        <a href="#" style="display: block; background: #fff; border: 1px solid #eee; border-radius: 8px; padding: 15px; text-decoration: none; color: inherit;">
          <div style="font-weight: 500; font-size: 15px; color: #333; margin-bottom: 6px;">如何构建一个简洁的静态网站</div>
          <div style="font-size: 12px; color: #999;">介绍如何使用单HTML模板和JS数据文件构建网站</div>
          <div style="margin-top: 8px; font-size: 11px; color: #aaa;">2026-05-04</div>
        </a>

        <a href="#" style="display: block; background: #fff; border: 1px solid #eee; border-radius: 8px; padding: 15px; text-decoration: none; color: inherit;">
          <div style="font-weight: 500; font-size: 15px; color: #333; margin-bottom: 6px;">响应式设计实践</div>
          <div style="font-size: 12px; color: #999;">分享响应式布局的设计技巧和最佳实践</div>
          <div style="margin-top: 8px; font-size: 11px; color: #aaa;">2026-05-03</div>
        </a>

        <a href="#" style="display: block; background: #fff; border: 1px solid #eee; border-radius: 8px; padding: 15px; text-decoration: none; color: inherit;">
          <div style="font-weight: 500; font-size: 15px; color: #333; margin-bottom: 6px;">CSS动画入门</div>
          <div style="font-size: 12px; color: #999;">学习CSS过渡和动画的基础用法</div>
          <div style="margin-top: 8px; font-size: 11px; color: #aaa;">2026-05-02</div>
        </a>

        <a href="#" style="display: block; background: #fff; border: 1px solid #eee; border-radius: 8px; padding: 15px; text-decoration: none; color: inherit;">
          <div style="font-weight: 500; font-size: 15px; color: #333; margin-bottom: 6px;">JavaScript基础：事件处理</div>
          <div style="font-size: 12px; color: #999;">深入理解DOM事件和事件处理机制</div>
          <div style="margin-top: 8px; font-size: 11px; color: #aaa;">2026-05-01</div>
        </a>
      </div>
    </div>
  `
};
