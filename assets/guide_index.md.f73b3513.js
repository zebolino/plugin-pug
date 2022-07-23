import{_ as s,c as a,o as n,a as l}from"./app.069a20eb.js";const u=JSON.parse('{"title":"Guide","description":"","frontmatter":{},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Selectively ignoring automatic formatting","slug":"selectively-ignoring-automatic-formatting"},{"level":2,"title":"Type support in configuration file","slug":"type-support-in-configuration-file"}],"relativePath":"guide/index.md"}'),p={name:"guide/index.md"},o=l(`<h1 id="guide" tabindex="-1">Guide <a class="header-anchor" href="#guide" aria-hidden="true">#</a></h1><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>Simply install <code>prettier</code> and <code>@prettier/plugin-pug</code> as your project\u2019s npm <code>devDependencies</code>:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm add --save-dev prettier @prettier/plugin-pug</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add --dev prettier @prettier/plugin-pug</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm add --save-dev prettier @prettier/plugin-pug</span></span>
<span class="line"></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Format all pug files in your project:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx prettier --write </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">**/*.pug</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn prettier --write </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">**/*.pug</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm prettier --write </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">**/*.pug</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="selectively-ignoring-automatic-formatting" tabindex="-1">Selectively ignoring automatic formatting <a class="header-anchor" href="#selectively-ignoring-automatic-formatting" aria-hidden="true">#</a></h3><p>You can disable code formatting for a particular element by adding <code>//- prettier-ignore</code> comments in your pug templates:</p><div class="language-pug"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">div</span><span style="color:#FFCB6B;">.text</span><span style="color:#89DDFF;">( </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;"> =   </span><span style="color:#C3E88D;">&quot;primary&quot;</span><span style="color:#89DDFF;">,  </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">  =</span><span style="color:#C3E88D;">&quot;true&quot;</span><span style="color:#89DDFF;">  )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//- prettier-ignore</span></span>
<span class="line"><span style="color:#F07178;">div</span><span style="color:#FFCB6B;">.text</span><span style="color:#89DDFF;">( </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;"> =   </span><span style="color:#C3E88D;">&quot;primary&quot;</span><span style="color:#89DDFF;">,  </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">  =</span><span style="color:#C3E88D;">&quot;true&quot;</span><span style="color:#89DDFF;">  )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//- prettier-ignore: because of reasons</span></span>
<span class="line"><span style="color:#F07178;">div</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">div</span><span style="color:#FFCB6B;">.text</span><span style="color:#89DDFF;">( </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;"> =   </span><span style="color:#C3E88D;">&quot;primary&quot;</span><span style="color:#89DDFF;">,  </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">  =</span><span style="color:#C3E88D;">&quot;true&quot;</span><span style="color:#89DDFF;">  )</span></span>
<span class="line"></span></code></pre></div><p>Prettified output:</p><div class="language-pug"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">.text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">&quot;primary&quot;</span><span style="color:#89DDFF;">, </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//- prettier-ignore</span></span>
<span class="line"><span style="color:#F07178;">div</span><span style="color:#FFCB6B;">.text</span><span style="color:#89DDFF;">( </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;"> =   </span><span style="color:#C3E88D;">&quot;primary&quot;</span><span style="color:#89DDFF;">,  </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">  =</span><span style="color:#C3E88D;">&quot;true&quot;</span><span style="color:#89DDFF;">  )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//- prettier-ignore: because of reasons</span></span>
<span class="line"><span style="color:#F07178;">div</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">div</span><span style="color:#FFCB6B;">.text</span><span style="color:#89DDFF;">( </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;"> =   </span><span style="color:#C3E88D;">&quot;primary&quot;</span><span style="color:#89DDFF;">,  </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">  =</span><span style="color:#C3E88D;">&quot;true&quot;</span><span style="color:#89DDFF;">  )</span></span>
<span class="line"></span></code></pre></div><p>You can also disable code formatting in Markdown for a particular <code>\`\`\`pug</code> block by adding<code>&lt;!-- prettier-ignore --&gt;</code> before the block:</p><div class="language-markdown"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Pug code with preserved custom formatting:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- prettier-ignore --&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">\`\`\`</span><span style="color:#A6ACCD90;">pug</span></span>
<span class="line"><span style="color:#F07178;">div</span><span style="color:#FFCB6B;">.text</span><span style="color:#89DDFF;">( </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;"> =   </span><span style="color:#C3E88D;">&quot;primary&quot;</span><span style="color:#89DDFF;">,  </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">  =</span><span style="color:#C3E88D;">&quot;true&quot;</span><span style="color:#89DDFF;">  )</span></span>
<span class="line"><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Pug code with automatic formatting:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">\`\`\`</span><span style="color:#A6ACCD90;">pug</span></span>
<span class="line"><span style="color:#FFCB6B;">.text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">&quot;primary&quot;</span><span style="color:#89DDFF;">, </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"></span></code></pre></div><h2 id="type-support-in-configuration-file" tabindex="-1">Type support in configuration file <a class="header-anchor" href="#type-support-in-configuration-file" aria-hidden="true">#</a></h2><p>You can write your <code>.prettierrc.cjs</code> like this to get fully type check support with documentation:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// @ts-check</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">types</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">@prettier/plugin-pug/src/prettier</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">type</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">import(&#39;prettier&#39;).Options</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \`require.resolve\` is needed for e.g. \`pnpm\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [require</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@prettier/plugin-pug</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">printWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">120</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">singleQuote</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pugSingleQuote</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ... more pug* options</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,17),e=[o];function t(r,c,i,y,D,F){return n(),a("div",null,e)}var C=s(p,[["render",t]]);export{u as __pageData,C as default};