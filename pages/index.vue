<template>
  <section class="container-page">
    <div class="container-box">
      <div class="box">
        <img src="~assets/images/show_me_the_data.jpg" alt="">
      </div>
      <div class="box">
        <div class="col">
          <div class="content">
            <h1 class="text-topic">LV 1</h1>
            <h4 class="text-subtitle">Fetch and render</h4>
          </div>
        </div>
        <div class="col box-link bg-blue">
          <nuxt-link to="/fetcher/basic" class="text-link hover-blue">GO</nuxt-link>
        </div>
      </div>
      <div class="box">
        <div class="col move-tail">
          <div class="content">
            <h1 class="text-topic">LV 2</h1>
            <h4 class="text-subtitle">Chunks</h4>
          </div>
        </div>
        <div class="col box-link bg-green move-head">
          <nuxt-link to="/fetcher/chunks" class="text-link hover-blue">GO</nuxt-link>
        </div>
      </div>
      <div class="box">
        <div class="col">
          <div class="content">
            <h1 class="text-topic">LV 3</h1>
            <h4 class="text-subtitle">Catch me (an error) if you can </h4>
          </div>
        </div>
        <div class="col box-link bg-red">
          <nuxt-link to="/lvthree" class="text-link hover-blue">GO</nuxt-link>
        </div>
      </div>
      <div class="box">
        <div class="col move-tail">
          <div class="content">
            <h1 class="text-topic">LV 999</h1>
            <h4 class="text-subtitle">Components</h4>
          </div>
        </div>
        <div class="col box-link bg-green move-head">
          <nuxt-link to="/components" class="text-link hover-blue">GO</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_respond_to.scss';
@import '@/assets/scss/_flex.scss';

img {
  width: 100%;
}

button {
  &.prototype {
    width: 100%;
    max-width: 200px;
    height: auto;
    border: 2px solid grey;
    padding: 0.5rem 1rem;
  }

  &.link-btn {
    @extend button.prototype;
    height: 150px;
    max-width: 150px;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1.5rem;
    color: tomato;
    border: 5px solid tomato;
    background-color: transparent;

    &:hover {
      color: white;
      background-color: tomato;
    }
  }
}

.box {
  lost-flex-container: row;

  .col {
    height: 200px;
    lost-column: 1/2 2 0 flex;
    lost-align: middle-center;
  }

  .move {
    &-head {
      lost-move: -1/2 0 0;
    }
    &-tail {
      lost-move: 1/2 0 0;
    }
  }

  &-link {
    // border: 1rem solid $color-dark-grey;
  }
}

.content {
  position: relative;
}

.text {
  &-topic {
    font-size: 3rem;
    color: #2d3436;

    @media (--xs) {
      font-size: 2rem;
    }
  }

  &-link {
    font-size: 1.5rem;
    // text-decoration: none;
    color: $color-light-grey;

    &.hover {
      &-blue {
        &:hover {
          color: darken($color-blue, 10);
        }
      }
      &-green {
        &:hover {
          color: darken($color-green, 10);
        }
      }
      &-red {
        &:hover {
          color: darken($color-red, 10);
        }
      }
    }
  }
}

.bg {
  &-blue {
    background-color: $color-blue;
    border: 0.85rem solid darken($color-blue, 7);
  }
  &-green {
    background-color: $color-green;
    border: 0.85rem solid darken($color-green, 7);
  }
  &-red {
    background-color: $color-red;
    border: 0.85rem solid darken($color-red, 7);
  }
}
</style>

