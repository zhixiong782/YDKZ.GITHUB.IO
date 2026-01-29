# 运动控制官网 - 使用说明

## 项目简�?
这是一个完整的运动控制官网，包含产品介绍和业界新闻展示功能�?

## 启动方式

### 方式一：使用本地服务器（推荐）
由于使用了Fetch API加载Markdown文件，需要通过HTTP服务器运行�?

#### 使用VS Code的Live Server插件�?
1. 安装Live Server插件
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

#### 使用Python�?
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器访问：`http://localhost:8000`

#### 使用Node.js的http-server�?
```bash
# 全局安装
npm install -g http-server

# 运行
http-server
```

### 方式二：直接双击打开（有限制�?
如果直接双击打开HTML文件，可能会遇到CORS跨域问题，导致Markdown文件无法加载�?

## 项目结构
```
YDKZ/
├── index.html                    # 首页
├── products.html                 # 产品列表�?
├── product-detail.html           # 产品详情�?
├── news.html                     # 新闻列表�?
├── news-detail.html              # 新闻详情�?
├── about.html                    # 关于我们
├── contact.html                  # 联系我们
├── css/style.css                 # 样式文件
├── js/
�?  ├── data-loader.js            # 数据加载�?
�?  └── main.js                   # 主程�?
├── products/                     # 产品Markdown文件�?0个）
└── news/                         # 新闻Markdown文件�?个）
```

## 功能说明
- 10个产品介绍，支持查看详情
- 8个业界新闻，支持阅读全文
- 响应式设计，适配各种设备
- 现代化UI设计，深蓝色专业配色

## 技术栈
- HTML5/CSS3/JavaScript
- Bootstrap 5
- Marked.js (Markdown解析)
- Font Awesome (图标)

## 注意事项
1. 必须通过HTTP服务器运行，否则无法加载Markdown文件
2. 建议使用Chrome、Firefox、Edge等现代浏览器
3. 推荐屏幕分辨率：1920×1080或更�?

## 故障排除
### 问题：点�?了解更多"�?阅读全文"没有反应
**解决**：使用HTTP服务器运行网站，不要直接双击HTML文件

### 问题：Markdown内容显示失败
**解决**：检查浏览器控制台是否有CORS错误，使用服务器运行

### 问题：样式显示异�?
**解决**：确保CSS文件路径正确，清除浏览器缓存

## 联系方式
如有问题，请联系：info@YDKZ.COM
