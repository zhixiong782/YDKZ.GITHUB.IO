// 简单的构建脚本 - 将 Markdown 文件内容嵌入到 HTML 中
// 使用方法: node build.js

const fs = require('fs');
const path = require('path');

// 读取 Markdown 文件
function readMarkdownFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        console.error('读取文件失败:', filePath, e.message);
        return null;
    }
}

// 将 Markdown 转换为 HTML（简化版）
function markdownToHtml(content) {
    return content
        // 处理图片 ![alt](url)
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);">')
        // 处理链接 [text](url)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
        // 处理标题
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        // 处理加粗和斜体
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // 处理换行
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

// 自动扫描并生成新闻数据
function buildNewsData() {
    const newsDir = path.join(__dirname, 'news');
    let files = [];
    let idCounter = 1;

    try {
        const fileList = fs.readdirSync(newsDir);
        const mdFiles = fileList.filter(file => file.endsWith('.md'));

        // 按文件名排序
        mdFiles.sort((a, b) => a.localeCompare(b));

        files = mdFiles.map(file => {
            const filePath = path.join(newsDir, file);
            const content = readMarkdownFile(filePath);
            const lines = content.split('\n');

            // 从文件内容中提取标题和日期
            let title = '';
            let date = '';

            for (let i = 0; i < lines.length && i < 10; i++) {
                // 检查 YAML front matter 格式
                if (lines[i].startsWith('title:')) {
                    title = lines[i].replace(/^title:\s*/, '').trim();
                    continue;
                }
                if (lines[i].startsWith('date:')) {
                    date = lines[i].replace(/^date:\s*/, '').trim();
                    continue;
                }

                // 检查 Markdown 标题格式
                if (!title && lines[i].startsWith('# ')) {
                    title = lines[i].replace(/^#\s*/, '').trim();
                }
            }

            // 如果没有提取到标题，使用文件名
            if (!title) {
                title = file.replace('.md', '').replace(/-/g, ' ');
            }

            // 如果没有提取到日期，使用当前日期
            if (!date) {
                const now = new Date();
                date = now.toISOString().split('T')[0];
            }

            return {
                id: idCounter++,
                file: file,
                title: title,
                date: date,
                content: content ? markdownToHtml(content) : '<p>内容加载失败</p>'
            };
        });

        console.log(`  找到 ${files.length} 个新闻文件`);
    } catch (e) {
        console.error('  读取新闻目录失败:', e.message);
    }

    return files;
}

// 自动扫描并生成产品数据
function buildProductsData() {
    const productsDir = path.join(__dirname, 'products');
    let files = [];
    let idCounter = 1;

    try {
        const fileList = fs.readdirSync(productsDir);
        const mdFiles = fileList.filter(file => file.endsWith('.md'));

        // 按文件名排序
        mdFiles.sort((a, b) => a.localeCompare(b));

        files = mdFiles.map(file => {
            const filePath = path.join(productsDir, file);
            const content = readMarkdownFile(filePath);
            const lines = content.split('\n');

            // 从文件内容中提取标题
            let title = '';

            for (let i = 0; i < lines.length && i < 10; i++) {
                // 检查 YAML front matter 格式
                if (lines[i].startsWith('title:')) {
                    title = lines[i].replace(/^title:\s*/, '').trim();
                    break;
                }

                // 检查 Markdown 标题格式
                if (!title && lines[i].startsWith('# ')) {
                    title = lines[i].replace(/^#\s*/, '').trim();
                    break;
                }
            }

            // 如果没有提取到标题，使用文件名
            if (!title) {
                title = file.replace('.md', '').replace(/-/g, ' ');
            }

            return {
                id: idCounter++,
                file: file,
                title: title,
                content: content ? markdownToHtml(content) : '<p>内容加载失败</p>'
            };
        });

        console.log(`  找到 ${files.length} 个产品文件`);
    } catch (e) {
        console.error('  读取产品目录失败:', e.message);
    }

    return files;
}

// 更新 JavaScript 文件中的数据
function updateDataFile(dataVarName, data) {
    try {
        const filePath = 'js/data-loader-embedded.js';
        let content = fs.readFileSync(filePath, 'utf-8');

        // 将数据转换为可用的 JavaScript 数组字符串
        const dataString = JSON.stringify(data, null, 4);

        // 查找 var newsData = [ 或 var productsData = [ 并替换
        const regex = new RegExp(`var ${dataVarName} = \\[[\\s\\S]*?\\];`, 's');
        const replacement = `var ${dataVarName} = ${dataString};`;

        if (content.match(regex)) {
            content = content.replace(regex, replacement);
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`✓ 已更新 ${dataVarName} (${data.length} 条记录)`);
        } else {
            console.log(`✗ 未找到数据变量: ${dataVarName}`);
        }
    } catch (e) {
        console.error('更新文件失败:', e.message);
    }
}

// 主函数
function build() {
    console.log('开始构建...\n');

    console.log('1. 构建新闻数据...');
    const newsData = buildNewsData();
    updateDataFile('newsData', newsData);

    console.log('\n2. 构建产品数据...');
    const productsData = buildProductsData();
    updateDataFile('productsData', productsData);

    console.log('\n构建完成！');
}

// 如果直接运行此脚本
if (require.main === module) {
    build();
}

module.exports = { build };
