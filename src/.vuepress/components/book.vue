<template>
  <div class="book">
    <div class="page-container" 
         :style="{ transform: `rotateY(${currentRotation}deg)` }"
         @click="handleBookClick">
      <div v-for="(page, index) in pages" :key="index" 
           class="page" 
           :class="{ 'flipping': isFlipping && currentPage === index }"
           :style="{ 
             zIndex: pages.length - index,
             transform: `rotateY(${getPageRotation(index)}deg)`
           }">
        <div class="front">
          <div class="content">
            <h2>Page {{ index + 1 }}</h2>
            <p>Content for page {{ index + 1 }}</p>
          </div>
        </div>
        <div class="back">
          <div class="content">
            <h2>Page {{ index + 2 }}</h2>
            <p>Content for page {{ index + 2 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-turn-areas">
      <div class="turn-area left" @click="prevPage"></div>
      <div class="turn-area right" @click="nextPage"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0,
      isFlipping: false,
      currentRotation: 0,
      pages: new Array(5).fill(null) // Create 5 pages
    }
  },
  methods: {
    getPageRotation(index) {
      if (index < this.currentPage) {
        return -180;
      } else if (index > this.currentPage) {
        return 0;
      } else {
        return this.isFlipping ? -90 : 0;
      }
    },
    async flipPage(direction) {
      if (this.isFlipping) return;
      this.isFlipping = true;
      
      const start = this.currentRotation;
      const end = start + (direction === 'next' ? -180 : 180);
      const duration = 500; // ms
      const startTime = performance.now();
      
      const animate = (time) => {
        const elapsed = time - startTime;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          this.currentRotation = start + (end - start) * progress;
          requestAnimationFrame(animate);
        } else {
          this.currentRotation = end % 360;
          this.isFlipping = false;
          if (direction === 'next') {
            this.currentPage++;
          } else {
            this.currentPage--;
          }
        }
      };
      
      requestAnimationFrame(animate);
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.flipPage('prev');
      }
    },
    nextPage() {
      if (this.currentPage < this.pages.length - 1) {
        this.flipPage('next');
      }
    },
    handleBookClick(event) {
      const bookWidth = event.currentTarget.offsetWidth;
      const clickX = event.offsetX;
      
      if (clickX < bookWidth / 2) {
        this.prevPage();
      } else {
        this.nextPage();
      }
    }
  }
}
</script>

<style scoped>
.book {
  perspective: 1000px;
  width: 600px;
  height: 400px;
  margin: 50px auto;
  position: relative;
}

.page-container {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-origin: left center;
  transform-style: preserve-3d;
}

.front, .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
}

.back {
  transform: rotateY(180deg);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.page.flipping {
  transition: transform 0.5s;
}

.page::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0) 100%);
  transform: translateZ(-1px);
}

.page-turn-areas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

.turn-area {
  flex: 1;
  height: 100%;
  cursor: pointer;
}

.turn-area.left:hover {
  background: linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%);
}

.turn-area.right:hover {
  background: linear-gradient(to left, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%);
}
</style>