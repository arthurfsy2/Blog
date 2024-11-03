# 部署项目

pnpm create vuepress-theme-hope blog2

# 更新项目

pnpm dlx vp-update

# 安装依赖
```md
pnpm add -D vuepress/utils
pnpm add -D @vuepress/plugin-docsearch@next
pnpm add -D @waline/client
pnpm add -D echarts
pnpm add -D mermaid
pnpm add -D katex
pnpm add -D @vue/repl
pnpm add -D echarts-wordcloud
pnpm add -D vuepress-plugin-comment2
pnpm add -D vuepress-plugin-md-enhance
pnpm add -D vuepress-plugin-components
pnpm add -D vidstack@next
pnpm add -D markmap-lib markmap-toolbar markmap-view
```
# 运行项目

pnpm run docs:dev

# 还原项目
先回滚 pnpm-lock.yml、package.json 版本然后 dedupe

pnpm dedupe
