const pageData = {
  pageTitle: "更新日志",
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
        isCurrent: false
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
      <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;">📋 更新日志</h2>

      <div style="display: grid; gap: 15px;">

        <div style="background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 15px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
            <span style="background: #667eea; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px;">2026-05-04</span>
            <span style="background: #e8f5e9; color: #388e3c; padding: 2px 8px; border-radius: 4px; font-size: 11px;">新增</span>
          </div>
          <div style="font-weight: 500; font-size: 15px; color: #333; margin-bottom: 6px;">导航栏优化</div>
          <div style="font-size: 13px; color: #666; line-height: 1.6;">高度从30px调整为40px，背景色改为紫色(#667eea)，更加美观</div>
        </div>

        <div style="background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 15px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
            <span style="background: #667eea; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px;">2026-05-04</span>
            <span style="background: #e8f5e9; color: #388e3c; padding: 2px 8px; border-radius: 4px; font-size: 11px;">新增</span>
          </div>
          <div style="font-weight: 500; font-size: 15px; color: #333; margin-bottom: 6px;">404错误页面</div>
          <div style="font-size: 13px; color: #666; line-height: 1.6;">加载JS失败时显示友好的错误提示页面，包含"后退一步"和"返回首页"按钮</div>
        </div>

        <div style="background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 15px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
            <span style="background: #667eea; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px;">2026-05-04</span>
            <span style="background: #fff3e0; color: #f57c00; padding: 2px 8px; border-radius: 4px; font-size: 11px;">优化</span>
          </div>
          <div style="font-weight: 500; font-size: 15px; color: #333; margin-bottom: 6px;">菜单滚动逻辑</div>
          <div style="font-size: 13px; color: #666; line-height: 1.6;">点击菜单按钮时先滚动到顶部再展开，避免用户在页面底部时看不到菜单</div>
        </div>

      </div>
    </div>
  `
};
