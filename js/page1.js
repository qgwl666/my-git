const pageData = {
  pageTitle: "首页",
  nav: {
    menuList: [
      {
        text: "首页",
        link: "./index.html?js=./js/page1.js",
        isCurrent: true
      },
      {
        text: "文章",
        link: "./index.html?js=js/page2.js",
        isCurrent: false
      },
      {
        text: "音乐",
        link: "./index.html?js=js/page3.js",
        isCurrent: false
      },
      {
        text: "视频",
        link: "./index.html?js=js/page4.js",
        isCurrent: false
      },
      {
        text: "相册",
        link: "./index.html?js=js/page5.js",
        isCurrent: false
      },
      {
        text: "精彩",
        link: "./index.html?js=js/page6.js",
        isCurrent: false
      }
    ]
  },
  content: `
    <div style="padding: 15px 10px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="font-size: 20px; color: #333; margin-bottom: 8px;">欢迎来到我的网站</h2>
        <p style="font-size: 13px; color: #666;">一个简洁的静态网站</p>
      </div>

      <a href="./index.html?js=js/1-1.js" style="display: block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; padding: 15px; text-decoration: none; color: white; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-weight: 500; font-size: 15px; margin-bottom: 4px;">📋 更新日志</div>
            <div style="font-size: 12px; opacity: 0.85;">查看网站最新更新内容</div>
          </div>
          <div style="font-size: 20px;">→</div>
        </div>
      </a>

      <div style="background: #f8f9fa; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
        <h3 style="font-size: 16px; margin-bottom: 12px; color: #2c3e50;">📌 关于本站</h3>
        <p style="font-size: 14px; line-height: 1.8; color: #555;">
          这是一个基于单HTML模板构建的静态网站，所有页面内容通过JS数据文件动态加载。
          支持响应式布局，在手机和电脑上都能良好显示。
        </p>
        <div style="margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap;">
          <span style="background: #e3f2fd; color: #1976d2; padding: 4px 10px; border-radius: 12px; font-size: 12px;">单模板</span>
          <span style="background: #e8f5e9; color: #388e3c; padding: 4px 10px; border-radius: 12px; font-size: 12px;">响应式</span>
          <span style="background: #fff3e0; color: #f57c00; padding: 4px 10px; border-radius: 12px; font-size: 12px;">数据驱动</span>
        </div>
      </div>

      <div style="background: #fff; border: 1px solid #eee; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
        <h3 style="font-size: 16px; margin-bottom: 12px; color: #2c3e50;">✨ 主要功能</h3>
        <div style="display: grid; gap: 12px;">
          <div style="display: flex; align-items: flex-start; gap: 10px;">
            <div style="width: 36px; height: 36px; background: #f0f4ff; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">📱</div>
            <div>
              <div style="font-weight: 500; font-size: 14px; color: #333;">响应式布局</div>
              <div style="font-size: 12px; color: #666; margin-top: 2px;">手机满屏显示，电脑端最大600px居中</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 10px;">
            <div style="width: 36px; height: 36px; background: #fff0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">🍔</div>
            <div>
              <div style="font-weight: 500; font-size: 14px; color: #333;">折叠菜单</div>
              <div style="font-size: 12px; color: #666; margin-top: 2px;">3列网格布局，点击图标展开/收起</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 10px;">
            <div style="width: 36px; height: 36px; background: #f0fff4; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">📄</div>
            <div>
              <div style="font-weight: 500; font-size: 14px; color: #333;">内容可配置</div>
              <div style="font-size: 12px; color: #666; margin-top: 2px;">所有内容通过JS文件配置，支持HTML标签</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 10px;">
            <div style="width: 36px; height: 36px; background: #fffcf0; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">🔗</div>
            <div>
              <div style="font-weight: 500; font-size: 14px; color: #333;">外链支持</div>
              <div style="font-size: 12px; color: #666; margin-top: 2px;">支持加载外部JS文件作为页面内容</div>
            </div>
          </div>
        </div>
      </div>

      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; padding: 15px; margin-bottom: 20px; color: white;">
        <h3 style="font-size: 16px; margin-bottom: 12px;">📬 联系我们</h3>
        <div style="display: grid; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 16px;">📧</span>
            <span style="font-size: 14px;">contact@example.com</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 16px;">📞</span>
            <span style="font-size: 14px;">123-456-7890</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 16px;">📍</span>
            <span style="font-size: 14px;">中国北京市</span>
          </div>
        </div>
      </div>

      <div style="text-align: center; padding: 10px;">
        <p style="font-size: 12px; color: #999;">© 2026 我的网站</p>
      </div>
    </div>
  `
};
