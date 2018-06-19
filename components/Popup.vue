<template>
  <div class="popup-container" v-if="$store.state.popup.active">
    <div class="popup-inner">
      <section class="popup-box">
        <header class="popup-box-header" :class="{'bg-error': isError, 'bg-success': !isError}">
          <h1 class="text-title">{{title}}</h1>
          <button class="close-btn" @click="close">&#10005;</button>
        </header>
        <main class="popup-box-body">
          <p class="text-body">{{body}}</p>
        </main>
      </section>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    isError: Boolean,
    title: String,
    body: String
  },
  methods: {
    ...mapMutations({
      close: 'popup/close',
      toggle: 'popup/toggle',
      currentActive: 'popup/currentActive'
    })
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.popup {
  &-container {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba($color-dark, 0.75);
  }

  &-inner {
    height: 100%;
    width: 100%;
    lost-center: 550px;
    lost-align: middle-center;
  }

  &-box {
    width: 100%;
    lost-flex-container: column;

    &-header,
    &-body {
      padding: 1rem;
    }

    &-body {
      min-height: 150px;
      background-color: $color-light-grey;
    }
  }
}

.row {
  lost-flex-container: row;
}

.text {
  &-title {
    font-size: 1.25rem;
    color: white;
  }

  &-body {
    font-size: 1rem;
    color: $color-dark-grey;
  }
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  color: white;
  background-color: transparent;
  border: none;

  &:hover {
    color: $color-dark;
  }
}

.bg {
  &-error {
    background-color: lighten($color-red, 10);
  }
  &-success {
    background-color: $color-green;
  }
}
</style>
