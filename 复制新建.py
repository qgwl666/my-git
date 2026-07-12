import os
import shutil

# ---------- 配置 ----------
SOURCE_DIR    = "712"                # 子目录名（存放源文件）
TEMPLATE_FILE = "template.html"      # 模板文件名
NAVBAR_FILE   = "navbar.js"         # 导航文件名
# --------------------------

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    source_dir = os.path.join(script_dir, SOURCE_DIR)

    template_path = os.path.join(source_dir, TEMPLATE_FILE)
    navbar_path   = os.path.join(source_dir, NAVBAR_FILE)

    # 检查模板文件是否存在
    if not os.path.exists(template_path):
        print(f"❌ 未找到模板文件: {SOURCE_DIR}/{TEMPLATE_FILE}")
        input("按回车键退出...")
        return

    # ---------- 步骤1：是否复制导航脚本 ----------
    print(f"\n{'='*40}")
    copy_nav = input("是否复制导航脚本？(1=是, 0=否): ").strip()

    if copy_nav == "1":
        if os.path.exists(navbar_path):
            dest_navbar = os.path.join(script_dir, NAVBAR_FILE)
            shutil.copy2(navbar_path, dest_navbar)
            print(f"✅ 已复制: {SOURCE_DIR}/{NAVBAR_FILE} → {NAVBAR_FILE}")
        else:
            print(f"❌ 未找到导航脚本: {SOURCE_DIR}/{NAVBAR_FILE}")
    else:
        print("⏭️  跳过复制导航脚本")

    # ---------- 步骤2：输入文件名并复制模板 ----------
    print(f"\n{'='*40}")
    raw = input("请输入新的文件名（可用空格分隔多个，不需要写 .html 后缀）: ").strip()

    if not raw:
        print("⚠️  未输入任何文件名")
        input("按回车键退出...")
        return

    names = raw.split()
    generated = []

    for name in names:
        # 自动补 .html 后缀
        if not name.endswith(".html"):
            filename = name + ".html"
        else:
            filename = name

        dest = os.path.join(script_dir, filename)
        shutil.copy2(template_path, dest)
        generated.append(filename)
        print(f"✅ 已生成: {filename}")

    # ---------- 完成 ----------
    print(f"\n{'='*40}")
    print(f"🎉 完成！共生成 {len(generated)} 个页面", end="")
    if copy_nav == "1":
        print(" + 1 个导航文件")
    else:
        print()
    input("按回车键退出...")

if __name__ == "__main__":
    main()