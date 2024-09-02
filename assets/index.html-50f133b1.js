import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-e7bb4da2.js";const p={},o=t(`<p>从左侧边栏选择相关内容</p><h2 id="common-function" tabindex="-1"><a class="header-anchor" href="#common-function" aria-hidden="true">#</a> Common Function</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> sys

<span class="token keyword">from</span> pypinyin <span class="token keyword">import</span> pinyin<span class="token punctuation">,</span> lazy_pinyin<span class="token punctuation">,</span> Style

<span class="token keyword">def</span> <span class="token function">isChinese</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token string">&#39;，。？！：；、）（“”…《 》【】——·&#39;</span><span class="token punctuation">.</span>__contains__<span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;\\u0e00&#39;</span><span class="token operator">&lt;=</span>word<span class="token operator">&lt;=</span><span class="token string">&#39;\\u9fa5&#39;</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>


<span class="token keyword">def</span> <span class="token function">get_pinyin_html</span><span class="token punctuation">(</span>words<span class="token punctuation">,</span> pinyins<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>pinyins<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>pinyins<span class="token punctuation">)</span>
        <span class="token keyword">raise</span> <span class="token string">&quot;Length is not equals&quot;</span>
    ret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>ret<span class="token punctuation">}</span></span><span class="token string">&lt;ruby&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&lt;rt&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>pinyins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&lt;/rt&gt;&lt;/ruby&gt;&quot;</span></span>
    <span class="token keyword">return</span> ret

<span class="token keyword">def</span> <span class="token function">htmlPinyin</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    offset <span class="token operator">=</span> <span class="token number">0</span>
    text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">for</span> word <span class="token keyword">in</span> words<span class="token punctuation">:</span>
        <span class="token keyword">if</span> isChinese<span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">:</span>
            text <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>word<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment">#process pinyin</span>
            text_pinyin <span class="token operator">=</span> pinyin<span class="token punctuation">(</span>text<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
                ret <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>ret<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>get_pinyin_html<span class="token punctuation">(</span>text<span class="token punctuation">,</span> text_pinyin<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>word<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                ret <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>ret<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>word<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
            <span class="token comment">#initialize text</span>
            text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">return</span> ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> Scripts</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">create_pinyin</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fr<span class="token punctuation">:</span>
            ret <span class="token operator">=</span> fr<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        lines <span class="token operator">=</span> ret<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span> <span class="token operator">+</span> <span class="token string">&quot;.html&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fw<span class="token punctuation">:</span>
            <span class="token keyword">for</span> line <span class="token keyword">in</span> lines<span class="token punctuation">:</span>
                fw<span class="token punctuation">.</span>write<span class="token punctuation">(</span>htmlPinyin<span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span>
                fw<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;不存在&quot;</span><span class="token punctuation">)</span>

<span class="token builtin">file</span> <span class="token operator">=</span> <span class="token string">r&quot;F:\\01.workspace\\27.blog\\blog-son\\yclord.github.io\\src\\chinese\\reading\\xiyouji\\src\\01.txt&quot;</span>
<span class="token builtin">file</span> <span class="token operator">=</span> <span class="token string">r&quot;F:\\01.workspace\\27.blog\\blog-son\\yclord.github.io\\src\\chinese\\reading\\xiyouji\\src\\02.txt&quot;</span>
<span class="token builtin">file</span> <span class="token operator">=</span> <span class="token string">r&quot;F:\\01.workspace\\27.blog\\blog-son\\yclord.github.io\\src\\chinese\\reading\\xiyouji\\src\\03.txt&quot;</span>

create_pinyin<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),e=[o];function i(c,l){return s(),a("div",null,e)}const k=n(p,[["render",i],["__file","index.html.vue"]]);export{k as default};
