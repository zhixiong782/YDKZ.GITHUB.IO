@echo off
echo ========================================
echo   运动控制官网 - 本地服务器启动脚本
echo ========================================
echo.
echo 正在启动服务器...
echo.
echo 服务器将在以下地址运行：
echo http://localhost:8000
echo.
echo 按 Ctrl+C 可停止服务器
echo ========================================
echo.

REM 检查Python是否安装
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo 使用Python启动服务器...
    echo.
    python -m http.server 8000
    goto :end
)

REM 检查Python3是否安装
python3 --version >nul 2>&1
if %errorlevel% == 0 (
    echo 使用Python3启动服务器...
    echo.
    python3 -m http.server 8000
    goto :end
)

echo 错误：未找到Python！
echo.
echo 请安装Python，或者使用以下方法之一：
echo.
echo 1. 安装Python: https://www.python.org/downloads/
echo 2. 使用VS Code的Live Server插件
echo 3. 使用Node.js: npm install -g http-server && http-server
echo.
pause

:end
