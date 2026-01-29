// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 检查当前页面并执行相应的初始化
    const path = window.location.pathname;
    const filename = path.split('/').pop().toLowerCase();

    console.log('当前页面文件名:', filename);
    console.log('完整路径:', path);

    switch(filename) {
        case 'index.html':
        case '':
            initHomePage();
            break;
        case 'products.html':
            initProductsPage();
            break;
        case 'product-detail.html':
            initProductDetailPage();
            break;
        case 'news.html':
            initNewsPage();
            break;
        case 'news-detail.html':
            initNewsDetailPage();
            break;
        default:
            // 如果无法识别文件名，尝试从URL中判断
            const url = window.location.href.toLowerCase();
            if (url.includes('product-detail')) {
                initProductDetailPage();
            } else if (url.includes('news-detail')) {
                initNewsDetailPage();
            } else if (url.includes('products')) {
                initProductsPage();
            } else if (url.includes('news')) {
                initNewsPage();
            } else {
                initHomePage();
            }
    }
});

// 初始化首页
function initHomePage() {
    // 加载特色产品
    loadFeaturedProducts();
    
    // 加载最新新闻
    loadLatestNews();
    
    // 添加滚动动画
    initScrollAnimations();
}

// 加载特色产品（前4个）
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featuredProducts = window.motionControlData.products.slice(0, 4);

    container.innerHTML = featuredProducts.map(product => `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="product-card fade-in-up">
                ${product.image ? `<div class="product-image"><img src="${product.image}" alt="${product.title}" style="width:100%;height:150px;object-fit:cover;border-radius:8px 8px 0 0;"></div>` : ''}
                <div class="product-icon">
                    <i class="fas ${product.icon}"></i>
                </div>
                <div class="product-body">
                    <h4 class="product-title">${product.title}</h4>
                    <p class="product-description">${product.summary}</p>
                    <a href="product-detail.html?id=${product.id}" class="product-link">
                        了解更多 <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// 加载最新新闻（前3条）
function loadLatestNews() {
    const container = document.getElementById('latest-news');
    if (!container) return;

    const latestNews = window.motionControlData.news.slice(0, 3);

    container.innerHTML = latestNews.map(item => `
        <div class="col-md-4 mb-4">
            <div class="news-card fade-in-up">
                ${item.image ? `<div class="news-image"><img src="${item.image}" alt="${item.title}" style="width:100%;height:150px;object-fit:cover;border-radius:8px 8px 0 0;"></div>` : ''}
                <div class="news-body">
                    <div class="news-date">
                        <i class="far fa-calendar-alt"></i> ${item.date}
                    </div>
                    <h4 class="news-title">${item.title}</h4>
                    <p class="news-excerpt">${item.summary}</p>
                    <a href="news-detail.html?id=${item.id}" class="product-link">
                        阅读全文 <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// 初始化产品列表页
function initProductsPage() {
    const container = document.getElementById('products-container');
    if (!container) return;

    const products = window.motionControlData.products;

    container.innerHTML = products.map((product, index) => `
        <div class="col-md-6 col-lg-4 mb-4" style="animation-delay: ${index * 0.1}s">
            <div class="product-card fade-in-up">
                ${product.image ? `<div class="product-image"><img src="${product.image}" alt="${product.title}" style="width:100%;height:200px;object-fit:cover;border-radius:8px 8px 0 0;"></div>` : ''}
                <div class="product-icon">
                    <i class="fas ${product.icon}"></i>
                </div>
                <div class="product-body">
                    <h4 class="product-title">${product.title}</h4>
                    <p class="product-description">${product.summary}</p>
                    <a href="product-detail.html?id=${product.id}" class="product-link">
                        了解更多 <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// 初始化产品详情页
async function initProductDetailPage() {
    console.log('=== 初始化产品详情页 ===');

    const productId = window.motionControlData.getUrlParam('id');
    const container = document.getElementById('product-detail-container');
    const loadingEl = document.getElementById('loading');

    console.log('产品ID:', productId);
    console.log('容器元素:', container);
    console.log('加载元素:', loadingEl);

    if (!productId || !container) {
        console.error('缺少必要参数或容器');
        if (!productId) console.error('productId 为空');
        if (!container) console.error('product-detail-container 未找到');
        return;
    }

    try {
        loadingEl.style.display = 'block';
        loadingEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i><p>加载中...</p>';

        console.log('开始加载产品内容...');
        const data = await window.motionControlData.loadProductContent(productId);
        console.log('加载结果:', data);

        if (data) {
            loadingEl.style.display = 'none';
            container.innerHTML = `
                <div class="product-detail fade-in-up">
                    <div class="product-detail-header">
                        <h1 class="product-detail-title">${data.product.title}</h1>
                        <div class="product-detail-meta">
                            <i class="fas fa-folder"></i> 产品系列
                        </div>
                    </div>
                    <div class="product-detail-content markdown-content">
                        ${window.motionControlData.renderMarkdown(data.content)}
                    </div>
                </div>
            `;
            console.log('产品详情渲染完成');
        } else {
            loadingEl.innerHTML = `
                <div class="alert alert-warning">
                    <h5><i class="fas fa-exclamation-triangle"></i> 产品信息加载失败</h5>
                    <p>产品ID: ${productId}</p>
                    <p>请确保：</p>
                    <ul>
                        <li>数据加载器已正确加载</li>
                        <li>产品ID正确</li>
                    </ul>
                    <a href="products.html" class="btn btn-primary">返回产品列表</a>
                </div>
            `;
            console.error('产品数据为空');
        }
    } catch (error) {
        console.error('加载产品出错:', error);
        loadingEl.innerHTML = `
            <div class="alert alert-danger">
                <h5><i class="fas fa-times-circle"></i> 加载出错</h5>
                <p>错误信息: ${error.message}</p>
                <a href="products.html" class="btn btn-primary">返回产品列表</a>
            </div>
        `;
    }
}

// 初始化新闻列表页
function initNewsPage() {
    const container = document.getElementById('news-container');
    if (!container) return;

    const news = window.motionControlData.news;

    container.innerHTML = news.map((item, index) => `
        <div class="col-md-6 col-lg-4 mb-4" style="animation-delay: ${index * 0.1}s">
            <div class="news-card fade-in-up">
                ${item.image ? `<div class="news-image"><img src="${item.image}" alt="${item.title}" style="width:100%;height:200px;object-fit:cover;border-radius:8px 8px 0 0;"></div>` : ''}
                <div class="news-body">
                    <div class="news-date">
                        <i class="far fa-calendar-alt"></i> ${item.date}
                    </div>
                    <h4 class="news-title">${item.title}</h4>
                    <p class="news-excerpt">${item.summary}</p>
                    <a href="news-detail.html?id=${item.id}" class="product-link">
                        阅读全文 <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// 初始化新闻详情页
async function initNewsDetailPage() {
    console.log('=== 初始化新闻详情页 ===');

    const newsId = window.motionControlData.getUrlParam('id');
    const container = document.getElementById('news-detail-container');
    const loadingEl = document.getElementById('loading');

    console.log('新闻ID:', newsId);
    console.log('容器元素:', container);
    console.log('加载元素:', loadingEl);

    if (!newsId || !container) {
        console.error('缺少必要参数或容器');
        if (!newsId) console.error('newsId 为空');
        if (!container) console.error('news-detail-container 未找到');
        return;
    }

    try {
        loadingEl.style.display = 'block';
        loadingEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i><p>加载中...</p>';

        console.log('开始加载新闻内容...');
        const data = await window.motionControlData.loadNewsContent(newsId);
        console.log('加载结果:', data);

        if (data) {
            loadingEl.style.display = 'none';
            container.innerHTML = `
                <div class="news-detail fade-in-up">
                    <div class="news-detail-header">
                        <h1 class="news-detail-title">${data.news.title}</h1>
                        <div class="news-detail-meta">
                            <i class="far fa-calendar-alt"></i> ${data.news.date}
                        </div>
                    </div>
                    <div class="news-detail-content markdown-content">
                        ${window.motionControlData.renderMarkdown(data.content)}
                    </div>
                </div>
            `;
            console.log('新闻详情渲染完成');
        } else {
            loadingEl.innerHTML = `
                <div class="alert alert-warning">
                    <h5><i class="fas fa-exclamation-triangle"></i> 新闻信息加载失败</h5>
                    <p>新闻ID: ${newsId}</p>
                    <p>请确保：</p>
                    <ul>
                        <li>数据加载器已正确加载</li>
                        <li>新闻ID正确</li>
                    </ul>
                    <a href="news.html" class="btn btn-primary">返回新闻列表</a>
                </div>
            `;
            console.error('新闻数据为空');
        }
    } catch (error) {
        console.error('加载新闻出错:', error);
        loadingEl.innerHTML = `
            <div class="alert alert-danger">
                <h5><i class="fas fa-times-circle"></i> 加载出错</h5>
                <p>错误信息: ${error.message}</p>
                <a href="news.html" class="btn btn-primary">返回新闻列表</a>
            </div>
        `;
    }
}

// 初始化滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.feature-card, .product-card, .news-card').forEach(el => {
        observer.observe(el);
    });
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
