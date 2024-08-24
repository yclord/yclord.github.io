---
title: ""
index: false
author: Haiyue
navbar: false
sidebar: false
date: 2024-01-02
footer: ""
copyright: ""
---
<style>
  .page-info, .vp-breadcrumb, .page-meta {
    display: none;
  }
  .theme-container, #main-content{
    height: 400px;
  }
  .theme-container, #main-content, .theme-hope-content{
    padding-bottom: 0px
  }
  .vp-footer-wrapper{
    display:none;
    padding: 0px;
    margin: 0px;
    padding: 0px;
  }

  .pinyin-letter {
    font-size: 30px;
    font-weight: bold;
    margin:0px 2px;
    width: 50px;
    height: 50px;
    float:left;
    background-color:rgba(0,0,0,0);
    padding:1px;
    text-align: center;
  }

  .title {
    float: left;
  }

  .clearfix::before,
  .clearfix::after{
    content: '';
    display: table;
    clear: both;
  }
</style>
<script>
  function xplay(id){
    document.getElementById(id).style.backgroundColor = 'orange';
    let audio = new Audio('/data/pinyin/' + id + '.mp3');
    audio.addEventListener('ended', function(){
      document.getElementById(id).style.backgroundColor = 'rgba(0,0,0,0)';
    });
    audio.play()
  }
</script>



<div class="clearfix">
  <div class="title">
  
  **<span style="font-size:15px;font-weight:bold;"><ruby>声<rt>shēng</rt></ruby><ruby>母<rt>mǔ</rt></ruby></span>**
  </div>
  <div class="pinyin-letter" id="b"  onclick="document.getElementById('b').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/b.mp3');audio.addEventListener('ended', function(){document.getElementById('b').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">b</div>
  <div class="pinyin-letter" id="p"  onclick="document.getElementById('p').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/p.mp3');audio.addEventListener('ended', function(){document.getElementById('p').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">p</div>
  <div class="pinyin-letter" id="m"  onclick="document.getElementById('m').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/m.mp3');audio.addEventListener('ended', function(){document.getElementById('m').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">m</div>
  <div class="pinyin-letter" id="f"  onclick="document.getElementById('f').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/f.mp3');audio.addEventListener('ended', function(){document.getElementById('f').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">f</div>
  <div class="pinyin-letter" id="d"  onclick="document.getElementById('d').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/d.mp3');audio.addEventListener('ended', function(){document.getElementById('d').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">d</div>
  <div class="pinyin-letter" id="t"  onclick="document.getElementById('t').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/t.mp3');audio.addEventListener('ended', function(){document.getElementById('t').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">t</div>
  <div class="pinyin-letter" id="n"  onclick="document.getElementById('n').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/n.mp3');audio.addEventListener('ended', function(){document.getElementById('n').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">n</div>
  <div class="pinyin-letter" id="l"  onclick="document.getElementById('l').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/l.mp3');audio.addEventListener('ended', function(){document.getElementById('l').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">l</div>
  <div class="pinyin-letter" id="g"  onclick="document.getElementById('g').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/g.mp3');audio.addEventListener('ended', function(){document.getElementById('g').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">g</div>
  <div class="pinyin-letter" id="k"  onclick="document.getElementById('k').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/k.mp3');audio.addEventListener('ended', function(){document.getElementById('k').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">k</div>
  <div class="pinyin-letter" id="h"  onclick="document.getElementById('h').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/h.mp3');audio.addEventListener('ended', function(){document.getElementById('h').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">h</div>
  <div class="pinyin-letter" id="j"  onclick="document.getElementById('j').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/j.mp3');audio.addEventListener('ended', function(){document.getElementById('j').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">j</div>
  <div class="pinyin-letter" id="q"  onclick="document.getElementById('q').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/q.mp3');audio.addEventListener('ended', function(){document.getElementById('q').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">q</div>
  <div class="pinyin-letter" id="x"  onclick="document.getElementById('x').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/x.mp3');audio.addEventListener('ended', function(){document.getElementById('x').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">x</div>
  <div class="pinyin-letter" id="zh" onclick="document.getElementById('zh').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/zh.mp3');audio.addEventListener('ended', function(){document.getElementById('zh').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">zh</div>
  <div class="pinyin-letter" id="ch" onclick="document.getElementById('ch').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/ch.mp3');audio.addEventListener('ended', function(){document.getElementById('ch').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">ch</div>
  <div class="pinyin-letter" id="sh" onclick="document.getElementById('sh').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/sh.mp3');audio.addEventListener('ended', function(){document.getElementById('sh').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">sh</div>
  <div class="pinyin-letter" id="r"  onclick="document.getElementById('r').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/r.mp3');audio.addEventListener('ended', function(){document.getElementById('r').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">r</div>
  <div class="pinyin-letter" id="z"  onclick="document.getElementById('z').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/z.mp3');audio.addEventListener('ended', function(){document.getElementById('z').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">z</div>
  <div class="pinyin-letter" id="c"  onclick="document.getElementById('c').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/c.mp3');audio.addEventListener('ended', function(){document.getElementById('c').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">c</div>
  <div class="pinyin-letter" id="s"  onclick="document.getElementById('s').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/s.mp3');audio.addEventListener('ended', function(){document.getElementById('s').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">s</div>
  <div class="pinyin-letter" id="w"  onclick="document.getElementById('w').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/w.mp3');audio.addEventListener('ended', function(){document.getElementById('w').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">w</div>
  <div class="pinyin-letter" id="y"  onclick="document.getElementById('y').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/y.mp3');audio.addEventListener('ended', function(){document.getElementById('y').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">y</div>
</div>

**<span style="font-size:15px"><ruby>韵<rt>yùn</rt></ruby><ruby>母<rt>mǔ</rt></ruby></span>**
<div class="clearfix">
  <div class="title">

  *<span style="font-size:15px"><ruby>单<rt>dān</rt></ruby><ruby>韵<rt>yùn</rt></ruby><ruby>母<rt>mǔ</rt></ruby></span>*
  </div>
  <div class="pinyin-letter" id="a" onclick="document.getElementById('a').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/a.mp3');audio.addEventListener('ended', function(){document.getElementById('a').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">a</div>
  <div class="pinyin-letter" id="o" onclick="document.getElementById('o').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/o.mp3');audio.addEventListener('ended', function(){document.getElementById('o').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">o</div>
  <div class="pinyin-letter" id="e" onclick="document.getElementById('e').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/e.mp3');audio.addEventListener('ended', function(){document.getElementById('e').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">e</div>
  <div class="pinyin-letter" id="i" onclick="document.getElementById('i').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/i.mp3');audio.addEventListener('ended', function(){document.getElementById('i').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">i</div>
  <div class="pinyin-letter" id="u" onclick="document.getElementById('u').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/u.mp3');audio.addEventListener('ended', function(){document.getElementById('u').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">u</div>
  <div class="pinyin-letter" id="v" onclick="document.getElementById('v').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/v.mp3');audio.addEventListener('ended', function(){document.getElementById('v').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">ü</div>
</div>

---

<div class="clearfix">
  <div class="title">
  *<span style="font-size:15px"><ruby>复<rt>fù</rt></ruby><ruby>韵<rt>yùn</rt></ruby><ruby>母<rt>mǔ</rt></ruby></span>*
  </div>
  <div class="pinyin-letter" id="ai"  onclick="document.getElementById('ai').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/ai.mp3');audio.addEventListener('ended',  function(){document.getElementById('ai').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">ai</div>
  <div class="pinyin-letter" id="ei"  onclick="document.getElementById('ei').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/ei.mp3');audio.addEventListener('ended',  function(){document.getElementById('ei').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">ei</div>
  <div class="pinyin-letter" id="ui"  onclick="document.getElementById('ui').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/ui.mp3');audio.addEventListener('ended',  function(){document.getElementById('ui').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">ui</div>
  <div class="pinyin-letter" id="ao"  onclick="document.getElementById('ao').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/ao.mp3');audio.addEventListener('ended',  function(){document.getElementById('ao').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">ao</div>
  <div class="pinyin-letter" id="ou"  onclick="document.getElementById('ou').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/ou.mp3');audio.addEventListener('ended',  function(){document.getElementById('ou').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">ou</div>
  <div class="pinyin-letter" id="iu"  onclick="document.getElementById('iu').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/iu.mp3');audio.addEventListener('ended',  function(){document.getElementById('iu').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">iu</div>
  <div class="pinyin-letter" id="ie"  onclick="document.getElementById('ie').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/ie.mp3');audio.addEventListener('ended',  function(){document.getElementById('ie').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">ie</div>
  <div class="pinyin-letter" id="ve"  onclick="document.getElementById('ve').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/ve.mp3');audio.addEventListener('ended',  function(){document.getElementById('ve').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">üe</div>
  <div class="pinyin-letter" id="er"  onclick="document.getElementById('er').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/er.mp3');audio.addEventListener('ended',  function(){document.getElementById('er').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">er</div>
  <div class="pinyin-letter" id="an"  onclick="document.getElementById('an').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/an.mp3');audio.addEventListener('ended',  function(){document.getElementById('an').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">an</div>
  <div class="pinyin-letter" id="en"  onclick="document.getElementById('en').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/en.mp3');audio.addEventListener('ended',  function(){document.getElementById('en').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">en</div>
  <div class="pinyin-letter" id="in"  onclick="document.getElementById('in').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/in.mp3');audio.addEventListener('ended',  function(){document.getElementById('in').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">in</div>
  <div class="pinyin-letter" id="un"  onclick="document.getElementById('un').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/un.mp3');audio.addEventListener('ended',  function(){document.getElementById('un').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">un</div>
  <div class="pinyin-letter" id="vn"  onclick="document.getElementById('vn').style.backgroundColor  = 'orange';let audio = new Audio('/data/pinyin/vn.mp3');audio.addEventListener('ended',  function(){document.getElementById('vn').style.backgroundColor  = 'rgba(0,0,0,0)';});audio.play()">ün</div>
  <div class="pinyin-letter" id="ang" onclick="document.getElementById('ang').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/ang.mp3');audio.addEventListener('ended', function(){document.getElementById('ang').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">ang</div>
  <div class="pinyin-letter" id="eng" onclick="document.getElementById('eng').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/eng.mp3');audio.addEventListener('ended', function(){document.getElementById('eng').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">eng</div>
  <div class="pinyin-letter" id="ing" onclick="document.getElementById('ing').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/ing.mp3');audio.addEventListener('ended', function(){document.getElementById('ing').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">ing</div>
  <div class="pinyin-letter" id="ong" onclick="document.getElementById('ong').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/ong.mp3');audio.addEventListener('ended', function(){document.getElementById('ong').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">ong</div>
</div>
