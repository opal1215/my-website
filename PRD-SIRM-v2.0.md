PRD-SIRM v2.0 · Social Image Recipe Machine

一句话：把一张图，按各平台“配方”（比例/像素/安全区/格式）一键产出多张成品；前期免费纯前端工具 + Tasks（动作词）/Guides（信息词） 内容引流；Vercel 部署；AdSense 变现；后续升级 AI Pro（智能构图/去背/品牌模板/批量 100 张）。

⸻

0. 背景 & 目标（Why → What）
•用户痛点：不同平台图片规格/比例/安全区复杂，手工裁剪耗时易错，发图常被裁切或发糊。
•机会点：搜索里“任务型需求（resizer/generator）”转化高；AI 搜索与问答越来越倾向于引用结构化、对话式、答案先行的内容。
•产品目标（MVP）：
1.上线图片配方机（上传→选配方→导出；多配方 ZIP 批量、隐私本地处理）；
2.建立Tasks/Guides 两大内容引擎，全部深链接回工具页；
3.在 Vercel 部署，并完成 AdSense + ads.txt + CMP 合规。
•北极星指标：SU/UV ≥ 0.6（7 日，导出成功数 / 独立访客）。
•阶段目标：首月完成 1 工具页 + 3 任务页 + 5 指南页，上线 AdSense，GSC 索引与初始曝光跑通。

⸻

1. 作用对象（谁会用）
•创作者/小团队运营：一键产出 IG/X/TikTok/YT 合规图。
•电商店主：产品图批量适配平台规范。
•内容编辑/设计新手：查询“最新尺寸/安全区”，并直接一键成品。

⸻

2. 版本范围（Scope）

v1.0（MVP，4–7 天）
•工具页：/tools/image-resizer/（比例裁剪、重采样、JPEG/WebP/PNG/AVIF 导出、多配方 ZIP）。
•内容：
•Tasks：/tasks/1080x1350-resizer/、/tasks/1280x720-youtube-thumb/、/tasks/1200x628-twitter-card/
•Guides：/guides/social-image-sizes-2025/、/guides/instagram-4-5-size/、/guides/x-card-1200x628/、/guides/linkedin-1584x396-banner/、（+1 平台 Hub 或另选）
•基础设施：Vercel 上线、域名、sitemap.xml、robots.txt、GSC 提交、隐私/条款/About。
•变现：AdSense 申请与 Auto Ads；根目录 ads.txt；EEA/UK/CH CMP。

v1.1（体验 & 内容）
•PWA（离线可用）、模板区（PNG/Canva 示例）、更多配方。
•CTR 迭代框架（每两周一轮）；语义覆盖矩阵常态化。

v1.2（Pro 收费）
•AI 智能构图（人脸/主体对齐）、去背景、品牌模板、批量 100 张；定价 $9–12/月或 $29/年早鸟。

⸻

3. 信息架构（IA）与流动性

/
├─ tools/
│  └─ image-resizer/       # 主工具（支持 ?recipe=ig-portrait 等深链接）
├─ tasks/                  # 动作词页（高转化）
│  ├─ 1080x1350-resizer/
│  ├─ 1280x720-youtube-thumb/
│  └─ 1200x628-twitter-card/
├─ guides/                 # 信息词指南（高流量）
│  ├─ social-image-sizes-2025/
│  ├─ instagram-4-5-size/
│  ├─ x-card-1200x628/
│  └─ linkedin-1584x396-banner/
├─ guides/<platform>/      # 平台 Hub（可选）
├─ templates/              # 模板下载/示例
├─ pricing/  ├─ changelog/  ├─ about/  ├─ privacy/  ├─ terms/
└─ sitemap.xml  robots.txt

内链规则：
•指南 → 任务（动作锚文本） → 工具（解决方案锚文本）
•任务 ↔ 任务（同簇互链） & 任务 → 工具（深链接 ?recipe=）
•工具 → 指南（学习锚文本） & 热门任务

⸻

4. 内容与 SEO 方法论（把“关键词”进化为“实体/语义覆盖”）

4.1 实体地图（Entity Map）
•平台实体（IG/X/TikTok/YT/LinkedIn/Pinterest/FB/Reddit/OG）
•规格实体（比例 1:1/4:5/3:4/16:9/9:16/2:1/1.91:1，像素 1080×1350/1280×720/1200×628…，格式 JPEG/WebP/PNG/AVIF，色彩 sRGB，安全区等）
•动作实体（resize/crop/convert/compress/export/batch/template）
•体验实体（模糊/被裁/遮挡/CWV/EXIF/隐私本地）

产出一张实体→页面映射表（见附录模板 T1）。

4.2 SERP 语义差距（Top10 采掘）
•为每个目标主题抓 Top10 的 H2/H3 与 PAA 问题，形成覆盖矩阵（见附件 T2）。
•覆盖率目标：任务页 ≥80%、指南页 ≥90%。

4.3 标题体例（AI 可引用友好）
•对话式 H1 + 30 秒速答块（问题→速答→步骤→CTA），并在正文给出 HowTo/FAQ 结构。
•所有页面使用 JSON-LD：FAQ/HowTo（任务/指南），SoftwareApplication（工具）。
•每文 10–15 个“语义标签”（可能的提问角度），图片/动图加场景 ALT（例如“LinkedIn 职业头像安全区示例：… …”）。

4.4 北极星与闭环
•SU/UV、任务→工具 CTR、页面 CTR（GSC）、CWV、AdSense RPM。
•每两周做一次 Title/Meta CTR 迭代（倒数 20 页 A/B）。

⸻

5. 页面类型（内容与版式规范）

5.1 任务页（/tasks/…）
•H1（对话式）：把图片一键转成 {像素}（{平台/比例}）：3 步不糊不裁错
•首屏 30 秒速答：一句答案 + 三个要点 + “立即转换”按钮（深链接到工具）
•一屏速查：比例/像素/推荐格式/体积建议/质量范围
•HowTo（3–5 步） + 动图（60 秒）
•FAQ（来自 PAA）：模糊/裁切/遮挡/格式/质量
•相关任务互链（同簇 2–3） + 平台指南链接
•结构化数据：FAQPage + HowTo

5.2 指南页（/guides/…）
•H1：{年份} {平台} 图片尺寸全解（含 {比例/像素}）
•一屏速查表（可下载） + 安全区图示
•正误对比（被遮挡/发糊 vs 正例）
•简要流程 + CTA（深链接到工具/任务）
•FAQ + 参考 & “最后更新”日期
•结构化数据：BlogPosting + FAQPage

5.3 工具页（/tools/image-resizer/）
•平台 Tabs + 热门配方卡片
•侧栏：相关指南/任务
•页尾：FAQ（本地处理/EXIF/格式/质量说明）
•结构化数据：SoftwareApplication（offers: Free） + FAQPage

⸻

6. 合规与变现
•AdSense：Sites 添加域名，优先 Auto Ads；文章页可 A/B 手动单元。
•ads.txt：根目录：google.com, pub-XXXXXXXXXXXX, DIRECT（准备就绪）。
•CMP（EEA/UK/CH）：弹窗同意后再出个性化广告；拒绝路径也能正常访问。
•隐私：图片本地处理、不上传；清除 EXIF；隐私/条款页清晰说明。

⸻

7. 部署与可见（Vercel / GSC）
•Vercel：连接仓库→生产域名→HTTPS；开启预览环境。
•Sitemap/Robots：自动生成并在 robots 中声明 Sitemap；GSC 提交站点与地图。
•观测：索引量/展示量；关键 URL 逐步“请求索引”。

⸻

8. 验收标准（Definition of Done）
•工具页可在移动端顺畅完成一次导出（≤30s），多配方 ZIP 正常。
•上线 3 任务 + 5 指南，内链与深链接正确。
•GSC 已收录并开始有展示；AdSense 审核通过并能展示；ads.txt 可访问。
•Lighthouse ≥90（Perf/Best/SEO），CWV 达标（LCP<2.5s、CLS<0.1、INP<200ms）。
•SU/UV≥0.6 的趋势可见（或有初始导出转化数据）。

⸻

执行清单（Checklist v2.0 · 超细颗粒）

建议复制为 Checklist-v2.0.md，按周推进；每条完成就 ✅。

A. 立项与命名
•一句话价值确定（首页 Hero 用语）
•站名/域名确定；导航：Tools/Tasks/Guides/Templates/Pricing/Changelog/About
•平台清单与recipes 表头（id/label/ratio/width/height/longSide/safe）

B. 语义与竞争（实体法）
•建立 实体地图（平台/规格/动作/体验/商业）
•为首批主题做 Top10 SERP 采掘（H2/H3/PAA）
•形成 语义覆盖矩阵（任务≥80%，指南≥90%）
•机会打分（Intent × Monetization × Gap × Volume × 1/Difficulty）
•定首发：3 任务 + 5 指南

C. 信息架构与内链
•IA 目录就绪（tools/tasks/guides/templates/pricing/changelog）
•任务簇互链：每个任务 → 同簇 2–3 个
•指南 → 任务（动作锚文本） → 工具（深链接）
•工具 → 指南/任务（学习/操作锚文本）

D. 文案体例（AI 引用友好）
•所有任务/指南：对话式 H1 + 30 秒速答块
•每文 10–15 条语义标签；动图演示（60s）；图片场景 ALT
•FAQ 来自 PAA；HowTo 三步清晰
•结构化：任务/指南 FAQ + HowTo；工具 SoftwareApplication + FAQ
•Title/Meta/ALT/面包屑/OG 完成

E. 首发内容（落地）
•/tasks/1080x1350-resizer/（IG 4:5）
•/tasks/1280x720-youtube-thumb/
•/tasks/1200x628-twitter-card/
•/guides/social-image-sizes-2025/
•/guides/instagram-4-5-size/
•/guides/x-card-1200x628/
•/guides/linkedin-1584x396-banner/
•每页检查覆盖矩阵、结构化、内链、深链接

F. 工具页 MVP（内容与体验）
•/tools/image-resizer/ 文案与布局（平台 Tab、热门配方卡、侧栏相关文章、FAQ）
•深链接 ?recipe= 路由规则（文案中提前说明“已选配方”）
•移动端“上传→选择→导出”≤3 步可达成
•FAQ：本地处理/EXIF/格式/质量与体积建议

G. Vercel & 可见性
•绑定自有域名（根域→www 跳转或相反，统一）
•生产与预览环境可访问
•自动 sitemap.xml/robots.txt；GSC 添加站点并提交地图
•关键 URL“请求索引”

H. 合规与广告
•about/、privacy/、terms/ 上线（隐私：本地处理、不上传；第三方统计/广告说明）
•AdSense 后台添加站点，审核通过
•开启 Auto Ads；文章页尝试 1 个手动版位（A/B）
•根目录 ads.txt 生效（浏览器可访问）
•CMP（EEA/UK/CH）：同意弹窗 & 记录；拒绝路径正常

I. 指标与分析（数据闭环）
•事件：tool_upload、recipe_select、tool_export、task_to_tool_click、guide_to_tool_click
•北极星：SU/UV（7 日）
•页面 CTR（GSC），任务/指南 → 工具 CTR
•CWV（LCP/CLS/INP）
•AdSense：RPM/页面类型、Auto vs 手动

J. 迭代节奏
•两周一次 CTR 迭代：挑 CTR 倒数 20 页，改 Title/Meta（2 版），记录前后
•实体更新：平台规格变动 → 改 recipes + 更新指南“最后更新”日期
•每周发布：1 任务 + 1 指南；内链与深链接审查
•每月复盘：Top/Bottom（SU/UV、CTR、RPM），只改 1 个变量做实验

K. 风险预案
•收录慢：查 noindex/robots/sitemap，必要时“请求索引”
•广告不出：审核状态/ads.txt/CMP 同意
•性能差：压缩资源、减少阻塞、首屏尺寸优化
•移动端崩：提示先降低长边再试（文案与 FAQ 说明）

⸻

附录：模板与范式（交给 Codex 也能看懂）

T1｜实体→页面映射（CSV 列）

entity, entity_type(platform/spec/action/experience/business), user_question, page_type(task/guide/tool), target_url, interlinks(up/down), coverage_status, note

T2｜语义覆盖矩阵（每主题一张）

subtopic_or_question, intent(info/task), freq_in_top10, our_placement(H2/H3/FAQ/HowTo), status(done/todo), note

T3｜Title/Meta 范式
•任务 Title（三选一）
1.把图片转成 {像素}（{平台/比例}）｜在线裁剪导出，ZIP 批量
2.{像素} 一键生成（{平台/比例}）｜清晰不糊，安全区对齐
3.{平台} {比例/像素} 转换器｜三步完成，支持 WebP/JPEG
•任务 Meta（二选一）
1.上传图片，选择 {平台/比例} 配方，秒出 {像素} 成品；本地处理更私密，支持批量 ZIP。
2.适配 {平台} {比例/像素}，附安全区与清晰度建议；一键导出 JPEG/WebP。
•指南 Title：{年份} {平台} 图片尺寸（含 {比例/像素}）全解｜模板+安全区
•工具 Title：图片尺寸转换器｜一张图适配 IG/X/TikTok/YouTube（本地处理）

T4｜FAQ 题库（可复用）
•为什么导出后变糊？（质量/重采样解释）
•发到 {平台} 为什么被裁掉？（比例与自动裁剪）
•文案总被遮挡怎么办？（安全区）
•用 JPEG 还是 WebP？（对比与场景）
•如何批量导出并命名？（ZIP 与命名规则）
•隐私如何保证？（本地处理/去 EXIF）

T5｜recipes（示例最小集）

ig-portrait: 4:5 → 1080×1350
ig-3x4: 3:4 → 1080×1440
story-916: 9:16 → 1080×1920
x-card: 2:1 → 1200×628（或 1200×600）
yt-thumb: 16:9 → 1280×720
li-banner: 4:1 → 1584×396
pin-standard: 2:3 → 1000×1500
fb-cover: 固定 851×315
og: 1.91:1 → 1200×630

T6｜上线前“发布检查表”（每页必过）
•覆盖矩阵达标（任务≥80%，指南≥90%）
•Title/H1/H2/H3/Meta/ALT/FAQ/HowTo 填好
•顶部 30 秒速答块 + CTA（深链接）
•与同簇/平台 Hub/工具的内链正确
•结构化数据校验通过（Rich Results Test）
•移动端可读性，首屏加载，跳转无阻

⸻

最后一页：给 Codex 的执行顺序（无技术细节版）
1.建站骨架（首页、tools/tasks/guides、合规模块、sitemap/robots）。
2.写好 3 任务 + 5 指南 文案，按上面版式与模板落地，填 FAQ/HowTo/语义标签/ALT；互链与深链接完成。
3.recipes 最小集列出，文案中出现的尺寸/比例与 recipes 保持一致。
4.Vercel 部署、域名、GSC 提交；AdSense 添加站点、根目录 ads.txt、CMP。
5.观测指标（SU/UV、CTR、CWV、RPM）；两周一次 CTR 迭代；每周加 1 任务 + 1 指南。

⸻
