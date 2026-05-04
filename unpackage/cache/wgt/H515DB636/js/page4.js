const pageData = {
  pageTitle: "视频",
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
        isCurrent: true
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
      <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;">🎬 视频推荐</h2>

      <div style="display: grid; gap: 15px;">
        <div style="background: #fff; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 180px; display: flex; align-items: center; justify-content: center;">
            <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.25); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <div style="width: 0; height: 0; border-left: 20px solid white; border-top: 12px solid transparent; border-bottom: 12px solid transparent; margin-left: 4px;"></div>
            </div>
          </div>
          <div style="padding: 12px;">
            <div style="font-weight: 500; font-size: 14px; color: #333; margin-bottom: 4px;">如何构建一个简洁的静态网站</div>
            <div style="font-size: 12px; color: #999;">12:34 · 1.2万次观看</div>
          </div>
        </div>

        <div style="background: #fff; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); height: 180px; display: flex; align-items: center; justify-content: center;">
            <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.25); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <div style="width: 0; height: 0; border-left: 20px solid white; border-top: 12px solid transparent; border-bottom: 12px solid transparent; margin-left: 4px;"></div>
            </div>
          </div>
          <div style="padding: 12px;">
            <div style="font-weight: 500; font-size: 14px; color: #333; margin-bottom: 4px;">CSS动画入门教程</div>
            <div style="font-size: 12px; color: #999;">8:45 · 8,562次观看</div>
          </div>
        </div>

        <div style="background: #fff; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); height: 180px; display: flex; align-items: center; justify-content: center;">
            <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.25); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <div style="width: 0; height: 0; border-left: 20px solid white; border-top: 12px solid transparent; border-bottom: 12px solid transparent; margin-left: 4px;"></div>
            </div>
          </div>
          <div style="padding: 12px;">
            <div style="font-weight: 500; font-size: 14px; color: #333; margin-bottom: 4px;">JavaScript事件处理详解</div>
            <div style="font-size: 12px; color: #999;">15:20 · 2.3万次观看</div>
          </div>
        </div>
      </div>
    </div>
  `
};
