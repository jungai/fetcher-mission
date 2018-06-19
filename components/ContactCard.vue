<template>
  <div>
    <div class="card" :key="item.id" v-for="item in items">
      <span class="text-display-title">{{item.name}}</span>
      <span class="text-display">{{item.email}}</span>
      <span class="text-display">{{item.phone}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.card {
  lost-flex-container: column;
  min-height: 100px;
  padding: 1rem;
  background-color: $color-light-grey;
  margin-bottom: 1rem;
}

.text {
  &-display {
    font-size: 1rem;
    padding: 0.25rem 0;
    color: lighten($color-dark-grey, 10);

    &-title {
      font-size: 1.85rem;
      color: $color-dark-grey;
    }
  }
}
</style>
