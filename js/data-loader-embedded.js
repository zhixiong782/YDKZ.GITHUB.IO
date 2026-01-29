// 产品数据 - 内嵌版本（用于列表页显示）
const products = [
    {
        id: 1,
        title: "高性能伺服驱动器",
        icon: "fa-microchip",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
        summary: "采用先进的控制算法，提供卓越的动态响应和精确控制。",
        file: "servo-driver.md"
    },
    {
        id: 2,
        title: "多轴运动控制器",
        icon: "fa-sliders-h",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400",
        summary: "支持多轴联动控制，适用于复杂运动场景。",
        file: "multi-axis-controller.md"
    },
    {
        id: 3,
        title: "步进电机驱动器",
        icon: "fa-cog",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
        summary: "高精度步进控制，成本效益优异。",
        file: "stepper-driver.md"
    },
    {
        id: 4,
        title: "直流电机驱动器",
        icon: "fa-bolt",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400",
        summary: "稳定的直流电机控制，广泛应用于工业自动化。",
        file: "dc-driver.md"
    },
    {
        id: 5,
        title: "交流伺服电机",
        icon: "fa-sync",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=400",
        summary: "高性能交流伺服电机，动力强劲响应迅速。",
        file: "ac-servo-motor.md"
    },
    {
        id: 6,
        title: "直线电机模组",
        icon: "fa-arrows-alt-h",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
        summary: "直接驱动设计，消除传动误差。",
        file: "linear-motor.md"
    },
    {
        id: 7,
        title: "行星减速机",
        icon: "fa-cogs",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
        summary: "高精度减速，提升扭矩输出。",
        file: "planetary-gearbox.md"
    },
    {
        id: 8,
        title: "运动控制软件",
        icon: "fa-code",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
        summary: "友好的用户界面，强大的运动控制功能。",
        file: "control-software.md"
    },
    {
        id: 9,
        title: "编码器系统",
        icon: "fa-tachometer-alt",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
        summary: "高精度位置反馈，确保控制精度。",
        file: "encoder-system.md"
    },
    {
        id: 10,
        title: "运动控制平台",
        icon: "fa-layer-group",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
        summary: "完整的运动控制解决方案平台。",
        file: "control-platform.md"
    }
];

// 新闻数据 - 内嵌版本（用于列表页显示）
const news = [
    {
        id: 1,
        title: "运动控制技术在工业4.0中的应用",
        date: "2024-01-15",
        summary: "探讨运动控制技术在智能制造中的关键作用。",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
        file: "industrial-4-0.md"
    },
    {
        id: 2,
        title: "新一代伺服驱动器发布",
        date: "2024-01-10",
        summary: "搭载最新控制算法，性能提升30%。",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400",
        file: "new-servo-driver.md"
    },
    {
        id: 3,
        title: "参加2024国际机器人展览会",
        date: "2024-01-05",
        summary: "展示最新运动控制技术和产品。",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
        file: "robot-exhibition.md"
    },
    {
        id: 4,
        title: "运动控制系统在医疗器械领域的应用",
        date: "2023-12-28",
        summary: "高精度控制助力医疗设备升级。",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400",
        file: "medical-application.md"
    },
    {
        id: 5,
        title: "2024年运动控制市场预测报告",
        date: "2023-12-20",
        summary: "市场分析显示持续增长趋势。",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
        file: "market-report.md"
    },
    {
        id: 6,
        title: "公司与知名高校达成战略合作",
        date: "2023-12-15",
        summary: "产学研结合推动技术创新。",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
        file: "university-cooperation.md"
    },
    {
        id: 7,
        title: "运动控制技术的智能化发展趋势",
        date: "2023-12-10",
        summary: "探讨AI技术在运动控制领域的应用前景。",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
        file: "ai-trend.md"
    },
    {
        id: 8,
        title: "公司荣获行业创新奖",
        date: "2023-12-05",
        summary: "凭借技术创新和产品质量获得行业认可。",
        image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400",
        file: "innovation-award.md"
    }
];

// newsData 和 productsData 变量将被 build.js 填充（用于详情页）
var newsData = [
    {
        "id": 1,
        "file": "ai-trend.md",
        "title": "运动控制技术的智能化发展趋势",
        "date": "2026-01-29",
        "content": "<h1>运动控制技术的智能化发展趋势</h1></p><p><img src=\"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800\" alt=\"AI智能控制\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>引言</h2></p><p>随着人工智能技术的快速发展，运动控制技术正迎来智能化变革。AI技术的深度应用，将大幅提升运动控制的性能和智能化水平，开启运动控制新时代。</p><p><h2>AI在运动控制中的应用</h2></p><p><h3>1. 自适应控制</h3><br><strong>传统控制</strong>：固定参数，需要人工调试<br><strong>AI控制</strong>：参数自整定，自动优化</p><p>- 根据负载变化自动调整参数<br>- 实时优化控制性能<br>- 减少人工调试时间</p><p><h3>2. 预测性维护</h3><br><strong>传统方式</strong>：定期维护，故障后维修<br><strong>AI方式</strong>：预测故障，提前维护</p><p>- 实时监测设备状态<br>- AI分析故障风险<br>- 提前预警，避免停机</p><p><h3>3. 智能路径规划</h3><br><strong>传统方法</strong>：预设轨迹<br><strong>AI方法</strong>：智能优化</p><p>- 实时避障<br>- 最优路径计算<br>- 多目标优化</p><p><h3>4. 机器视觉融合</h3><br><strong>传统控制</strong>：开环控制<br><strong>AI融合</strong>：视觉伺服</p><p>- 实时视觉反馈<br>- AI图像识别<br>- 智能跟踪控制</p><p><h2>关键技术</h2></p><p><h3>1. 深度学习</h3><br>- 神经网络控制<br>- 强化学习优化<br>- 迁移学习应用</p><p><h3>2. 边缘AI</h3><br>- 边缘计算芯片<br>- 轻量化AI模型<br>- 实时AI推理</p><p><h3>3. 云边协同</h3><br>- 云端训练<br>- 边缘推理<br>- 数据闭环</p><p><h2>应用案例</h2></p><p><h3>案例1：智能伺服驱动器</h3><br>- AI自动参数整定<br>- 自适应负载变化<br>- 实时性能优化<br><strong>效果</strong>：调试时间减少80%，性能提升30%</p><p><h3>案例2：智能机器人</h3><br>- 视觉伺服控制<br>- 自适应轨迹规划<br>- 智能避障<br><strong>效果</strong>：作业效率提升50%，安全性显著提高</p><p><h3>案例3：智能产线</h3><br>- 预测性维护<br>- 智能调度<br>- 自适应生产<br><strong>效果</strong>：停机时间减少70%，产能提升40%</p><p><h2>技术挑战</h2></p><p><h3>1. 实时性要求</h3><br>- AI计算需要实时<br>- 控制周期短<br>- 延迟要求严格</p><p><h3>2. 可靠性</h3><br>- AI决策可解释性<br>- 安全性保障<br>- 故障处理机制</p><p><h3>3. 算力需求</h3><br>- AI模型需要算力<br>- 边缘设备限制<br>- 成本控制</p><p><h3>4. 数据安全</h3><br>- 数据隐私保护<br>- 防止数据泄露<br>- 符合法规要求</p><p><h2>未来展望</h2></p><p><h3>1. 更智能</h3><br>- AI深度融入控制<br>- 全自主学习<br>- 智能化水平持续提升</p><p><h3>2. 更开放</h3><br>- AI算法标准化<br>- 开源AI框架<br>- 生态更加开放</p><p><h3>3. 更普及</h3><br>- AI成本下降<br>- 技术门槛降低<br>- 应用更加广泛</p><p><h3>4. 更安全</h3><br>- 可解释AI<br>- 安全AI保障<br>- 标准更加完善</p><p><img src=\"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800\" alt=\"智能工厂\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>行业影响</h2></p><p><h3>对制造商</h3><br>- 提高生产效率<br>- 降低运营成本<br>- 提升产品质量</p><p><h3>对用户</h3><br>- 设备更智能<br>- 使用更简单<br>- 维护更方便</p><p><h3>对行业</h3><br>- 推动技术进步<br>- 促进产业升级<br>- 创造新机会</p><p><h2>结语</h2></p><p>AI技术正在深刻改变运动控制领域，智能化是未来发展的必然趋势。我们将持续投入AI技术研发，为用户提供更智能、更高效的运动控制解决方案。</p><p>智能运动控制新时代已经到来，让我们一起拥抱变革，共创未来！"
    },
    {
        "id": 2,
        "file": "industrial-4-0.md",
        "title": "运动控制技术在工业4.0中的应用",
        "date": "2026-01-29",
        "content": "<h1>运动控制技术在工业4.0中的应用</h1></p><p><img src=\"https://images.unsplash.com/photo-1565514020176-db848e3d088d?w=800\" alt=\"智能工厂\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>概述</h2></p><p>随着工业4.0浪潮的推进，运动控制技术作为智能制造的核心技术之一，正经历着深刻的变革和发展。本文将探讨运动控制技术在智能制造中的关键作用和未来发展趋势。</p><p><h2>工业4.0背景下的运动控制</h2></p><p><img src=\"https://images.unsplash.com/photo-1590644365607-1c5a6d6c0f2b?w=800\" alt=\"自动化生产线\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p>工业4.0强调智能化、网络化、柔性化的生产方式，这对运动控制技术提出了新的要求：</p><p>1. <strong>更高精度</strong>：随着产品质量要求的提升，运动控制精度要求达到微米甚至纳米级别<br>2. <strong>更快响应</strong>：为了提高生产效率，需要毫秒级甚至微秒级的响应速度<br>3. <strong>更智能化</strong>：运动控制系统需要具备自学习、自优化能力<br>4. <strong>更开放性</strong>：支持与MES、ERP等系统的深度集成</p><p><h2>关键技术趋势</h2></p><p><img src=\"https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800\" alt=\"智能控制系统\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h3>1. 智能控制算法</h3><br>- <strong>自适应控制</strong>：根据负载变化自动调整控制参数<br>- <strong>预测性控制</strong>：预测运动轨迹，提前优化控制策略<br>- <strong>机器学习</strong>：利用AI技术优化运动控制性能</p><p><h3>2. 网络化控制</h3><br>- <strong>实时以太网</strong>：EtherCAT、PROFINET等实时通信技术<br>- <strong>边缘计算</strong>：在运动控制器上部署边缘计算节点<br>- <strong>云边协同</strong>：云端大数据分析，边缘实时控制</p><p><h3>3. 数字孪生</h3><br>- <strong>虚拟调试</strong>：在虚拟环境中调试运动控制系统<br>- <strong>预测性维护</strong>：通过数字孪生预测设备故障<br>- <strong>工艺优化</strong>：利用数字孪生优化加工工艺</p><p><h2>应用案例</h2></p><p><img src=\"https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800\" alt=\"工厂应用\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h3>案例1：智能工厂生产线</h3><br>某汽车零部件企业引入工业4.0概念，通过：<br>- 采用EtherCAT总线实现多轴高速协同<br>- 利用数字孪生技术优化生产线布局<br>- 应用AI算法实现自适应控制</p><p><strong>效果</strong>：生产效率提升35%，产品不良率降低60%</p><p><h3>案例2：柔性制造系统</h3><br>某电子制造企业打造柔性制造系统：<br>- 模块化运动控制平台<br>- 快速换型技术<br>- 智能调度系统</p><p><strong>效果</strong>：换型时间从4小时缩短到20分钟，柔性程度大幅提升</p><p><h2>挑战与机遇</h2></p><p><h3>挑战</h3><br>1. <strong>技术复杂性</strong>：多学科交叉，技术难度大<br>2. <strong>标准化</strong>：缺乏统一的技术标准<br>3. <strong>人才缺口</strong>：复合型人才稀缺<br>4. <strong>成本压力</strong>：初期投入较大</p><p><h3>机遇</h3><br>1. <strong>政策支持</strong>：国家大力推动智能制造<br>2. <strong>市场需求</strong>：产业升级需求旺盛<br>3. <strong>技术进步</strong>：新技术不断涌现<br>4. <strong>产业协同</strong>：产业链合作加强</p><p><h2>未来展望</h2></p><p>运动控制技术在工业4.0中将继续发挥关键作用，未来发展方向包括：</p><p>- <strong>更智能化</strong>：深度融合AI技术<br>- <strong>更网络化</strong>：与云平台深度集成<br>- <strong>更模块化</strong>：提高系统灵活性<br>- <strong>更标准化</strong>：促进互联互通<br>- <strong>更人性化</strong>：降低使用门槛</p><p><h2>结语</h2></p><p>运动控制技术是工业4.0的核心技术之一，其发展水平直接决定了智能制造的水平。作为运动控制解决方案提供商，我们将持续投入研发，为客户提供更智能、更高效的运动控制解决方案，助力中国制造业转型升级。"
    },
    {
        "id": 3,
        "file": "innovation-award.md",
        "title": "公司荣获行业创新奖",
        "date": "2026-01-29",
        "content": "<h1>公司荣获行业创新奖</h1></p><p><img src=\"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800\" alt=\"颁奖典礼\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>喜讯报道</h2></p><p>在刚刚结束的2023中国运动控制行业年度盛典上，我们凭借在技术创新和产品质量方面的突出表现，荣获\"2023年度运动控制行业创新奖\"。</p><p><h2>颁奖典礼</h2></p><p><strong>时间</strong>：2023年12月15日<br><strong>地点</strong>：北京国家会议中心<br><strong>主办单位</strong>：中国运动控制产业联盟<br><strong>参会人员</strong>：行业专家、企业代表、媒体记者等500余人</p><p><h2>评审标准</h2></p><p><h3>1. 技术创新（40%）</h3><br>- 核心技术突破<br>- 专利申请数量<br>- 技术领先程度</p><p><h3>2. 产品质量（30%）</h3><br>- 产品性能指标<br>- 质量稳定性<br>- 用户满意度</p><p><h3>3. 市场表现（20%）</h3><br>- 市场占有率<br>- 增长速度<br>- 应用案例</p><p><h3>4. 行业贡献（10%）</h3><br>- 标准制定<br>- 技术推广<br>- 行业影响力</p><p><img src=\"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800\" alt=\"技术创新\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>获奖理由</h2></p><p><h3>技术创新成果</h3><br>1. <strong>智能控制算法</strong><br>   - AI自适应参数整定技术<br>   - 预测性维护算法<br>   - 多轴协同控制算法</p><p>2. <strong>高性能产品</strong><br>   - 新一代伺服驱动器<br>   - 多轴运动控制器<br>   - 直线电机模组</p><p>3. <strong>专利成果</strong><br>   - 申请发明专利50余项<br>   - 授权发明专利30余项<br>   - 软件著作权20余项</p><p><h3>产品质量优势</h3><br>- 产品可靠性高，MTBF达到50,000小时<br>- 性能指标达到国际先进水平<br>- 客户满意度超过95%</p><p><h3>市场表现</h3><br>- 年增长率超过30%<br>- 市场占有率持续提升<br>- 应用案例遍布各行各业</p><p><h2>获奖感言</h2></p><p><strong>公司CEO致辞</strong>：</p><p>> 感谢评审委员会的认可，感谢合作伙伴和客户的支持，感谢全体员工的努力。这份荣誉是对我们过去工作的肯定，更是对未来的鞭策。我们将继续坚持技术创新，为客户提供更优质的产品和服务，为中国运动控制产业的发展贡献力量。</p><p><h2>媒体报道</h2></p><p>本次获奖得到了多家媒体的关注和报道：</p><p>- <strong>中国工业报</strong>：《XXX公司荣获运动控制行业创新奖》<br>- <strong>自动化网</strong>：《技术创新引领行业发展，XXX公司载誉归来》<br>- <strong>科技日报</strong>：《智能化运动控制技术获得行业认可》<br>- <strong>中国电子报</strong>：《XXX公司：用创新赢得市场》</p><p><h2>未来计划</h2></p><p><h3>短期计划（1年内）</h3><br>- 完成新一代产品研发<br>- 申请专利30项<br>- 新增应用案例50个</p><p><h3>中期计划（3年内）</h3><br>- 技术指标达到国际领先<br>- 市场占有率进入前三<br>- 建立产学研创新联盟</p><p><h3>长期愿景（5年内）</h3><br>- 成为行业技术标杆<br>- 推动行业标准制定<br>- 引领行业技术发展</p><p><h2>感谢与展望</h2></p><p>感谢所有支持和帮助过我们的合作伙伴、客户和员工。我们将以此次获奖为契机，继续坚持创新驱动发展战略，不断突破技术瓶颈，为运动控制行业的发展做出更大的贡献。</p><p><h2>联系我们</h2></p><p>如需了解更多获奖信息或洽谈合作，请联系我们：<br>- 电话：400-123-4567<br>- 邮箱：info@YDKZ.COM<br>- 官网：www.YDKZ.COM"
    },
    {
        "id": 4,
        "file": "market-report.md",
        "title": "2024年运动控制市场预测报告",
        "date": "2026-01-29",
        "content": "<h1>2024年运动控制市场预测报告</h1></p><p><img src=\"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800\" alt=\"市场分析\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>报告概述</h2></p><p>本报告对2024年运动控制市场进行深入分析，包括市场规模、增长趋势、技术发展、竞争格局等方面，为行业参与者提供决策参考。</p><p><h2>市场规模</h2></p><p><h3>全球市场</h3><br>- 2023年市场规模：约450亿美元<br>- 2024年预计规模：约490亿美元<br>- 年增长率：约8.9%</p><p><h3>中国市场</h3><br>- 2023年市场规模：约650亿人民币<br>- 2024年预计规模：约750亿人民币<br>- 年增长率：约15.4%</p><p><h2>市场驱动因素</h2></p><p><h3>1. 产业升级需求</h3><br>- 制造业转型升级<br>- 智能制造推进<br>- 工业机器人需求增长</p><p><h3>2. 技术进步推动</h3><br>- AI技术融合<br>- 物联网应用<br>- 新材料应用</p><p><h3>3. 政策支持</h3><br>- 制造强国战略<br>- 智能制造政策<br>- 新基建投资</p><p><img src=\"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800\" alt=\"市场趋势\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>市场细分</h2></p><p><h3>按产品类型</h3></p><p>1. <strong>伺服系统</strong><br>   - 市场占比：45%<br>   - 增长率：10%</p><p>2. <strong>步进系统</strong><br>   - 市场占比：25%<br>   - 增长率：6%</p><p>3. <strong>运动控制器</strong><br>   - 市场占比：20%<br>   - 增长率：12%</p><p>4. <strong>其他</strong><br>   - 市场占比：10%<br>   - 增长率：8%</p><p><h3>按应用领域</h3></p><p>1. <strong>工业自动化</strong><br>   - 市场占比：60%</p><p>2. <strong>机器人</strong><br>   - 市场占比：20%</p><p>3. <strong>医疗器械</strong><br>   - 市场占比：10%</p><p>4. <strong>其他</strong><br>   - 市场占比：10%</p><p><h2>技术趋势</h2></p><p><h3>1. 智能化</h3><br>- AI算法深度应用<br>- 自适应控制普及<br>- 预测性维护成为标配</p><p><h3>2. 网络化</h3><br>- 实时以太网成为主流<br>- 边缘计算应用增多<br>- 云边协同成为趋势</p><p><h3>3. 高精度</h3><br>- 微米级定位成为常态<br>- 纳米级定位开始应用<br>- 超精密需求增长</p><p><h2>竞争格局</h2></p><p><h3>国际厂商</h3><br>- 西门子、安川、三菱等<br>- 技术领先，品牌影响力强<br>- 高端市场占据主导</p><p><h3>国内厂商</h3><br>- 汇川、埃斯顿、雷赛等<br>- 性价比优势<br>- 中低端市场竞争力强<br>- 逐步向高端市场渗透</p><p><h2>挑战与机遇</h2></p><p><h3>挑战</h3><br>1. 技术门槛高<br>2. 研发投入大<br>3. 国际竞争激烈<br>4. 人才短缺</p><p><h3>机遇</h3><br>1. 国产替代加速<br>2. 新兴应用领域<br>3. 出口市场增长<br>4. 产业链协同</p><p><h2>市场预测</h2></p><p><h3>2024-2028年预测</h3><br>- 全球市场CAGR：约8.5%<br>- 中国市场CAGR：约12%<br>- 2028年全球市场规模：约680亿美元<br>- 2028年中国市场规模：约1200亿人民币</p><p><h2>建议</h2></p><p><h3>对厂商</h3><br>1. 加大研发投入<br>2. 提升产品质量<br>3. 拓展应用领域<br>4. 加强品牌建设</p><p><h3>对用户</h3><br>1. 选择适合的产品<br>2. 关注长期价值<br>3. 考虑整体解决方案<br>4. 加强技术合作</p><p><h2>结语</h2></p><p>运动控制市场正处于快速发展期，技术创新和市场需求共同推动行业向前发展。我们预计未来几年市场将持续增长，为行业参与者带来广阔的发展空间。"
    },
    {
        "id": 5,
        "file": "medical-application.md",
        "title": "运动控制系统在医疗器械领域的应用",
        "date": "2026-01-29",
        "content": "<h1>运动控制系统在医疗器械领域的应用</h1></p><p><img src=\"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800\" alt=\"医疗器械\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>引言</h2></p><p>医疗器械对运动控制系统的要求日益提高，高精度、高可靠性、低噪音成为关键指标。本文将介绍运动控制系统在医疗器械领域的创新应用案例。</p><p><h2>医疗器械的特点</h2></p><p><h3>1. 高精度要求</h3><br>- 定位精度要求微米级别<br>- 重复定位精度要求极高<br>- 运动平稳性要求严格</p><p><h3>2. 高可靠性</h3><br>- 必须保证长期稳定运行<br>- 故障率极低<br>- 安全性要求高</p><p><h3>3. 低噪音</h3><br>- 运行噪音必须很低<br>- 振动控制要求严格<br>- 患者舒适度优先</p><p><h3>4. 无菌要求</h3><br>- 设备需要易于清洁消毒<br>- 特殊场合需要无菌环境<br>- 材料选择要求高</p><p><img src=\"https://images.unsplash.com/photo-1551076805-e1869033e561?w=800\" alt=\"手术机器人\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>典型应用案例</h2></p><p><h3>案例1：医用影像设备</h3></p><p><strong>CT扫描仪</strong><br>- 采用高精度直线电机<br>- 定位精度±5μm<br>- 扫描速度提高30%</p><p><strong>核磁共振仪</strong><br>- 平静运行的伺服电机<br>- 低噪音设计<br>- 高可靠性保证</p><p><h3>案例2：手术机器人</h3></p><p><strong>达芬奇手术机器人</strong><br>- 多臂协同控制<br>- 亚毫米级定位精度<br>- 超低噪音运行</p><p><strong>骨科手术导航系统</strong><br>- 高精度定位<br>- 实时图像跟踪<br>- 智能路径规划</p><p><h3>案例3：康复设备</h3></p><p><strong>康复训练机器人</strong><br>- 柔性运动控制<br>- 安全防护功能<br>- 个性化运动方案</p><p><strong>轮椅驱动系统</strong><br>- 平稳运动控制<br>- 能量回收技术<br>- 智能避障</p><p><h2>技术解决方案</h2></p><p><h3>1. 精密控制技术</h3><br>- 采用23位绝对值编码器<br>- 高精度伺服驱动器<br>- 先进的控制算法</p><p><h3>2. 低噪音技术</h3><br>- 优化电机设计<br>- 采用柔性传动<br>- 智能振动控制</p><p><h3>3. 可靠性设计</h3><br>- 工业级质量标准<br>- 严格测试验证<br>- 完善的保护功能</p><p><h2>未来趋势</h2></p><p>1. <strong>更智能化</strong><br>   - AI辅助诊断<br>   - 智能运动规划<br>   - 自适应控制</p><p>2. <strong>更人性化</strong><br>   - 更舒适的患者体验<br>   - 更简单的操作方式<br>   - 更个性化的治疗方案</p><p>3. <strong>更集成化</strong><br>   - 高度集成的控制系统<br>   - 模块化设计<br>   - 快速部署能力"
    },
    {
        "id": 6,
        "file": "new-servo-driver.md",
        "title": "新一代伺服驱动器发布",
        "date": "2026-01-29",
        "content": "<h1>新一代伺服驱动器发布</h1></p><p><img src=\"https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800\" alt=\"新产品发布\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品发布</h2></p><p>我们荣幸地宣布，公司正式发布新一代高性能伺服驱动器系列。该系列产品在性能、智能化、易用性等方面都有重大突破，将为用户带来全新的运动控制体验。</p><p><h2>产品亮点</h2></p><p><h3>1. 性能提升30%</h3><br>- 更快的响应速度，响应时间小于0.5ms<br>- 更高的控制精度，定位精度±0.005°<br>- 更宽的调速范围，支持1:10000调速</p><p><h3>2. 智能化功能</h3><br>- 内置AI算法，实现自适应参数整定<br>- 智能诊断功能，提前预警故障<br>- 自动调谐功能，一键优化参数</p><p><h3>3. 易用性增强</h3><br>- 彩色触摸屏，直观的参数设置<br>- 手机APP远程监控<br>- 云平台数据管理</p><p><h3>4. 高可靠性</h3><br>- 工业级设计，适应恶劣环境<br>- 多重保护功能，确保安全运行<br>- 长寿命设计，维护成本低</p><p><h2>技术参数</h2></p><p>| 参数项 | 新一代 | 上一代 |<br>|--------|--------|--------|<br>| 控制周期 | 62.5μs | 125μs |<br>| 速度响应 | 0.5ms | 1ms |<br>| 编码器分辨率 | 25位 | 23位 |<br>| 通信速率 | 1Gbps | 100Mbps |<br>| 防护等级 | IP65 | IP54 |</p><p><img src=\"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800\" alt=\"伺服驱动器\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品系列</h2></p><p>新系列包含以下型号：<br>- SDR-200系列（0.2-2kW）<br>- SDR-500系列（2-5kW）<br>- SDR-1000系列（5-15kW）</p><p><h2>应用领域</h2></p><p>- 数控机床<br>- 激光加工<br>- 包装机械<br>- 电子制造<br>- 机器人技术</p><p><h2>价格与供应</h2></p><p>新一代伺服驱动器价格与上一代持平，即日起接受预订，30天内交付。"
    },
    {
        "id": 7,
        "file": "robot-exhibition.md",
        "title": "参加2024国际机器人展览会",
        "date": "2026-01-29",
        "content": "<h1>参加2024国际机器人展览会</h1></p><p><img src=\"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800\" alt=\"机器人展览\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>展会信息</h2></p><p>我们将参加于2024年3月5-8日在上海举办的2024国际机器人展览会，展示最新的运动控制产品和解决方案。</p><p><h2>展会概况</h2></p><p>- <strong>展会时间</strong>：2024年3月5日-8日<br>- <strong>展会地点</strong>：上海新国际博览中心<br>- <strong>展位号</strong>：W3馆 A08<br>- <strong>展会规模</strong>：超过500家参展企业</p><p><img src=\"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800\" alt=\"展会现场\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>展示内容</h2></p><p><h3>核心产品展示</h3></p><p>1. <strong>新一代伺服驱动器</strong><br>   - 实物展示与现场演示<br>   - 性能对比测试<br>   - 应用案例分享</p><p>2. <strong>多轴运动控制器</strong><br>   - 32轴协同控制演示<br>   - 实时性能展示<br>   - 编程功能演示</p><p>3. <strong>直线电机模组</strong><br>   - 高速运动演示<br>   - 精度测试展示<br>   - 应用场景模拟</p><p><h3>技术交流</h3></p><p>- <strong>专家讲座</strong>：每天举办2场技术讲座<br>- <strong>现场答疑</strong>：技术专家现场解答问题<br>- <strong>技术培训</strong>：免费提供技术培训课程</p><p><h2>展会亮点</h2></p><p>1. <strong>新品首发</strong>：展会期间首发最新产品<br>2. <strong>互动体验</strong>：观众可现场体验产品<br>3. <strong>礼品赠送</strong>：参观展位即送精美礼品<br>4. <strong>抽奖活动</strong>：每日抽奖，赢取大奖</p><p><h2>预约参观</h2></p><p>如需预约参观或技术交流，请提前联系我们：<br>- 电话：400-123-4567<br>- 邮箱：exhibition@YDKZ.COM<br>- 微信：YDKZ_EXPO"
    },
    {
        "id": 8,
        "file": "university-cooperation.md",
        "title": "公司与知名高校达成战略合作",
        "date": "2026-01-29",
        "content": "<h1>公司与知名高校达成战略合作</h1></p><p><img src=\"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800\" alt=\"校企合作\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>合作背景</h2></p><p>为加强产学研合作，推动运动控制技术创新，我们与国内多所知名高校达成战略合作协议，共同开展技术研发和人才培养。</p><p><h2>合作院校</h2></p><p><img src=\"https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800\" alt=\"高校实验室\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h3>1. 清华大学</h3><br><strong>合作领域</strong>：智能运动控制算法<br>- <strong>合作内容</strong>：<br>  - 联合实验室建设<br>  - 博士后流动站<br>  - 共同申报国家项目</p><p>- <strong>预期成果</strong>：<br>  - 核心算法突破<br>  - 高水平论文发表<br>  - 专利申请</p><p><h3>2. 上海交通大学</h3><br><strong>合作领域</strong>：机器人运动控制<br>- <strong>合作内容</strong>：<br>  - 机器人控制研究<br>  - 硕士研究生培养<br>  - 技术成果转化</p><p>- <strong>预期成果</strong>：<br>  - 机器人专用控制方案<br>  - 行业标准制定<br>  - 产学研转化应用</p><p><h3>3. 哈尔滨工业大学</h3><br><strong>合作领域</strong>：精密运动控制<br>- <strong>合作内容</strong>：<br>  - 精密控制技术研究<br>  - 工程中心建设<br>  - 产学研基地</p><p>- <strong>预期成果</strong>：<br>  - 亚微米级控制技术<br>  - 测试平台建设<br>  - 应用示范</p><p><h3>4. 北京航空航天大学</h3><br><strong>合作领域</strong>：航空航天运动控制<br>- <strong>合作内容</strong>：<br>  - 航天器控制技术<br>  - 特种运动控制<br>  - 联合研发中心</p><p>- <strong>预期成果</strong>：<br>  - 特种控制技术<br>  - 国防应用<br>  - 技术转化</p><p><h2>合作模式</h2></p><p><h3>1. 联合实验室</h3><br>- <strong>建设目标</strong>：打造国内一流运动控制实验平台<br>- <strong>研究方向</strong>：智能控制、精密控制、机器人控制<br>- <strong>资金投入</strong>：三年投资5000万元<br>- <strong>设备配置</strong>：国际先进测试设备</p><p><h3>2. 人才培养</h3><br>- <strong>实习生生源</strong>：每年接收200名实习生<br>- <strong>奖学金计划</strong>：设立专项奖学金，每年20万元<br>- <strong>人才引进</strong>：高校教师挂职，优秀毕业生入职<br>- <strong>在职培养</strong>：员工继续教育，攻读硕士博士学位</p><p><h3>3. 技术研发</h3><br>- <strong>项目合作</strong>：共同申报国家重点项目<br>- <strong>成果共享</strong>：知识产权共有<br>- <strong>产业化</strong>：技术成果快速转化<br>- <strong>标准制定</strong>：参与行业标准制定</p><p><h3>4. 学术交流</h3><br>- <strong>学术会议</strong>：联合举办学术研讨会<br>- <strong>专家互访</strong>：定期学术交流<br>- <strong>技术讲座</strong>：企业专家进校园<br>- <strong>实习基地</strong>：建设实习实训基地</p><p><h2>近期重点项目</h2></p><p><h3>项目1：智能自适应运动控制系统</h3><br><strong>合作院校</strong>：清华大学<br><strong>研究内容</strong>：<br>- AI算法在运动控制中的应用<br>- 自适应控制技术<br>- 预测性维护算法</p><p><strong>项目周期</strong>：3年<br><strong>预期成果</strong>：发表SCI论文10篇，申请发明专利15项</p><p><h3>项目2：多机器人协同控制系统</h3><br><strong>合作院校</strong>：上海交通大学<br><strong>研究内容</strong>：<br>- 多机器人协同算法<br>- 路径规划优化<br>- 碰撞检测与避免</p><p><strong>项目周期</strong>：3年<br><strong>预期成果</strong>：形成完整的协同控制方案，应用于工业机器人</p><p><h3>项目3：超精密运动控制技术</h3><br><strong>合作院校</strong>：哈尔滨工业大学<br><strong>研究内容</strong>：<br>- 亚微米级定位技术<br>- 振动抑制算法<br>- 温度补偿技术</p><p><strong>项目周期</strong>：3年<br><strong>预期成果</strong>：定位精度达到±0.1μm，应用于半导体设备制造</p><p><h2>合作成果</h2></p><p><h3>已取得的成果</h3><br>1. <strong>学术论文</strong>：联合发表高水平论文30余篇<br>2. <strong>专利申请</strong>：申请发明专利80余项<br>3. <strong>技术转化</strong>：技术转化产值超亿元<br>4. <strong>人才培养</strong>：培养硕博士500余人</p><p><h3>在研项目</h3><br>- 国家重点研发计划项目2项<br>- 自然科学基金项目5项<br>- 省部级项目10项</p><p><h2>社会责任</h2></p><p><h3>教育支持</h3><br>- 资助贫困学生<br>- 设立奖励学金<br>- 支持教育发展</p><p><h3>科普活动</h3><br>- 中学科技讲座<br>- 科普讲座<br>- 开放日活动</p><p><h3>公益活动</h3><br>- 技术扶贫<br>- 设备捐赠<br>- 志愿服务</p><p><h2>未来规划</h2></p><p><h3>短期目标（1年）</h3><br>- 完成联合实验室建设<br>- 启动3个合作项目<br>- 接收50名实习生</p><p><h3>中期目标（3年）</h3><br>- 发表高水平论文100篇<br>- 申请专利100项<br>- 培养200名专业人才</p><p><h3>长期目标（5年）</h3><br>- 建立产学研创新联盟<br>- 形成核心技术体系<br>- 成为行业技术标杆</p><p><h2>合作展望</h2></p><p>我们相信，通过与知名高校的深度合作，将有力推动运动控制技术的创新发展，提升公司的核心竞争力，同时为行业培养更多专业人才，为中国运动控制产业发展贡献力量。</p><p><h2>媒体报道</h2></p><p>本次合作得到了业内广泛关注，多家媒体进行了报道：<br>- 科技日报<br>- 人民日报<br>- 中国工业报<br>- 自动化网</p><p><h2>联系我们</h2></p><p>如对我们的产学研合作感兴趣，欢迎联系我们：<br>- 合作咨询：cooperation@YDKZ.COM<br>- 联系人：张经理<br>- 电话：400-123-4567"
    }
];
var productsData = [
    {
        "id": 1,
        "file": "ac-servo-motor.md",
        "title": "交流伺服电机",
        "content": "<h1>交流伺服电机</h1></p><p><img src=\"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600\" alt=\"伺服电机\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品概述</h2></p><p>交流伺服电机系列是专为高精度、高动态响应运动控制而设计的优质电机产品，采用先进的设计理念和制造工艺，提供卓越的性能表现。</p><p><h2>主要特点</h2></p><p>- <strong>高扭矩密度</strong>：单位体积输出扭矩大<br>- <strong>低惯量设计</strong>：加速性能优异<br>- <strong>高精度编码器</strong>：标配17位绝对值编码器<br>- <strong>宽速度范围</strong>：支持0-6000rpm宽速度范围<br>- <strong>耐高温</strong>：采用H级绝缘，最高工作温度155°C</p><p><h2>技术参数</h2></p><p>| 参数项 | 小型系列 | 中型系列 | 大型系列 |<br>|--------|---------|---------|---------|<br>| 额定扭矩 | 0.5-10 Nm | 10-50 Nm | 50-200 Nm |<br>| 额定转速 | 3000 rpm | 3000 rpm | 2000 rpm |<br>| 额定功率 | 3相交流 | 3相交流 | 2相交流 |<br>| 编码器 | 17/20/23位 | 17/20/23位 | 17/20位 |<br>| 防护等级 | IP54/IP65 | IP54/IP65 | IP54 |</p><p><img src=\"https://images.unsplash.com/photo-1581603702236-39491d9b9e49?w=600\" alt=\"电机细节\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>技术优势</h2></p><p><h3>1. 高效率设计</h3><br>- 采用优质稀土永磁材料<br>- 优化定子绕组设计<br>- 降低铁损和铜损</p><p><h3>2. 优异的动态性能</h3><br>- 低转子惯量<br>- 快速响应能力<br>- 高加减速性能</p><p><h3>3. 宽调速范围</h3><br>- 恒转矩和恒功率范围广<br>- 低速大扭矩输出<br>- 高速稳定运行"
    },
    {
        "id": 2,
        "file": "control-platform.md",
        "title": "运动控制平台",
        "content": "<h1>运动控制平台</h1></p><p><img src=\"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600\" alt=\"控制平台\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品概述</h2></p><p>运动控制平台是一体化运动控制解决方案，集成多轴控制、驱动、IO控制等多种功能，为用户提供开箱即用的控制系统，大幅简化系统集成工作。</p><p><h2>核心功能</h2></p><p><h3>1. 多轴运动控制</h3><br>- 支持多轴协同运动<br>- 复杂轨迹规划<br>- 实时插补计算</p><p><h3>2. 内置驱动器</h3><br>- 集成伺服驱动功能<br>- 直接驱动电机<br>- 简化接线工作</p><p><h3>3. 丰富的I/O</h3><br>- 数字量输入/输出<br>- 模拟量输入/输出<br>- 编码器接口</p><p><h3>4. 通信功能</h3><br>- 工业以太网<br>- 现场总线<br>- 串行通信</p><p><h2>主要特点</h2></p><p>- <strong>一体化设计</strong>：减少外部组件<br>- <strong>即插即用</strong>：快速部署<br>- <strong>高性能</strong>：实时控制<br>- <strong>易扩展</strong>：模块化设计</p><p><h2>技术参数</h2></p><p>| 参数项 | 参数值 |<br>|--------|--------|<br>| 控制轴数 | 4-32轴可选 |<br>| 控制周期 | 125μs-1ms |<br>| 通信接口 | EtherCAT、PROFINET等 |<br>| 数字量I/O | 128点可扩展 |<br>| 模拟量I/O | 16通道可扩展 |</p><p><img src=\"https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600\" alt=\"应用场景\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>应用场景</h2></p><p>- 自动化生产线<br>- 智能仓储<br>- 包装机械<br>- 电子制造<br>- 食品加工</p><p><h2>系统优势</h2></p><p><h3>降低成本</h3><br>- 减少硬件投入<br>- 简化系统设计<br>- 缩短开发周期</p><p><h3>提高可靠性</h3><br>- 减少接线和连接点<br>- 统一的软硬件平台<br>- 完善的故障诊断</p><p><h3>简化维护</h3><br>- 一体化设计便于维护<br>- 统一的编程环境<br>- 在线升级功能"
    },
    {
        "id": 3,
        "file": "control-software.md",
        "title": "运动控制软件",
        "content": "<h1>运动控制软件</h1></p><p><img src=\"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600\" alt=\"控制软件\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品概述</h2></p><p>运动控制软件是一款直观易用的专业运动控制软件，集参数配置、运动编程、调试诊断于一体，大幅简化运动控制系统的开发和维护工作。</p><p><h2>主要功能</h2></p><p>- <strong>参数配置</strong>：图形化参数设置界面<br>- <strong>运动编程</strong>：支持G代码、梯形图等<br>- <strong>实时监控</strong>：运动状态实时显示<br>- <strong>故障诊断</strong>：智能诊断和错误提示<br>- <strong>数据记录</strong>：历史数据记录和分析</p><p><h2>软件特性</h2></p><p><h3>1. 用户友好</h3><br>- 直观的图形界面<br>- 向导式配置流程<br>- 丰富的示例程序</p><p><h3>2. 强大功能</h3><br>- 多轴协同编程<br>- 复杂运动轨迹规划<br>- I/O控制逻辑编程</p><p><h3>3. 可靠稳定</h3><br>- 实时通信保障<br>- 完善的错误处理<br>- 严格测试验证</p><p><h2>系统要求</h2></p><p>| 项目 | 最低配置 | 推荐配置 |<br>|------|---------|---------|<br>| 操作系统 | Windows 10 64位 | Windows 11 64位 |<br>| 内存 | 4GB | 8GB以上 |<br>| 硬盘 | 10GB可用空间 | SSD硬盘 |<br>| 通信接口 | USB/以太网 | USB 3.0/千兆网 |</p><p><img src=\"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600\" alt=\"软件界面\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>支持的产品</h2></p><p>- 全系列伺服驱动器<br>- 多轴运动控制器<br>- 步进电机驱动器<br>- 各种扩展模块"
    },
    {
        "id": 4,
        "file": "dc-driver.md",
        "title": "直流电机驱动器",
        "content": "<h1>直流电机驱动器</h1></p><p><img src=\"https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600\" alt=\"直流驱动器\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品概述</h2></p><p>直流电机驱动器是一款通用性强、性能可靠的直流电机控制产品，支持宽电压范围和大电流输出，广泛应用于各种自动化设备。</p><p><h2>主要特点</h2></p><p>- <strong>宽电压输入</strong>：支持DC 12-60V输入<br>- <strong>大电流输出</strong>：最大输出电流20A<br>- <strong>多种控制模式</strong>：速度控制、转矩控制<br>- <strong>PWM调速</strong>：采用先进PWM控制技术<br>- <strong>高效率</strong>：转换效率高达95%</p><p><h2>技术参数</h2></p><p>| 参数项 | 参数值 |<br>|--------|--------|<br>| 输入电压 | DC 12-60V |<br>| 输出电流 | 0-20A可调 |<br>| PWM频率 | 20kHz |<br>| 控制模式 | 速度/转矩控制 |<br>| 通信接口 | 模拟量、PWM、串口 |</p><p><img src=\"https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600\" alt=\"应用展示\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>应用领域</h2></p><p>- 电动车辆<br>- 搬运机器人<br>- 传送带系统<br>- 卷绕设备<br>- 风扇和泵类控制"
    },
    {
        "id": 5,
        "file": "encoder-system.md",
        "title": "编码器系统",
        "content": "<h1>编码器系统</h1></p><p><img src=\"https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600\" alt=\"编码器\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品概述</h2></p><p>编码器系统提供高精度的位置和速度反馈，是闭环控制系统的关键部件。我们的编码器产品涵盖多种类型和技术，满足不同应用场景的需求。</p><p><h2>产品类型</h2></p><p><h3>1. 光电编码器</h3><br>- 高分辨率<br>- 长寿命<br>- 抗干扰能力强</p><p><h3>2. 磁电编码器</h3><br>- 抗污染能力强<br>- 可靠性高<br>- 成本较低</p><p><h3>3. 混合式编码器</h3><br>- 结合光电和磁电优点<br>- 性能优异<br>- 应用广泛</p><p><h2>主要特点</h2></p><p>- <strong>高精度</strong>：分辨率高达23位<br>- <strong>高可靠性</strong>：工业级设计<br>- <strong>宽温度范围</strong>：-40°C ~ +85°C<br>- <strong>多种接口</strong>：增量、绝对值、总线等<br>- <strong>防护等级</strong>：IP65/IP67</p><p><h2>技术参数</h2></p><p>| 参数项 | 增量式 | 绝对值式 |<br>|--------|--------|---------|<br>| 分辨率 | 最高23位 | 最高25位 |<br>| 信号类型 | A/B/Z信号 | SSI、CANopen等 |<br>| 供电电压 | DC 5V-24V | DC 5V-24V |<br>| 输出方式 | 差分/推挽 | 数字信号 |<br>| 防护等级 | IP65 | IP67 |</p><p><img src=\"https://images.unsplash.com/photo-1531297461136-82lw9z1q19l?w=600\" alt=\"编码器应用\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>应用领域</h2></p><p>- 数控机床<br>- 机器人<br>- 自动化生产线<br>- 电梯控制<br>- 纺织机械<br>- 包装设备"
    },
    {
        "id": 6,
        "file": "linear-motor.md",
        "title": "直线电机模组",
        "content": "<h1>直线电机模组</h1></p><p><img src=\"https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600\" alt=\"直线电机\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品概述</h2></p><p>直线电机模组采用直接驱动技术，无中间传动环节，提供超高精度和响应速度，是高端精密定位系统的理想选择。</p><p><h2>主要特点</h2></p><p>- <strong>直接驱动</strong>：无丝杠、齿轮等中间传动，零背隙<br>- <strong>超高精度</strong>：定位精度可达±0.5μm<br>- <strong>高加速度</strong>：最大加速度可达5G<br>- <strong>高速度</strong>：最大速度可达3m/s<br>- <strong>免维护</strong>：无机械磨损，长期稳定</p><p><h2>技术参数</h2></p><p>| 参数项 | 标准型 | 高精度型 | 超高速型 |<br>|--------|--------|---------|---------|<br>| 有效行程 | 100-2000mm | 100-1500mm | 100-1000mm |<br>| 推力范围 | 50-5000N | 50-3000N | 50-2000N |<br>| 重复精度 | ±1μm | ±0.5μm | ±1μm |<br>| 最大速度 | 1.5m/s | 1m/s | 3m/s |<br>| 最大加速度 | 2G | 1G | 5G |</p><p><h2>技术原理</h2></p><p><h3>直接驱动原理</h3><br>直线电机将旋转电机展开为直线运动，能量直接转换为直线运动动能，无需任何机械传动装置。</p><p><h3>结构组成</h3><br>- 初级（定子）：磁轨和铁芯<br>- 次级（动子）：线圈和滑块<br>- 导轨系统：高精度直线导轨<br>- 位置反馈：光栅尺或磁栅尺</p><p><img src=\"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600\" alt=\"精密定位\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>应用领域</h2></p><p>- 半导体设备<br>- 激光加工<br>- 数控机床<br>- 检测设备<br>- 精密定位平台"
    },
    {
        "id": 7,
        "file": "multi-axis-controller.md",
        "title": "多轴运动控制器",
        "content": "<h1>多轴运动控制器</h1></p><p><img src=\"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600\" alt=\"多轴控制器\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品概述</h2></p><p>多轴运动控制器是一款功能强大的运动控制核心，支持多轴协同控制，适用于复杂的运动控制场景，是自动化系统的理想选择。</p><p><h2>主要特点</h2></p><p>- <strong>多轴控制</strong>：最多支持32轴独立控制<br>- <strong>同步控制</strong>：各轴之间可实现精确的同步运动<br>- <strong>实时性能</strong>：控制周期可达100μs<br>- <strong>灵活编程</strong>：支持G代码、梯形图等多种编程方式<br>- <strong>扩展性强</strong>：支持多种扩展模块和总线接口</p><p><h2>技术参数</h2></p><p>| 参数项 | 参数值 |<br>|--------|--------|<br>| 控制轴数 | 4/8/16/32轴可选 |<br>| 控制周期 | 100μs - 1ms |<br>| 通信接口 | EtherCAT、PROFINET、Modbus TCP |<br>| 内存容量 | 512MB RAM + 8GB存储 |<br>| 工作温度 | -10°C ~ +55°C |</p><p><h2>应用领域</h2></p><p>- 数控机床<br>- 机器人<br>- 包装机械<br>- 电子制造<br>- 激光加工</p><p><img src=\"https://images.unsplash.com/photo-1550439062-609e1531270e?w=600\" alt=\"控制系统\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品优势</h2></p><p>- 高性能多轴同步控制<br>- 丰富的编程接口<br>- 模块化设计<br>- 完善的开发工具包"
    },
    {
        "id": 8,
        "file": "planetary-gearbox.md",
        "title": "行星减速机",
        "content": "<h1>行星减速机</h1></p><p><img src=\"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600\" alt=\"行星减速机\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品概述</h2></p><p>行星减速机采用精密的行星齿轮传动设计，具有高精度、高扭矩输出、低噪音等特点，是提高运动系统性能的理想传动装置。</p><p><h2>主要特点</h2></p><p>- <strong>高精度</strong>：背隙小于3弧分<br>- <strong>高扭矩密度</strong>：紧凑设计，大扭矩输出<br>- <strong>低噪音</strong>：精密磨齿，运行平稳<br>- <strong>高效率</strong>：单级效率95%以上<br>- <strong>长寿命</strong>：优质材料和精密制造</p><p><h2>技术参数</h2></p><p>| 参数项 | 参数值 |<br>|--------|--------|<br>| 减速比 | 3-100 |<br>| 额定扭矩 | 10-5000Nm |<br>| 最大扭矩 | 20-10000Nm |<br>| 背隙 | <3弧分（精密型） |<br>| 效率 | ≥95% |<br>| 防护等级 | IP64 |</p><p><h2>产品系列</h2></p><p><h3>1. 直角型行星减速机</h3><br>- 90°输出方向<br>- 节省安装空间<br>- 适用于空间受限场合</p><p><h3>2. 法兰型行星减速机</h3><br>- 标准法兰接口<br>- 安装便捷<br>- 适用性广</p><p><h3>3. 中空型行星减速机</h3><br>- 中空轴设计<br>- 方便布线<br>- 适用于特殊应用</p><p><img src=\"https://images.unsplash.com/photo-1580907853203-5828863a6f3d?w=600\" alt=\"减速机应用\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>应用领域</h2></p><p>- 机器人<br>- 自动化设备<br>- 包装机械<br>- 机床<br>- 仓储物流"
    },
    {
        "id": 9,
        "file": "servo-driver.md",
        "title": "高性能伺服驱动器",
        "content": "<h1>高性能伺服驱动器</h1></p><p><img src=\"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600\" alt=\"伺服驱动器\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品概述</h2></p><p>高性能伺服驱动器是我们公司的核心产品之一，采用先进的控制算法和硬件设计，为用户提供卓越的动态响应和精确控制能力。</p><p><h2>主要特点</h2></p><p>- <strong>高精度控制</strong>：定位精度可达±0.01°，满足精密加工需求<br>- <strong>快速响应</strong>：响应时间小于1ms，实现高速运动控制<br>- <strong>多种控制模式</strong>：支持位置控制、速度控制、扭矩控制等多种模式<br>- <strong>宽电压范围</strong>：支持AC 200-480V输入电压<br>- <strong>丰富的接口</strong>：支持脉冲、模拟量、CANopen、EtherCAT等多种通信接口</p><p><h2>技术参数</h2></p><p><img src=\"https://images.unsplash.com/photo-1563770557364-bdf2b1d6f706?w=600\" alt=\"伺服系统架构\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p>| 参数项 | 参数值 |<br>|--------|--------|<br>| 额定功率 | 0.2kW - 15kW |<br>| 控制方式 | PID控制、前馈控制 |<br>| 编码器分辨率 | 最高23位增量编码器 |<br>| 调制频率 | 20kHz - 50kHz |<br>| 防护等级 | IP54 |</p><p><h2>应用领域</h2></p><p>- 数控机床<br>- 机器人技术<br>- 包装机械<br>- 电子制造设备<br>- 半导体设备</p><p><h2>产品优势</h2></p><p>1. <strong>先进算法</strong>：采用自适应PID算法，自动优化控制参数<br>2. <strong>智能化</strong>：内置自诊断功能，实时监控设备状态<br>3. <strong>易调试</strong>：提供专业的调试软件，简化参数配置过程<br>4. <strong>高可靠性</strong>：严格的质量控制和老化测试确保产品稳定运行</p><p><h2>配套服务</h2></p><p>- 免费技术培训<br>- 一年质保服务<br>- 7×24小时技术支持<br>- 定制化开发服务</p><p><h2>订购信息</h2></p><p>如需了解更多产品信息或获取报价，请联系我们的销售团队。"
    },
    {
        "id": 10,
        "file": "stepper-driver.md",
        "title": "步进电机驱动器",
        "content": "<h1>步进电机驱动器</h1></p><p><img src=\"https://images.unsplash.com/photo-1580893246395-52aead8960dc?w=600\" alt=\"步进驱动器\" style=\"max-width:100%;height:auto;border-radius:8px;margin:20px 0;box-shadow:0 4px 6px rgba(0,0,0,0.1);\"></p><p><h2>产品概述</h2></p><p>步进电机驱动器专为高精度步进电机设计，采用先进的开环控制技术，适合需要精确定位和成本控制的应用场景。</p><p><h2>主要特点</h2></p><p>- <strong>高精度定位</strong>：最小步距角可达0.00125°（256细分）<br>- <strong>平滑运动</strong>：采用抗谐振技术，消除低速振动<br>- <strong>多种细分</strong>：支持1-256细分可选<br>- <strong>宽电压输入</strong>：DC 12-48V输入<br>- <strong>高可靠性</strong>：过流、过压、过热等多重保护</p><p><h2>技术参数</h2></p><p>| 参数项 | 参数值 |<br>|--------|--------|<br>| 驱动方式 | 恒流斩波驱动 |<br>| 细分设置 | 1-256细分可选 |<br>| 输入电压 | DC 12-48V |<br>| 输出电流 | 0.5-5A可调 |<br>| 通信接口 | 脉冲/方向、串口 |</p><p><h2>应用领域</h2></p><p>- 3D打印机<br>- 雕刻机<br>- 数控机床<br>- 纺织机械<br>- 包装设备"
    }
];

// 获取URL参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 加载产品内容 - 从md文件加载
async function loadProductContent(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return null;

    try {
        const response = await fetch('products/' + product.file);
        if (!response.ok) throw new Error('Failed to load file');
        const content = await response.text();
        return {
            product: product,
            content: content
        };
    } catch (error) {
        console.error('Error loading product content:', error);
        return {
            product: product,
            content: '# 内容加载失败\n\n无法加载产品详情，请刷新页面重试。'
        };
    }
}

// 加载新闻内容 - 从md文件加载
async function loadNewsContent(newsId) {
    const newsItem = news.find(n => n.id === parseInt(newsId));
    if (!newsItem) return null;

    try {
        const response = await fetch('news/' + newsItem.file);
        if (!response.ok) throw new Error('Failed to load file');
        const content = await response.text();
        return {
            news: newsItem,
            content: content
        };
    } catch (error) {
        console.error('Error loading news content:', error);
        return {
            news: newsItem,
            content: '# 内容加载失败\n\n无法加载新闻详情，请刷新页面重试。'
        };
    }
}

// 渲染Markdown内容
function renderMarkdown(content) {
    if (typeof marked !== 'undefined') {
        return marked.parse(content);
    } else {
        // 简单的markdown转换（如果没有marked库）
        return content
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            .replace(/\n/gim, '<br>');
    }
}

// 导出数据
window.motionControlData = {
    products: products,
    news: news,
    loadProductContent: loadProductContent,
    loadNewsContent: loadNewsContent,
    renderMarkdown: renderMarkdown
};

console.log('数据加载器已加载（内嵌版本）');
console.log('产品数量:', products.length);
console.log('新闻数量:', news.length);
