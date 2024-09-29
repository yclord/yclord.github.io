import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,d as n,e,f as c,b as i}from"./app-4be40558.js";const l={},u=i(`<ol><li><a href="/src/python/pinyinhtml.py">加拼音及读音 python代码</a></li></ol><p>desktop: F:\\01.workspace\\27.blog\\blog-son\\resources</p><h2 id="python-判断是否为汉字" tabindex="-1"><a class="header-anchor" href="#python-判断是否为汉字" aria-hidden="true">#</a> python 判断是否为汉字</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token string">&quot;aaa海洋&quot;</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token string">&#39;\\u0e00&#39;</span><span class="token operator">&lt;=</span>i<span class="token operator">&lt;=</span><span class="token string">&#39;\\u9fa5&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python-汉字转拼音" tabindex="-1"><a class="header-anchor" href="#python-汉字转拼音" aria-hidden="true">#</a> python 汉字转拼音</h2><p><strong>Sample</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> pypinyin <span class="token keyword">import</span> pinyin<span class="token punctuation">,</span> lazy_pinyin<span class="token punctuation">,</span> Style
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> pinyin<span class="token punctuation">(</span><span class="token string">&#39;中心&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;zhōng&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;xīn&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> pinyin<span class="token punctuation">(</span><span class="token string">&#39;中心&#39;</span><span class="token punctuation">,</span> heteronym<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># make use of heteronym mode</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;zhōng&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zhòng&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;xīn&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> pinyin<span class="token punctuation">(</span><span class="token string">&#39;中心&#39;</span><span class="token punctuation">,</span> style<span class="token operator">=</span>Style<span class="token punctuation">.</span>FIRST_LETTER<span class="token punctuation">)</span>  <span class="token comment"># set the pinyin style</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;z&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> pinyin<span class="token punctuation">(</span><span class="token string">&#39;中心&#39;</span><span class="token punctuation">,</span> style<span class="token operator">=</span>Style<span class="token punctuation">.</span>TONE2<span class="token punctuation">,</span> heteronym<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;zho1ng&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zho4ng&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;xi1n&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> pinyin<span class="token punctuation">(</span><span class="token string">&#39;中心&#39;</span><span class="token punctuation">,</span> style<span class="token operator">=</span>Style<span class="token punctuation">.</span>TONE3<span class="token punctuation">,</span> heteronym<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;zhong1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zhong4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;xin1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> pinyin<span class="token punctuation">(</span><span class="token string">&#39;中心&#39;</span><span class="token punctuation">,</span> style<span class="token operator">=</span>Style<span class="token punctuation">.</span>BOPOMOFO<span class="token punctuation">)</span>  <span class="token comment"># zhuyin mode</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;ㄓㄨㄥ&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;ㄒㄧㄣ&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> lazy_pinyin<span class="token punctuation">(</span><span class="token string">&#39;中心&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># don&#39;t include tone information or heteronyms</span>
<span class="token punctuation">[</span><span class="token string">&#39;zhong&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xin&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python-给汉字加上拼音" tabindex="-1"><a class="header-anchor" href="#python-给汉字加上拼音" aria-hidden="true">#</a> python 给汉字加上拼音</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>words <span class="token operator">=</span> <span class="token string">&quot;尽其所有力量做最后一搏&quot;</span>
pinyin <span class="token operator">=</span> <span class="token string">&quot;jìn qí suǒ yǒu lì liàng zuò zuì hòu yī bó&quot;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
ret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  ret <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>ret<span class="token punctuation">}</span></span><span class="token string">&lt;ruby&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&lt;rt&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>pinyin<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&lt;/rt&gt;&lt;/ruby&gt;&quot;</span></span>

<span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综合" tabindex="-1"><a class="header-anchor" href="#综合" aria-hidden="true">#</a> 综合</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pypinyin <span class="token keyword">import</span> pinyin<span class="token punctuation">,</span> lazy_pinyin<span class="token punctuation">,</span> Style

<span class="token keyword">def</span> <span class="token function">isChinese</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token string">&#39;，。？！：；、）（“”…《 》【】——·&#39;</span><span class="token punctuation">.</span>__contains__<span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;\\u0e00&#39;</span><span class="token operator">&lt;=</span>word<span class="token operator">&lt;=</span><span class="token string">&#39;\\u9fa5&#39;</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>


<span class="token keyword">def</span> <span class="token function">htmlPinyin</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    offset <span class="token operator">=</span> <span class="token number">0</span>
    pinyins <span class="token operator">=</span> pinyin<span class="token punctuation">(</span>words<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>pinyins<span class="token punctuation">)</span>
    pinyinc <span class="token operator">=</span> <span class="token number">0</span>
    nonPinyinContinue <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> isChinese<span class="token punctuation">(</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            nonPinyinContinue <span class="token operator">=</span> <span class="token boolean">False</span>
            ret <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>ret<span class="token punctuation">}</span></span><span class="token string">&lt;ruby&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&lt;rt&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>pinyins<span class="token punctuation">[</span>i<span class="token operator">-</span>offset <span class="token operator">+</span> pinyinc<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&lt;/rt&gt;&lt;/ruby&gt;&quot;</span></span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            offset <span class="token operator">+=</span> <span class="token number">1</span>
            ret <span class="token operator">+=</span> words<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> nonPinyinContinue<span class="token punctuation">:</span>
               pinyinc <span class="token operator">+=</span> <span class="token number">1</span> 
            nonPinyinContinue <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> ret

htmlPinyin<span class="token punctuation">(</span><span class="token string">&quot;尽其所有力量，-)dfe做最，=后一搏&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转语音" tabindex="-1"><a class="header-anchor" href="#转语音" aria-hidden="true">#</a> 转语音</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>!pip install pyttsx3
<span class="token keyword">import</span> pyttsx3
pyttsx3<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token string">&quot;Hello world&quot;</span><span class="token punctuation">)</span>
pyttsx3<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="汉语加拼音-文件" tabindex="-1"><a class="header-anchor" href="#汉语加拼音-文件" aria-hidden="true">#</a> 汉语加拼音（文件）</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> sys

<span class="token keyword">from</span> pypinyin <span class="token keyword">import</span> pinyin<span class="token punctuation">,</span> lazy_pinyin<span class="token punctuation">,</span> Style

<span class="token keyword">def</span> <span class="token function">isChinese</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token string">&#39;，。？！：；、）（“”…《 》【】——·&#39;</span><span class="token punctuation">.</span>__contains__<span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;\\u0e00&#39;</span><span class="token operator">&lt;=</span>word<span class="token operator">&lt;=</span><span class="token string">&#39;\\u9fa5&#39;</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>


<span class="token keyword">def</span> <span class="token function">htmlPinyin</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    offset <span class="token operator">=</span> <span class="token number">0</span>
    pinyins <span class="token operator">=</span> pinyin<span class="token punctuation">(</span>words<span class="token punctuation">)</span>
    pinyinc <span class="token operator">=</span> <span class="token number">0</span>
    nonPinyinContinue <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> isChinese<span class="token punctuation">(</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            nonPinyinContinue <span class="token operator">=</span> <span class="token boolean">False</span>
            ret <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>ret<span class="token punctuation">}</span></span><span class="token string">&lt;ruby&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&lt;rt&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>pinyins<span class="token punctuation">[</span>i<span class="token operator">-</span>offset <span class="token operator">+</span> pinyinc<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&lt;/rt&gt;&lt;/ruby&gt;&quot;</span></span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            offset <span class="token operator">+=</span> <span class="token number">1</span>
            ret <span class="token operator">+=</span> words<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> nonPinyinContinue<span class="token punctuation">:</span>
               pinyinc <span class="token operator">+=</span> <span class="token number">1</span> 
            nonPinyinContinue <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> ret

<span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fr<span class="token punctuation">:</span>
            ret <span class="token operator">=</span> fr<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> ret<span class="token punctuation">:</span>
            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;.html&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fw<span class="token punctuation">:</span>
                fw<span class="token punctuation">.</span>write<span class="token punctuation">(</span>htmlPinyin<span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;内容为空&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;不存在&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>`,16),r={href:"https://github.com/mozillazg/python-pinyin/blob/master/README_en.rst",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const s=t("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[e("pypinyin"),c(s)])])])}const b=a(l,[["render",k],["__file","index.html.vue"]]);export{b as default};
