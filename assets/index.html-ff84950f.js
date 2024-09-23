import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,d as n,e,f as i,b as c}from"./app-f7bf8d49.js";const l={},u=c(`<h2 id="构建拼音代码" tabindex="-1"><a class="header-anchor" href="#构建拼音代码" aria-hidden="true">#</a> 构建拼音代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&quot;ai ei ui ao ou iu ie üe er an en in un ün ang eng ing ong&quot;</span>
a <span class="token operator">=</span> <span class="token string">&quot;b p m f d t n l g k h j q x zh ch sh r z c s w y&quot;</span>
a <span class="token operator">=</span> <span class="token string">&quot;a o e i u ü&quot;</span>

<span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>
<span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> w<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;ü&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;v&#39;</span><span class="token punctuation">)</span>
    onclick <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string-interpolation"><span class="token string">f&quot;document.getElementById(&#39;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">id</span><span class="token punctuation">}</span></span><span class="token string">&#39;).style.backgroundColor = &#39;orange&#39;;&quot;</span></span><span class="token punctuation">,</span>
        <span class="token string-interpolation"><span class="token string">f&quot;let audio = new Audio(&#39;/data/pinyin/</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">id</span><span class="token punctuation">}</span></span><span class="token string">.mp3&#39;);&quot;</span></span><span class="token punctuation">,</span>
        <span class="token string">&quot;audio.addEventListener(&#39;ended&#39;, function(){document.getElementById(&#39;&quot;</span> <span class="token operator">+</span> <span class="token builtin">id</span> <span class="token operator">+</span> <span class="token string">&quot;&#39;).style.backgroundColor = &#39;gray&#39;;});&quot;</span><span class="token punctuation">,</span>
        <span class="token string-interpolation"><span class="token string">f&quot;audio.play()&quot;</span></span>
    <span class="token punctuation">]</span>
    style <span class="token operator">=</span> <span class="token string">&quot;margin:0px 2px;width: 30px;float:left;background-color:gray;padding:1px;text-align: center;&quot;</span>
    onclick <span class="token operator">=</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> onclick<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;&quot;&quot;&lt;div id=&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">id</span><span class="token punctuation">}</span></span><span class="token string">&quot; style=&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token string">&quot; onclick=&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>onclick<span class="token punctuation">}</span></span><span class="token string">&quot;&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>w<span class="token punctuation">}</span></span><span class="token string">&lt;/div&gt;&quot;&quot;&quot;</span></span>


<span class="token keyword">for</span> i <span class="token keyword">in</span> a<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>get<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,3),r={href:"http://yunmu.hanyupinyin.cn/",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const s=t("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[n("a",r,[e("汉语拼音"),i(s)])])])}const b=a(l,[["render",k],["__file","index.html.vue"]]);export{b as default};
