<!-- docs/.vuepress/components/LeafletMap.vue -->

<template>
  <div class="leaflet-map" ref="map"></div>
</template>

<script>
import L from 'leaflet';

export default {
  mounted() {
    // Initialize the map
    this.map = L.map(this.$refs.map).setView([51.505, -0.09], 13);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Add a marker
    L.marker([51.505, -0.09]).addTo(this.map)
      .bindPopup('A sample marker.');
  },
  beforeDestroy() {
    // Clean up resources on component destruction
    if (this.map) {
      this.map.remove();
    }
  }
}
</script>

<style scoped>
.leaflet-map {
  height: 400px; /* Adjust the height as needed */
}
</style>
