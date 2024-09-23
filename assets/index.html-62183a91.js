import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as p}from"./app-f7bf8d49.js";const t={},o=p(`<p><strong>Please select stories from the <span style="color:orange;">left pane</span>.</strong></p><p><a href="/english/reading/scripts/pdf2images.py">pdf2images.py</a><br><a href="/english/reading/scripts/splitImage.py">splitImage.py</a></p><details class="hint-container details"><summary>Split Images</summary><p><code>split.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image
<span class="token keyword">import</span> os
<span class="token keyword">def</span> <span class="token function">updownsplit</span><span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> fullname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ppath<span class="token punctuation">,</span> filename <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>split<span class="token punctuation">(</span>fullname<span class="token punctuation">)</span>
    name<span class="token punctuation">,</span> ext <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
    image <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>fullname<span class="token punctuation">)</span>
    i <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    image <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>fullname<span class="token punctuation">)</span>
    width<span class="token punctuation">,</span> height <span class="token operator">=</span> image<span class="token punctuation">.</span>size
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> ext<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token format-spec">03d</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>ext<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token operator">*</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token format-spec">03d</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>ext<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    <span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
        image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> height<span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rotate<span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token format-spec">03d</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>ext<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> height<span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token format-spec">03d</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>ext<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">leftrightsplit</span><span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> fullname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ppath<span class="token punctuation">,</span> filename <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>split<span class="token punctuation">(</span>fullname<span class="token punctuation">)</span>
    name<span class="token punctuation">,</span> ext <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
    image <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>fullname<span class="token punctuation">)</span>
    i <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    image <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>fullname<span class="token punctuation">)</span>
    width<span class="token punctuation">,</span> height <span class="token operator">=</span> image<span class="token punctuation">.</span>size
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> ext<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token format-spec">03d</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>ext<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token operator">*</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token format-spec">03d</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>ext<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span>width<span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token format-spec">03d</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>ext<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

prefix <span class="token operator">=</span> <span class="token string">r&quot;F:\\01.workspace\\27.blog\\blog-son\\yclord.github.io\\src\\.vuepress\\public\\data\\english\\reading\\AA-Animalsnap&quot;</span>

src_path <span class="token operator">=</span> prefix
imgs <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>src_path<span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> imgs<span class="token punctuation">:</span>
    <span class="token comment">#updownsplit(prefix, i)</span>
    leftrightsplit<span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3),e=[o];function c(i,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
