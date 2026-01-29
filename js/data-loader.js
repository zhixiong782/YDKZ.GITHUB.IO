// 产品数据
const products = [
    {
        id: 1,
        title: "高性能伺服驱动器",
        icon: "fa-microchip",
        summary: "采用先进的控制算法，提供卓越的动态响应和精确控制。",
        file: "servo-driver.md"
    },
    {
        id: 2,
        title: "多轴运动控制器",
        icon: "fa-cogs",
        summary: "支持多轴协同控制，适用于复杂的运动控制场景。",
        file: "multi-axis-controller.md"
    },
    {
        id: 3,
        title: "步进电机驱动器",
        icon: "fa-bolt",
        summary: "高精度步进电机驱动，适合开环控制系统。",
        file: "stepper-driver.md"
    },
    {
        id: 4,
        title: "直流电机驱动器",
        icon: "fa-car-battery",
        summary: "支持宽电压范围的直流电机驱动，应用广泛。",
        file: "dc-driver.md"
    },
    {
        id: 5,
        title: "交流伺服电机",
        icon: "fa-sync",
        summary: "高扭矩密度，低惯量设计，优异的动态性能。",
        file: "ac-servo-motor.md"
    },
    {
        id: 6,
        title: "直线电机模组",
        icon: "fa-arrows-alt-h",
        summary: "直接驱动，无机械传动，超高精度和响应速度。",
        file: "linear-motor.md"
    },
    {
        id: 7,
        title: "行星减速机",
        icon: "fa-gear",
        summary: "高精度、高扭矩输出的精密减速传动装置。",
        file: "planetary-gearbox.md"
    },
    {
        id: 8,
        title: "运动控制软件",
        icon: "fa-code",
        summary: "直观易用的运动控制软件，支持多种控制模式。",
        file: "control-software.md"
    },
    {
        id: 9,
        title: "编码器系统",
        icon: "fa-tachometer-alt",
        summary: "高精度位置反馈，支持多种信号输出方式。",
        file: "encoder-system.md"
    },
    {
        id: 10,
        title: "运动控制平台",
        icon: "fa-layer-group",
        summary: "集成多种运动控制功能的一体化解决方案。",
        file: "control-platform.md"
    }
];

// 新闻数据
const news = [
    {
        id: 1,
        title: "运动控制技术在工业4.0中的应用",
        date: "2024-01-15",
        summary: "探讨运动控制技术在智能制造中的关键作用和发展趋势。",
        file: "industrial-4-0.md"
    },
    {
        id: 2,
        title: "新一代伺服驱动器发布",
        date: "2024-01-10",
        summary: "我们推出全新的伺服驱动器系列，性能提升30%。",
        file: "new-servo-driver.md"
    },
    {
        id: 3,
        title: "参加2024国际机器人展览会",
        date: "2024-01-05",
        summary: "将展示最新的运动控制产品和解决方案。",
        file: "robot-exhibition.md"
    },
    {
        id: 4,
        title: "运动控制系统在医疗器械领域的应用",
        date: "2023-12-28",
        summary: "介绍运动控制在医疗设备中的创新应用案例。",
        file: "medical-application.md"
    },
    {
        id: 5,
        title: "2024年运动控制市场预测报告",
        date: "2023-12-20",
        summary: "分析运动控制市场的发展机遇和挑战。",
        file: "market-report.md"
    },
    {
        id: 6,
        title: "公司与知名高校达成战略合作",
        date: "2023-12-15",
        summary: "加强产学研合作，推动运动控制技术创新。",
        file: "university-cooperation.md"
    },
    {
        id: 7,
        title: "运动控制技术的智能化发展趋势",
        date: "2023-12-10",
        summary: "探讨AI技术在运动控制领域的应用前景。",
        file: "ai-trend.md"
    },
    {
        id: 8,
        title: "公司荣获行业创新奖",
        date: "2023-12-05",
        summary: "凭借技术创新和产品质量获得行业认可。",
        file: "innovation-award.md"
    }
];

// 获取URL参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 加载产品内容
async function loadProductContent(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return null;

    try {
        const response = await fetch(`products/${product.file}`);
        const content = await response.text();
        return {
            product: product,
            content: content
        };
    } catch (error) {
        console.error('Error loading product:', error);
        return null;
    }
}

// 加载新闻内容
async function loadNewsContent(newsId) {
    const newsItem = news.find(n => n.id === parseInt(newsId));
    if (!newsItem) return null;

    try {
        const response = await fetch(`news/${newsItem.file}`);
        const content = await response.text();
        return {
            news: newsItem,
            content: content
        };
    } catch (error) {
        console.error('Error loading news:', error);
        return null;
    }
}

// 渲染Markdown内容
function renderMarkdown(content) {
    return marked.parse(content);
}

// 导出数据
window.motionControlData = {
    products: products,
    news: news,
    loadProductContent: loadProductContent,
    loadNewsContent: loadNewsContent,
    renderMarkdown: renderMarkdown
};
