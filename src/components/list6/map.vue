<template>
  <baidu-map
    class="map"
    :center="{ lng: lng, lat: lat }"
    :zoom="15"
    :scroll-wheel-zoom="true"
  >
    <bm-marker
      :position="{ lng: lng, lat: lat }"
      :dragging="true"
      animation="BMAP_ANIMATION_BOUNCE"
    >
    </bm-marker>
  </baidu-map>
</template>

<script>
export default {
  data() {
    return {
      lng: 31.235929,
      lat: 121.48054
    };
  },
  activated() {
    this.lng = this.$route.query.lng || "";
    this.lat = this.$route.query.lat || "";
  },
  methods: {
    setLoacl(lng, lat) {
      this.lng = lng;
      this.lat = lat;
    }
  }
};
</script>

<style>
.map {
  margin-top: 10px;
  margin-left: 5px;
  margin-left: 5px;
  width: 98%;
  height: 600px;
}
</style>
