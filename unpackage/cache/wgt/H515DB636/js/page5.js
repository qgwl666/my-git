const pageData = {
  pageTitle: "相册",
  nav: {
    menuList: [
      {
        text: "首页",
        link: "./index.html?js=./js/page1.js",
        isCurrent: false
      },
      {
        text: "文章",
        link: "./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/page2.js",
        isCurrent: false
      },
      {
        text: "音乐",
        link: "./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/page3.js",
        isCurrent: false
      },
      {
        text: "视频",
        link: "./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/page4.js",
        isCurrent: false
      },
      {
        text: "相册",
        link: "./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/page5.js",
        isCurrent: true
      },
      {
        text: "精彩",
        link: "./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/page6.js",
        isCurrent: false
      }
    ]
  },
  content: `
    <div style="padding: 10px;">
      <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;">📷 相册</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
        <a href="./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/5-1.js" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-decoration: none;">
          <div style="font-size: 32px; margin-bottom: 8px;">🏔️</div>
          <div style="font-size: 13px;">风景摄影</div>
        </a>
        <a href="./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/5-2.js" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 10px; aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-decoration: none;">
          <div style="font-size: 32px; margin-bottom: 8px;">🌅</div>
          <div style="font-size: 13px;">日出日落</div>
        </a>
        <a href="./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/5-3.js" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 10px; aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-decoration: none;">
          <div style="font-size: 32px; margin-bottom: 8px;">🌿</div>
          <div style="font-size: 13px;">自然风光</div>
        </a>
        <a href="./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/5-4.js" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 10px; aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-decoration: none;">
          <div style="font-size: 32px; margin-bottom: 8px;">🌸</div>
          <div style="font-size: 13px;">花卉植物</div>
        </a>
        <a href="./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/5-5.js" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); border-radius: 10px; aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #333; text-decoration: none;">
          <div style="font-size: 32px; margin-bottom: 8px;">🏙️</div>
          <div style="font-size: 13px;">城市建筑</div>
        </a>
        <a href="./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/5-6.js" style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); border-radius: 10px; aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #333; text-decoration: none;">
          <div style="font-size: 32px; margin-bottom: 8px;">🎨</div>
          <div style="font-size: 13px;">艺术创意</div>
        </a>
      </div>

      <div style="margin-top: 15px; background: #f8f9fa; border-radius: 8px; padding: 12px; text-align: center;">
        <p style="font-size: 13px; color: #666;">共 6 个相册分类</p>
      </div>
    </div>
  `
};
