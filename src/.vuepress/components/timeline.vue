<template>
  <div class="timeline">
    <div class="timeline-header">
      <button @click="decreaseTime">-</button>
      <span>{{ currentTime }}</span>
      <button @click="increaseTime">+</button>
    </div>
    <div class="timeline-content">
      <!-- Render your timeline items here -->
      <div v-for="event in filteredEvents" :key="event.id" class="timeline-event">
        {{ event.name }} - {{ formatDate(event.date) }}
      </div>
    </div>
  </div>
</template>

<script>
import { format, addDays, subDays } from 'date-fns';

export default {
  data() {
    return {
      currentTime: new Date(),
      events: [
        { id: 1, name: 'Event 1', date: new Date() },
        { id: 2, name: 'Event 2', date: addDays(new Date(), 1) },
        { id: 3, name: 'Event 3', date: addDays(new Date(), 2) }
      ]
    };
  },
  computed: {
    filteredEvents() {
      // Filter events based on currentTime; this is a simple example
      return this.events.filter(event => event.date >= this.currentTime);
    }
  },
  methods: {
    formatDate(date) {
      return format(date, 'yyyy-MM-dd');
    },
    increaseTime() {
      this.currentTime = addDays(this.currentTime, 1);
    },
    decreaseTime() {
      this.currentTime = subDays(this.currentTime, 1);
    }
  }
};
</script>

<style scoped>
.timeline {
  border: 1px solid #ccc;
  padding: 20px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.timeline-content {
  margin-top: 20px;
}

.timeline-event {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
