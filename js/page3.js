const pageData = {
  pageTitle: "音乐",
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
        isCurrent: true
      },
      {
        text: "视频",
        link: "./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/page4.js",
        isCurrent: false
      },
      {
        text: "相册",
        link: "./index.html?js=https://env-00jxu1jxgwq6-static.normal.cloudstatic.cn/pages/page5.js",
        isCurrent: false
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
      <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;">🎵 音乐推荐</h2>

      <div style="display: grid; gap: 12px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; padding: 15px; color: white;">
          <div style="font-weight: 500; font-size: 16px; margin-bottom: 6px;">夜空中最亮的星</div>
          <div style="font-size: 13px; opacity: 0.9;">逃跑计划</div>
          <div style="margin-top: 12px; display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px;">▶</div>
            <div style="flex: 1;">
              <div style="height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px;">
                <div style="width: 45%; height: 100%; background: white; border-radius: 2px;"></div>
              </div>
              <div style="margin-top: 6px; font-size: 11px; opacity: 0.8;">1:23 / 4:12</div>
            </div>
          </div>
        </div>

        <div style="background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 15px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px;">🎵</div>
            <div style="flex: 1;">
              <div style="font-weight: 500; font-size: 14px; color: #333;">晴天</div>
              <div style="font-size: 12px; color: #999;">周杰伦</div>
            </div>
            <div style="width: 36px; height: 36px; background: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px;">▶</div>
          </div>
        </div>

        <div style="background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 15px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px;">🎶</div>
            <div style="flex: 1;">
              <div style="font-weight: 500; font-size: 14px; color: #333;">稻香</div>
              <div style="font-size: 12px; color: #999;">周杰伦</div>
            </div>
            <div style="width: 36px; height: 36px; background: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px;">▶</div>
          </div>
        </div>

        <div style="background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 15px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px;">🎼</div>
            <div style="flex: 1;">
              <div style="font-weight: 500; font-size: 14px; color: #333;">起风了</div>
              <div style="font-size: 12px; color: #999;">买辣椒也用券</div>
            </div>
            <div style="width: 36px; height: 36px; background: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px;">▶</div>
          </div>
        </div>
      </div>
    </div>
  `
};
