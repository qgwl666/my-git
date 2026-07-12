(function() {
	if (document.getElementById('universal-navbar')) return;

	// 全站统一广告链接（写死完整域名）
	const AD_LINK = {
		text: '发现更多内容',
		url: 'more.html'
	};

	// 导航DOM
	const nav = document.createElement('nav');
	nav.id = 'universal-navbar';
	nav.innerHTML = `
        <div class="nv-inner">
            <div class="nv-left" title="返回">
                <span class="nv-back"></span>
            </div>
            <div class="nv-center">
                <a href="${AD_LINK.url}">${AD_LINK.text}</a>
            </div>
            <div class="nv-right" id="nvToggle">
                <span class="nv-hamburger"><i></i><i></i><i></i></span>
            </div>
        </div>
    `;

	// 菜单外壳（仅框架，内容完全由页面插槽提供）
	const menu = document.createElement('div');
	menu.id = 'nvMenu';
	menu.className = 'nv-menu';
	menu.innerHTML = `
        <div class="nv-menu-head">
            <span>菜单</span>
            <button id="nvMenuClose">&times;</button>
        </div>
        <div id="nvMenuContent"></div>
    `;

	const style = document.createElement('style');
	style.textContent = `
        :root {
            --nv-h: 52px;
            --nv-gap: 15px;
            --max-w: 960px;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        html, body { min-height: 100%; }

        #universal-navbar {
            position: fixed; top: 0; left: 0; right: 0;
            z-index: 1000; height: var(--nv-h);
            background: #fff;
            border-bottom: 1px solid rgba(0,0,0,.08);
            font-family: system-ui, sans-serif;
        }
        .nv-inner {
            max-width: var(--max-w);
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: var(--nv-gap);
            padding: 0 10px;
        }
        .nv-left {
            width: 20%; height: 100%;
            background: #f0f7ff;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; border-radius: 6px;
        }
        .nv-center {
            width: 60%; height: 100%;
            background: #f8f8f8;
            display: flex; align-items: center; justify-content: center;
            border-radius: 6px;
        }
        .nv-right {
            width: 20%; height: 100%;
            background: #f0f7ff;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; border-radius: 6px;
        }

        .nv-back {
            width: 20px; height: 20px;
            border-left: 2.5px solid #007aff;
            border-bottom: 2.5px solid #007aff;
            transform: rotate(45deg);
        }
        .nv-center a {
            width: 100%; height: 100%;
            display: flex; align-items: center; justify-content: center;
            text-decoration: none; color: #555;
            font-size: 16px; font-weight: 500;
        }
        .nv-center a:hover { color: #007aff; }

        .nv-hamburger { display: flex; flex-direction: column; gap: 5px; width: 22px; }
        .nv-hamburger i { height: 2px; background: #333; border-radius: 2px; }

        .nv-menu {
            position: fixed; top: var(--nv-h); left: 50%; bottom: 0;
            z-index: 999; width: 100%; max-width: var(--max-w);
            background: #fff; overflow-y: auto;
            transform: translate(-50%, -110%);
            transition: transform .35s cubic-bezier(.23,1,.32,1);
        }
        .nv-menu.open { transform: translate(-50%, 0); }
        .nv-menu-head {
            display: flex; justify-content: space-between; align-items: center;
            padding: 18px 20px; border-bottom: 1px solid #eee;
            font-size: 18px; font-weight: 600;
        }
        .nv-menu-head button {
            font-size: 30px; color: #999;
            background: none; border: none; cursor: pointer;
        }
        #nvMenuContent ul { list-style: none; }
        #nvMenuContent li { border-bottom: 1px solid #f0f0f0; }
        #nvMenuContent a {
            display: block; padding: 14px 20px;
            text-decoration: none; color: #333; font-size: 16px;
        }
        #nvMenuContent a:hover { background: #f5f5f7; color: #007aff; }

        .page-wrap {
            max-width: var(--max-w);
            width: 100%;
            margin: 0 auto;
            padding: 0 10px;
            word-break: break-all;
        }
        .page-wrap img,
        .page-wrap svg {
            width: 100%;
            max-width: 100%;
            height: auto;
            display: block;
        }
    `;

	document.head.appendChild(style);
	document.body.prepend(nav);
	document.body.appendChild(menu);

	const bodyTop = parseFloat(getComputedStyle(document.body).marginTop) || 0;
	if (bodyTop < 52) document.body.style.marginTop = '52px';

	const slotDom = document.getElementById('nvMenuSlots');
	const menuContentBox = document.getElementById('nvMenuContent');
	if (slotDom) menuContentBox.appendChild(slotDom);

	const toggleBtn = document.getElementById('nvToggle');
	const closeBtn = document.getElementById('nvMenuClose');
	let menuOpen = false;

	const openMenu = () => {
		menuOpen = true;
		menu.classList.add('open');
	};
	const closeMenu = () => {
		menuOpen = false;
		menu.classList.remove('open');
	};

	toggleBtn.addEventListener('click', e => {
		e.stopPropagation();
		menuOpen ? closeMenu() : openMenu();
	});
	closeBtn.addEventListener('click', e => {
		e.stopPropagation();
		closeMenu();
	});

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape' && menuOpen) closeMenu();
	});
	document.addEventListener('click', e => {
		if (!menuOpen) return;
		if (!menu.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
			closeMenu();
		}
	});

	// ========== 新增：菜单内所有链接点击自动关闭菜单 ==========
	menu.addEventListener('click', e => {
		const link = e.target.closest('a');
		if (link) {
			// 点击任意a标签，延迟关闭，保证滚动/跳转执行完成
			setTimeout(closeMenu, 100);
		}
	});

	nav.querySelector('.nv-left').addEventListener('click', () => {
		history.length > 1 ? history.back() : location.replace(AD_LINK.url);
	});
})();