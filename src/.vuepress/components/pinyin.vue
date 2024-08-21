<!-- docs/.vuepress/components/LeafletMap.vue -->

<template>
  <div>
      <!-- 触发按钮 -->
      <button id="openModal" @click="open_pinyin">拼音</button>
  
      <!-- 背景遮罩 -->
      <div id="overlay" class="overlay"></div>
  
      <!-- 模态窗口 -->
      <div id="modal" class="modal">
          <span id="closeModal" class="close-btn">&times;</span>
          <iframe src="/chinese/pinyin/pinyin" style="width: 100%; height: 400px; border: none;"></iframe>
      </div>
    </div>
</template>

<script>
export default {
  // define methods under the `methods` object
  methods: {
    open_pinyin: function (event) {
      // 获取元素
      const openModalButton = document.getElementById('openModal');
      const closeModalButton = document.getElementById('closeModal');
      const overlay = document.getElementById('overlay');
      const modal = document.getElementById('modal');
      // 打开模态窗口
      openModalButton.onclick = function() {
          overlay.style.display = 'block';
          modal.style.display = 'block';
      };
      // 关闭模态窗口
      closeModalButton.onclick = function() {
          overlay.style.display = 'none';
          modal.style.display = 'none';
      };
      // 点击遮罩层关闭模态窗口
      overlay.onclick = function() {
          overlay.style.display = 'none';
          modal.style.display = 'none';
      };
    }
  }
}
</script>

<style scoped>
/* 背景遮罩 */
.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
}
/* 模态窗口样式 */
.modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1000px;
    max-height: 1000px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    z-index: 1000;
}
/* 关闭按钮样式 */
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>
