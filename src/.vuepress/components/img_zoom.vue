<!-- ImageZoom.vue -->
<template>
  <div class="zoom-container" ref="container">
    <!-- Main image container -->
    <div 
      class="main-image-container"
      @mouseenter="showZoom"
      @mouseleave="hideZoom"
      @mousemove="handleMouseMove"
      ref="imageContainer"
    >
      <img 
        :src="imageSrc" 
        :alt="imageAlt"
        class="main-image"
        ref="mainImage"
        @load="handleImageLoad"
      >
      
      <!-- Zoom lens -->
      <div 
        v-show="isZooming"
        class="zoom-lens"
        :style="lensStyle"
      ></div>
    </div>

    <!-- Zoomed result -->
    <div 
      v-show="isZooming"
      class="zoom-result"
      :style="resultPosition"
    >
      <img 
        :src="imageSrc" 
        :alt="imageAlt"
        :style="zoomedImageStyle"
        ref="zoomedImage"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageZoom',
  
  props: {
    // Image source URL
    imageSrc: {
      type: String,
      required: true
    },
    // Image alt text
    imageAlt: {
      type: String,
      default: ''
    },
    // Zoom level
    zoomLevel: {
      type: Number,
      default: 2.5
    },
    // Lens size in pixels
    lensSize: {
      type: Number,
      default: 100
    },
    // Result window position ('right' or 'bottom')
    resultPosition: {
      type: String,
      default: 'right',
      validator: value => ['right', 'bottom'].includes(value)
    }
  },

  data() {
    return {
      isZooming: false,
      lensX: 0,
      lensY: 0,
      imageWidth: 0,
      imageHeight: 0,
      imageLoaded: false
    }
  },

  computed: {
    lensStyle() {
      return {
        width: `${this.lensSize}px`,
        height: `${this.lensSize}px`,
        left: `${this.lensX}px`,
        top: `${this.lensY}px`
      }
    },

    resultPosition() {
      if (this.resultPosition === 'right') {
        return {
          top: '0',
          left: '100%',
          marginLeft: '20px'
        }
      }
      return {
        top: '100%',
        left: '0',
        marginTop: '20px'
      }
    },

    zoomedImageStyle() {
      const scale = this.zoomLevel;
      return {
        width: `${this.imageWidth * scale}px`,
        height: `${this.imageHeight * scale}px`,
        transform: `translate(-${this.lensX * scale}px, -${this.lensY * scale}px)`,
        transformOrigin: 'top left'
      }
    }
  },

  methods: {
    handleImageLoad() {
      this.imageLoaded = true;
      const rect = this.$refs.mainImage.getBoundingClientRect();
      this.imageWidth = rect.width;
      this.imageHeight = rect.height;
    },

    showZoom() {
      if (this.imageLoaded) {
        this.isZooming = true;
      }
    },

    hideZoom() {
      this.isZooming = false;
    },

    handleMouseMove(event) {
      if (!this.isZooming) return;

      const rect = this.$refs.imageContainer.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Calculate lens position
      let lensX = x - this.lensSize / 2;
      let lensY = y - this.lensSize / 2;

      // Prevent lens from going outside the image
      lensX = Math.max(0, Math.min(lensX, this.imageWidth - this.lensSize));
      lensY = Math.max(0, Math.min(lensY, this.imageHeight - this.lensSize));

      this.lensX = lensX;
      this.lensY = lensY;
    }
  }
}
</script>

<style scoped>
.zoom-container {
  position: relative;
  display: inline-block;
}

.main-image-container {
  position: relative;
  overflow: hidden;
}

.main-image {
  display: block;
  max-width: 100%;
  height: auto;
}

.zoom-lens {
  position: absolute;
  border: 2px solid #ffffff;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: none;
  pointer-events: none;
}

.zoom-result {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: #fff;
}

.zoom-result img {
  position: absolute;
  max-width: none;
}
</style>