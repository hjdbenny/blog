import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as r,c as t,b as e,a as s,d,e as i}from"./app.a590706d.js";const v={},u=d(`<h2 id="_1-\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_1-\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a> 1.\u521D\u59CB\u5316\u9879\u76EE</h2><h3 id="\u6309\u6B65\u9AA4\u63D0\u793A\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u6309\u6B65\u9AA4\u63D0\u793A\u521D\u59CB\u5316" aria-hidden="true">#</a> \u6309\u6B65\u9AA4\u63D0\u793A\u521D\u59CB\u5316\uFF1A</h3><p>1.\u4F7F\u7528 <code>vite-cli</code> \u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># npm
npm init vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u8F93\u5165\u9879\u76EE\u540D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Project name:  vite-vue3-ts-pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.\u9009\u62E9\u4E00\u4E2A\u6846\u67B6\uFF08vue\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Select a framework: \xBB - Use arrow-keys. Return to submit.
     vanilla // \u539F\u751Fjs
 &gt;   vue     // \u9ED8\u8BA4\u5C31\u662F vue3
     react   // react
     preact  // \u8F7B\u91CF\u5316react\u6846\u67B6
     lit     // \u8F7B\u91CF\u7EA7web\u7EC4\u4EF6
     svelte  // svelte\u6846\u67B6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u4F7F\u7528 <code>typescript</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Select a variant: \u203A - Use arrow-keys. Return to submit.
     vue
 \u276F   vue-ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.\u542F\u52A8\u9879\u76EE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd vite-vue3-ts-pinia &amp;&amp; pnpm install &amp;&amp; pnpm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u96C6\u6210\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210\u914D\u7F6E" aria-hidden="true">#</a> \u96C6\u6210\u914D\u7F6E</h3><p>1.\u4E3A\u4FDD\u8BC1 <code>node</code> \u7684\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i @types/node --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.\u4FEE\u6539 <code>tsconfig.json</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;compilerOptions&quot;: {
    &quot;typeRoots&quot;: [
      &quot;node_modules/@types&quot;, // \u9ED8\u8BA4\u503C
      &quot;src/types&quot;
   ],
    &quot;target&quot;: &quot;esnext&quot;,
    &quot;useDefineForClassFields&quot;: true,
    &quot;module&quot;: &quot;esnext&quot;,
    &quot;moduleResolution&quot;: &quot;node&quot;,
    &quot;strict&quot;: true,
    &quot;jsx&quot;: &quot;preserve&quot;,
    &quot;sourceMap&quot;: true,
    &quot;resolveJsonModule&quot;: true,
    &quot;esModuleInterop&quot;: true,
    &quot;lib&quot;: [&quot;esnext&quot;, &quot;dom&quot;],
    &quot;baseUrl&quot;: &quot;./&quot;,
    &quot;paths&quot;:{
      &quot;@&quot;: [&quot;src&quot;],
      &quot;@/*&quot;: [&quot;src/*&quot;],
    }
  },
  &quot;include&quot;: [&quot;src/**/*.ts&quot;, &quot;src/**/*.d.ts&quot;, &quot;src/**/*.tsx&quot;, &quot;src/**/*.vue&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u4FEE\u6539 <code>vite.config.ts</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { defineConfig } from &#39;vite&#39;;
import vue from &#39;@vitejs/plugin-vue&#39;;
import * as path from &#39;path&#39;;

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //\u8BBE\u7F6E\u522B\u540D
        alias: {
            &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)
        }
    },
    plugins: [vue()],
    server: {
        port: 8080, //\u542F\u52A8\u7AEF\u53E3
        hmr: {
            host: &#39;127.0.0.1&#39;,
            port: 8080
        },
        // \u8BBE\u7F6E https \u4EE3\u7406
        proxy: {
            &#39;/api&#39;: {
                target: &#39;your https address&#39;,
                changeOrigin: true,
                rewrite: (path: string) =&gt; path.replace(/^\\/api/, &#39;&#39;)
            }
        }
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u4EE3\u7801\u8D28\u91CF\u98CE\u683C\u7684\u7EDF\u4E00" tabindex="-1"><a class="header-anchor" href="#_2-\u4EE3\u7801\u8D28\u91CF\u98CE\u683C\u7684\u7EDF\u4E00" aria-hidden="true">#</a> 2. \u4EE3\u7801\u8D28\u91CF\u98CE\u683C\u7684\u7EDF\u4E00</h2><h3 id="\u96C6\u6210-eslint" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210-eslint" aria-hidden="true">#</a> \u96C6\u6210 <code>eslint</code></h3><p>1.\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install @typescript-eslint/parser --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5BF9\u5E94\u7684\u63D2\u4EF6 @typescript-eslint/eslint-plugin \u5B83\u4F5C\u4E3A eslint \u9ED8\u8BA4\u89C4\u5219\u7684\u8865\u5145\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E9B\u989D\u5916\u7684\u9002\u7528\u4E8E ts \u8BED\u6CD5\u7684\u89C4\u5219\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install @typescript-eslint/eslint-plugin --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6\uFF1A <code>.eslintrc.js</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    parser: &#39;vue-eslint-parser&#39;,

    parserOptions: {
        parser: &#39;@typescript-eslint/parser&#39;,
        ecmaVersion: 2020,
        sourceType: &#39;module&#39;,
        ecmaFeatures: {
            jsx: true
        }
    },

    extends: [
        &#39;plugin:vue/vue3-recommended&#39;,
        &#39;plugin:@typescript-eslint/recommended&#39;,
    ],

    rules: {
        // override/add rules settings here, such as:
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u521B\u5EFA\u5FFD\u7565\u6587\u4EF6\uFF1A<code>.eslintignore</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>node_modules/
dist/
index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u547D\u4EE4\u884C\u5F0F\u8FD0\u884C\uFF1A\u4FEE\u6539 <code>package.json</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    ...
    &quot;scripts&quot;: {
        ...
        &quot;eslint:comment&quot;: &quot;\u4F7F\u7528 ESLint \u68C0\u67E5\u5E76\u81EA\u52A8\u4FEE\u590D src \u76EE\u5F55\u4E0B\u6240\u6709\u6269\u5C55\u540D\u4E3A .js \u548C .vue \u7684\u6587\u4EF6&quot;,
        &quot;eslint&quot;: &quot;eslint --ext .js,.vue --ignore-path .gitignore --fix src&quot;,
    }
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u96C6\u6210-prettier" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210-prettier" aria-hidden="true">#</a> \u96C6\u6210 <code>prettier</code></h3><p>1.\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6\uFF1A <code>prettier.config.js</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    // \u4E00\u884C\u6700\u591A 80 \u5B57\u7B26
    printWidth: 80,
    // \u4F7F\u7528 4 \u4E2A\u7A7A\u683C\u7F29\u8FDB
    tabWidth: 4,
    // \u4E0D\u4F7F\u7528 tab \u7F29\u8FDB\uFF0C\u800C\u4F7F\u7528\u7A7A\u683C
    useTabs: false,
    // \u884C\u5C3E\u9700\u8981\u6709\u5206\u53F7
    semi: true,
    // \u4F7F\u7528\u5355\u5F15\u53F7\u4EE3\u66FF\u53CC\u5F15\u53F7
    singleQuote: true,
    // \u5BF9\u8C61\u7684 key \u4EC5\u5728\u5FC5\u8981\u65F6\u7528\u5F15\u53F7
    quoteProps: &#39;as-needed&#39;,
    // jsx \u4E0D\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u800C\u4F7F\u7528\u53CC\u5F15\u53F7
    jsxSingleQuote: false,
    // \u672B\u5C3E\u4F7F\u7528\u9017\u53F7
    trailingComma: &#39;all&#39;,
    // \u5927\u62EC\u53F7\u5185\u7684\u9996\u5C3E\u9700\u8981\u7A7A\u683C { foo: bar }
    bracketSpacing: true,
    // jsx \u6807\u7B7E\u7684\u53CD\u5C16\u62EC\u53F7\u9700\u8981\u6362\u884C
    jsxBracketSameLine: false,
    // \u7BAD\u5934\u51FD\u6570\uFF0C\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u4E5F\u9700\u8981\u62EC\u53F7
    arrowParens: &#39;always&#39;,
    // \u6BCF\u4E2A\u6587\u4EF6\u683C\u5F0F\u5316\u7684\u8303\u56F4\u662F\u6587\u4EF6\u7684\u5168\u90E8\u5185\u5BB9
    rangeStart: 0,
    rangeEnd: Infinity,
    // \u4E0D\u9700\u8981\u5199\u6587\u4EF6\u5F00\u5934\u7684 @prettier
    requirePragma: false,
    // \u4E0D\u9700\u8981\u81EA\u52A8\u5728\u6587\u4EF6\u5F00\u5934\u63D2\u5165 @prettier
    insertPragma: false,
    // \u4F7F\u7528\u9ED8\u8BA4\u7684\u6298\u884C\u6807\u51C6
    proseWrap: &#39;preserve&#39;,
    // \u6839\u636E\u663E\u793A\u6837\u5F0F\u51B3\u5B9A html \u8981\u4E0D\u8981\u6298\u884C
    htmlWhitespaceSensitivity: &#39;css&#39;,
    // \u6362\u884C\u7B26\u4F7F\u7528 lf
    endOfLine: &#39;auto&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u4FEE\u6539 <code>.eslintrc.js</code> \u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    ...

    extends: [
        &#39;plugin:vue/vue3-recommended&#39;,
        &#39;plugin:@typescript-eslint/recommended&#39;,
        &#39;prettier&#39;,
        &#39;plugin:prettier/recommended&#39;
    ],

    ...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u547D\u4EE4\u884C\u5F0F\u8FD0\u884C\uFF1A\u4FEE\u6539 <code>package.json</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    ...
    &quot;scripts&quot;: {
        ...
        &quot;prettier:comment&quot;: &quot;\u81EA\u52A8\u683C\u5F0F\u5316\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6&quot;,
        &quot;prettier&quot;: &quot;prettier --write&quot;
    }
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u96C6\u6210-pinia" tabindex="-1"><a class="header-anchor" href="#_3-\u96C6\u6210-pinia" aria-hidden="true">#</a> 3.\u96C6\u6210 <code>pinia</code></h2><p>Pinia \u6709\u5982\u4E0B\u7279\u70B9\uFF1A</p><ul><li>\u5B8C\u6574\u7684 typescript \u7684\u652F\u6301\uFF1B</li><li>\u8DB3\u591F\u8F7B\u91CF\uFF0C\u538B\u7F29\u540E\u7684\u4F53\u79EF\u53EA\u6709 1.6kb;</li><li>\u53BB\u9664 mutations\uFF0C\u53EA\u6709 state\uFF0Cgetters\uFF0Cactions\uFF08\u8FD9\u662F\u6211\u6700\u559C\u6B22\u7684\u4E00\u4E2A\u7279\u70B9\uFF09\uFF1B</li><li>actions \u652F\u6301\u540C\u6B65\u548C\u5F02\u6B65\uFF1B</li><li>\u6CA1\u6709\u6A21\u5757\u5D4C\u5957\uFF0C\u53EA\u6709 store \u7684\u6982\u5FF5\uFF0Cstore \u4E4B\u95F4\u53EF\u4EE5\u81EA\u7531\u4F7F\u7528\uFF0C\u66F4\u597D\u7684\u4EE3\u7801\u5206\u5272\uFF1B</li><li>\u65E0\u9700\u624B\u52A8\u6DFB\u52A0 store\uFF0Cstore \u4E00\u65E6\u521B\u5EFA\u4FBF\u4F1A\u81EA\u52A8\u6DFB\u52A0\uFF1B</li></ul><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i pinia --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>1.\u65B0\u5EFA <code>src/store</code> \u76EE\u5F55\u5E76\u5728\u5176\u4E0B\u9762\u521B\u5EFA <code>index.ts</code>\uFF0C\u5BFC\u51FA <code>store</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> import { createPinia } from &#39;pinia&#39;

 const store = createPinia()

 export default store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u5728 <code>main.ts</code> \u4E2D\u5F15\u5165\u5E76\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> import { createApp } from &#39;vue&#39;
 import App from &#39;./App.vue&#39;
 import store from &#39;./store&#39;
 \u200B
 // \u521B\u5EFAvue\u5B9E\u4F8B
 const app = createApp(App)
 \u200B
 // \u6302\u8F7Dpinia
 app.use(store)
 \u200B
 // \u6302\u8F7D\u5B9E\u4F8B
 app.mount(&#39;#app&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u5B9A\u4E49 State\uFF1A \u5728 <code>src/store</code> \u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A <code>user.ts</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> import { defineStore } from &#39;pinia&#39;

 export const useUserStore = defineStore({
   id: &#39;user&#39;, // id\u5FC5\u586B\uFF0C\u4E14\u9700\u8981\u552F\u4E00
   state: () =&gt; {
     return {
       name: &#39;\u5F20\u4E09&#39;
     }
   },
   actions: {
     updateName(name) {
       this.name = name
     }
   }
 })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u83B7\u53D6 State\uFF1A \u5728 <code>src/components/usePinia.vue</code> \u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;template&gt;
   &lt;div&gt;{{ userStore.name }}&lt;/div&gt;
 &lt;/template&gt;

 &lt;script lang=&quot;ts&quot; setup&gt;
 import { useUserStore } from &#39;@/store/user&#39;

 const userStore = useUserStore()
 userStore.updateName(&#39;\u674E\u56DB&#39;)
 &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54),c={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"\u63D0\u793A",-1),o=i("\u66F4\u8BE6\u7EC6\u4E0A\u624B\u6307\u5357\uFF1A"),b={href:"https://juejin.cn/post/7049196967770980389",target:"_blank",rel:"noopener noreferrer"},p=i("\u94FE\u63A5"),g=i(" \u5B98\u65B9\u6587\u6863\uFF1A"),h={href:"https://pinia.vuejs.org/introduction.html",target:"_blank",rel:"noopener noreferrer"},x=i("\u94FE\u63A5"),q=d(`<h2 id="\u96C6\u6210-vue-router4" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210-vue-router4" aria-hidden="true">#</a> \u96C6\u6210 <code>vue-router4</code></h2><h3 id="\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i vue-router --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-1" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>1.\u65B0\u5EFA <code>src/router</code> \u76EE\u5F55\u5E76\u5728\u5176\u4E0B\u9762\u521B\u5EFA <code>index.ts</code>\uFF0C\u5BFC\u51FA r<code>outer</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> import { createRouter, createWebHistory, RouteRecordRaw } from &#39;vue-router&#39;;

 const routes: Array&lt;RouteRecordRaw&gt; = [
   {
     path: &#39;/login&#39;,
     name: &#39;Login&#39;,
     meta: {
         title: &#39;\u767B\u5F55&#39;,
         keepAlive: true,
         requireAuth: false
     },
     component: () =&gt; import(&#39;@/pages/login.vue&#39;)
   },
   {
       path: &#39;/&#39;,
       name: &#39;Index&#39;,
       meta: {
           title: &#39;\u9996\u9875&#39;,
           keepAlive: true,
           requireAuth: true
       },
       component: () =&gt; import(&#39;@/pages/index.vue&#39;)
   }
 ]

 const router = createRouter({
   history: createWebHistory(),
   routes
 });
 export default router;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u5728 <code>main.ts</code> \u4E2D\u5F15\u5165\u5E76\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> import { createApp } from &#39;vue&#39;
 import App from &#39;./App.vue&#39;
 import store from &#39;./store&#39;
 import router from &#39;@/router&#39;;

 // \u521B\u5EFAvue\u5B9E\u4F8B
 const app = createApp(App);

 app.use(router);

 // \u6302\u8F7D\u5B9E\u4F8B
 app.mount(&#39;#app&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u4FEE\u6539 <code>App.vue</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;template&gt;
   &lt;RouterView/&gt;
 &lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u96C6\u6210-vueuse" tabindex="-1"><a class="header-anchor" href="#_5-\u96C6\u6210-vueuse" aria-hidden="true">#</a> 5. \u96C6\u6210 <code>vueuse</code></h2><p><code>VueUse</code> \u662F\u4E00\u4E2A\u57FA\u4E8E Composition API \u7684\u5B9E\u7528\u51FD\u6570\u96C6\u5408</p><h3 id="\u5B89\u88C5-2" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-2" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i @vueuse/core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-2" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-2" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>src/page/vueUse.vue</code> \u9875\u9762\u6765\u505A\u4E00\u4E2A\u7B80\u5355\u7684 demo</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;template&gt;
   &lt;h1&gt; \u6D4B\u8BD5 vueUse \u7684\u9F20\u6807\u5750\u6807 &lt;/h1&gt;
   &lt;h3&gt;Mouse: {{x}} x {{y}}&lt;/h3&gt;
 &lt;/template&gt;

 &lt;script lang=&quot;ts&quot;&gt;
     import { defineComponent } from &#39;vue&#39;;
     import { useMouse } from &#39;@vueuse/core&#39;

     export default defineComponent({
         name: &#39;VueUse&#39;,
         setup() {
           const { x, y } = useMouse()

           return {
             x, y
           }
         }
     });
 &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useMouse \u53EA\u662F vueuse \u7684\u4E00\u4E2A\u6700\u57FA\u672C\u7684\u51FD\u6570\u5E93\uFF0C\u8FD8\u6709\u8BB8\u591A\uFF0C\u603B\u4F1A\u6709\u4E00\u4E2A\u9002\u5408\u4F60\uFF1B</p>`,18),f=i("\u66F4\u591A\u51FD\u6570\u5B98\u65B9\u6587\u6863\uFF1A"),y={href:"https://vueuse.org/",target:"_blank",rel:"noopener noreferrer"},_=i("\u94FE\u63A5"),j=d(`<h2 id="_6-scss-\u6216-less-\u7684\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#_6-scss-\u6216-less-\u7684\u96C6\u6210" aria-hidden="true">#</a> 6. scss \u6216 less \u7684\u96C6\u6210</h2><h3 id="\u5B89\u88C5-3" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-3" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> # .scss and .sass
 npm add -D sass

 # .less
 npm add -D less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u5728-vue-\u6587\u4EF6\u6A21\u677F\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5728-vue-\u6587\u4EF6\u6A21\u677F\u4E2D" aria-hidden="true">#</a> \u4F7F\u7528\u5728 .vue \u6587\u4EF6\u6A21\u677F\u4E2D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// .scss
 &lt;template&gt;
     &lt;div class=&quot;root&quot;&gt;
         &lt;h3&gt;\u6B22\u8FCE\u4F7F\u7528 scss&lt;/h3&gt;
     &lt;/div&gt;
 &lt;/template&gt;
 &lt;style lang=&quot;scss&quot;&gt;
   .root {}
 &lt;/style&gt;

// .less
 &lt;template&gt;
     &lt;div class=&quot;root&quot;&gt;
         &lt;h3&gt;\u6B22\u8FCE\u4F7F\u7528 less&lt;/h3&gt;
     &lt;/div&gt;
 &lt;/template&gt;
 &lt;style lang=&quot;less&quot;&gt;
   .root {}
 &lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u96C6\u6210-axios" tabindex="-1"><a class="header-anchor" href="#_7-\u96C6\u6210-axios" aria-hidden="true">#</a> 7.\u96C6\u6210 <code>axios</code></h2><p><code>axios</code> \u662F\u4E00\u4E2A\u57FA\u4E8E promise \u7684 HTTP \u5E93\uFF0C\u53EF\u4EE5\u7528\u5728\u6D4F\u89C8\u5668\u548C node.js \u4E2D</p><h3 id="\u5B89\u88C5-4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-4" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-3" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-3" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>1.\u65B0\u5EFA <code>src/utils/axios.ts</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> import axios, { AxiosResponse, AxiosRequestConfig } from &#39;axios&#39;;

 const service = axios.create();

 // Request interceptors
 service.interceptors.request.use(
     (config: AxiosRequestConfig) =&gt; {
         // do something
         return config;
     },
     (error: any) =&gt; {
         Promise.reject(error);
     }
 );

 // Response interceptors
 service.interceptors.response.use(
     async (response: AxiosResponse) =&gt; {
         // do something
     },
     (error: any) =&gt; {
         // do something
         return Promise.reject(error);
     }
 );

 export default service;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script lang=&quot;ts&quot;&gt;
    import request from &#39;@/utils/axios&#39;;
    const requestRes = async () =&gt; {
        let result = await request({
                    url: &#39;/api/xxx&#39;,
                    method: &#39;get&#39;
                  });
    }

&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C01\u88C5\u8BF7\u6C42\u53C2\u6570\u548C\u54CD\u5E94\u6570\u636E\u7684\u6240\u6709-api" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u8BF7\u6C42\u53C2\u6570\u548C\u54CD\u5E94\u6570\u636E\u7684\u6240\u6709-api" aria-hidden="true">#</a> \u5C01\u88C5\u8BF7\u6C42\u53C2\u6570\u548C\u54CD\u5E94\u6570\u636E\u7684\u6240\u6709 api</h3><p>1.\u65B0\u5EFA <code>src/api/index.ts</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import * as login from &#39;./module/login&#39;;
import * as index from &#39;./module/index&#39;;

export default Object.assign({}, login, index);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u65B0\u5EFA <code>src/api/module/login.ts</code> \u548C <code>src/api/module/index.ts</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import request from &#39;@/utils/axios&#39;;

/**
 * \u767B\u5F55
 */

interface IResponseType&lt;P = {}&gt; {
    code?: number;
    status: number;
    msg: string;
    data: P;
}
interface ILogin {
    token: string;
    expires: number;
}
export const login = (username: string, password: string) =&gt; {
    return request&lt;IResponseType&lt;ILogin&gt;&gt;({
        url: &#39;/api/auth/login&#39;,
        method: &#39;post&#39;,
        data: {
            username,
            password
        }
    });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u7531\u4E8E\u4F7F\u7528\u4E86 <code>typescript</code>\uFF0C\u6240\u4EE5\u9700\u65B0\u589E <code>src/types/shims-axios.d.ts</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { AxiosRequestConfig } from &#39;axios&#39;;
/**
 * \u81EA\u5B9A\u4E49\u6269\u5C55axios\u6A21\u5757
 * @author Maybe
 */
declare module &#39;axios&#39; {
    export interface AxiosInstance {
        &lt;T = any&gt;(config: AxiosRequestConfig): Promise&lt;T&gt;;
        request&lt;T = any&gt;(config: AxiosRequestConfig): Promise&lt;T&gt;;
        get&lt;T = any&gt;(url: string, config?: AxiosRequestConfig): Promise&lt;T&gt;;
        delete&lt;T = any&gt;(url: string, config?: AxiosRequestConfig): Promise&lt;T&gt;;
        head&lt;T = any&gt;(url: string, config?: AxiosRequestConfig): Promise&lt;T&gt;;
        post&lt;T = any&gt;(url: string, data?: any, config?: AxiosRequestConfig): Promise&lt;T&gt;;
        put&lt;T = any&gt;(url: string, data?: any, config?: AxiosRequestConfig): Promise&lt;T&gt;;
        patch&lt;T = any&gt;(url: string, data?: any, config?: AxiosRequestConfig): Promise&lt;T&gt;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u5728 <code>src/pages/request.vue</code> \u9875\u9762\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script lang=&quot;ts&quot;&gt;
    import API from &#39;@/api&#39;;

    const requestRes = async () =&gt; {
        let result = await API.login(&#39;zhangsan&#39;, &#39;123456&#39;);
    }

&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-css-\u7684-ui-\u6837\u5F0F\u5E93" tabindex="-1"><a class="header-anchor" href="#_8-css-\u7684-ui-\u6837\u5F0F\u5E93" aria-hidden="true">#</a> 8.css \u7684 UI \u6837\u5F0F\u5E93</h2><p>\u53EF\u9009\u5F88\u591A\uFF0C\u6839\u636E\u81EA\u5DF1\u9879\u76EE\u7684\u9700\u6C42\u53BB\u8FDB\u884C\u9009\u62E9\u5373\u53EF</p><p><strong>\u6CE8\u610F\uFF1AUI \u5E93\u4E00\u822C\u9700\u8981\u6309\u9700\u5F15\u5165</strong></p><h2 id="_9-\u4F7F\u7528-commitizen-\u89C4\u8303-git-\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#_9-\u4F7F\u7528-commitizen-\u89C4\u8303-git-\u63D0\u4EA4" aria-hidden="true">#</a> 9.\u4F7F\u7528 commitizen \u89C4\u8303 git \u63D0\u4EA4</h2><p>\u4E3A\u4E86\u4F7F\u56E2\u961F\u591A\u4EBA\u534F\u4F5C\u66F4\u52A0\u7684\u89C4\u8303\uFF0C\u6240\u4EE5\u9700\u8981\u6BCF\u6B21\u5728 git \u63D0\u4EA4\u7684\u65F6\u5019\uFF0C\u505A\u4E00\u6B21\u786C\u6027\u89C4\u8303\u63D0\u4EA4\uFF0C\u89C4\u8303 git \u7684\u63D0\u4EA4\u4FE1\u606F</p><h3 id="\u5B89\u88C5-commitizen-\u4EA4\u4E92\u5F0F\u63D0\u4EA4-\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u6848-commit-\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-commitizen-\u4EA4\u4E92\u5F0F\u63D0\u4EA4-\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u6848-commit-\u89C4\u8303" aria-hidden="true">#</a> \u5B89\u88C5 <code>commitizen</code> (\u4EA4\u4E92\u5F0F\u63D0\u4EA4 + \u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u6848 + Commit \u89C4\u8303)</h3><p>1.\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install -D commitizen cz-conventional-changelog @commitlint/config-conventional @commitlint/cli commitlint-config-cz cz-customizable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.\u914D\u7F6E <code>package.json</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  ...
  &quot;scripts&quot;: {
    &quot;commit:comment&quot;: &quot;\u5F15\u5BFC\u8BBE\u7F6E\u89C4\u8303\u5316\u7684\u63D0\u4EA4\u4FE1\u606F&quot;,
    &quot;commit&quot;:&quot;git-cz&quot;,
  },

  &quot;config&quot;: {
      &quot;commitizen&quot;: {
        &quot;path&quot;: &quot;node_modules/cz-customizable&quot;
      }
  },
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u65B0\u589E\u914D\u7F6E <code>commitlint.config.js</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    extends: [&#39;@commitlint/config-conventional&#39;, &#39;cz&#39;],
    rules: {
        &#39;type-enum&#39;: [
            2,
            &#39;always&#39;,
            [
                &#39;feature&#39;, // \u65B0\u529F\u80FD\uFF08feature\uFF09
                &#39;bug&#39;, // \u6B64\u9879\u7279\u522B\u9488\u5BF9bug\u53F7\uFF0C\u7528\u4E8E\u5411\u6D4B\u8BD5\u53CD\u9988bug\u5217\u8868\u7684bug\u4FEE\u6539\u60C5\u51B5
                &#39;fix&#39;, // \u4FEE\u8865bug
                &#39;ui&#39;, // \u66F4\u65B0 ui
                &#39;docs&#39;, // \u6587\u6863\uFF08documentation\uFF09
                &#39;style&#39;, // \u683C\u5F0F\uFF08\u4E0D\u5F71\u54CD\u4EE3\u7801\u8FD0\u884C\u7684\u53D8\u52A8\uFF09
                &#39;perf&#39;, // \u6027\u80FD\u4F18\u5316
                &#39;release&#39;, // \u53D1\u5E03
                &#39;deploy&#39;, // \u90E8\u7F72
                &#39;refactor&#39;, // \u91CD\u6784\uFF08\u5373\u4E0D\u662F\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u4E0D\u662F\u4FEE\u6539bug\u7684\u4EE3\u7801\u53D8\u52A8\uFF09
                &#39;test&#39;, // \u589E\u52A0\u6D4B\u8BD5
                &#39;chore&#39;, // \u6784\u5EFA\u8FC7\u7A0B\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8
                &#39;revert&#39;, // feat(pencil): add \u2018graphiteWidth\u2019 option (\u64A4\u9500\u4E4B\u524D\u7684commit)
                &#39;merge&#39;, // \u5408\u5E76\u5206\u652F\uFF0C \u4F8B\u5982\uFF1A merge\uFF08\u524D\u7AEF\u9875\u9762\uFF09\uFF1A feature-xxxx\u4FEE\u6539\u7EBF\u7A0B\u5730\u5740
                &#39;build&#39;, // \u6253\u5305
            ],
        ],
        // &lt;type&gt; \u683C\u5F0F \u5C0F\u5199
        &#39;type-case&#39;: [2, &#39;always&#39;, &#39;lower-case&#39;],
        // &lt;type&gt; \u4E0D\u80FD\u4E3A\u7A7A
        &#39;type-empty&#39;: [2, &#39;never&#39;],
        // &lt;scope&gt; \u8303\u56F4\u4E0D\u80FD\u4E3A\u7A7A
        &#39;scope-empty&#39;: [2, &#39;never&#39;],
        // &lt;scope&gt; \u8303\u56F4\u683C\u5F0F
        &#39;scope-case&#39;: [0],
        // &lt;subject&gt; \u4E3B\u8981 message \u4E0D\u80FD\u4E3A\u7A7A
        &#39;subject-empty&#39;: [2, &#39;never&#39;],
        // &lt;subject&gt; \u4EE5\u4EC0\u4E48\u4E3A\u7ED3\u675F\u6807\u5FD7\uFF0C\u7981\u7528
        &#39;subject-full-stop&#39;: [0, &#39;never&#39;],
        // &lt;subject&gt; \u683C\u5F0F\uFF0C\u7981\u7528
        &#39;subject-case&#39;: [0, &#39;never&#39;],
        // &lt;body&gt; \u4EE5\u7A7A\u884C\u5F00\u5934
        &#39;body-leading-blank&#39;: [1, &#39;always&#39;],
        &#39;header-max-length&#39;: [0, &#39;always&#39;, 72],
    },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u81EA\u5B9A\u4E49\u63D0\u793A\u5219\u6DFB\u52A0 <code>.cz-config.js</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    types: [
        {value: &#39;feature&#39;,  name: &#39;feature:  \u589E\u52A0\u65B0\u529F\u80FD&#39;},
        {value: &#39;bug&#39;,      name: &#39;bug:      \u6D4B\u8BD5\u53CD\u9988bug\u5217\u8868\u4E2D\u7684bug\u53F7&#39;},
        {value: &#39;fix&#39;,      name: &#39;fix:      \u4FEE\u590Dbug&#39;},
        {value: &#39;ui&#39;,       name: &#39;ui:       \u66F4\u65B0UI&#39;},
        {value: &#39;docs&#39;,     name: &#39;docs:     \u6587\u6863\u53D8\u66F4&#39;},
        {value: &#39;style&#39;,    name: &#39;style:    \u4EE3\u7801\u683C\u5F0F(\u4E0D\u5F71\u54CD\u4EE3\u7801\u8FD0\u884C\u7684\u53D8\u52A8)&#39;},
        {value: &#39;perf&#39;,     name: &#39;perf:     \u6027\u80FD\u4F18\u5316&#39;},
        {value: &#39;refactor&#39;, name: &#39;refactor: \u91CD\u6784(\u65E2\u4E0D\u662F\u589E\u52A0feature\uFF0C\u4E5F\u4E0D\u662F\u4FEE\u590Dbug)&#39;},
	{value: &#39;release&#39;,  name: &#39;release:  \u53D1\u5E03&#39;},
	{value: &#39;deploy&#39;,   name: &#39;deploy:   \u90E8\u7F72&#39;},
        {value: &#39;test&#39;,     name: &#39;test:     \u589E\u52A0\u6D4B\u8BD5&#39;},
        {value: &#39;chore&#39;,    name: &#39;chore:    \u6784\u5EFA\u8FC7\u7A0B\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8(\u66F4\u6539\u914D\u7F6E\u6587\u4EF6)&#39;},
        {value: &#39;revert&#39;,   name: &#39;revert:   \u56DE\u9000&#39;},
    	{value: &#39;build&#39;,    name: &#39;build:    \u6253\u5305&#39;}
    ],
    // override the messages, defaults are as follows
    messages: {
        type: &#39;\u8BF7\u9009\u62E9\u63D0\u4EA4\u7C7B\u578B:&#39;,
        customScope: &#39;\u8BF7\u8F93\u5165\u60A8\u4FEE\u6539\u7684\u8303\u56F4(\u53EF\u9009):&#39;,
        subject: &#39;\u8BF7\u7B80\u8981\u63CF\u8FF0\u63D0\u4EA4 message (\u5FC5\u586B):&#39;,
        body: &#39;\u8BF7\u8F93\u5165\u8BE6\u7EC6\u63CF\u8FF0(\u53EF\u9009\uFF0C\u5F85\u4F18\u5316\u53BB\u9664\uFF0C\u8DF3\u8FC7\u5373\u53EF):&#39;,
        footer: &#39;\u8BF7\u8F93\u5165\u8981\u5173\u95ED\u7684issue(\u5F85\u4F18\u5316\u53BB\u9664\uFF0C\u8DF3\u8FC7\u5373\u53EF):&#39;,
        confirmCommit: &#39;\u786E\u8BA4\u4F7F\u7528\u4EE5\u4E0A\u4FE1\u606F\u63D0\u4EA4\uFF1F(y/n/e/h)&#39;
    },
    allowCustomScopes: true,
    skipQuestions: [&#39;body&#39;, &#39;footer&#39;],
    subjectLimit: 72
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5230\u76EE\u524D\u53EA\u662F\u89C4\u8303\u4E86 git \u7684\u63D0\u4EA4\u4FE1\u606F\uFF0C\u6211\u4EEC\u5BF9\u63D0\u4EA4\u524D\u4EE3\u7801\u7684\u68C0\u67E5\u8FD8\u6CA1\u6709\u505A\u5230\u4F4D\uFF0C\u4F8B\u5982 ESLint\u3001Prettier\uFF0C\u6BD5\u7ADF\u8C01\u90FD\u4F1A\u6709\u758F\u5FFD\u7684\u65F6\u5019\uFF0C\u90A3\u4E48\u73B0\u5728\u6211\u4EEC\u7684 husky \u5C31\u95EA\u4EAE\u767B\u573A\u4E86</p><h3 id="\u5B89\u88C5-husky" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-husky" aria-hidden="true">#</a> \u5B89\u88C5 husky</h3><p>1.\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 1.\u5B89\u88C5
npm i husky lint-staged -D

# 2.\u751F\u6210 .husky \u7684\u6587\u4EF6\u5939
npx husky install

# 3.\u6DFB\u52A0 hooks\uFF0C\u4F1A\u5728 .husky \u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2A pre-commit \u811A\u672C\u6587\u4EF6
npx husky add .husky/pre-commit &quot;npx --no-install lint-staged&quot;

# 4.\u6DFB\u52A0 commit-msg
npx husky add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;

# 5. \u4F7F\u7528 \`git commit -m &quot;message&quot;\` \u5C31\u4F1A\u770B\u5230 hook \u751F\u6548\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u6DFB\u52A0\u914D\u7F6E <code>package.json</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  ...
  &quot;lint-staged&quot;: {
    	&quot;*.{js,ts}&quot;: [
            &quot;npm run eslint&quot;,
            &quot;npm run prettier&quot;
    	]
  }
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function k(A,R){const n=a("ExternalLinkIcon");return r(),t("div",null,[u,e("div",c,[m,e("p",null,[o,e("a",b,[p,s(n)]),g,e("a",h,[x,s(n)])])]),q,e("p",null,[f,e("a",y,[_,s(n)])]),j])}var w=l(v,[["render",k],["__file","vue3.html.vue"]]);export{w as default};
